/** Camera Raw / Lightroom–style Basic develop (JPEG-friendly). All params −100…100. */

export type CameraRawParams = {
  temperature: number;
  tint: number;
  exposure: number;
  contrast: number;
  highlights: number;
  shadows: number;
  whites: number;
  blacks: number;
  vibrance: number;
  saturation: number;
};

export const DEFAULT_RAW_PARAMS: CameraRawParams = {
  temperature: 0,
  tint: 0,
  exposure: 0,
  contrast: 0,
  highlights: 0,
  shadows: 0,
  whites: 0,
  blacks: 0,
  vibrance: 0,
  saturation: 0,
};

export function isIdentityRawParams(p: CameraRawParams): boolean {
  return (Object.keys(DEFAULT_RAW_PARAMS) as (keyof CameraRawParams)[]).every(
    (k) => p[k] === 0,
  );
}

function clamp01(v: number) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

function srgbToLinear(c: number) {
  const x = c / 255;
  return x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
}

function linearToSrgb(c: number) {
  const x = clamp01(c);
  return (
    (x <= 0.0031308 ? x * 12.92 : 1.055 * x ** (1 / 2.4) - 0.055) * 255
  );
}

function rgbToHsl(r: number, g: number, b: number) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return { h: 0, s: 0, l };
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h: number;
  switch (max) {
    case r:
      h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
      break;
    case g:
      h = ((b - r) / d + 2) / 6;
      break;
    default:
      h = ((r - g) / d + 4) / 6;
  }
  return { h, s, l };
}

function hue2rgb(p: number, q: number, t: number) {
  let T = t;
  if (T < 0) T += 1;
  if (T > 1) T -= 1;
  if (T < 1 / 6) return p + (q - p) * 6 * T;
  if (T < 1 / 2) return q;
  if (T < 2 / 3) return p + (q - p) * (2 / 3 - T) * 6;
  return p;
}

function hslToRgb(h: number, s: number, l: number) {
  if (s === 0) {
    const v = Math.round(l * 255);
    return [v, v, v] as const;
  }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  return [
    Math.round(hue2rgb(p, q, h + 1 / 3) * 255),
    Math.round(hue2rgb(p, q, h) * 255),
    Math.round(hue2rgb(p, q, h - 1 / 3) * 255),
  ] as const;
}

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = clamp01((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}

/** Develop one pixel in linear light, then presence in display space — ACR Basic order. */
export function developPixel(
  r8: number,
  g8: number,
  b8: number,
  p: CameraRawParams,
): [number, number, number] {
  let r = srgbToLinear(r8);
  let g = srgbToLinear(g8);
  let b = srgbToLinear(b8);

  // White balance (temp: blue↔yellow, tint: green↔magenta)
  const temp = p.temperature / 100;
  const tint = p.tint / 100;
  r *= 1 + temp * 0.18 - tint * 0.06;
  g *= 1 + tint * 0.12;
  b *= 1 - temp * 0.22 - tint * 0.04;

  // Exposure in stops (−2…+2)
  const stops = (p.exposure / 100) * 2;
  const expMul = 2 ** stops;
  r *= expMul;
  g *= expMul;
  b *= expMul;

  // Contrast around mid-gray (~18% in linear)
  const contrast = p.contrast / 100;
  const pivot = 0.18;
  const cAmt = 1 + contrast * 0.85;
  r = (r - pivot) * cAmt + pivot;
  g = (g - pivot) * cAmt + pivot;
  b = (b - pivot) * cAmt + pivot;

  let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  // Highlights / Shadows — luma-weighted
  const hi = p.highlights / 100;
  const sh = p.shadows / 100;
  const hiMask = smoothstep(0.35, 0.95, luma);
  const shMask = 1 - smoothstep(0.05, 0.55, luma);
  const hiGain = 1 - hiMask * hi * 0.65;
  const shGain = 1 + shMask * sh * 0.75;
  r *= hiGain * shGain;
  g *= hiGain * shGain;
  b *= hiGain * shGain;

  luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  // Whites / Blacks — endpoints
  const wh = p.whites / 100;
  const bl = p.blacks / 100;
  const whMask = smoothstep(0.55, 1, luma);
  const blMask = 1 - smoothstep(0, 0.45, luma);
  const whGain = 1 + whMask * wh * 0.45;
  const blOff = blMask * bl * 0.12;
  r = r * whGain + blOff;
  g = g * whGain + blOff;
  b = b * whGain + blOff;

  let R = linearToSrgb(r);
  let G = linearToSrgb(g);
  let B = linearToSrgb(b);

  // Vibrance + Saturation in HSL (vibrance protects already-saturated / skin-ish tones)
  const vib = p.vibrance / 100;
  const sat = p.saturation / 100;
  if (vib !== 0 || sat !== 0) {
    const hsl = rgbToHsl(R, G, B);
    let s = hsl.s;
    if (vib !== 0) {
      const skin =
        hsl.h > 0.02 && hsl.h < 0.12 ? 0.45 : 1; // dampen orange/skin hues
      const amount = vib * (1 - s) * skin;
      s = clamp01(s + amount);
    }
    if (sat !== 0) {
      s = clamp01(s * (1 + sat));
    }
    [R, G, B] = hslToRgb(hsl.h, s, hsl.l);
  }

  return [
    Math.round(clamp01(R / 255) * 255),
    Math.round(clamp01(G / 255) * 255),
    Math.round(clamp01(B / 255) * 255),
  ];
}

export type DevelopOptions = {
  /** Cap longest edge for live preview. Omit / Infinity for full-res apply. */
  maxEdge?: number;
  mimeType?: string;
  quality?: number;
};

function drawSource(img: HTMLImageElement, maxEdge?: number) {
  const nw = img.naturalWidth || img.width;
  const nh = img.naturalHeight || img.height;
  let w = nw;
  let h = nh;
  if (maxEdge && Number.isFinite(maxEdge) && Math.max(nw, nh) > maxEdge) {
    const s = maxEdge / Math.max(nw, nh);
    w = Math.max(1, Math.round(nw * s));
    h = Math.max(1, Math.round(nh * s));
  }
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) throw new Error("2D context unavailable");
  ctx.drawImage(img, 0, 0, w, h);
  return { canvas, ctx, w, h };
}

export function developImageToDataURL(
  source: HTMLImageElement,
  params: CameraRawParams,
  options: DevelopOptions = {},
): string {
  if (isIdentityRawParams(params)) {
    const { canvas } = drawSource(source, options.maxEdge);
    return canvas.toDataURL(options.mimeType ?? "image/jpeg", options.quality ?? 0.92);
  }

  const { canvas, ctx, w, h } = drawSource(source, options.maxEdge);
  const imageData = ctx.getImageData(0, 0, w, h);
  const d = imageData.data;
  for (let i = 0; i < d.length; i += 4) {
    const [r, g, b] = developPixel(d[i], d[i + 1], d[i + 2], params);
    d[i] = r;
    d[i + 1] = g;
    d[i + 2] = b;
  }
  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL(options.mimeType ?? "image/jpeg", options.quality ?? 0.92);
}
