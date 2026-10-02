/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ve(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const n of t.split(",")) e[n] = 1;
  return (n) => n in e;
}
const Pt = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, tn = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Ut = () => {
}, ll = () => !1, Li = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), Pi = (t) => t.startsWith("onUpdate:"), Lt = Object.assign, ks = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, Ic = Object.prototype.hasOwnProperty, Et = (t, e) => Ic.call(t, e), ut = Array.isArray, ke = (t) => Ii(t) === "[object Map]", ar = (t) => Ii(t) === "[object Set]", oo = (t) => Ii(t) === "[object Date]", dt = (t) => typeof t == "function", Rt = (t) => typeof t == "string", de = (t) => typeof t == "symbol", wt = (t) => t !== null && typeof t == "object", Fs = (t) => (wt(t) || dt(t)) && dt(t.then) && dt(t.catch), cl = Object.prototype.toString, Ii = (t) => cl.call(t), Vs = (t) => Ii(t).slice(8, -1), hl = (t) => Ii(t) === "[object Object]", Ls = (t) => Rt(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Ei = /* @__PURE__ */ Ve(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Gc = /* @__PURE__ */ Ve(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Pr = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((n) => e[n] || (e[n] = t(n)));
}, Uc = /-\w/g, jt = Pr(
  (t) => t.replace(Uc, (e) => e.slice(1).toUpperCase())
), Bc = /\B([A-Z])/g, $e = Pr(
  (t) => t.replace(Bc, "-$1").toLowerCase()
), on = Pr((t) => t.charAt(0).toUpperCase() + t.slice(1)), Xe = Pr(
  (t) => t ? `on${on(t)}` : ""
), Ce = (t, e) => !Object.is(t, e), xn = (t, ...e) => {
  for (let n = 0; n < t.length; n++)
    t[n](...e);
}, lr = (t, e, n, r = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Hc = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let ao;
const Gi = () => ao || (ao = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ui(t) {
  if (ut(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], i = Rt(r) ? qc(r) : Ui(r);
      if (i)
        for (const s in i)
          e[s] = i[s];
    }
    return e;
  } else if (Rt(t) || wt(t))
    return t;
}
const jc = /;(?![^(]*\))/g, $c = /:([^]+)/, Wc = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function qc(t) {
  const e = {};
  return t.replace(Wc, (n) => n.startsWith("/*") ? "" : n).split(jc).forEach((n) => {
    if (n) {
      const r = n.split($c);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function He(t) {
  let e = "";
  if (Rt(t))
    e = t;
  else if (ut(t))
    for (let n = 0; n < t.length; n++) {
      const r = He(t[n]);
      r && (e += r + " ");
    }
  else if (wt(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const Kc = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", zc = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Yc = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Xc = /* @__PURE__ */ Ve(Kc), Jc = /* @__PURE__ */ Ve(zc), Qc = /* @__PURE__ */ Ve(Yc), Zc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", th = /* @__PURE__ */ Ve(Zc);
function ul(t) {
  return !!t || t === "";
}
function eh(t, e, n) {
  if (t.length !== e.length) return !1;
  let r = !0;
  for (let i = 0; r && i < t.length; i++)
    r = Ar(t[i], e[i], n);
  return r;
}
function lo(t, e, n) {
  if (t.size !== e.size) return !1;
  const r = Array.from(e), i = new Uint8Array(r.length);
  for (const s of t) {
    let a = -1;
    for (let o = 0; o < r.length; o++)
      if (!i[o] && Ar(s, r[o], n)) {
        a = o;
        break;
      }
    if (a < 0) return !1;
    i[a] = 1;
  }
  return !0;
}
function nh(t, e, n) {
  let r = ke(t), i = ke(e);
  if (r || i || (r = ar(t), i = ar(e), r || i))
    return r && i ? lo(t, e, n) : !1;
  const s = Object.keys(t).length, a = Object.keys(e).length;
  if (s !== a)
    return !1;
  for (const o in t) {
    const l = t.hasOwnProperty(o), u = e.hasOwnProperty(o);
    if (l && !u || !l && u || !Ar(t[o], e[o], n))
      return !1;
  }
  return String(t) === String(e);
}
function co(t, e, n, r) {
  n || (n = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [i, s] = n;
  if (i.has(t) || s.has(e))
    return i.get(t) === e && s.get(e) === t;
  i.set(t, e), s.set(e, t);
  const a = r(t, e, n);
  return i.delete(t), s.delete(e), a;
}
function Ar(t, e, n) {
  if (t === e) return !0;
  let r = oo(t), i = oo(e);
  return r || i ? r && i ? t.getTime() === e.getTime() : !1 : (r = de(t), i = de(e), r || i ? t === e : (r = ut(t), i = ut(e), r || i ? r && i ? co(t, e, n, eh) : !1 : (r = wt(t), i = wt(e), r || i ? !r || !i ? !1 : co(t, e, n, nh) : String(t) === String(e))));
}
const dl = (t) => !!(t && t.__v_isRef === !0), je = (t) => Rt(t) ? t : t == null ? "" : ut(t) || wt(t) && (t.toString === cl || !dt(t.toString)) ? dl(t) ? je(t.value) : JSON.stringify(t, fl, 2) : String(t), fl = (t, e) => dl(e) ? fl(t, e.value) : ke(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [r, i], s) => (n[$r(r, s) + " =>"] = i, n),
    {}
  )
} : ar(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => $r(n))
} : de(e) ? $r(e) : wt(e) && !ut(e) && !hl(e) ? String(e) : e, $r = (t, e = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    de(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t
  );
};
function ih(t) {
  return t == null ? "initial" : typeof t == "string" ? t === "" ? " " : t : ((typeof t != "number" || !Number.isFinite(t)) && process.env.NODE_ENV !== "production" && console.warn(
    "[Vue warn] Invalid value used for CSS binding. Expected a string or a finite number but received:",
    t
  ), String(t));
}
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function oe(t, ...e) {
  console.warn(`[Vue warn] ${t}`, ...e);
}
let Bt;
class rh {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && Bt && (Bt.active ? (this.parent = Bt, this.index = (Bt.scopes || (Bt.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let e, n;
      if (this.scopes) {
        const r = this.scopes.slice();
        for (e = 0, n = r.length; e < n; e++)
          r[e].pause();
      }
      for (e = 0, n = this.effects.length; e < n; e++)
        this.effects[e].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let e, n;
      if (this.scopes) {
        const i = this.scopes.slice();
        for (e = 0, n = i.length; e < n; e++)
          i[e].resume();
      }
      const r = this.effects.slice();
      for (e = 0, n = r.length; e < n; e++)
        r[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      const n = Bt;
      try {
        return Bt = this, e();
      } finally {
        Bt = n;
      }
    } else process.env.NODE_ENV !== "production" && this._warnOnRun && oe("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Bt, Bt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Bt === this)
        Bt = this.prevScope;
      else {
        let e = Bt;
        for (; e; ) {
          if (e.prevScope === this) {
            e.prevScope = this.prevScope;
            break;
          }
          e = e.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(e) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        const i = this.scopes.slice();
        for (n = 0, r = i.length; n < r; n++)
          i[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function pl() {
  return Bt;
}
function sh(t, e = !1) {
  Bt ? Bt.cleanups.push(t) : process.env.NODE_ENV !== "production" && !e && oe(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let Tt;
const Wr = /* @__PURE__ */ new WeakSet();
class gl {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Bt && (Bt.active ? Bt.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Wr.has(this) && (Wr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || _l(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ho(this), yl(this);
    const e = Tt, n = ue;
    Tt = this, ue = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && Tt !== this && oe(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), vl(this), Tt = e, ue = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        Us(e);
      this.deps = this.depsTail = void 0, ho(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Wr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ps(this) && this.run();
  }
  get dirty() {
    return ps(this);
  }
}
let ml = 0, wi, xi;
function _l(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = xi, xi = t;
    return;
  }
  t.next = wi, wi = t;
}
function Is() {
  ml++;
}
function Gs() {
  if (--ml > 0)
    return;
  if (xi) {
    let e = xi;
    for (xi = void 0; e; ) {
      const n = e.next;
      e.next = void 0, e.flags &= -9, e = n;
    }
  }
  let t;
  for (; wi; ) {
    let e = wi;
    for (wi = void 0; e; ) {
      const n = e.next;
      if (e.next = void 0, e.flags &= -9, e.flags & 1)
        try {
          e.trigger();
        } catch (r) {
          t || (t = r);
        }
      e = n;
    }
  }
  if (t) throw t;
}
function yl(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function vl(t) {
  let e, n = t.depsTail, r = n;
  for (; r; ) {
    const i = r.prevDep;
    r.version === -1 ? (r === n && (n = i), Us(r), oh(r)) : e = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = i;
  }
  t.deps = e, t.depsTail = n;
}
function ps(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (bl(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function bl(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Ai) || (t.globalVersion = Ai, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !ps(t))))
    return;
  t.flags |= 2;
  const e = t.dep, n = Tt, r = ue;
  Tt = t, ue = !0;
  try {
    yl(t);
    const i = t.fn(t._value);
    (e.version === 0 || Ce(i, t._value)) && (t.flags |= 128, t._value = i, e.version++);
  } catch (i) {
    throw e.version++, i;
  } finally {
    Tt = n, ue = r, vl(t), t.flags &= -3;
  }
}
function Us(t, e = !1) {
  const { dep: n, prevSub: r, nextSub: i } = t;
  if (r && (r.nextSub = i, t.prevSub = void 0), i && (i.prevSub = r, t.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === t && (n.subsHead = i), n.subs === t && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      Us(s, !0);
  }
  !e && !--n.sc && n.map && n.map.delete(n.key);
}
function oh(t) {
  const { prevDep: e, nextDep: n } = t;
  e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0);
}
let ue = !0;
const Sl = [];
function fe() {
  Sl.push(ue), ue = !1;
}
function pe() {
  const t = Sl.pop();
  ue = t === void 0 ? !0 : t;
}
function ho(t) {
  const { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    const n = Tt;
    Tt = void 0;
    try {
      e();
    } finally {
      Tt = n;
    }
  }
}
let Ai = 0;
class ah {
  constructor(e, n) {
    this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Bs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(e) {
    if (!Tt || !ue || Tt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Tt)
      n = this.activeLink = new ah(Tt, this), Tt.deps ? (n.prevDep = Tt.depsTail, Tt.depsTail.nextDep = n, Tt.depsTail = n) : Tt.deps = Tt.depsTail = n, Cl(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Tt.depsTail, n.nextDep = void 0, Tt.depsTail.nextDep = n, Tt.depsTail = n, Tt.deps === n && (Tt.deps = r);
    }
    return process.env.NODE_ENV !== "production" && Tt.onTrack && Tt.onTrack(
      Lt(
        {
          effect: Tt
        },
        e
      )
    ), n;
  }
  trigger(e) {
    this.version++, Ai++, this.notify(e);
  }
  notify(e) {
    Is();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            Lt(
              {
                effect: n.sub
              },
              e
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Gs();
    }
  }
}
function Cl(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let r = e.deps; r; r = r.nextDep)
        Cl(r);
    }
    const n = t.dep.subs;
    n !== t && (t.prevSub = n, n && (n.nextSub = t)), process.env.NODE_ENV !== "production" && t.dep.subsHead === void 0 && (t.dep.subsHead = t), t.dep.subs = t;
  }
}
const gs = /* @__PURE__ */ new WeakMap(), en = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), ms = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Ri = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function Ht(t, e, n) {
  if (ue && Tt) {
    let r = gs.get(t);
    r || gs.set(t, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || (r.set(n, i = new Bs()), i.map = r, i.key = n), process.env.NODE_ENV !== "production" ? i.track({
      target: t,
      type: e,
      key: n
    }) : i.track();
  }
}
function Ee(t, e, n, r, i, s) {
  const a = gs.get(t);
  if (!a) {
    Ai++;
    return;
  }
  const o = (l) => {
    l && (process.env.NODE_ENV !== "production" ? l.trigger({
      target: t,
      type: e,
      key: n,
      newValue: r,
      oldValue: i,
      oldTarget: s
    }) : l.trigger());
  };
  if (Is(), e === "clear")
    a.forEach(o);
  else {
    const l = ut(t), u = l && Ls(n);
    if (l && n === "length") {
      const c = Number(r);
      a.forEach((d, g) => {
        (g === "length" || g === Ri || !de(g) && g >= c) && o(d);
      });
    } else
      switch ((n !== void 0 || a.has(void 0)) && o(a.get(n)), u && o(a.get(Ri)), e) {
        case "add":
          l ? u && o(a.get("length")) : (o(a.get(en)), ke(t) && o(a.get(ms)));
          break;
        case "delete":
          l || (o(a.get(en)), ke(t) && o(a.get(ms)));
          break;
        case "set":
          ke(t) && o(a.get(en));
          break;
      }
  }
  Gs();
}
function hn(t) {
  const e = /* @__PURE__ */ yt(t);
  return e === t || (Ht(e, "iterate", Ri), /* @__PURE__ */ Jt(t)) ? e : /* @__PURE__ */ ae(t) ? /* @__PURE__ */ Fe(t) ? e.map((n) => We(le(n))) : e.map(We) : e.map(le);
}
function Rr(t) {
  return Ht(t = /* @__PURE__ */ yt(t), "iterate", Ri), t;
}
function Se(t, e) {
  return /* @__PURE__ */ ae(t) ? We(/* @__PURE__ */ Fe(t) ? le(e) : e) : le(e);
}
const lh = {
  __proto__: null,
  [Symbol.iterator]() {
    return qr(this, Symbol.iterator, (t) => Se(this, t));
  },
  concat(...t) {
    return hn(this).concat(
      ...t.map((e) => ut(e) ? hn(e) : e)
    );
  },
  entries() {
    return qr(this, "entries", (t) => (t[1] = Se(this, t[1]), t));
  },
  every(t, e) {
    return Ne(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return Ne(
      this,
      "filter",
      t,
      e,
      (n) => n.map((r) => Se(this, r)),
      arguments
    );
  },
  find(t, e) {
    return Ne(
      this,
      "find",
      t,
      e,
      (n) => Se(this, n),
      arguments
    );
  },
  findIndex(t, e) {
    return Ne(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return Ne(
      this,
      "findLast",
      t,
      e,
      (n) => Se(this, n),
      arguments
    );
  },
  findLastIndex(t, e) {
    return Ne(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return Ne(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return Kr(this, "includes", t);
  },
  indexOf(...t) {
    return Kr(this, "indexOf", t);
  },
  join(t) {
    return hn(this).join(t);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...t) {
    return Kr(this, "lastIndexOf", t);
  },
  map(t, e) {
    return Ne(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return Nn(this, "pop");
  },
  push(...t) {
    return Nn(this, "push", t);
  },
  reduce(t, ...e) {
    return uo(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return uo(this, "reduceRight", t, e);
  },
  shift() {
    return Nn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return Ne(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return Nn(this, "splice", t);
  },
  toReversed() {
    return hn(this).toReversed();
  },
  toSorted(t) {
    return hn(this).toSorted(t);
  },
  toSpliced(...t) {
    return hn(this).toSpliced(...t);
  },
  unshift(...t) {
    return Nn(this, "unshift", t);
  },
  values() {
    return qr(this, "values", (t) => Se(this, t));
  }
};
function qr(t, e, n) {
  const r = Rr(t), i = r[e]();
  return r !== t && !/* @__PURE__ */ Jt(t) && (i._next = i.next, i.next = () => {
    const s = i._next();
    return s.done || (s.value = n(s.value)), s;
  }), i;
}
const ch = Array.prototype;
function Ne(t, e, n, r, i, s) {
  const a = Rr(t), o = a !== t && !/* @__PURE__ */ Jt(t), l = a[e];
  if (l !== ch[e]) {
    const d = l.apply(t, s);
    return o ? le(d) : d;
  }
  let u = n;
  a !== t && (o ? u = function(d, g) {
    return n.call(this, Se(t, d), g, t);
  } : n.length > 2 && (u = function(d, g) {
    return n.call(this, d, g, t);
  }));
  const c = l.call(a, u, r);
  return o && i ? i(c) : c;
}
function uo(t, e, n, r) {
  const i = Rr(t), s = i !== t && !/* @__PURE__ */ Jt(t);
  let a = n, o = !1;
  i !== t && (s ? (o = r.length === 0, a = function(u, c, d) {
    return o && (o = !1, u = Se(t, u)), n.call(this, u, Se(t, c), d, t);
  }) : n.length > 3 && (a = function(u, c, d) {
    return n.call(this, u, c, d, t);
  }));
  const l = i[e](a, ...r);
  return o ? Se(t, l) : l;
}
function Kr(t, e, n) {
  const r = /* @__PURE__ */ yt(t);
  Ht(r, "iterate", Ri);
  const i = r[e](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ hr(n[0]) ? (n[0] = /* @__PURE__ */ yt(n[0]), r[e](...n)) : i;
}
function Nn(t, e, n = []) {
  fe(), Is();
  const r = (/* @__PURE__ */ yt(t))[e].apply(t, n);
  return Gs(), pe(), r;
}
const hh = /* @__PURE__ */ Ve("__proto__,__v_isRef,__isVue"), El = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(de)
);
function uh(t) {
  de(t) || (t = String(t));
  const e = /* @__PURE__ */ yt(this);
  return Ht(e, "has", t), e.hasOwnProperty(t);
}
class wl {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._isShallow = n;
  }
  get(e, n, r) {
    if (n === "__v_skip") return e.__v_skip;
    const i = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return r === (i ? s ? Al : Pl : s ? Tl : Ol).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const a = ut(e);
    if (!i) {
      let l;
      if (a && (l = lh[n]))
        return l;
      if (n === "hasOwnProperty")
        return uh;
    }
    const o = Reflect.get(
      e,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Vt(e) ? e : r
    );
    if ((de(n) ? El.has(n) : hh(n)) || (i || Ht(e, "get", n), s))
      return o;
    if (/* @__PURE__ */ Vt(o)) {
      const l = a && Ls(n) ? o : o.value;
      return i && wt(l) ? /* @__PURE__ */ cr(l) : l;
    }
    return wt(o) ? i ? /* @__PURE__ */ cr(o) : /* @__PURE__ */ En(o) : o;
  }
}
class xl extends wl {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, r, i) {
    let s = e[n];
    const a = ut(e) && Ls(n);
    if (!this._isShallow) {
      const u = /* @__PURE__ */ ae(s);
      if (!/* @__PURE__ */ Jt(r) && !/* @__PURE__ */ ae(r) && (s = /* @__PURE__ */ yt(s), r = /* @__PURE__ */ yt(r)), !a && /* @__PURE__ */ Vt(s) && !/* @__PURE__ */ Vt(r))
        return u ? (process.env.NODE_ENV !== "production" && oe(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          e[n]
        ), !0) : (s.value = r, !0);
    }
    const o = a ? Number(n) < e.length : Et(e, n), l = Reflect.set(
      e,
      n,
      r,
      /* @__PURE__ */ Vt(e) ? e : i
    );
    return e === /* @__PURE__ */ yt(i) && l && (o ? Ce(r, s) && Ee(e, "set", n, r, s) : Ee(e, "add", n, r)), l;
  }
  deleteProperty(e, n) {
    const r = Et(e, n), i = e[n], s = Reflect.deleteProperty(e, n);
    return s && r && Ee(e, "delete", n, void 0, i), s;
  }
  has(e, n) {
    const r = Reflect.has(e, n);
    return (!de(n) || !El.has(n)) && Ht(e, "has", n), r;
  }
  ownKeys(e) {
    return Ht(
      e,
      "iterate",
      ut(e) ? "length" : en
    ), Reflect.ownKeys(e);
  }
}
class Nl extends wl {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, n) {
    return process.env.NODE_ENV !== "production" && oe(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      e
    ), !0;
  }
  deleteProperty(e, n) {
    return process.env.NODE_ENV !== "production" && oe(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      e
    ), !0;
  }
}
const dh = /* @__PURE__ */ new xl(), fh = /* @__PURE__ */ new Nl(), ph = /* @__PURE__ */ new xl(!0), gh = /* @__PURE__ */ new Nl(!0), _s = (t) => t, Yi = (t) => Reflect.getPrototypeOf(t);
function mh(t, e, n) {
  return function(...r) {
    const i = this.__v_raw, s = /* @__PURE__ */ yt(i), a = ke(s), o = t === "entries" || t === Symbol.iterator && a, l = t === "keys" && a, u = i[t](...r), c = n ? _s : e ? We : le;
    return !e && Ht(
      s,
      "iterate",
      l ? ms : en
    ), Lt(
      // inheriting all iterator properties
      Object.create(u),
      {
        // iterator protocol
        next() {
          const { value: d, done: g } = u.next();
          return g ? { value: d, done: g } : {
            value: o ? [c(d[0]), c(d[1])] : c(d),
            done: g
          };
        }
      }
    );
  };
}
function Xi(t) {
  return function(...e) {
    if (process.env.NODE_ENV !== "production") {
      const n = e[0] ? `on key "${e[0]}" ` : "";
      oe(
        `${on(t)} operation ${n}failed: target is readonly.`,
        /* @__PURE__ */ yt(this)
      );
    }
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function _h(t, e) {
  const n = {
    get(i) {
      const s = this.__v_raw, a = /* @__PURE__ */ yt(s), o = /* @__PURE__ */ yt(i);
      t || (Ce(i, o) && Ht(a, "get", i), Ht(a, "get", o));
      const { has: l } = Yi(a), u = e ? _s : t ? We : le;
      if (l.call(a, i))
        return u(s.get(i));
      if (l.call(a, o))
        return u(s.get(o));
      s !== a && s.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !t && Ht(/* @__PURE__ */ yt(i), "iterate", en), i.size;
    },
    has(i) {
      const s = this.__v_raw, a = /* @__PURE__ */ yt(s), o = /* @__PURE__ */ yt(i);
      return t || (Ce(i, o) && Ht(a, "has", i), Ht(a, "has", o)), i === o ? s.has(i) : s.has(i) || s.has(o);
    },
    forEach(i, s) {
      const a = this, o = a.__v_raw, l = /* @__PURE__ */ yt(o), u = e ? _s : t ? We : le;
      return !t && Ht(l, "iterate", en), o.forEach((c, d) => i.call(s, u(c), u(d), a));
    }
  };
  return Lt(
    n,
    t ? {
      add: Xi("add"),
      set: Xi("set"),
      delete: Xi("delete"),
      clear: Xi("clear")
    } : {
      add(i) {
        const s = /* @__PURE__ */ yt(this), a = Yi(s), o = /* @__PURE__ */ yt(i), l = !e && !/* @__PURE__ */ Jt(i) && !/* @__PURE__ */ ae(i) ? o : i;
        return a.has.call(s, l) || Ce(i, l) && a.has.call(s, i) || Ce(o, l) && a.has.call(s, o) || (s.add(l), Ee(s, "add", l, l)), this;
      },
      set(i, s) {
        !e && !/* @__PURE__ */ Jt(s) && !/* @__PURE__ */ ae(s) && (s = /* @__PURE__ */ yt(s));
        const a = /* @__PURE__ */ yt(this), { has: o, get: l } = Yi(a);
        let u = o.call(a, i);
        u ? process.env.NODE_ENV !== "production" && fo(a, o, i) : (i = /* @__PURE__ */ yt(i), u = o.call(a, i));
        const c = l.call(a, i);
        return a.set(i, s), u ? Ce(s, c) && Ee(a, "set", i, s, c) : Ee(a, "add", i, s), this;
      },
      delete(i) {
        const s = /* @__PURE__ */ yt(this), { has: a, get: o } = Yi(s);
        let l = a.call(s, i);
        l ? process.env.NODE_ENV !== "production" && fo(s, a, i) : (i = /* @__PURE__ */ yt(i), l = a.call(s, i));
        const u = o ? o.call(s, i) : void 0, c = s.delete(i);
        return l && Ee(s, "delete", i, void 0, u), c;
      },
      clear() {
        const i = /* @__PURE__ */ yt(this), s = i.size !== 0, a = process.env.NODE_ENV !== "production" ? ke(i) ? new Map(i) : new Set(i) : void 0, o = i.clear();
        return s && Ee(
          i,
          "clear",
          void 0,
          void 0,
          a
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    n[i] = mh(i, t, e);
  }), n;
}
function Dr(t, e) {
  const n = _h(t, e);
  return (r, i, s) => i === "__v_isReactive" ? !t : i === "__v_isReadonly" ? t : i === "__v_raw" ? r : Reflect.get(
    Et(n, i) && i in r ? n : r,
    i,
    s
  );
}
const yh = {
  get: /* @__PURE__ */ Dr(!1, !1)
}, vh = {
  get: /* @__PURE__ */ Dr(!1, !0)
}, bh = {
  get: /* @__PURE__ */ Dr(!0, !1)
}, Sh = {
  get: /* @__PURE__ */ Dr(!0, !0)
};
function fo(t, e, n) {
  const r = /* @__PURE__ */ yt(n);
  if (r !== n && e.call(t, r)) {
    const i = Vs(t);
    oe(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Ol = /* @__PURE__ */ new WeakMap(), Tl = /* @__PURE__ */ new WeakMap(), Pl = /* @__PURE__ */ new WeakMap(), Al = /* @__PURE__ */ new WeakMap();
function Ch(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
// @__NO_SIDE_EFFECTS__
function En(t) {
  return /* @__PURE__ */ ae(t) ? t : Mr(
    t,
    !1,
    dh,
    yh,
    Ol
  );
}
// @__NO_SIDE_EFFECTS__
function Eh(t) {
  return Mr(
    t,
    !1,
    ph,
    vh,
    Tl
  );
}
// @__NO_SIDE_EFFECTS__
function cr(t) {
  return Mr(
    t,
    !0,
    fh,
    bh,
    Pl
  );
}
// @__NO_SIDE_EFFECTS__
function we(t) {
  return Mr(
    t,
    !0,
    gh,
    Sh,
    Al
  );
}
function Mr(t, e, n, r, i) {
  if (!wt(t))
    return process.env.NODE_ENV !== "production" && oe(
      `value cannot be made ${e ? "readonly" : "reactive"}: ${String(
        t
      )}`
    ), t;
  if (t.__v_raw && !(e && t.__v_isReactive) || t.__v_skip || !Object.isExtensible(t))
    return t;
  const s = i.get(t);
  if (s)
    return s;
  const a = Ch(Vs(t));
  if (a === 0)
    return t;
  const o = new Proxy(
    t,
    a === 2 ? r : n
  );
  return i.set(t, o), o;
}
// @__NO_SIDE_EFFECTS__
function Fe(t) {
  return /* @__PURE__ */ ae(t) ? /* @__PURE__ */ Fe(t.__v_raw) : !!(t && t.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ae(t) {
  return !!(t && t.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Jt(t) {
  return !!(t && t.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function hr(t) {
  return t ? !!t.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function yt(t) {
  const e = t && t.__v_raw;
  return e ? /* @__PURE__ */ yt(e) : t;
}
function wh(t) {
  return !Et(t, "__v_skip") && Object.isExtensible(t) && lr(t, "__v_skip", !0), t;
}
const le = (t) => wt(t) ? /* @__PURE__ */ En(t) : t, We = (t) => wt(t) ? /* @__PURE__ */ cr(t) : t;
// @__NO_SIDE_EFFECTS__
function Vt(t) {
  return t ? t.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ot(t) {
  return xh(t, !1);
}
function xh(t, e) {
  return /* @__PURE__ */ Vt(t) ? t : new Nh(t, e);
}
class Nh {
  constructor(e, n) {
    this.dep = new Bs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : /* @__PURE__ */ yt(e), this._value = n ? e : le(e), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(e) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ Jt(e) || /* @__PURE__ */ ae(e);
    e = r ? e : /* @__PURE__ */ yt(e), Ce(e, n) && (this._rawValue = e, this._value = r ? e : le(e), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: e,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function rt(t) {
  return /* @__PURE__ */ Vt(t) ? t.value : t;
}
const Oh = {
  get: (t, e, n) => e === "__v_raw" ? t : rt(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const i = t[e];
    return /* @__PURE__ */ Vt(i) && !/* @__PURE__ */ Vt(n) ? (i.value = n, !0) : Reflect.set(t, e, n, r);
  }
};
function Rl(t) {
  return /* @__PURE__ */ Fe(t) ? t : new Proxy(t, Oh);
}
class Th {
  constructor(e, n, r) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new Bs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ai - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Tt !== this)
      return _l(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const e = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return bl(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter ? this.setter(e) : process.env.NODE_ENV !== "production" && oe("Write operation failed: computed value is readonly");
  }
}
// @__NO_SIDE_EFFECTS__
function Ph(t, e, n = !1) {
  let r, i;
  dt(t) ? r = t : (r = t.get, i = t.set);
  const s = new Th(r, i, n);
  return process.env.NODE_ENV, s;
}
const Ji = {}, ur = /* @__PURE__ */ new WeakMap();
let Je;
function Ah(t, e = !1, n = Je) {
  if (n) {
    let r = ur.get(n);
    r || ur.set(n, r = []), r.push(t);
  } else process.env.NODE_ENV !== "production" && !e && oe(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Rh(t, e, n = Pt) {
  const { immediate: r, deep: i, once: s, scheduler: a, augmentJob: o, call: l } = n, u = (y) => {
    (n.onWarn || oe)(
      "Invalid watch source: ",
      y,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, c = (y) => i ? y : /* @__PURE__ */ Jt(y) || i === !1 || i === 0 ? De(y, 1) : De(y);
  let d, g, f, m, v = !1, S = !1;
  if (/* @__PURE__ */ Vt(t) ? (g = () => t.value, v = /* @__PURE__ */ Jt(t)) : /* @__PURE__ */ Fe(t) ? (g = () => c(t), v = !0) : ut(t) ? (S = !0, v = t.some((y) => /* @__PURE__ */ Fe(y) || /* @__PURE__ */ Jt(y)), g = () => t.map((y) => {
    if (/* @__PURE__ */ Vt(y))
      return y.value;
    if (/* @__PURE__ */ Fe(y))
      return c(y);
    if (dt(y))
      return l ? l(y, 2) : y();
    process.env.NODE_ENV !== "production" && u(y);
  })) : dt(t) ? e ? g = l ? () => l(t, 2) : t : g = () => {
    if (f) {
      fe();
      try {
        f();
      } finally {
        pe();
      }
    }
    const y = Je;
    Je = d;
    try {
      return l ? l(t, 3, [m]) : t(m);
    } finally {
      Je = y;
    }
  } : (g = Ut, process.env.NODE_ENV !== "production" && u(t)), e && i) {
    const y = g, x = i === !0 ? 1 / 0 : i;
    g = () => De(y(), x);
  }
  const w = pl(), p = () => {
    d.stop(), w && w.active && ks(w.effects, d);
  };
  if (s && e) {
    const y = e;
    e = (...x) => {
      const P = y(...x);
      return p(), P;
    };
  }
  let h = S ? new Array(t.length).fill(Ji) : Ji;
  const _ = (y) => {
    if (!(!(d.flags & 1) || !d.dirty && !y))
      if (e) {
        const x = d.run();
        if (y || i || v || (S ? x.some((P, C) => Ce(P, h[C])) : Ce(x, h))) {
          f && f();
          const P = Je;
          Je = d;
          try {
            const C = [
              x,
              // pass undefined as the old value when it's changed for the first time
              h === Ji ? void 0 : S && h[0] === Ji ? [] : h,
              m
            ];
            h = x, l ? l(e, 3, C) : (
              // @ts-expect-error
              e(...C)
            );
          } finally {
            Je = P;
          }
        }
      } else
        d.run();
  };
  return o && o(_), d = new gl(g), d.scheduler = a ? () => a(_, !1) : _, m = (y) => Ah(y, !1, d), f = d.onStop = () => {
    const y = ur.get(d);
    if (y) {
      if (l)
        l(y, 4);
      else
        for (const x of y) x();
      ur.delete(d);
    }
  }, process.env.NODE_ENV !== "production" && (d.onTrack = n.onTrack, d.onTrigger = n.onTrigger), e ? r ? _(!0) : h = d.run() : a ? a(_.bind(null, !0), !0) : d.run(), p.pause = d.pause.bind(d), p.resume = d.resume.bind(d), p.stop = p, p;
}
function De(t, e = 1 / 0, n) {
  if (e <= 0 || !wt(t) || t.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(t) || 0) >= e))
    return t;
  if (n.set(t, e), e--, /* @__PURE__ */ Vt(t))
    De(t.value, e, n);
  else if (ut(t))
    for (let r = 0; r < t.length; r++)
      De(t[r], e, n);
  else if (ar(t) || ke(t))
    t.forEach((r) => {
      De(r, e, n);
    });
  else if (hl(t)) {
    for (const r in t)
      De(t[r], e, n);
    for (const r of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, r) && De(t[r], e, n);
  }
  return t;
}
/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const nn = [];
function er(t) {
  nn.push(t);
}
function nr() {
  nn.pop();
}
let zr = !1;
function it(t, ...e) {
  if (zr) return;
  zr = !0, fe();
  const n = nn.length ? nn[nn.length - 1].component : null, r = n && n.appContext.config.warnHandler, i = Dh();
  if (r)
    wn(
      r,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        t + e.map((s) => {
          var a, o;
          return (o = (a = s.toString) == null ? void 0 : a.call(s)) != null ? o : JSON.stringify(s);
        }).join(""),
        n && n.proxy,
        i.map(
          ({ vnode: s }) => `at <${Ki(n, s.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const s = [`[Vue warn]: ${t}`, ...e];
    i.length && s.push(`
`, ...Mh(i)), console.warn(...s);
  }
  pe(), zr = !1;
}
function Dh() {
  let t = nn[nn.length - 1];
  if (!t)
    return [];
  const e = [];
  for (; t; ) {
    const n = e[0];
    n && n.vnode === t ? n.recurseCount++ : e.push({
      vnode: t,
      recurseCount: 0
    });
    const r = t.component && t.component.parent;
    t = r && r.vnode;
  }
  return e;
}
function Mh(t) {
  const e = [];
  return t.forEach((n, r) => {
    e.push(...r === 0 ? [] : [`
`], ...kh(n));
  }), e;
}
function kh({ vnode: t, recurseCount: e }) {
  const n = e > 0 ? `... (${e} recursive calls)` : "", r = t.component ? t.component.parent == null : !1, i = ` at <${Ki(
    t.component,
    t.type,
    r
  )}`, s = ">" + n;
  return t.props ? [i, ...Fh(t.props), s] : [i + s];
}
function Fh(t) {
  const e = [], n = Object.keys(t);
  return n.slice(0, 3).forEach((r) => {
    e.push(...Dl(r, t[r]));
  }), n.length > 3 && e.push(" ..."), e;
}
function Dl(t, e, n) {
  return Rt(e) ? (e = JSON.stringify(e), n ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? n ? e : [`${t}=${e}`] : /* @__PURE__ */ Vt(e) ? (e = Dl(t, /* @__PURE__ */ yt(e.value), !0), n ? e : [`${t}=Ref<`, e, ">"]) : dt(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = /* @__PURE__ */ yt(e), n ? e : [`${t}=`, e]);
}
const Hs = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function wn(t, e, n, r) {
  try {
    return r ? t(...r) : t();
  } catch (i) {
    Bi(i, e, n);
  }
}
function ge(t, e, n, r) {
  if (dt(t)) {
    const i = wn(t, e, n, r);
    return i && Fs(i) && i.catch((s) => {
      Bi(s, e, n);
    }), i;
  }
  if (ut(t)) {
    const i = [];
    for (let s = 0; s < t.length; s++)
      i.push(ge(t[s], e, n, r));
    return i;
  } else process.env.NODE_ENV !== "production" && it(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof t}`
  );
}
function Bi(t, e, n, r = !0) {
  const i = e ? e.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: a } = e && e.appContext.config || Pt;
  if (e) {
    let o = e.parent;
    const l = e.proxy, u = process.env.NODE_ENV !== "production" ? Hs[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const c = o.ec;
      if (c) {
        for (let d = 0; d < c.length; d++)
          if (c[d](t, l, u) === !1)
            return;
      }
      o = o.parent;
    }
    if (s) {
      fe(), wn(s, null, 10, [
        t,
        l,
        u
      ]), pe();
      return;
    }
  }
  Vh(t, n, i, r, a);
}
function Vh(t, e, n, r = !0, i = !1) {
  if (process.env.NODE_ENV !== "production") {
    const s = Hs[e];
    if (n && er(n), it(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && nr(), r)
      throw t;
    console.error(t);
  } else {
    if (i)
      throw t;
    console.error(t);
  }
}
const Xt = [];
let be = -1;
const vn = [];
let Be = null, gn = 0;
const Ml = /* @__PURE__ */ Promise.resolve();
let dr = null;
const Lh = 100;
function kl(t) {
  const e = dr || Ml;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Ih(t) {
  let e = be + 1, n = Xt.length;
  for (; e < n; ) {
    const r = e + n >>> 1, i = Xt[r], s = Di(i);
    s < t || s === t && i.flags & 2 ? e = r + 1 : n = r;
  }
  return e;
}
function kr(t) {
  if (!(t.flags & 1)) {
    const e = Di(t), n = Xt[Xt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= Di(n) ? Xt.push(t) : Xt.splice(Ih(e), 0, t), t.flags |= 1, Fl();
  }
}
function Fl() {
  dr || (dr = Ml.then(Ll));
}
function js(t) {
  if (!ut(t))
    Be && t.id === -1 ? Be.splice(gn + 1, 0, t) : t.flags & 1 || (vn.push(t), t.flags |= 1);
  else
    for (let e = 0; e < t.length; e++)
      vn.push(t[e]);
  Fl();
}
function po(t, e, n = be + 1) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); n < Xt.length; n++) {
    const r = Xt[n];
    if (r && r.flags & 2) {
      if (t && r.id !== t.uid || process.env.NODE_ENV !== "production" && $s(e, r))
        continue;
      Xt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Vl(t) {
  if (vn.length) {
    const e = [...new Set(vn)].sort(
      (n, r) => Di(n) - Di(r)
    );
    if (vn.length = 0, Be) {
      for (let n = 0; n < e.length; n++)
        Be.push(e[n]);
      return;
    }
    for (Be = e, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), gn = 0; gn < Be.length; gn++) {
      const n = Be[gn];
      process.env.NODE_ENV !== "production" && $s(t, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Be = null, gn = 0;
  }
}
const Di = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function Ll(t) {
  process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map());
  const e = process.env.NODE_ENV !== "production" ? (n) => $s(t, n) : Ut;
  try {
    for (be = 0; be < Xt.length; be++) {
      const n = Xt[be];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && e(n))
          continue;
        n.flags & 4 && (n.flags &= -2), wn(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; be < Xt.length; be++) {
      const n = Xt[be];
      n && (n.flags &= -2);
    }
    be = -1, Xt.length = 0, Vl(t), dr = null, (Xt.length || vn.length) && Ll(t);
  }
}
function $s(t, e) {
  const n = t.get(e) || 0;
  if (n > Lh) {
    const r = e.i, i = r && Qs(r.type);
    return Bi(
      `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return t.set(e, n + 1), !1;
}
let ee = !1;
const go = (t) => {
  try {
    return ee;
  } finally {
    ee = t;
  }
}, ir = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Gi().__VUE_HMR_RUNTIME__ = {
  createRecord: Yr(Il),
  rerender: Yr(Bh),
  reload: Yr(Hh)
});
const an = /* @__PURE__ */ new Map();
function Gh(t) {
  const e = t.type.__hmrId;
  let n = an.get(e);
  n || (Il(e, t.type), n = an.get(e)), n.instances.add(t);
}
function Uh(t) {
  an.get(t.type.__hmrId).instances.delete(t);
}
function Il(t, e) {
  return an.has(t) ? !1 : (an.set(t, {
    initialDef: fr(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function fr(t) {
  return Cc(t) ? t.__vccOpts : t;
}
function Bh(t, e) {
  const n = an.get(t);
  n && (n.initialDef.render = e, [...n.instances].forEach((r) => {
    e && (r.render = e, fr(r.type).render = e), r.renderCache = [], ee = !0, r.job.flags & 8 || r.update(), ee = !1;
  }));
}
function Hh(t, e) {
  const n = an.get(t);
  if (!n) return;
  e = fr(e), mo(n.initialDef, e);
  const r = [...n.instances];
  for (let i = 0; i < r.length; i++) {
    const s = r[i], a = fr(s.type);
    let o = ir.get(a);
    o || (a !== n.initialDef && mo(a, e), ir.set(a, o = /* @__PURE__ */ new Set())), o.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (o.add(s), s.ceReload(e.styles), o.delete(s)) : s.parent ? kr(() => {
      s.job.flags & 8 || (ee = !0, s.parent.update(), ee = !1, o.delete(s));
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(a);
  }
  js(() => {
    ir.clear();
  });
}
function mo(t, e) {
  Lt(t, e);
  for (const n in t)
    n !== "__file" && !(n in e) && delete t[n];
}
function Yr(t) {
  return (e, n) => {
    try {
      return t(e, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let he, yi = [], ys = !1;
function Hi(t, ...e) {
  he ? he.emit(t, ...e) : ys || yi.push({ event: t, args: e });
}
function Ws(t, e) {
  var n, r;
  he = t, he ? (he.enabled = !0, yi.forEach(({ event: i, args: s }) => he.emit(i, ...s)), yi = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Ws(s, e);
  }), setTimeout(() => {
    he || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, ys = !0, yi = []);
  }, 3e3)) : (ys = !0, yi = []);
}
function jh(t, e) {
  Hi("app:init", t, e, {
    Fragment: At,
    Text: $i,
    Comment: ne,
    Static: Sn
  });
}
function $h(t) {
  Hi("app:unmount", t);
}
const Wh = /* @__PURE__ */ qs(
  "component:added"
  /* COMPONENT_ADDED */
), Gl = /* @__PURE__ */ qs(
  "component:updated"
  /* COMPONENT_UPDATED */
), qh = /* @__PURE__ */ qs(
  "component:removed"
  /* COMPONENT_REMOVED */
), Kh = (t) => {
  he && typeof he.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !he.cleanupBuffer(t) && qh(t);
};
// @__NO_SIDE_EFFECTS__
function qs(t) {
  return (e) => {
    Hi(
      t,
      e.appContext.app,
      e.uid,
      e.parent ? e.parent.uid : void 0,
      e
    );
  };
}
const zh = /* @__PURE__ */ Ul(
  "perf:start"
  /* PERFORMANCE_START */
), Yh = /* @__PURE__ */ Ul(
  "perf:end"
  /* PERFORMANCE_END */
);
function Ul(t) {
  return (e, n, r) => {
    Hi(t, e.appContext.app, e.uid, e, n, r);
  };
}
function Xh(t, e, n) {
  Hi(
    "component:emit",
    t.appContext.app,
    t,
    e,
    n
  );
}
let Kt = null, Bl = null;
function pr(t) {
  const e = Kt;
  return Kt = t, Bl = t && t.type.__scopeId || null, e;
}
function vi(t, e = Kt, n) {
  if (!e || t._n)
    return t;
  const r = (...i) => {
    r._d && vr(-1);
    const s = pr(e), a = sn.length;
    let o;
    try {
      o = t(...i);
    } finally {
      for (let l = sn.length; l > a; l--) pc();
      pr(s), r._d && vr(1);
    }
    return process.env.NODE_ENV !== "production" && Gl(e), o;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Hl(t) {
  Gc(t) && it("Do not use built-in directive ids as custom directive id: " + t);
}
function Jh(t, e) {
  if (Kt === null)
    return process.env.NODE_ENV !== "production" && it("withDirectives can only be used inside render functions."), t;
  const n = Br(Kt), r = t.dirs || (t.dirs = []);
  for (let i = 0; i < e.length; i++) {
    let [s, a, o, l = Pt] = e[i];
    s && (dt(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && De(a), r.push({
      dir: s,
      instance: n,
      value: a,
      oldValue: void 0,
      arg: o,
      modifiers: l
    }));
  }
  return t;
}
function Ke(t, e, n, r) {
  const i = t.dirs, s = e && e.dirs;
  for (let a = 0; a < i.length; a++) {
    const o = i[a];
    s && (o.oldValue = s[a].value);
    let l = o.dir[r];
    l && (fe(), ge(l, n, 8, [
      t.el,
      o,
      t,
      e
    ]), pe());
  }
}
function Qh(t, e) {
  if (process.env.NODE_ENV !== "production" && (!Gt || Gt.isMounted) && it("provide() can only be used inside setup()."), Gt) {
    let n = Gt.provides;
    const r = Gt.parent && Gt.parent.provides;
    r === n && (n = Gt.provides = Object.create(r)), n[t] = e;
  }
}
function rr(t, e, n = !1) {
  const r = Wi();
  if (r || bn) {
    let i = bn ? bn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (i && t in i)
      return i[t];
    if (arguments.length > 1)
      return n && dt(e) ? e.call(r && r.proxy) : e;
    process.env.NODE_ENV !== "production" && it(`injection "${String(t)}" not found.`);
  } else process.env.NODE_ENV !== "production" && it("inject() can only be used inside setup() or functional components.");
}
const Zh = /* @__PURE__ */ Symbol.for("v-scx"), tu = () => {
  {
    const t = rr(Zh);
    return t || process.env.NODE_ENV !== "production" && it(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), t;
  }
};
function se(t, e, n) {
  return process.env.NODE_ENV !== "production" && !dt(e) && it(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), jl(t, e, n);
}
function jl(t, e, n = Pt) {
  const { immediate: r, deep: i, flush: s, once: a } = n;
  process.env.NODE_ENV !== "production" && !e && (r !== void 0 && it(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && it(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), a !== void 0 && it(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const o = Lt({}, n);
  process.env.NODE_ENV !== "production" && (o.onWarn = it);
  const l = e && r || !e && s !== "post";
  let u;
  if (Fi) {
    if (s === "sync") {
      const f = tu();
      u = f.__watcherHandles || (f.__watcherHandles = []);
    } else if (!l) {
      const f = () => {
      };
      return f.stop = Ut, f.resume = Ut, f.pause = Ut, f;
    }
  }
  const c = Gt;
  o.call = (f, m, v) => ge(f, c, m, v);
  let d = !1;
  s === "post" ? o.scheduler = (f) => {
    Yt(f, c && c.suspense);
  } : s !== "sync" && (d = !0, o.scheduler = (f, m) => {
    m ? f() : kr(f);
  }), o.augmentJob = (f) => {
    e && (f.flags |= 4), d && (f.flags |= 2, c && (f.id = c.uid, f.i = c));
  };
  const g = Rh(t, e, o);
  return Fi && (u ? u.push(g) : l && g()), g;
}
function eu(t, e, n) {
  const r = this.proxy, i = Rt(t) ? t.includes(".") ? $l(r, t) : () => r[t] : t.bind(r, r);
  let s;
  dt(e) ? s = e : (s = e.handler, n = e);
  const a = qi(this), o = jl(i, s.bind(r), n);
  return a(), o;
}
function $l(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
const Ge = /* @__PURE__ */ new WeakMap(), Wl = /* @__PURE__ */ Symbol("_vte"), Fr = (t) => t.__isTeleport, Me = (t) => t && (t.disabled || t.disabled === ""), nu = (t) => t && (t.defer || t.defer === ""), _o = (t) => typeof SVGElement < "u" && t instanceof SVGElement, yo = (t) => typeof MathMLElement == "function" && t instanceof MathMLElement, vs = (t, e) => {
  const n = t && t.to;
  if (Rt(n))
    if (e) {
      const r = e(n);
      return process.env.NODE_ENV !== "production" && !r && !Me(t) && it(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), r;
    } else
      return process.env.NODE_ENV !== "production" && it(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return process.env.NODE_ENV !== "production" && !n && !Me(t) && it(`Invalid Teleport target: ${n}`), n;
}, iu = {
  name: "Teleport",
  __isTeleport: !0,
  process(t, e, n, r, i, s, a, o, l, u) {
    const {
      mc: c,
      pc: d,
      pbc: g,
      o: { insert: f, querySelector: m, createText: v, createComment: S, parentNode: w }
    } = u, p = Me(e.props);
    let { dynamicChildren: h } = e;
    process.env.NODE_ENV !== "production" && ee && (l = !1, h = null);
    const _ = (P, C, E) => {
      P.shapeFlag & 16 && c(
        P.children,
        C,
        E,
        i,
        s,
        a,
        o,
        l
      );
    }, y = (P = e) => {
      const C = Me(P.props), E = P.target = vs(P.props, m), N = bs(E, P, v, f);
      E ? (a !== "svg" && _o(E) ? a = "svg" : a !== "mathml" && yo(E) && (a = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(E), C || (_(P, E, N), bi(P, !1))) : process.env.NODE_ENV !== "production" && !C && it("Invalid Teleport target on mount:", E, `(${typeof E})`);
    }, x = (P) => {
      const C = () => {
        if (Ge.get(P) === C) {
          if (Ge.delete(P), Me(P.props)) {
            const E = w(P.el) || n;
            _(P, E, P.anchor), bi(P, !0);
          }
          y(P);
        }
      };
      Ge.set(P, C), Yt(C, s);
    };
    if (t == null) {
      const P = e.el = process.env.NODE_ENV !== "production" ? S("teleport start") : v(""), C = e.anchor = process.env.NODE_ENV !== "production" ? S("teleport end") : v("");
      if (f(P, n, r), f(C, n, r), nu(e.props) || s && s.pendingBranch) {
        x(e);
        return;
      }
      p && (_(e, n, C), bi(e, !0)), y();
    } else {
      e.el = t.el;
      const P = e.anchor = t.anchor, C = Ge.get(t);
      if (C) {
        C.flags |= 8, Ge.delete(t), x(e);
        return;
      }
      e.targetStart = t.targetStart;
      const E = e.target = t.target, N = e.targetAnchor = t.targetAnchor, A = Me(t.props), F = A ? n : E, G = A ? P : N;
      if (a === "svg" || _o(E) ? a = "svg" : (a === "mathml" || yo(E)) && (a = "mathml"), h ? (g(
        t.dynamicChildren,
        h,
        F,
        i,
        s,
        a,
        o
      ), Ti(t, e, process.env.NODE_ENV === "production")) : l || d(
        t,
        e,
        F,
        G,
        i,
        s,
        a,
        o,
        !1
      ), p)
        A ? e.props && t.props && e.props.to !== t.props.to && (e.props.to = t.props.to) : Qi(
          e,
          n,
          P,
          u,
          1
        );
      else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
        const B = vs(e.props, m);
        B ? (e.target = B, Qi(
          e,
          B,
          null,
          u,
          0
        )) : process.env.NODE_ENV !== "production" && it(
          "Invalid Teleport target on update:",
          E,
          `(${typeof E})`
        );
      } else A && Qi(
        e,
        E,
        N,
        u,
        1
      );
      bi(e, p);
    }
  },
  remove(t, e, n, { um: r, o: { remove: i } }, s) {
    const {
      shapeFlag: a,
      children: o,
      anchor: l,
      targetStart: u,
      targetAnchor: c,
      target: d,
      props: g
    } = t, f = Me(g), m = s || !f, v = Ge.get(t);
    if (v && (v.flags |= 8, Ge.delete(t)), d && (i(u), i(c)), s && i(l), !v && (f || d) && a & 16)
      for (let S = 0; S < o.length; S++) {
        const w = o[S];
        r(
          w,
          e,
          n,
          m,
          !!w.dynamicChildren
        );
      }
  },
  move: Qi,
  hydrate: ru
};
function Qi(t, e, n, { o: { insert: r }, m: i }, s = 2) {
  s === 0 && r(t.targetAnchor, e, n);
  const { el: a, anchor: o, shapeFlag: l, children: u, props: c } = t, d = s === 2;
  if (d && r(a, e, n), !Ge.has(t) && (!d || Me(c)) && l & 16)
    for (let g = 0; g < u.length; g++)
      i(
        u[g],
        e,
        n,
        2
      );
  d && r(o, e, n);
}
function ru(t, e, n, r, i, s, {
  o: { nextSibling: a, parentNode: o, querySelector: l, insert: u, createText: c }
}, d) {
  function g(S, w) {
    let p = w;
    for (; p; ) {
      if (p && p.nodeType === 8) {
        if (p.data === "teleport start anchor")
          e.targetStart = p;
        else if (p.data === "teleport anchor") {
          e.targetAnchor = p, S._lpa = e.targetAnchor && a(e.targetAnchor);
          break;
        }
      }
      p = a(p);
    }
  }
  function f(S, w) {
    w.anchor = d(
      a(S),
      w,
      o(S),
      n,
      r,
      i,
      s
    );
  }
  const m = e.target = vs(
    e.props,
    l
  ), v = Me(e.props);
  if (m) {
    const S = m._lpa || m.firstChild;
    e.shapeFlag & 16 && (v ? (f(t, e), g(m, S), e.targetAnchor || bs(
      m,
      e,
      c,
      u,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      o(t) === m ? t : null
    )) : (e.anchor = a(t), g(m, S), e.targetAnchor || bs(m, e, c, u), d(
      S && a(S),
      e,
      m,
      n,
      r,
      i,
      s
    ))), bi(e, v);
  } else v && e.shapeFlag & 16 && (f(t, e), e.targetStart = t, e.targetAnchor = a(t));
  return e.anchor && a(e.anchor);
}
const su = iu;
function bi(t, e) {
  const n = t.ctx;
  if (n && n.ut) {
    let r, i;
    for (e ? (r = t.el, i = t.anchor) : (r = t.targetStart, i = t.targetAnchor); r && r !== i; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function bs(t, e, n, r, i = null) {
  const s = e.targetStart = n(""), a = e.targetAnchor = n("");
  return s[Wl] = a, t && (r(s, t, i), r(a, t, i)), a;
}
const Xr = /* @__PURE__ */ Symbol("_leaveCb");
function ou(t) {
  let e = t[0];
  if (t.length > 1) {
    let n = !1;
    for (const r of t)
      if (r.type !== ne) {
        if (process.env.NODE_ENV !== "production" && n) {
          it(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (e = r, n = !0, process.env.NODE_ENV === "production") break;
      }
  }
  return e;
}
function ql(t) {
  if (!Vr(t))
    return Fr(t.type) && t.children ? ou(t.children) : t;
  if (t.component)
    return t.component.subTree;
  const { shapeFlag: e, children: n } = t;
  if (n) {
    if (e & 16)
      return n[0];
    if (e & 32 && dt(n.default))
      return n.default();
  }
}
function Ks(t, e) {
  if (t.shapeFlag & 6 && t.component) {
    t.transition = e;
    const n = t.component.subTree;
    Ks(
      Fr(n.type) && ql(n) || n,
      e
    );
  } else t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
// @__NO_SIDE_EFFECTS__
function cn(t, e) {
  return dt(t) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Lt({ name: t.name }, e, { setup: t })
  ) : t;
}
function Kl(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
const vo = /* @__PURE__ */ new WeakSet();
function bo(t, e) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(t, e)) && !n.configurable);
}
const gr = /* @__PURE__ */ new WeakMap();
function Ni(t, e, n, r, i = !1) {
  if (ut(t)) {
    t.forEach(
      (v, S) => Ni(
        v,
        e && (ut(e) ? e[S] : e),
        n,
        r,
        i
      )
    );
    return;
  }
  if (Oi(r) && !i) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Ni(t, e, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? Br(r.component) : r.el, a = i ? null : s, { i: o, r: l } = t;
  if (process.env.NODE_ENV !== "production" && !o) {
    it(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const u = e && e.r, c = o.refs === Pt ? o.refs = {} : o.refs, d = o.setupState, g = /* @__PURE__ */ yt(d), f = d === Pt ? ll : (v) => process.env.NODE_ENV !== "production" && (Et(g, v) && !/* @__PURE__ */ Vt(g[v]) && it(
    `Template ref "${v}" used on a non-ref value. It will not work in the production build.`
  ), vo.has(g[v])) || bo(c, v) ? !1 : Et(g, v), m = (v, S) => !(process.env.NODE_ENV !== "production" && vo.has(v) || S && bo(c, S));
  if (u != null && u !== l) {
    if (So(e), Rt(u))
      c[u] = null, f(u) && (d[u] = null);
    else if (/* @__PURE__ */ Vt(u)) {
      const v = e;
      m(u, v.k) && (u.value = null), v.k && (c[v.k] = null);
    }
  }
  if (dt(l))
    wn(l, o, 12, [a, c]);
  else {
    const v = Rt(l), S = /* @__PURE__ */ Vt(l);
    if (v || S) {
      const w = () => {
        if (t.f) {
          const p = v ? f(l) ? d[l] : c[l] : m(l) || !t.k ? l.value : c[t.k];
          if (i)
            ut(p) && ks(p, s);
          else if (ut(p))
            p.includes(s) || p.push(s);
          else if (v)
            c[l] = [s], f(l) && (d[l] = c[l]);
          else {
            const h = [s];
            m(l, t.k) && (l.value = h), t.k && (c[t.k] = h);
          }
        } else v ? (c[l] = a, f(l) && (d[l] = a)) : S ? (m(l, t.k) && (l.value = a), t.k && (c[t.k] = a)) : process.env.NODE_ENV !== "production" && it("Invalid template ref type:", l, `(${typeof l})`);
      };
      if (a) {
        const p = () => {
          w(), gr.delete(t);
        };
        p.id = -1, gr.set(t, p), Yt(p, n);
      } else
        So(t), w();
    } else process.env.NODE_ENV !== "production" && it("Invalid template ref type:", l, `(${typeof l})`);
  }
}
function So(t) {
  const e = gr.get(t);
  e && (e.flags |= 8, gr.delete(t));
}
Gi().requestIdleCallback;
Gi().cancelIdleCallback;
const Oi = (t) => !!t.type.__asyncLoader, Vr = (t) => t.type.__isKeepAlive;
function au(t, e) {
  zl(t, "a", e);
}
function lu(t, e) {
  zl(t, "da", e);
}
function zl(t, e, n = Gt) {
  const r = t.__wdc || (t.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return t();
  });
  if (Lr(e, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Vr(i.parent.vnode) && cu(r, e, n, i), i = i.parent;
  }
}
function cu(t, e, n, r) {
  const i = Lr(
    e,
    t,
    r,
    !0
    /* prepend */
  );
  Ir(() => {
    ks(r[e], i);
  }, n);
}
function Lr(t, e, n = Gt, r = !1) {
  if (n) {
    const i = n[t] || (n[t] = []), s = e.__weh || (e.__weh = (...a) => {
      fe();
      const o = qi(n), l = ge(e, n, t, a);
      return o(), pe(), l;
    });
    return r ? i.unshift(s) : i.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const i = Xe(Hs[t].replace(/ hook$/, ""));
    it(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Le = (t) => (e, n = Gt) => {
  (!Fi || t === "sp") && Lr(t, (...r) => e(...r), n);
}, hu = Le("bm"), ln = Le("m"), Yl = Le(
  "bu"
), zs = Le("u"), ji = Le(
  "bum"
), Ir = Le("um"), uu = Le(
  "sp"
), du = Le("rtg"), fu = Le("rtc");
function pu(t, e = Gt) {
  Lr("ec", t, e);
}
const gu = "components";
function un(t, e) {
  return _u(gu, t, !0, e) || t;
}
const mu = /* @__PURE__ */ Symbol.for("v-ndc");
function _u(t, e, n = !0, r = !1) {
  const i = Kt || Gt;
  if (i) {
    const s = i.type;
    {
      const o = Qs(
        s,
        !1
      );
      if (o && (o === e || o === jt(e) || o === on(jt(e))))
        return s;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      Co(i[t] || s[t], e) || // global registration
      Co(i.appContext[t], e)
    );
    return !a && r ? s : (process.env.NODE_ENV !== "production" && n && !a && it(`Failed to resolve ${t.slice(0, -1)}: ${e}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), a);
  } else process.env.NODE_ENV !== "production" && it(
    `resolve${on(t.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Co(t, e) {
  return t && (t[e] || t[jt(e)] || t[on(jt(e))]);
}
function Eo(t, e, n, r) {
  let i;
  const s = n, a = ut(t);
  if (a || Rt(t)) {
    const o = a && /* @__PURE__ */ Fe(t);
    let l = !1, u = !1;
    o && (l = !/* @__PURE__ */ Jt(t), u = /* @__PURE__ */ ae(t), t = Rr(t)), i = new Array(t.length);
    for (let c = 0, d = t.length; c < d; c++)
      i[c] = e(
        l ? u ? We(le(t[c])) : le(t[c]) : t[c],
        c,
        void 0,
        s
      );
  } else if (typeof t == "number")
    if (process.env.NODE_ENV !== "production" && (!Number.isInteger(t) || t < 0))
      it(
        `The v-for range expects a positive integer value but got ${t}.`
      ), i = [];
    else {
      i = new Array(t);
      for (let o = 0; o < t; o++)
        i[o] = e(o + 1, o, void 0, s);
    }
  else if (wt(t))
    if (t[Symbol.iterator])
      i = Array.from(
        t,
        (o, l) => e(o, l, void 0, s)
      );
    else {
      const o = Object.keys(t);
      i = new Array(o.length);
      for (let l = 0, u = o.length; l < u; l++) {
        const c = o[l];
        i[l] = e(t[c], c, l, s);
      }
    }
  else
    i = [];
  return i;
}
const Ss = (t) => t ? bc(t) ? Br(t) : Ss(t.parent) : null, yu = (t) => {
  let e = !1;
  for (; ; ) {
    if (t.patchFlag > 0 && t.patchFlag & 2048) {
      const i = Ur(t.children);
      if (!i)
        return;
      t = i, e = !0;
      continue;
    }
    const n = t.component;
    if (n && n.subTree) {
      t = n.subTree;
      continue;
    }
    const r = t.suspense;
    if (r && r.activeBranch) {
      t = r.activeBranch;
      continue;
    }
    return e ? t.el : void 0;
  }
}, vu = (t) => {
  const e = t.subTree && yu(t.subTree);
  return e === void 0 ? t.vnode.el : e;
}, rn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Lt(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => process.env.NODE_ENV !== "production" ? vu(t) : t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ we(t.props) : t.props,
    $attrs: (t) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ we(t.attrs) : t.attrs,
    $slots: (t) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ we(t.slots) : t.slots,
    $refs: (t) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ we(t.refs) : t.refs,
    $parent: (t) => Ss(t.parent),
    $root: (t) => Ss(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => Ql(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      kr(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = kl.bind(t.proxy)),
    $watch: (t) => eu.bind(t)
  })
), Ys = (t) => t === "_" || t === "$", Jr = (t, e) => t !== Pt && !t.__isScriptSetup && Et(t, e), Xl = {
  get({ _: t }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: i, props: s, accessCache: a, type: o, appContext: l } = t;
    if (process.env.NODE_ENV !== "production" && e === "__isVue")
      return !0;
    if (e[0] !== "$") {
      const g = a[e];
      if (g !== void 0)
        switch (g) {
          case 1:
            return r[e];
          case 2:
            return i[e];
          case 4:
            return n[e];
          case 3:
            return s[e];
        }
      else {
        if (Jr(r, e))
          return a[e] = 1, r[e];
        if (i !== Pt && Et(i, e))
          return a[e] = 2, i[e];
        if (Et(s, e))
          return a[e] = 3, s[e];
        if (n !== Pt && Et(n, e))
          return a[e] = 4, n[e];
        Cs && (a[e] = 0);
      }
    }
    const u = rn[e];
    let c, d;
    if (u)
      return e === "$attrs" ? (Ht(t.attrs, "get", ""), process.env.NODE_ENV !== "production" && _r()) : process.env.NODE_ENV !== "production" && e === "$slots" && Ht(t, "get", e), u(t);
    if (
      // css module (injected by vue-loader)
      (c = o.__cssModules) && (c = c[e])
    )
      return c;
    if (n !== Pt && Et(n, e))
      return a[e] = 4, n[e];
    if (
      // global properties
      d = l.config.globalProperties, Et(d, e)
    )
      return d[e];
    process.env.NODE_ENV !== "production" && Kt && (!Rt(e) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    e.indexOf("__v") !== 0) && (i !== Pt && Ys(e[0]) && Et(i, e) ? it(
      `Property ${JSON.stringify(
        e
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : t === Kt && it(
      `Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: t }, e, n) {
    const { data: r, setupState: i, ctx: s } = t;
    return Jr(i, e) ? (i[e] = n, !0) : process.env.NODE_ENV !== "production" && i.__isScriptSetup && Et(i, e) ? (it(`Cannot mutate <script setup> binding "${e}" from Options API.`), !1) : r !== Pt && Et(r, e) ? (r[e] = n, !0) : Et(t.props, e) ? (process.env.NODE_ENV !== "production" && it(`Attempting to mutate prop "${e}". Props are readonly.`), !1) : e[0] === "$" && e.slice(1) in t ? (process.env.NODE_ENV !== "production" && it(
      `Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && e in t.appContext.config.globalProperties ? Object.defineProperty(s, e, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: i, props: s, type: a }
  }, o) {
    let l;
    return !!(n[o] || t !== Pt && o[0] !== "$" && Et(t, o) || Jr(e, o) || Et(s, o) || Et(r, o) || Et(rn, o) || Et(i.config.globalProperties, o) || (l = a.__cssModules) && l[o]);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : Et(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
process.env.NODE_ENV !== "production" && (Xl.ownKeys = (t) => (it(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(t)));
function bu(t) {
  const e = {};
  return Object.defineProperty(e, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => t
  }), Object.keys(rn).forEach((n) => {
    Object.defineProperty(e, n, {
      configurable: !0,
      enumerable: !1,
      get: () => rn[n](t),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Ut
    });
  }), e;
}
function Su(t) {
  const {
    ctx: e,
    propsOptions: [n]
  } = t;
  n && Object.keys(n).forEach((r) => {
    Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => t.props[r],
      set: Ut
    });
  });
}
function Cu(t) {
  const { ctx: e, setupState: n } = t;
  Object.keys(/* @__PURE__ */ yt(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (Ys(r[0])) {
        it(
          `setup() return property ${JSON.stringify(
            r
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(e, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r],
        set: Ut
      });
    }
  });
}
function wo(t) {
  return ut(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
function Eu() {
  const t = /* @__PURE__ */ Object.create(null);
  return (e, n) => {
    t[n] ? it(`${e} property "${n}" is already defined in ${t[n]}.`) : t[n] = e;
  };
}
let Cs = !0;
function wu(t) {
  const e = Ql(t), n = t.proxy, r = t.ctx;
  Cs = !1, e.beforeCreate && xo(e.beforeCreate, t, "bc");
  const {
    // state
    data: i,
    computed: s,
    methods: a,
    watch: o,
    provide: l,
    inject: u,
    // lifecycle
    created: c,
    beforeMount: d,
    mounted: g,
    beforeUpdate: f,
    updated: m,
    activated: v,
    deactivated: S,
    beforeDestroy: w,
    beforeUnmount: p,
    destroyed: h,
    unmounted: _,
    render: y,
    renderTracked: x,
    renderTriggered: P,
    errorCaptured: C,
    serverPrefetch: E,
    // public API
    expose: N,
    inheritAttrs: A,
    // assets
    components: F,
    directives: G,
    filters: B
  } = e, L = process.env.NODE_ENV !== "production" ? Eu() : null;
  if (process.env.NODE_ENV !== "production") {
    const [b] = t.propsOptions;
    if (b)
      for (const O in b)
        L("Props", O);
  }
  if (u && xu(u, r, L), a)
    for (const b in a) {
      const O = a[b];
      dt(O) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(r, b, {
        value: O.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[b] = O.bind(n), process.env.NODE_ENV !== "production" && L("Methods", b)) : process.env.NODE_ENV !== "production" && it(
        `Method "${b}" has type "${typeof O}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    process.env.NODE_ENV !== "production" && !dt(i) && it(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const b = i.call(n, n);
    if (process.env.NODE_ENV !== "production" && Fs(b) && it(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !wt(b))
      process.env.NODE_ENV !== "production" && it("data() should return an object.");
    else if (t.data = /* @__PURE__ */ En(b), process.env.NODE_ENV !== "production")
      for (const O in b)
        L("Data", O), Ys(O[0]) || Object.defineProperty(r, O, {
          configurable: !0,
          enumerable: !0,
          get: () => b[O],
          set: Ut
        });
  }
  if (Cs = !0, s)
    for (const b in s) {
      const O = s[b], D = dt(O) ? O.bind(n, n) : dt(O.get) ? O.get.bind(n, n) : Ut;
      process.env.NODE_ENV !== "production" && D === Ut && it(`Computed property "${b}" has no getter.`);
      const R = !dt(O) && dt(O.set) ? O.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        it(
          `Write operation failed: computed property "${b}" is readonly.`
        );
      } : Ut, V = Cr({
        get: D,
        set: R
      });
      Object.defineProperty(r, b, {
        enumerable: !0,
        configurable: !0,
        get: () => V.value,
        set: (W) => V.value = W
      }), process.env.NODE_ENV !== "production" && L("Computed", b);
    }
  if (o)
    for (const b in o)
      Jl(o[b], r, n, b);
  if (l) {
    const b = dt(l) ? l.call(n) : l;
    Reflect.ownKeys(b).forEach((O) => {
      Qh(O, b[O]);
    });
  }
  c && xo(c, t, "c");
  function X(b, O) {
    ut(O) ? O.forEach((D) => b(D.bind(n))) : O && b(O.bind(n));
  }
  if (X(hu, d), X(ln, g), X(Yl, f), X(zs, m), X(au, v), X(lu, S), X(pu, C), X(fu, x), X(du, P), X(ji, p), X(Ir, _), X(uu, E), ut(N))
    if (N.length) {
      const b = t.exposed || (t.exposed = {});
      N.forEach((O) => {
        Object.defineProperty(b, O, {
          get: () => n[O],
          set: (D) => n[O] = D,
          enumerable: !0
        });
      });
    } else t.exposed || (t.exposed = {});
  y && t.render === Ut && (t.render = y), A != null && (t.inheritAttrs = A), F && (t.components = F), G && (t.directives = G), E && Kl(t);
}
function xu(t, e, n = Ut) {
  ut(t) && (t = Es(t));
  for (const r in t) {
    const i = t[r];
    let s;
    wt(i) ? "default" in i ? s = rr(
      i.from || r,
      i.default,
      !0
    ) : s = rr(i.from || r) : s = rr(i), /* @__PURE__ */ Vt(s) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (a) => s.value = a
    }) : e[r] = s, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function xo(t, e, n) {
  ge(
    ut(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function Jl(t, e, n, r) {
  let i = r.includes(".") ? $l(n, r) : () => n[r];
  if (Rt(t)) {
    const s = e[t];
    dt(s) ? se(i, s) : process.env.NODE_ENV !== "production" && it(`Invalid watch handler specified by key "${t}"`, s);
  } else if (dt(t))
    se(i, t.bind(n));
  else if (wt(t))
    if (ut(t))
      t.forEach((s) => Jl(s, e, n, r));
    else {
      const s = dt(t.handler) ? t.handler.bind(n) : e[t.handler];
      dt(s) ? se(i, s, t) : process.env.NODE_ENV !== "production" && it(`Invalid watch handler specified by key "${t.handler}"`, s);
    }
  else process.env.NODE_ENV !== "production" && it(`Invalid watch option: "${r}"`, t);
}
function Ql(t) {
  const e = t.type, { mixins: n, extends: r } = e, {
    mixins: i,
    optionsCache: s,
    config: { optionMergeStrategies: a }
  } = t.appContext, o = s.get(e);
  let l;
  return o ? l = o : !i.length && !n && !r ? l = e : (l = {}, i.length && i.forEach(
    (u) => mr(l, u, a, !0)
  ), mr(l, e, a)), wt(e) && s.set(e, l), l;
}
function mr(t, e, n, r = !1) {
  const { mixins: i, extends: s } = e;
  s && mr(t, s, n, !0), i && i.forEach(
    (a) => mr(t, a, n, !0)
  );
  for (const a in e)
    if (r && a === "expose")
      process.env.NODE_ENV !== "production" && it(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const o = Nu[a] || n && n[a];
      t[a] = o ? o(t[a], e[a]) : e[a];
    }
  return t;
}
const Nu = {
  data: No,
  props: Oo,
  emits: Oo,
  // objects
  methods: Si,
  computed: Si,
  // lifecycle
  beforeCreate: zt,
  created: zt,
  beforeMount: zt,
  mounted: zt,
  beforeUpdate: zt,
  updated: zt,
  beforeDestroy: zt,
  beforeUnmount: zt,
  destroyed: zt,
  unmounted: zt,
  activated: zt,
  deactivated: zt,
  errorCaptured: zt,
  serverPrefetch: zt,
  // assets
  components: Si,
  directives: Si,
  // watch
  watch: Tu,
  // provide / inject
  provide: No,
  inject: Ou
};
function No(t, e) {
  return e ? t ? function() {
    return Lt(
      dt(t) ? t.call(this, this) : t,
      dt(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function Ou(t, e) {
  return Si(Es(t), Es(e));
}
function Es(t) {
  if (ut(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function zt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function Si(t, e) {
  return t ? Lt(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Oo(t, e) {
  return t ? ut(t) && ut(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : Lt(
    /* @__PURE__ */ Object.create(null),
    wo(t),
    wo(e ?? {})
  ) : e;
}
function Tu(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = Lt(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    n[r] = zt(t[r], e[r]);
  return n;
}
function Zl() {
  return {
    app: null,
    config: {
      isNativeTag: ll,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Pu = 0;
function Au(t, e) {
  return function(r, i = null) {
    dt(r) || (r = Lt({}, r)), i != null && !wt(i) && (process.env.NODE_ENV !== "production" && it("root props passed to app.mount() must be an object."), i = null);
    const s = Zl(), a = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const u = s.app = {
      _uid: Pu++,
      _component: r,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: Go,
      get config() {
        return s.config;
      },
      set config(c) {
        process.env.NODE_ENV !== "production" && it(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(c, ...d) {
        return a.has(c) ? process.env.NODE_ENV !== "production" && it("Plugin has already been applied to target app.") : c && dt(c.install) ? (a.add(c), c.install(u, ...d)) : dt(c) ? (a.add(c), c(u, ...d)) : process.env.NODE_ENV !== "production" && it(
          'A plugin must either be a function or an object with an "install" function.'
        ), u;
      },
      mixin(c) {
        return s.mixins.includes(c) ? process.env.NODE_ENV !== "production" && it(
          "Mixin has already been applied to target app" + (c.name ? `: ${c.name}` : "")
        ) : s.mixins.push(c), u;
      },
      component(c, d) {
        return process.env.NODE_ENV !== "production" && Os(c, s.config), d ? (process.env.NODE_ENV !== "production" && s.components[c] && it(`Component "${c}" has already been registered in target app.`), s.components[c] = d, u) : s.components[c];
      },
      directive(c, d) {
        return process.env.NODE_ENV !== "production" && Hl(c), d ? (process.env.NODE_ENV !== "production" && s.directives[c] && it(`Directive "${c}" has already been registered in target app.`), s.directives[c] = d, u) : s.directives[c];
      },
      mount(c, d, g) {
        if (l)
          process.env.NODE_ENV !== "production" && it(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && c.__vue_app__ && it(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const f = u._ceVNode || pt(r, i);
          return f.appContext = s, g === !0 ? g = "svg" : g === !1 && (g = void 0), process.env.NODE_ENV !== "production" && (s.reload = () => {
            const m = qe(f);
            m.el = null, t(m, c, g);
          }), t(f, c, g), l = !0, u._container = c, c.__vue_app__ = u, process.env.NODE_ENV !== "production" && (u._instance = f.component, jh(u, Go)), Br(f.component);
        }
      },
      onUnmount(c) {
        process.env.NODE_ENV !== "production" && typeof c != "function" && it(
          `Expected function as first argument to app.onUnmount(), but got ${typeof c}`
        ), o.push(c);
      },
      unmount() {
        l ? (ge(
          o,
          u._instance,
          16
        ), t(null, u._container), process.env.NODE_ENV !== "production" && (u._instance = null, $h(u)), delete u._container.__vue_app__) : process.env.NODE_ENV !== "production" && it("Cannot unmount an app that is not mounted.");
      },
      provide(c, d) {
        return process.env.NODE_ENV !== "production" && c in s.provides && (Et(s.provides, c) ? it(
          `App already provides property with key "${String(c)}". It will be overwritten with the new value.`
        ) : it(
          `App already provides property with key "${String(c)}" inherited from its parent element. It will be overwritten with the new value.`
        )), s.provides[c] = d, u;
      },
      runWithContext(c) {
        const d = bn;
        bn = u;
        try {
          return c();
        } finally {
          bn = d;
        }
      }
    };
    return u;
  };
}
let bn = null;
const Ru = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${jt(e)}Modifiers`] || t[`${$e(e)}Modifiers`];
function Du(t, e, ...n) {
  if (t.isUnmounted) return;
  const r = t.vnode.props || Pt;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: c,
      propsOptions: [d]
    } = t;
    if (c)
      if (!(e in c))
        (!d || !(Xe(jt(e)) in d)) && it(
          `Component emitted event "${e}" but it is neither declared in the emits option nor as an "${Xe(jt(e))}" prop.`
        );
      else {
        const g = c[e];
        dt(g) && (g(...n) || it(
          `Invalid event arguments: event validation failed for event "${e}".`
        ));
      }
  }
  let i = n;
  const s = e.startsWith("update:"), a = s && Ru(r, e.slice(7));
  if (a && (a.trim && (i = n.map((c) => Rt(c) ? c.trim() : c)), a.number && (i = i.map(Hc))), process.env.NODE_ENV !== "production" && Xh(t, e, i), process.env.NODE_ENV !== "production") {
    const c = e.toLowerCase();
    c !== e && r[Xe(c)] && it(
      `Event "${c}" is emitted in component ${Ki(
        t,
        t.type
      )} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${$e(
        e
      )}" instead of "${e}".`
    );
  }
  let o, l = r[o = Xe(e)] || // also try camelCase event handler (#2249)
  r[o = Xe(jt(e))];
  !l && s && (l = r[o = Xe($e(e))]), l && ge(
    l,
    t,
    6,
    i
  );
  const u = r[o + "Once"];
  if (u) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[o])
      return;
    t.emitted[o] = !0, ge(
      u,
      t,
      6,
      i
    );
  }
}
const Mu = /* @__PURE__ */ new WeakMap();
function tc(t, e, n = !1) {
  const r = n ? Mu : e.emitsCache, i = r.get(t);
  if (i !== void 0)
    return i;
  const s = t.emits;
  let a = {}, o = !1;
  if (!dt(t)) {
    const l = (u) => {
      const c = tc(u, e, !0);
      c && (o = !0, Lt(a, c));
    };
    !n && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l);
  }
  return !s && !o ? (wt(t) && r.set(t, null), null) : (ut(s) ? s.forEach((l) => a[l] = null) : Lt(a, s), wt(t) && r.set(t, a), a);
}
function Gr(t, e) {
  return !t || !Li(e) ? !1 : (e = e.slice(2), e = e === "Once" ? e : e.replace(/Once$/, ""), Et(t, e[0].toLowerCase() + e.slice(1)) || Et(t, $e(e)) || Et(t, e));
}
let ws = !1;
function _r() {
  ws = !0;
}
function To(t) {
  const {
    type: e,
    vnode: n,
    proxy: r,
    withProxy: i,
    propsOptions: [s],
    slots: a,
    attrs: o,
    emit: l,
    render: u,
    renderCache: c,
    props: d,
    data: g,
    setupState: f,
    ctx: m,
    inheritAttrs: v
  } = t, S = pr(t);
  let w, p;
  process.env.NODE_ENV !== "production" && (ws = !1);
  try {
    if (n.shapeFlag & 4) {
      const y = i || r, x = process.env.NODE_ENV !== "production" && f.__isScriptSetup ? new Proxy(y, {
        get(P, C, E) {
          return it(
            `Property '${String(
              C
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(P, C, E);
        }
      }) : y;
      w = ce(
        u.call(
          x,
          y,
          c,
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ we(d) : d,
          f,
          g,
          m
        )
      ), p = o;
    } else {
      const y = e;
      process.env.NODE_ENV !== "production" && o === d && _r(), w = ce(
        y.length > 1 ? y(
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ we(d) : d,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return _r(), /* @__PURE__ */ we(o);
            },
            slots: a,
            emit: l
          } : { attrs: o, slots: a, emit: l }
        ) : y(
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ we(d) : d,
          null
        )
      ), p = e.props ? o : ku(o);
    }
  } catch (y) {
    sn.length = 0, Bi(y, t, 1), w = pt(ne);
  }
  let h = w, _;
  if (process.env.NODE_ENV !== "production" && w.patchFlag > 0 && w.patchFlag & 2048 && ([h, _] = ec(w)), p && v !== !1) {
    const y = Object.keys(p), { shapeFlag: x } = h;
    if (y.length) {
      if (x & 7)
        s && y.some(Pi) && (p = Fu(
          p,
          s
        )), h = qe(h, p, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !ws && h.type !== ne) {
        const P = Object.keys(o), C = [], E = [];
        for (let N = 0, A = P.length; N < A; N++) {
          const F = P[N];
          Li(F) ? Pi(F) || C.push(F[2].toLowerCase() + F.slice(3)) : E.push(F);
        }
        E.length && it(
          `Extraneous non-props attributes (${E.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), C.length && it(
          `Extraneous non-emits event listeners (${C.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  if (n.dirs && (process.env.NODE_ENV !== "production" && !Po(h) && it(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), h = qe(h, null, !1, !0), h.dirs = h.dirs ? h.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const y = Fr(h.type) && ql(h) || h;
    process.env.NODE_ENV !== "production" && !Po(y) && it(
      "Component inside <Transition> renders non-element root node that cannot be animated."
    ), Ks(y, n.transition);
  }
  return process.env.NODE_ENV !== "production" && _ ? _(h) : w = h, pr(S), w;
}
const ec = (t) => {
  const e = t.children, n = t.dynamicChildren, r = Ur(e, !1);
  if (r) {
    if (process.env.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048)
      return ec(r);
  } else return [t, void 0];
  const i = e.indexOf(r), s = n ? n.indexOf(r) : -1, a = (o) => {
    e[i] = o, n && (s > -1 ? n[s] = o : o.patchFlag > 0 && (t.dynamicChildren = [...n, o]));
  };
  return [ce(r), a];
};
function Ur(t, e = !0) {
  let n;
  for (let r = 0; r < t.length; r++) {
    const i = t[r];
    if (Cn(i)) {
      if (i.type !== ne || i.children === "v-if") {
        if (n)
          return;
        if (n = i, process.env.NODE_ENV !== "production" && e && n.patchFlag > 0 && n.patchFlag & 2048)
          return Ur(n.children);
      }
    } else
      return;
  }
  return n;
}
const ku = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || Li(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, Fu = (t, e) => {
  const n = {};
  for (const r in t)
    (!Pi(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
  return n;
}, Po = (t) => t.shapeFlag & 7 || t.type === ne;
function Vu(t, e, n) {
  const { props: r, children: i, component: s } = t, { props: a, children: o, patchFlag: l } = e, u = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (i || o) && ee || e.dirs || e.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? Ao(r, a, u) : !!a;
    if (l & 8) {
      const c = e.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const g = c[d];
        if (nc(a, r, g) && !Gr(u, g))
          return !0;
      }
    }
  } else
    return (i || o) && (!o || !o.$stable) ? !0 : r === a ? !1 : r ? a ? Ao(r, a, u) : !0 : !!a;
  return !1;
}
function Ao(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (nc(e, t, s) && !Gr(n, s))
      return !0;
  }
  return !1;
}
function nc(t, e, n) {
  const r = t[n], i = e[n];
  return n === "style" && wt(r) && wt(i) ? !Ar(r, i) : r !== i;
}
function Lu({ vnode: t, parent: e, suspense: n }, r) {
  for (; e; ) {
    const i = e.subTree;
    if (i.suspense && i.suspense.activeBranch === t && (i.suspense.vnode.el = i.el = r, t = i), i === t)
      (t = e.vnode).el = r, e = e.parent;
    else
      break;
  }
  n && n.activeBranch === t && (n.vnode.el = r);
}
const ic = {}, rc = () => Object.create(ic), sc = (t) => Object.getPrototypeOf(t) === ic;
function Iu(t, e, n, r = !1) {
  const i = {}, s = rc();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), oc(t, e, i, s);
  for (const a in t.propsOptions[0])
    a in i || (i[a] = void 0);
  process.env.NODE_ENV !== "production" && lc(e || {}, i, t), n ? t.props = r ? i : /* @__PURE__ */ Eh(i) : t.type.props ? t.props = i : t.props = s, t.attrs = s;
}
function Gu(t) {
  for (; t; ) {
    if (t.type.__hmrId) return !0;
    t = t.parent;
  }
}
function Uu(t, e, n, r) {
  const {
    props: i,
    attrs: s,
    vnode: { patchFlag: a }
  } = t, o = /* @__PURE__ */ yt(i), [l] = t.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && Gu(t)) && (r || a > 0) && !(a & 16)
  ) {
    if (a & 8) {
      const c = t.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let g = c[d];
        if (Gr(t.emitsOptions, g))
          continue;
        const f = e[g];
        if (l)
          if (Et(s, g))
            f !== s[g] && (s[g] = f, u = !0);
          else {
            const m = jt(g);
            i[m] = xs(
              l,
              o,
              m,
              f,
              t,
              !1
            );
          }
        else
          f !== s[g] && (s[g] = f, u = !0);
      }
    }
  } else {
    oc(t, e, i, s) && (u = !0);
    let c;
    for (const d in o)
      (!e || // for camelCase
      !Et(e, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = $e(d)) === d || !Et(e, c))) && (l ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[c] !== void 0) && (i[d] = xs(
        l,
        o,
        d,
        void 0,
        t,
        !0
      )) : delete i[d]);
    if (s !== o)
      for (const d in s)
        (!e || !Et(e, d)) && (delete s[d], u = !0);
  }
  u && Ee(t.attrs, "set", ""), process.env.NODE_ENV !== "production" && lc(e || {}, i, t);
}
function oc(t, e, n, r) {
  const [i, s] = t.propsOptions;
  let a = !1, o;
  if (e)
    for (let l in e) {
      if (Ei(l))
        continue;
      const u = e[l];
      let c;
      i && Et(i, c = jt(l)) ? !s || !s.includes(c) ? n[c] = u : (o || (o = {}))[c] = u : Gr(t.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, a = !0);
    }
  if (s) {
    const l = /* @__PURE__ */ yt(n), u = o || Pt;
    for (let c = 0; c < s.length; c++) {
      const d = s[c];
      n[d] = xs(
        i,
        l,
        d,
        u[d],
        t,
        !Et(u, d)
      );
    }
  }
  return a;
}
function xs(t, e, n, r, i, s) {
  const a = t[n];
  if (a != null) {
    const o = Et(a, "default");
    if (o && r === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && dt(l)) {
        const { propsDefaults: u } = i;
        if (n in u)
          r = u[n];
        else {
          const c = qi(i);
          r = u[n] = l.call(
            null,
            e
          ), c();
        }
      } else
        r = l;
      i.ce && i.ce._setProp(n, r);
    }
    a[
      0
      /* shouldCast */
    ] && (s && !o ? r = !1 : a[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === $e(n)) && (r = !0));
  }
  return r;
}
const Bu = /* @__PURE__ */ new WeakMap();
function ac(t, e, n = !1) {
  const r = n ? Bu : e.propsCache, i = r.get(t);
  if (i)
    return i;
  const s = t.props, a = {}, o = [];
  let l = !1;
  if (!dt(t)) {
    const c = (d) => {
      l = !0;
      const [g, f] = ac(d, e, !0);
      Lt(a, g), f && o.push(...f);
    };
    !n && e.mixins.length && e.mixins.forEach(c), t.extends && c(t.extends), t.mixins && t.mixins.forEach(c);
  }
  if (!s && !l)
    return wt(t) && r.set(t, tn), tn;
  if (ut(s))
    for (let c = 0; c < s.length; c++) {
      process.env.NODE_ENV !== "production" && !Rt(s[c]) && it("props must be strings when using array syntax.", s[c]);
      const d = jt(s[c]);
      Ro(d) && (a[d] = Pt);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !wt(s) && it("invalid props options", s);
    for (const c in s) {
      const d = jt(c);
      if (Ro(d)) {
        const g = s[c], f = a[d] = ut(g) || dt(g) ? { type: g } : Lt({}, g), m = f.type;
        let v = !1, S = !0;
        if (ut(m))
          for (let w = 0; w < m.length; ++w) {
            const p = m[w], h = dt(p) && p.name;
            if (h === "Boolean") {
              v = !0;
              break;
            } else h === "String" && (S = !1);
          }
        else
          v = dt(m) && m.name === "Boolean";
        f[
          0
          /* shouldCast */
        ] = v, f[
          1
          /* shouldCastTrue */
        ] = S, (v || Et(f, "default")) && o.push(d);
      }
    }
  }
  const u = [a, o];
  return wt(t) && r.set(t, u), u;
}
function Ro(t) {
  return t[0] !== "$" && !Ei(t) ? !0 : (process.env.NODE_ENV !== "production" && it(`Invalid prop name: "${t}" is a reserved property.`), !1);
}
function Hu(t) {
  return t === null ? "null" : typeof t == "function" ? t.name || "" : typeof t == "object" && t.constructor && t.constructor.name || "";
}
function lc(t, e, n) {
  const r = /* @__PURE__ */ yt(e), i = n.propsOptions[0], s = Object.keys(t).map((a) => jt(a));
  for (const a in i) {
    let o = i[a];
    o != null && ju(
      a,
      r[a],
      o,
      process.env.NODE_ENV !== "production" ? /* @__PURE__ */ we(r) : r,
      !s.includes(a)
    );
  }
}
function ju(t, e, n, r, i) {
  const { type: s, required: a, validator: o, skipCheck: l } = n;
  if (a && i) {
    it('Missing required prop: "' + t + '"');
    return;
  }
  if (!(e == null && !a)) {
    if (s != null && s !== !0 && !l) {
      let u = !1;
      const c = ut(s) ? s : [s], d = [];
      for (let g = 0; g < c.length && !u; g++) {
        const { valid: f, expectedType: m } = Wu(e, c[g]);
        d.push(m || ""), u = f;
      }
      if (!u) {
        it(qu(t, e, d));
        return;
      }
    }
    o && !o(e, r) && it('Invalid prop: custom validator check failed for prop "' + t + '".');
  }
}
const $u = /* @__PURE__ */ Ve(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Wu(t, e) {
  let n;
  const r = Hu(e);
  if (r === "null")
    n = t === null;
  else if ($u(r)) {
    const i = typeof t;
    n = i === r.toLowerCase(), !n && i === "object" && (n = t instanceof e);
  } else r === "Object" ? n = wt(t) : r === "Array" ? n = ut(t) : n = t instanceof e;
  return {
    valid: n,
    expectedType: r
  };
}
function qu(t, e, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${t}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${t}". Expected ${n.map(on).join(" | ")}`;
  const i = n[0], s = Vs(e), a = Do(e, i), o = Do(e, s);
  return n.length === 1 && Mo(i) && Ku(i, s) && (r += ` with value ${a}`), r += `, got ${s} `, Mo(s) && (r += `with value ${o}.`), r;
}
function Do(t, e) {
  return de(t) ? t.toString() : e === "String" ? `"${t}"` : e === "Number" ? `${Number(t)}` : `${t}`;
}
function Mo(t) {
  return ["string", "number", "boolean"].some((n) => t.toLowerCase() === n);
}
function Ku(...t) {
  return t.every((e) => {
    const n = e.toLowerCase();
    return n !== "boolean" && n !== "symbol";
  });
}
const Xs = (t) => t === "_" || t === "_ctx" || t === "$stable", Js = (t) => ut(t) ? t.map(ce) : [ce(t)], zu = (t, e, n) => {
  if (e._n)
    return e;
  const r = vi((...i) => (process.env.NODE_ENV !== "production" && Gt && !(n === null && Kt) && !(n && n.root !== Gt.root) && it(
    `Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Js(e(...i))), n);
  return r._c = !1, r;
}, cc = (t, e, n) => {
  const r = t._ctx;
  for (const i in t) {
    if (Xs(i)) continue;
    const s = t[i];
    if (dt(s))
      e[i] = zu(i, s, r);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && it(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const a = Js(s);
      e[i] = () => a;
    }
  }
}, hc = (t, e) => {
  process.env.NODE_ENV !== "production" && !Vr(t.vnode) && it(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Js(e);
  t.slots.default = () => n;
}, Ns = (t, e, n) => {
  for (const r in e)
    (n || !Xs(r)) && (t[r] = e[r]);
}, Yu = (t, e, n) => {
  const r = t.slots = rc();
  if (t.vnode.shapeFlag & 32) {
    const i = e._;
    i ? (Ns(r, e, n), n && lr(r, "_", i, !0)) : cc(e, r);
  } else e && hc(t, e);
}, Xu = (t, e, n) => {
  const { vnode: r, slots: i } = t;
  let s = !0, a = Pt;
  if (r.shapeFlag & 32) {
    const o = e._;
    o ? process.env.NODE_ENV !== "production" && ee ? (Ns(i, e, n), Ee(t, "set", "$slots")) : n && o === 1 ? s = !1 : Ns(i, e, n) : (s = !e.$stable, cc(e, i)), a = e;
  } else e && (hc(t, e), a = { default: 1 });
  if (s)
    for (const o in i)
      !Xs(o) && a[o] == null && delete i[o];
};
let On, Ae;
function dn(t, e) {
  t.appContext.config.performance && yr() && Ae.mark(`vue-${e}-${t.uid}`), process.env.NODE_ENV !== "production" && zh(t, e, yr() ? Ae.now() : Date.now());
}
function fn(t, e) {
  if (t.appContext.config.performance && yr()) {
    const n = `vue-${e}-${t.uid}`, r = n + ":end", i = `<${Ki(t, t.type)}> ${e}`;
    Ae.mark(r), Ae.measure(i, n, r), Ae.clearMeasures(i), Ae.clearMarks(n), Ae.clearMarks(r);
  }
  process.env.NODE_ENV !== "production" && Yh(t, e, yr() ? Ae.now() : Date.now());
}
function yr() {
  return On !== void 0 || (typeof window < "u" && window.performance ? (On = !0, Ae = window.performance) : On = !1), On;
}
function Ju() {
  const t = [];
  if (process.env.NODE_ENV !== "production" && t.length) {
    const e = t.length > 1;
    console.warn(
      `Feature flag${e ? "s" : ""} ${t.join(", ")} ${e ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Yt = nd;
function Qu(t) {
  return Zu(t);
}
function Zu(t, e) {
  Ju();
  const n = Gi();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Ws(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: r,
    remove: i,
    patchProp: s,
    createElement: a,
    createText: o,
    createComment: l,
    setText: u,
    setElementText: c,
    parentNode: d,
    nextSibling: g,
    setScopeId: f = Ut,
    insertStaticContent: m
  } = t, v = (T, k, H, Y = null, K = null, U = null, tt = void 0, Q = null, et = process.env.NODE_ENV !== "production" && ee ? !1 : !!k.dynamicChildren) => {
    if (T === k)
      return;
    T && !Tn(T, k) && (Y = $(T), I(T, K, U, !0), T = null), k.patchFlag === -2 && (et = !1, k.dynamicChildren = null), k.dynamicChildren && T && T.dynamicChildren && T.dynamicChildren.hasOnce && (k.dynamicChildren === tn && (k.dynamicChildren = []), k.dynamicChildren.hasOnce = !0);
    const { type: z, ref: lt, shapeFlag: st } = k;
    switch (z) {
      case $i:
        S(T, k, H, Y);
        break;
      case ne:
        w(T, k, H, Y);
        break;
      case Sn:
        T == null ? p(k, H, Y, tt) : process.env.NODE_ENV !== "production" && h(T, k, H, tt);
        break;
      case At:
        G(
          T,
          k,
          H,
          Y,
          K,
          U,
          tt,
          Q,
          et
        );
        break;
      default:
        st & 1 ? x(
          T,
          k,
          H,
          Y,
          K,
          U,
          tt,
          Q,
          et
        ) : st & 6 ? B(
          T,
          k,
          H,
          Y,
          K,
          U,
          tt,
          Q,
          et
        ) : st & 64 || st & 128 ? z.process(
          T,
          k,
          H,
          Y,
          K,
          U,
          tt,
          Q,
          et,
          at
        ) : process.env.NODE_ENV !== "production" && it("Invalid VNode type:", z, `(${typeof z})`);
    }
    lt != null && K ? Ni(lt, T && T.ref, U, k || T, !k) : lt == null && T && T.ref != null && Ni(T.ref, null, U, T, !0);
  }, S = (T, k, H, Y) => {
    if (T == null)
      r(
        k.el = o(k.children),
        H,
        Y
      );
    else {
      const K = k.el = T.el;
      k.children !== T.children && u(K, k.children);
    }
  }, w = (T, k, H, Y) => {
    T == null ? r(
      k.el = l(k.children || ""),
      H,
      Y
    ) : k.el = T.el;
  }, p = (T, k, H, Y) => {
    [T.el, T.anchor] = m(
      T.children,
      k,
      H,
      Y,
      T.el,
      T.anchor
    );
  }, h = (T, k, H, Y) => {
    if (k.children !== T.children) {
      const K = g(T.anchor);
      y(T), [k.el, k.anchor] = m(
        k.children,
        H,
        K,
        Y
      );
    } else
      k.el = T.el, k.anchor = T.anchor;
  }, _ = ({ el: T, anchor: k }, H, Y) => {
    let K;
    for (; T && T !== k; )
      K = g(T), r(T, H, Y), T = K;
    r(k, H, Y);
  }, y = ({ el: T, anchor: k }) => {
    let H;
    for (; T && T !== k; )
      H = g(T), i(T), T = H;
    i(k);
  }, x = (T, k, H, Y, K, U, tt, Q, et) => {
    if (k.type === "svg" ? tt = "svg" : k.type === "math" && (tt = "mathml"), T == null)
      P(
        k,
        H,
        Y,
        K,
        U,
        tt,
        Q,
        et
      );
    else {
      const z = T.el && T.el._isVueCE ? T.el : null;
      try {
        z && z._beginPatch(), N(
          T,
          k,
          K,
          U,
          tt,
          Q,
          et
        );
      } finally {
        z && z._endPatch();
      }
    }
  }, P = (T, k, H, Y, K, U, tt, Q) => {
    let et, z;
    const { props: lt, shapeFlag: st, transition: ct, dirs: ht } = T;
    if (et = T.el = a(
      T.type,
      U,
      lt && lt.is,
      lt
    ), st & 8 ? c(et, T.children) : st & 16 && E(
      T.children,
      et,
      null,
      Y,
      K,
      Qr(T, U),
      tt,
      Q
    ), ht && Ke(T, null, Y, "created"), C(et, T, T.scopeId, tt, Y), lt) {
      for (const mt in lt)
        mt !== "value" && !Ei(mt) && s(et, mt, null, lt[mt], U, Y);
      "value" in lt && s(et, "value", null, lt.value, U), (z = lt.onVnodeBeforeMount) && ye(z, Y, T);
    }
    process.env.NODE_ENV !== "production" && (lr(et, "__vnode", T, !0), lr(et, "__vueParentComponent", Y, !0)), ht && Ke(T, null, Y, "beforeMount");
    const gt = td(K, ct);
    if (gt && ct.beforeEnter(et), r(et, k, H), (z = lt && lt.onVnodeMounted) || gt || ht) {
      const mt = process.env.NODE_ENV !== "production" && ee;
      Yt(() => {
        let _t;
        process.env.NODE_ENV !== "production" && (_t = go(mt));
        try {
          z && ye(z, Y, T), gt && ct.enter(et), ht && Ke(T, null, Y, "mounted");
        } finally {
          process.env.NODE_ENV !== "production" && go(_t);
        }
      }, K);
    }
  }, C = (T, k, H, Y, K) => {
    if (H && f(T, H), Y)
      for (let U = 0; U < Y.length; U++)
        f(T, Y[U]);
    if (K) {
      let U = K.subTree;
      if (process.env.NODE_ENV !== "production" && U.patchFlag > 0 && U.patchFlag & 2048 && (U = Ur(U.children) || U), k === U || fc(U.type) && (U.ssContent === k || U.ssFallback === k)) {
        const tt = K.vnode;
        C(
          T,
          tt,
          tt.scopeId,
          tt.slotScopeIds,
          K.parent
        );
      }
    }
  }, E = (T, k, H, Y, K, U, tt, Q, et = 0) => {
    for (let z = et; z < T.length; z++) {
      const lt = T[z] = Q ? Re(T[z]) : ce(T[z]);
      v(
        null,
        lt,
        k,
        H,
        Y,
        K,
        U,
        tt,
        Q
      );
    }
  }, N = (T, k, H, Y, K, U, tt) => {
    const Q = k.el = T.el;
    process.env.NODE_ENV !== "production" && (Q.__vnode = k);
    let { patchFlag: et, dynamicChildren: z, dirs: lt } = k;
    et |= T.patchFlag & 16;
    const st = T.props || Pt, ct = k.props || Pt;
    let ht;
    if (H && ze(H, !1), (ht = ct.onVnodeBeforeUpdate) && ye(ht, H, k, T), lt && Ke(k, T, H, "beforeUpdate"), H && ze(H, !0), // HMR updated, force full diff
    (process.env.NODE_ENV !== "production" && ee || // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    z && (!T.dynamicChildren || T.dynamicChildren.length !== z.length)) && (et = 0, tt = !1, z = null), (st.innerHTML && ct.innerHTML == null || st.textContent && ct.textContent == null) && c(Q, ""), z ? (A(
      T.dynamicChildren,
      z,
      Q,
      H,
      Y,
      Qr(k, K),
      U
    ), process.env.NODE_ENV !== "production" && Ti(T, k)) : tt || D(
      T,
      k,
      Q,
      null,
      H,
      Y,
      Qr(k, K),
      U,
      !1
    ), et > 0) {
      if (et & 16)
        F(Q, st, ct, H, K);
      else if (et & 2 && st.class !== ct.class && s(Q, "class", null, ct.class, K), et & 4 && s(Q, "style", st.style, ct.style, K), et & 8) {
        const gt = k.dynamicProps;
        for (let mt = 0; mt < gt.length; mt++) {
          const _t = gt[mt], Ct = st[_t], xt = ct[_t];
          (xt !== Ct || _t === "value") && s(Q, _t, Ct, xt, K, H);
        }
      }
      et & 1 && T.children !== k.children && c(Q, k.children);
    } else !tt && z == null && F(Q, st, ct, H, K);
    ((ht = ct.onVnodeUpdated) || lt) && Yt(() => {
      ht && ye(ht, H, k, T), lt && Ke(k, T, H, "updated");
    }, Y);
  }, A = (T, k, H, Y, K, U, tt) => {
    for (let Q = 0; Q < k.length; Q++) {
      const et = T[Q], z = k[Q], lt = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        et.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (et.type === At || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Tn(et, z) || // - In the case of a component, it could contain anything.
        et.shapeFlag & 198) ? d(et.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          H
        )
      );
      v(
        et,
        z,
        lt,
        null,
        Y,
        K,
        U,
        tt,
        !0
      );
    }
  }, F = (T, k, H, Y, K) => {
    if (k !== H) {
      if (k !== Pt)
        for (const U in k)
          !Ei(U) && !(U in H) && s(
            T,
            U,
            k[U],
            null,
            K,
            Y
          );
      for (const U in H) {
        if (Ei(U)) continue;
        const tt = H[U], Q = k[U];
        tt !== Q && U !== "value" && s(T, U, Q, tt, K, Y);
      }
      "value" in H && s(T, "value", k.value, H.value, K);
    }
  }, G = (T, k, H, Y, K, U, tt, Q, et) => {
    const z = k.el = T ? T.el : o(""), lt = k.anchor = T ? T.anchor : o("");
    let { patchFlag: st, dynamicChildren: ct, slotScopeIds: ht } = k;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (ee || st & 2048) && (st = 0, et = !1, ct = null), ht && (Q = Q ? Q.concat(ht) : ht), T == null ? (r(z, H, Y), r(lt, H, Y), E(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      k.children || [],
      H,
      lt,
      K,
      U,
      tt,
      Q,
      et
    )) : st > 0 && st & 64 && ct && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    T.dynamicChildren && T.dynamicChildren.length === ct.length ? (A(
      T.dynamicChildren,
      ct,
      H,
      K,
      U,
      tt,
      Q
    ), process.env.NODE_ENV !== "production" ? Ti(T, k) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (k.key != null || K && k === K.subTree) && Ti(
        T,
        k,
        !0
        /* shallow */
      )
    )) : D(
      T,
      k,
      H,
      lt,
      K,
      U,
      tt,
      Q,
      et
    );
  }, B = (T, k, H, Y, K, U, tt, Q, et) => {
    k.slotScopeIds = Q, T == null ? k.shapeFlag & 512 ? K.ctx.activate(
      k,
      H,
      Y,
      tt,
      et
    ) : L(
      k,
      H,
      Y,
      K,
      U,
      tt,
      et
    ) : X(T, k, et);
  }, L = (T, k, H, Y, K, U, tt) => {
    const Q = T.component = ld(
      T,
      Y,
      K
    );
    if (process.env.NODE_ENV !== "production" && Q.type.__hmrId && Gh(Q), process.env.NODE_ENV !== "production" && (er(T), dn(Q, "mount")), Vr(T) && (Q.ctx.renderer = at), process.env.NODE_ENV !== "production" && dn(Q, "init"), hd(Q, !1, tt), process.env.NODE_ENV !== "production" && fn(Q, "init"), process.env.NODE_ENV !== "production" && ee && (T.el = null), Q.asyncDep) {
      if (K && K.registerDep(Q, b, tt), !T.el) {
        const et = Q.subTree = pt(ne);
        w(null, et, k, H), T.placeholder = et.el;
      }
    } else
      b(
        Q,
        T,
        k,
        H,
        K,
        U,
        tt
      );
    process.env.NODE_ENV !== "production" && (nr(), fn(Q, "mount"));
  }, X = (T, k, H) => {
    const Y = k.component = T.component;
    if (Vu(T, k, H))
      if (Y.asyncDep && !Y.asyncResolved) {
        process.env.NODE_ENV !== "production" && er(k), k.el = T.el, O(Y, k, H), process.env.NODE_ENV !== "production" && nr();
        return;
      } else
        Y.next = k, Y.update();
    else
      k.el = T.el, Y.vnode = k;
  }, b = (T, k, H, Y, K, U, tt) => {
    const Q = () => {
      if (T.isMounted) {
        let { next: st, bu: ct, u: ht, parent: gt, vnode: mt } = T;
        {
          const ie = uc(T);
          if (ie) {
            st && (st.el = mt.el, O(T, st, tt)), ie.asyncDep.then(() => {
              Yt(() => {
                T.isUnmounted || z();
              }, K);
            });
            return;
          }
        }
        let _t = st, Ct;
        process.env.NODE_ENV !== "production" && er(st || T.vnode), ze(T, !1), st ? (st.el = mt.el, O(T, st, tt)) : st = mt, ct && xn(ct), (Ct = st.props && st.props.onVnodeBeforeUpdate) && ye(Ct, gt, st, mt), ze(T, !0), process.env.NODE_ENV !== "production" && dn(T, "render");
        const xt = To(T);
        process.env.NODE_ENV !== "production" && fn(T, "render");
        const qt = T.subTree;
        T.subTree = xt, process.env.NODE_ENV !== "production" && dn(T, "patch"), v(
          qt,
          xt,
          // parent may have changed if it's in a teleport
          d(qt.el),
          // anchor may have changed if it's in a fragment
          $(qt),
          T,
          K,
          U
        ), process.env.NODE_ENV !== "production" && fn(T, "patch"), st.el = xt.el, _t === null && Lu(T, xt.el), ht && Yt(ht, K), (Ct = st.props && st.props.onVnodeUpdated) && Yt(
          () => ye(Ct, gt, st, mt),
          K
        ), process.env.NODE_ENV !== "production" && Gl(T), process.env.NODE_ENV !== "production" && nr();
      } else {
        let st;
        const { el: ct, props: ht } = k, { bm: gt, m: mt, parent: _t, root: Ct, type: xt } = T, qt = Oi(k);
        ze(T, !1), gt && xn(gt), !qt && (st = ht && ht.onVnodeBeforeMount) && ye(st, _t, k), ze(T, !0);
        {
          Ct.ce && Ct.ce._hasShadowRoot() && Ct.ce._injectChildStyle(
            xt,
            T.parent ? T.parent.type : void 0
          ), process.env.NODE_ENV !== "production" && dn(T, "render");
          const ie = T.subTree = To(T);
          process.env.NODE_ENV !== "production" && fn(T, "render"), process.env.NODE_ENV !== "production" && dn(T, "patch"), v(
            null,
            ie,
            H,
            Y,
            T,
            K,
            U
          ), process.env.NODE_ENV !== "production" && fn(T, "patch"), k.el = ie.el;
        }
        if (mt && Yt(mt, K), !qt && (st = ht && ht.onVnodeMounted)) {
          const ie = k;
          Yt(
            () => ye(st, _t, ie),
            K
          );
        }
        (k.shapeFlag & 256 || _t && Oi(_t.vnode) && _t.vnode.shapeFlag & 256) && T.a && Yt(T.a, K), T.isMounted = !0, process.env.NODE_ENV !== "production" && Wh(T), k = H = Y = null;
      }
    };
    T.scope.on();
    const et = T.effect = new gl(Q);
    T.scope.off();
    const z = T.update = et.run.bind(et), lt = T.job = et.runIfDirty.bind(et);
    lt.i = T, lt.id = T.uid, et.scheduler = () => kr(lt), ze(T, !0), process.env.NODE_ENV !== "production" && (et.onTrack = T.rtc ? (st) => xn(T.rtc, st) : void 0, et.onTrigger = T.rtg ? (st) => xn(T.rtg, st) : void 0), z();
  }, O = (T, k, H) => {
    k.component = T;
    const Y = T.vnode.props;
    T.vnode = k, T.next = null, Uu(T, k.props, Y, H), Xu(T, k.children, H), fe(), po(T), pe();
  }, D = (T, k, H, Y, K, U, tt, Q, et = !1) => {
    const z = T && T.children, lt = T ? T.shapeFlag : 0, st = k.children, { patchFlag: ct, shapeFlag: ht } = k;
    if (ct > 0) {
      if (ct & 128) {
        V(
          z,
          st,
          H,
          Y,
          K,
          U,
          tt,
          Q,
          et
        );
        return;
      } else if (ct & 256) {
        R(
          z,
          st,
          H,
          Y,
          K,
          U,
          tt,
          Q,
          et
        );
        return;
      }
    }
    ht & 8 ? (lt & 16 && M(z, K, U), st !== z && c(H, st)) : lt & 16 ? ht & 16 ? V(
      z,
      st,
      H,
      Y,
      K,
      U,
      tt,
      Q,
      et
    ) : M(z, K, U, !0) : (lt & 8 && c(H, ""), ht & 16 && E(
      st,
      H,
      Y,
      K,
      U,
      tt,
      Q,
      et
    ));
  }, R = (T, k, H, Y, K, U, tt, Q, et) => {
    T = T || tn, k = k || tn;
    const z = T.length, lt = k.length, st = Math.min(z, lt);
    let ct;
    for (ct = 0; ct < st; ct++) {
      const ht = k[ct] = et ? Re(k[ct]) : ce(k[ct]);
      v(
        T[ct],
        ht,
        H,
        null,
        K,
        U,
        tt,
        Q,
        et
      );
    }
    z > lt ? M(
      T,
      K,
      U,
      !0,
      !1,
      st
    ) : E(
      k,
      H,
      Y,
      K,
      U,
      tt,
      Q,
      et,
      st
    );
  }, V = (T, k, H, Y, K, U, tt, Q, et) => {
    let z = 0;
    const lt = k.length;
    let st = T.length - 1, ct = lt - 1;
    for (; z <= st && z <= ct; ) {
      const ht = T[z], gt = k[z] = et ? Re(k[z]) : ce(k[z]);
      if (Tn(ht, gt))
        v(
          ht,
          gt,
          H,
          null,
          K,
          U,
          tt,
          Q,
          et
        );
      else
        break;
      z++;
    }
    for (; z <= st && z <= ct; ) {
      const ht = T[st], gt = k[ct] = et ? Re(k[ct]) : ce(k[ct]);
      if (Tn(ht, gt))
        v(
          ht,
          gt,
          H,
          null,
          K,
          U,
          tt,
          Q,
          et
        );
      else
        break;
      st--, ct--;
    }
    if (z > st) {
      if (z <= ct) {
        const ht = ct + 1, gt = ht < lt ? k[ht].el : Y;
        for (; z <= ct; )
          v(
            null,
            k[z] = et ? Re(k[z]) : ce(k[z]),
            H,
            gt,
            K,
            U,
            tt,
            Q,
            et
          ), z++;
      }
    } else if (z > ct)
      for (; z <= st; )
        I(T[z], K, U, !0), z++;
    else {
      const ht = z, gt = z, mt = /* @__PURE__ */ new Map();
      for (z = gt; z <= ct; z++) {
        const Wt = k[z] = et ? Re(k[z]) : ce(k[z]);
        Wt.key != null && (process.env.NODE_ENV !== "production" && mt.has(Wt.key) && it(
          "Duplicate keys found during update:",
          JSON.stringify(Wt.key),
          "Make sure keys are unique."
        ), mt.set(Wt.key, z));
      }
      let _t, Ct = 0;
      const xt = ct - gt + 1;
      let qt = !1, ie = 0;
      const me = new Array(xt);
      for (z = 0; z < xt; z++) me[z] = 0;
      for (z = ht; z <= st; z++) {
        const Wt = T[z];
        if (Ct >= xt) {
          I(Wt, K, U, !0);
          continue;
        }
        let _e;
        if (Wt.key != null)
          _e = mt.get(Wt.key);
        else
          for (_t = gt; _t <= ct; _t++)
            if (me[_t - gt] === 0 && Tn(Wt, k[_t])) {
              _e = _t;
              break;
            }
        _e === void 0 ? I(Wt, K, U, !0) : (me[_e - gt] = z + 1, _e >= ie ? ie = _e : qt = !0, v(
          Wt,
          k[_e],
          H,
          null,
          K,
          U,
          tt,
          Q,
          et
        ), Ct++);
      }
      const zi = qt ? ed(me) : tn;
      for (_t = zi.length - 1, z = xt - 1; z >= 0; z--) {
        const Wt = gt + z, _e = k[Wt], ro = k[Wt + 1], so = Wt + 1 < lt ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ro.el || dc(ro)
        ) : Y;
        me[z] === 0 ? v(
          null,
          _e,
          H,
          so,
          K,
          U,
          tt,
          Q,
          et
        ) : qt && (_t < 0 || z !== zi[_t] ? W(_e, H, so, 2) : _t--);
      }
    }
  }, W = (T, k, H, Y, K = null) => {
    const { el: U, type: tt, transition: Q, children: et, shapeFlag: z } = T;
    if (z & 6) {
      W(T.component.subTree, k, H, Y);
      return;
    }
    if (z & 128) {
      T.suspense.move(k, H, Y);
      return;
    }
    if (z & 64) {
      tt.move(T, k, H, at);
      return;
    }
    if (tt === At) {
      r(U, k, H);
      for (let st = 0; st < et.length; st++)
        W(et[st], k, H, Y);
      r(T.anchor, k, H);
      return;
    }
    if (tt === Sn) {
      _(T, k, H);
      return;
    }
    if (Y !== 2 && z & 1 && Q)
      if (Y === 0)
        Q.persisted && !U[Xr] ? r(U, k, H) : (Q.beforeEnter(U), r(U, k, H), Yt(() => Q.enter(U), K));
      else {
        const { leave: st, delayLeave: ct, afterLeave: ht } = Q, gt = () => {
          T.ctx.isUnmounted ? i(U) : r(U, k, H);
        }, mt = () => {
          const _t = U._isLeaving || !!U[Xr];
          U._isLeaving && U[Xr](
            !0
            /* cancelled */
          ), Q.persisted && !_t ? gt() : st(U, () => {
            gt(), ht && ht();
          });
        };
        ct ? ct(U, gt, mt) : mt();
      }
    else
      r(U, k, H);
  }, I = (T, k, H, Y = !1, K = !1) => {
    const {
      type: U,
      props: tt,
      ref: Q,
      children: et,
      dynamicChildren: z,
      shapeFlag: lt,
      patchFlag: st,
      dirs: ct,
      cacheIndex: ht,
      memo: gt
    } = T;
    if ((st === -2 || z && z.hasOnce) && (K = !1), Q != null && (fe(), Ni(Q, null, H, T, !0), pe()), ht != null && (!T.ctx || T.ctx === k) && (k.renderCache[ht] = void 0), lt & 256) {
      k.ctx.deactivate(T);
      return;
    }
    const mt = lt & 1 && ct, _t = !Oi(T);
    let Ct;
    if (_t && (Ct = tt && tt.onVnodeBeforeUnmount) && ye(Ct, k, T), lt & 6)
      q(T.component, H, Y);
    else {
      if (lt & 128) {
        T.suspense.unmount(H, Y);
        return;
      }
      mt && Ke(T, null, k, "beforeUnmount"), lt & 64 ? T.type.remove(
        T,
        k,
        H,
        at,
        Y
      ) : z && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !z.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (U !== At || st > 0 && st & 64) ? M(
        z,
        k,
        H,
        !1,
        !0
      ) : (U === At && st & 384 || !K && lt & 16) && M(et, k, H), Y && J(T);
    }
    const xt = gt != null && ht == null;
    (_t && (Ct = tt && tt.onVnodeUnmounted) || mt || xt) && Yt(() => {
      Ct && ye(Ct, k, T), mt && Ke(T, null, k, "unmounted"), xt && (T.el = null);
    }, H);
  }, J = (T) => {
    const { type: k, el: H, anchor: Y, transition: K } = T;
    if (k === At) {
      process.env.NODE_ENV !== "production" && T.patchFlag > 0 && T.patchFlag & 2048 && K && !K.persisted ? T.children.forEach((tt) => {
        tt.type === ne ? i(tt.el) : J(tt);
      }) : ot(H, Y);
      return;
    }
    if (k === Sn) {
      y(T), K && !K.persisted && K.afterLeave && K.afterLeave();
      return;
    }
    const U = () => {
      i(H), K && !K.persisted && K.afterLeave && K.afterLeave();
    };
    if (T.shapeFlag & 1 && K && !K.persisted) {
      const { leave: tt, delayLeave: Q } = K, et = () => tt(H, U);
      Q ? Q(T.el, U, et) : et();
    } else
      U();
  }, ot = (T, k) => {
    let H;
    for (; T !== k; )
      H = g(T), i(T), T = H;
    i(k);
  }, q = (T, k, H) => {
    process.env.NODE_ENV !== "production" && T.type.__hmrId && Uh(T);
    const { bum: Y, scope: K, job: U, subTree: tt, um: Q, m: et, a: z } = T;
    ko(et), ko(z), Y && xn(Y), K.stop(), U ? (U.flags |= 8, I(tt, T, k, H)) : T.vnode.el && tt && (tt.transition = T.vnode.transition, I(tt, T, k, H)), Q && Yt(Q, k), Yt(() => {
      T.isUnmounted = !0;
    }, k), process.env.NODE_ENV !== "production" && Kh(T);
  }, M = (T, k, H, Y = !1, K = !1, U = 0) => {
    for (let tt = U; tt < T.length; tt++)
      I(T[tt], k, H, Y, K);
  }, $ = (T) => {
    if (T.shapeFlag & 6)
      return $(T.component.subTree);
    if (T.shapeFlag & 128)
      return T.suspense.next();
    const k = g(T.anchor || T.el), H = k && k[Wl];
    return H ? g(H) : k;
  };
  let Z = !1;
  const j = (T, k, H) => {
    let Y;
    T == null ? k._vnode && (I(k._vnode, null, null, !0), Y = k._vnode.component) : v(
      k._vnode || null,
      T,
      k,
      null,
      null,
      null,
      H
    ), k._vnode = T, Z || (Z = !0, po(Y), Vl(), Z = !1);
  }, at = {
    p: v,
    um: I,
    m: W,
    r: J,
    mt: L,
    mc: E,
    pc: D,
    pbc: A,
    n: $,
    o: t
  };
  return {
    render: j,
    hydrate: void 0,
    createApp: Au(j)
  };
}
function Qr({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function ze({ effect: t, job: e }, n) {
  n ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function td(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function Ti(t, e, n = !1) {
  const r = t.children, i = e.children;
  if (ut(r) && ut(i))
    for (let s = 0; s < r.length; s++) {
      const a = r[s];
      let o = i[s];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = i[s] = Re(i[s]), o.el = a.el), !n && o.patchFlag !== -2 && Ti(a, o)), o.type === $i && (o.patchFlag === -1 && (o = i[s] = Re(o)), o.el = a.el), o.type === ne && !o.el && (o.el = a.el), process.env.NODE_ENV !== "production" && o.el && (o.el.__vnode = o);
    }
}
function ed(t) {
  const e = t.slice(), n = [0];
  let r, i, s, a, o;
  const l = t.length;
  for (r = 0; r < l; r++) {
    const u = t[r];
    if (u !== 0) {
      if (i = n[n.length - 1], t[i] < u) {
        e[r] = i, n.push(r);
        continue;
      }
      for (s = 0, a = n.length - 1; s < a; )
        o = s + a >> 1, t[n[o]] < u ? s = o + 1 : a = o;
      u < t[n[s]] && (s > 0 && (e[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, a = n[s - 1]; s-- > 0; )
    n[s] = a, a = e[a];
  return n;
}
function uc(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : uc(e);
}
function ko(t) {
  if (t)
    for (let e = 0; e < t.length; e++)
      t[e].flags |= 8;
}
function dc(t) {
  if (t.placeholder)
    return t.placeholder;
  const e = t.component;
  return e ? dc(e.subTree) : null;
}
const fc = (t) => t.__isSuspense;
function nd(t, e) {
  e && e.pendingBranch ? ut(t) ? e.effects.push(...t) : e.effects.push(t) : js(t);
}
const At = /* @__PURE__ */ Symbol.for("v-fgt"), $i = /* @__PURE__ */ Symbol.for("v-txt"), ne = /* @__PURE__ */ Symbol.for("v-cmt"), Sn = /* @__PURE__ */ Symbol.for("v-stc"), sn = [];
let re = null;
function Nt(t = !1) {
  sn.push(re = t ? null : []);
}
function pc() {
  sn.pop(), re = sn[sn.length - 1] || null;
}
let Mi = 1;
function vr(t, e = !1) {
  Mi += t, t < 0 && re && e && (re.hasOnce = !0);
}
function gc(t) {
  return t.dynamicChildren = Mi > 0 ? re || tn : null, pc(), Mi > 0 && re && re.push(t), t;
}
function Dt(t, e, n, r, i, s) {
  return gc(
    nt(
      t,
      e,
      n,
      r,
      i,
      s,
      !0
    )
  );
}
function _n(t, e, n, r, i) {
  return gc(
    pt(
      t,
      e,
      n,
      r,
      i,
      !0
    )
  );
}
function Cn(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function Tn(t, e) {
  if (process.env.NODE_ENV !== "production" && e.shapeFlag & 6 && t.component) {
    const n = ir.get(e.type);
    if (n && n.has(t.component))
      return t.shapeFlag &= -257, e.shapeFlag &= -513, !1;
  }
  return t.type === e.type && t.key === e.key;
}
const id = (...t) => _c(
  ...t
), mc = ({ key: t }) => t ?? null, sr = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? Rt(t) || /* @__PURE__ */ Vt(t) || dt(t) ? { i: Kt, r: t, k: e, f: !!n } : t : null);
function nt(t, e = null, n = null, r = 0, i = null, s = t === At ? 0 : 1, a = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && mc(e),
    ref: e && sr(e),
    scopeId: Bl,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Kt
  };
  if (o ? (br(l, n), s & 128 && t.normalize(l)) : n && (l.shapeFlag |= Rt(n) ? 8 : 16), process.env.NODE_ENV !== "production" && l.key !== l.key && it("VNode created with invalid key (NaN). VNode type:", l.type), process.env.NODE_ENV !== "production" && e && l.shapeFlag & 1) {
    const u = e.innerHTML != null ? "innerHTML" : e.textContent != null ? "textContent" : null;
    u && rd(l.children) && it(
      `The \`${u}\` prop on <${l.type}> will override its children. Remove either the \`${u}\` prop or the children.`
    );
  }
  return Mi > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  re && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && re.push(l), l;
}
function rd(t) {
  return Rt(t) ? t !== "" : ut(t) ? t.length > 0 : !1;
}
const pt = process.env.NODE_ENV !== "production" ? id : _c;
function _c(t, e = null, n = null, r = 0, i = null, s = !1) {
  if ((!t || t === mu) && (process.env.NODE_ENV !== "production" && !t && it(`Invalid vnode type when creating vnode: ${t}.`), t = ne), Cn(t)) {
    const o = qe(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && br(o, n), Mi > 0 && !s && re && (o.shapeFlag & 6 ? re[re.indexOf(t)] = o : re.push(o)), o.patchFlag = -2, o;
  }
  if (Cc(t) && (t = t.__vccOpts), e) {
    e = sd(e);
    let { class: o, style: l } = e;
    o && !Rt(o) && (e.class = He(o)), wt(l) && (/* @__PURE__ */ hr(l) && !ut(l) && (l = Lt({}, l)), e.style = Ui(l));
  }
  const a = Rt(t) ? 1 : fc(t) ? 128 : Fr(t) ? 64 : wt(t) ? 4 : dt(t) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && a & 4 && /* @__PURE__ */ hr(t) && (t = /* @__PURE__ */ yt(t), it(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    t
  )), nt(
    t,
    e,
    n,
    r,
    i,
    a,
    s,
    !0
  );
}
function sd(t) {
  return t ? /* @__PURE__ */ hr(t) || sc(t) ? Lt({}, t) : t : null;
}
function qe(t, e, n = !1, r = !1) {
  const { props: i, ref: s, patchFlag: a, children: o, transition: l } = t, u = e ? vc(i || {}, e) : i, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: u,
    key: u && mc(u),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? ut(s) ? s.concat(sr(e)) : [s, sr(e)] : sr(e)
    ) : s,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && a === -1 && ut(o) ? o.map(yc) : o,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== At ? a === -1 ? 16 : a | 16 : a,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && qe(t.ssContent),
    ssFallback: t.ssFallback && qe(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce,
    cacheIndex: t.cacheIndex
  };
  return l && r && Ks(
    c,
    l.clone(c)
  ), c;
}
function yc(t) {
  const e = qe(t);
  return ut(t.children) && (e.children = t.children.map(yc)), e;
}
function Ue(t = " ", e = 0) {
  return pt($i, null, t, e);
}
function Fo(t, e) {
  const n = pt(Sn, null, t);
  return n.staticCount = e, n;
}
function Qe(t = "", e = !1) {
  return e ? (Nt(), _n(ne, null, t)) : pt(ne, null, t);
}
function ce(t) {
  return t == null || typeof t == "boolean" ? pt(ne) : ut(t) ? pt(
    At,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : Cn(t) ? Re(t) : pt($i, null, String(t));
}
function Re(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : qe(t);
}
function br(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (ut(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const i = e.default;
      i && (i._c && (i._d = !1), br(t, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = e._;
      !i && !sc(e) ? e._ctx = Kt : i === 3 && Kt && (Kt.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else if (dt(e)) {
    if (r & 65) {
      br(t, { default: e });
      return;
    }
    e = { default: e, _ctx: Kt }, n = 32;
  } else
    e = String(e), r & 64 ? (n = 16, e = [Ue(e)]) : n = 8;
  t.children = e, t.shapeFlag |= n;
}
function vc(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const i in r)
      if (i === "class")
        e.class !== r.class && (e.class = He([e.class, r.class]));
      else if (i === "style")
        e.style = Ui([e.style, r.style]);
      else if (Li(i)) {
        const s = e[i], a = r[i];
        a && s !== a && !(ut(s) && s.includes(a)) ? e[i] = s ? [].concat(s, a) : a : a == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Pi(i) && (e[i] = a);
      } else i !== "" && (e[i] = r[i]);
  }
  return e;
}
function ye(t, e, n, r = null) {
  ge(t, e, 7, [
    n,
    r
  ]);
}
const od = Zl();
let ad = 0;
function ld(t, e, n) {
  const r = t.type, i = (e ? e.appContext : t.appContext) || od, s = {
    uid: ad++,
    vnode: t,
    type: r,
    parent: e,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new rh(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(i.provides),
    ids: e ? e.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: ac(r, i),
    emitsOptions: tc(r, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Pt,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Pt,
    data: Pt,
    props: Pt,
    attrs: Pt,
    slots: Pt,
    refs: Pt,
    setupState: Pt,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? s.ctx = bu(s) : s.ctx = { _: s }, s.root = e ? e.root : s, s.emit = Du.bind(null, s), t.ce && t.ce(s), s;
}
let Gt = null;
const Wi = () => Gt || Kt;
let Sr, ki;
{
  const t = Gi(), e = (n, r) => {
    let i;
    return (i = t[n]) || (i = t[n] = []), i.push(r), (s) => {
      i.length > 1 ? i.forEach((a) => a(s)) : i[0](s);
    };
  };
  Sr = e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Gt = n
  ), ki = e(
    "__VUE_SSR_SETTERS__",
    (n) => Fi = n
  );
}
const qi = (t) => {
  const e = Gt;
  return Sr(t), t.scope.on(), () => {
    t.scope.off(), Sr(e);
  };
}, Vo = () => {
  Gt && Gt.scope.off(), Sr(null);
}, cd = /* @__PURE__ */ Ve("slot,component");
function Os(t, { isNativeTag: e }) {
  (cd(t) || e(t)) && it(
    "Do not use built-in or reserved HTML elements as component id: " + t
  );
}
function bc(t) {
  return t.vnode.shapeFlag & 4;
}
let Fi = !1;
function hd(t, e = !1, n = !1) {
  e && ki(e);
  const { props: r, children: i } = t.vnode, s = bc(t);
  Iu(t, r, s, e), Yu(t, i, n || e);
  const a = s ? ud(t, e) : void 0;
  return e && ki(!1), a;
}
function ud(t, e) {
  const n = t.type;
  if (process.env.NODE_ENV !== "production") {
    if (n.name && Os(n.name, t.appContext.config), n.components) {
      const i = Object.keys(n.components);
      for (let s = 0; s < i.length; s++)
        Os(i[s], t.appContext.config);
    }
    if (n.directives) {
      const i = Object.keys(n.directives);
      for (let s = 0; s < i.length; s++)
        Hl(i[s]);
    }
    n.compilerOptions && dd() && it(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, Xl), process.env.NODE_ENV !== "production" && Su(t);
  const { setup: r } = n;
  if (r) {
    fe();
    const i = t.setupContext = r.length > 1 ? pd(t) : null, s = qi(t), a = wn(
      r,
      t,
      0,
      [
        process.env.NODE_ENV !== "production" ? /* @__PURE__ */ we(t.props) : t.props,
        i
      ]
    ), o = Fs(a);
    if (pe(), s(), (o || t.sp) && !Oi(t) && Kl(t), o) {
      if (a.then(Vo, Vo), e)
        return a.then((l) => {
          ki(!0);
          try {
            Lo(t, l, e);
          } finally {
            ki(!1);
          }
        }).catch((l) => {
          Bi(l, t, 0);
        });
      if (t.asyncDep = a, process.env.NODE_ENV !== "production" && !t.suspense) {
        const l = Ki(t, n);
        it(
          `Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Lo(t, a, e);
  } else
    Sc(t, e);
}
function Lo(t, e, n) {
  dt(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : wt(e) ? (process.env.NODE_ENV !== "production" && Cn(e) && it(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (t.devtoolsRawSetupState = e), t.setupState = Rl(e), process.env.NODE_ENV !== "production" && Cu(t)) : process.env.NODE_ENV !== "production" && e !== void 0 && it(
    `setup() should return an object. Received: ${e === null ? "null" : typeof e}`
  ), Sc(t, n);
}
const dd = () => !0;
function Sc(t, e, n) {
  const r = t.type;
  t.render || (t.render = r.render || Ut);
  {
    const i = qi(t);
    fe();
    try {
      wu(t);
    } finally {
      pe(), i();
    }
  }
  process.env.NODE_ENV !== "production" && !r.render && t.render === Ut && !e && (r.template ? it(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : it("Component is missing template or render function: ", r));
}
const Io = process.env.NODE_ENV !== "production" ? {
  get(t, e) {
    return _r(), Ht(t, "get", ""), t[e];
  },
  set() {
    return it("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return it("setupContext.attrs is readonly."), !1;
  }
} : {
  get(t, e) {
    return Ht(t, "get", ""), t[e];
  }
};
function fd(t) {
  return new Proxy(t.slots, {
    get(e, n) {
      return Ht(t, "get", "$slots"), e[n];
    }
  });
}
function pd(t) {
  const e = (n) => {
    if (process.env.NODE_ENV !== "production" && (t.exposed && it("expose() should be called only once per setup()."), n != null)) {
      let r = typeof n;
      r === "object" && (ut(n) ? r = "array" : /* @__PURE__ */ Vt(n) && (r = "ref")), r !== "object" && it(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    t.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, r;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(t.attrs, Io));
      },
      get slots() {
        return r || (r = fd(t));
      },
      get emit() {
        return (i, ...s) => t.emit(i, ...s);
      },
      expose: e
    });
  } else
    return {
      attrs: new Proxy(t.attrs, Io),
      slots: t.slots,
      emit: t.emit,
      expose: e
    };
}
function Br(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(Rl(wh(t.exposed)), {
    get(e, n) {
      if (n in e)
        return e[n];
      if (n in rn)
        return rn[n](t);
    },
    has(e, n) {
      return n in e || n in rn;
    }
  })) : t.proxy;
}
const gd = /(?:^|[-_])\w/g, md = (t) => t.replace(gd, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function Qs(t, e = !0) {
  return dt(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function Ki(t, e, n = !1) {
  let r = Qs(e);
  if (!r && e.__file) {
    const i = e.__file.match(/([^/\\]+)\.\w+$/);
    i && (r = i[1]);
  }
  if (!r && t) {
    const i = (s) => {
      for (const a in s)
        if (s[a] === e)
          return a;
    };
    r = i(t.components) || t.parent && i(
      t.parent.type.components
    ) || i(t.appContext.components);
  }
  return r ? md(r) : n ? "App" : "Anonymous";
}
function Cc(t) {
  return dt(t) && "__vccOpts" in t;
}
const Cr = (t, e) => {
  const n = /* @__PURE__ */ Ph(t, e, Fi);
  if (process.env.NODE_ENV !== "production") {
    const r = Wi();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function _d(t, e, n) {
  try {
    vr(-1);
    const r = arguments.length;
    return r === 2 ? wt(e) && !ut(e) ? Cn(e) ? pt(t, null, [e]) : pt(t, e) : pt(t, null, e) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Cn(n) && (n = [n]), pt(t, e, n));
  } finally {
    vr(1);
  }
}
function yd() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const t = { style: "color:#3ba776" }, e = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, i = {
    __vue_custom_formatter: !0,
    header(d) {
      if (!wt(d))
        return null;
      if (d.__isVue)
        return ["div", t, "VueInstance"];
      if (/* @__PURE__ */ Vt(d)) {
        fe();
        const g = d.value;
        return pe(), [
          "div",
          {},
          ["span", t, c(d)],
          "<",
          o(g),
          ">"
        ];
      } else {
        if (/* @__PURE__ */ Fe(d))
          return [
            "div",
            {},
            ["span", t, /* @__PURE__ */ Jt(d) ? "ShallowReactive" : "Reactive"],
            "<",
            o(d),
            `>${/* @__PURE__ */ ae(d) ? " (readonly)" : ""}`
          ];
        if (/* @__PURE__ */ ae(d))
          return [
            "div",
            {},
            ["span", t, /* @__PURE__ */ Jt(d) ? "ShallowReadonly" : "Readonly"],
            "<",
            o(d),
            ">"
          ];
      }
      return null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...s(d.$)
        ];
    }
  };
  function s(d) {
    const g = [];
    d.type.props && d.props && g.push(a("props", /* @__PURE__ */ yt(d.props))), d.setupState !== Pt && g.push(a("setup", d.setupState)), d.data !== Pt && g.push(a("data", /* @__PURE__ */ yt(d.data)));
    const f = l(d, "computed");
    f && g.push(a("computed", f));
    const m = l(d, "inject");
    return m && g.push(a("injected", m)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), g;
  }
  function a(d, g) {
    return g = Lt({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((f) => [
          "div",
          {},
          ["span", r, f + ": "],
          o(g[f], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function o(d, g = !0) {
    return typeof d == "number" ? ["span", e, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", r, d] : wt(d) ? ["object", { object: g ? /* @__PURE__ */ yt(d) : d }] : ["span", n, String(d)];
  }
  function l(d, g) {
    const f = d.type;
    if (dt(f))
      return;
    const m = {};
    for (const v in d.ctx)
      u(f, v, g) && (m[v] = d.ctx[v]);
    return m;
  }
  function u(d, g, f) {
    const m = d[f];
    if (ut(m) && m.includes(g) || wt(m) && g in m || d.extends && u(d.extends, g, f) || d.mixins && d.mixins.some((v) => u(v, g, f)))
      return !0;
  }
  function c(d) {
    return /* @__PURE__ */ Jt(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const Go = "3.5.43", xe = process.env.NODE_ENV !== "production" ? it : Ut;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ts;
const Uo = typeof window < "u" && window.trustedTypes;
if (Uo)
  try {
    Ts = /* @__PURE__ */ Uo.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch (t) {
    process.env.NODE_ENV !== "production" && xe(`Error creating trusted types policy: ${t}`);
  }
const Ec = Ts ? (t) => Ts.createHTML(t) : (t) => t, vd = "http://www.w3.org/2000/svg", bd = "http://www.w3.org/1998/Math/MathML", Pe = typeof document < "u" ? document : null, Bo = Pe && /* @__PURE__ */ Pe.createElement("template"), Sd = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, r) => {
    const i = e === "svg" ? Pe.createElementNS(vd, t) : e === "mathml" ? Pe.createElementNS(bd, t) : n ? Pe.createElement(t, { is: n }) : Pe.createElement(t);
    return t === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (t) => Pe.createTextNode(t),
  createComment: (t) => Pe.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => Pe.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, e, n, r, i, s) {
    const a = n ? n.previousSibling : e.lastChild;
    if (i && (i === s || i.nextSibling))
      for (; e.insertBefore(i.cloneNode(!0), n), !(i === s || !(i = i.nextSibling)); )
        ;
    else {
      Bo.innerHTML = Ec(
        r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t
      );
      const o = Bo.content;
      if (r === "svg" || r === "mathml") {
        const l = o.firstChild;
        for (; l.firstChild; )
          o.appendChild(l.firstChild);
        o.removeChild(l);
      }
      e.insertBefore(o, n);
    }
    return [
      // first
      a ? a.nextSibling : e.firstChild,
      // last
      n ? n.previousSibling : e.lastChild
    ];
  }
}, Cd = /* @__PURE__ */ Symbol("_vtc");
function Ed(t, e, n) {
  const r = t[Cd];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
const Er = /* @__PURE__ */ Symbol("_vod"), wc = /* @__PURE__ */ Symbol("_vsh"), wd = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(t, { value: e }, { transition: n }) {
    t[Er] = t.style.display === "none" ? "" : t.style.display, n && e ? n.beforeEnter(t) : Pn(t, e);
  },
  mounted(t, { value: e }, { transition: n }) {
    n && e && n.enter(t);
  },
  updated(t, { value: e, oldValue: n }, { transition: r }) {
    !e != !n && (r ? e ? (r.beforeEnter(t), Pn(t, !0), r.enter(t)) : r.leave(t, () => {
      Pn(t, !1);
    }) : Pn(t, e));
  },
  beforeUnmount(t, { value: e }) {
    Pn(t, e);
  }
};
function Pn(t, e) {
  t.style.display = e ? t[Er] : "none", t[wc] = !e;
}
const xc = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function xd(t) {
  const e = Wi();
  if (!e) {
    process.env.NODE_ENV !== "production" && xe("useCssVars is called without current active component instance.");
    return;
  }
  const n = e.ut = (i = t(e.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${e.uid}"]`)
    ).forEach((s) => wr(s, i));
  };
  process.env.NODE_ENV !== "production" && (e.getCssVars = () => t(e.proxy));
  const r = () => {
    const i = t(e.proxy);
    e.ce ? wr(e.ce, i) : Ps(e.subTree, i), n(i);
  };
  Yl(() => {
    js(r);
  }), ln(() => {
    se(r, Ut, { flush: "post" });
    const i = new MutationObserver(r);
    i.observe(e.subTree.el.parentNode, { childList: !0 }), Ir(() => i.disconnect());
  });
}
function Ps(t, e) {
  if (t.shapeFlag & 128) {
    const n = t.suspense;
    t = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      Ps(n.activeBranch, e);
    });
  }
  for (; t.component; )
    t = t.component.subTree;
  if (t.shapeFlag & 1 && t.el)
    wr(t.el, e);
  else if (t.type === At)
    t.children.forEach((n) => Ps(n, e));
  else if (t.type === Sn) {
    let { el: n, anchor: r } = t;
    for (; n && (wr(n, e), n !== r); )
      n = n.nextSibling;
  }
}
function wr(t, e) {
  if (t.nodeType === 1) {
    const n = t.style;
    let r = "";
    for (const i in e) {
      const s = ih(e[i]);
      n.setProperty(`--${i}`, s), r += `--${i}: ${s};`;
    }
    n[xc] = r;
  }
}
const Nd = /(?:^|;)\s*display\s*:/;
function Od(t, e, n) {
  const r = t.style, i = Rt(n);
  let s = !1;
  if (n && !i) {
    if (e)
      if (Rt(e))
        for (const a of e.split(";")) {
          const o = a.slice(0, a.indexOf(":")).trim();
          n[o] == null && Ci(r, o, "");
        }
      else
        for (const a in e)
          n[a] == null && Ci(r, a, "");
    for (const a in n) {
      a === "display" && (s = !0);
      const o = n[a];
      o != null ? Ad(
        t,
        a,
        !Rt(e) && e ? e[a] : void 0,
        o
      ) || Ci(r, a, o) : Ci(r, a, "");
    }
  } else if (i) {
    if (e !== n) {
      const a = r[xc];
      a && (n += ";" + a), r.cssText = n, s = Nd.test(n);
    }
  } else e && t.removeAttribute("style");
  Er in t && (t[Er] = s ? r.display : "", t[wc] && (r.display = "none"));
}
const Td = /[^\\];\s*$/, Zi = /\s*!important$/;
function Ci(t, e, n) {
  if (ut(n))
    n.forEach((r) => Ci(t, e, r));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && Td.test(n) && xe(
    `Unexpected semicolon at the end of '${e}' style value: '${n}'`
  ), e.startsWith("--"))
    Zi.test(n) ? t.setProperty(e, n.replace(Zi, ""), "important") : t.setProperty(e, n);
  else {
    const r = Pd(t, e);
    Zi.test(n) ? t.setProperty(
      $e(r),
      n.replace(Zi, ""),
      "important"
    ) : t[r] = n;
  }
}
const Ho = ["Webkit", "Moz", "ms"], Zr = {};
function Pd(t, e) {
  const n = Zr[e];
  if (n)
    return n;
  let r = jt(e);
  if (r !== "filter" && r in t)
    return Zr[e] = r;
  r = on(r);
  for (let i = 0; i < Ho.length; i++) {
    const s = Ho[i] + r;
    if (s in t)
      return Zr[e] = s;
  }
  return e;
}
function Ad(t, e, n, r) {
  return t.tagName === "TEXTAREA" && (e === "width" || e === "height") && Rt(r) && n === r;
}
const jo = "http://www.w3.org/1999/xlink";
function $o(t, e, n, r, i, s = th(e)) {
  r && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(jo, e.slice(6, e.length)) : t.setAttributeNS(jo, e, n) : n == null || s && !ul(n) ? t.removeAttribute(e) : t.setAttribute(
    e,
    s ? "" : de(n) ? String(n) : n
  );
}
function Wo(t, e, n, r, i) {
  if (e === "innerHTML" || e === "textContent") {
    n != null && (t[e] = e === "innerHTML" ? Ec(n) : n);
    return;
  }
  const s = t.tagName;
  if (e === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const o = s === "OPTION" ? t.getAttribute("value") || "" : t.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      t.type === "checkbox" ? "on" : ""
    ) : String(n);
    (o !== l || !("_value" in t)) && (t.value = l), n == null && t.removeAttribute(e), t._value = n;
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const o = typeof t[e];
    o === "boolean" ? n = ul(n) : n == null && o === "string" ? (n = "", a = !0) : o === "number" && (n = 0, a = !0);
  }
  try {
    t[e] = n;
  } catch (o) {
    process.env.NODE_ENV !== "production" && !a && xe(
      `Failed setting prop "${e}" on <${s.toLowerCase()}>: value ${n} is invalid.`,
      o
    );
  }
  a && t.removeAttribute(i || e);
}
function Rd(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function Dd(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
const qo = /* @__PURE__ */ Symbol("_vei");
function Md(t, e, n, r, i = null) {
  const s = t[qo] || (t[qo] = {}), a = s[e];
  if (r && a)
    a.value = process.env.NODE_ENV !== "production" ? Ko(r, e) : r;
  else {
    const [o, l] = Vd(e);
    if (r) {
      const u = s[e] = Gd(
        process.env.NODE_ENV !== "production" ? Ko(r, e) : r,
        i
      );
      Rd(t, o, u, l);
    } else a && (Dd(t, o, a, l), s[e] = void 0);
  }
}
const kd = /(Once|Passive|Capture)$/, Fd = /^on:?(?:Once|Passive|Capture)$/;
function Vd(t) {
  let e, n;
  for (; (n = t.match(kd)) && !Fd.test(t); )
    e || (e = {}), t = t.slice(0, t.length - n[1].length), e[n[1].toLowerCase()] = !0;
  return [t[2] === ":" ? t.slice(3) : $e(t.slice(2)), e];
}
let ts = 0;
const Ld = /* @__PURE__ */ Promise.resolve(), Id = () => ts || (Ld.then(() => ts = 0), ts = Date.now());
function Gd(t, e) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    const i = n.value;
    if (ut(i)) {
      const s = r.stopImmediatePropagation;
      r.stopImmediatePropagation = () => {
        s.call(r), r._stopped = !0;
      };
      const a = i.slice(), o = [r];
      for (let l = 0; l < a.length && !r._stopped; l++) {
        const u = a[l];
        u && ge(
          u,
          e,
          5,
          o
        );
      }
    } else
      ge(
        i,
        e,
        5,
        [r]
      );
  };
  return n.value = t, n.attached = Id(), n;
}
function Ko(t, e) {
  return dt(t) || ut(t) ? t : (xe(
    `Wrong type passed as event handler to ${e} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof t}.`
  ), Ut);
}
const zo = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, Ud = (t, e, n, r, i, s) => {
  const a = i === "svg";
  e === "class" ? Ed(t, r, a) : e === "style" ? Od(t, n, r) : Li(e) ? Pi(e) || Md(t, e, n, r, s) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : Bd(t, e, r, a)) ? (Wo(t, e, r), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && $o(t, e, r, a, s, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Hd(t, e) || // @ts-expect-error _def is private
  t._def.__asyncLoader && (/[A-Z]/.test(e) || !Rt(r))) ? Wo(t, jt(e), r, s, e) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), $o(t, e, r, a));
};
function Bd(t, e, n, r) {
  if (r)
    return !!(e === "innerHTML" || e === "textContent" || e in t && zo(e) && dt(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t.tagName === "IFRAME" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const i = t.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return zo(e) && Rt(n) ? !1 : e in t;
}
function Hd(t, e) {
  const n = (
    // @ts-expect-error _def is private
    t._def.props
  );
  if (!n)
    return !1;
  const r = jt(e);
  return Array.isArray(n) ? n.some((i) => jt(i) === r) : Object.keys(n).some((i) => jt(i) === r);
}
const jd = ["ctrl", "shift", "alt", "meta"], $d = {
  stop: (t) => t.stopPropagation(),
  prevent: (t) => t.preventDefault(),
  self: (t) => t.target !== t.currentTarget,
  ctrl: (t) => !t.ctrlKey,
  shift: (t) => !t.shiftKey,
  alt: (t) => !t.altKey,
  meta: (t) => !t.metaKey,
  left: (t) => "button" in t && t.button !== 0,
  middle: (t) => "button" in t && t.button !== 1,
  right: (t) => "button" in t && t.button !== 2,
  exact: (t, e) => jd.some((n) => t[`${n}Key`] && !e.includes(n))
}, As = (t, e) => {
  if (!t) return t;
  const n = t._withMods || (t._withMods = {}), r = e.join(".");
  return n[r] || (n[r] = ((i, ...s) => {
    for (let a = 0; a < e.length; a++) {
      const o = $d[e[a]];
      if (o && o(i, e)) return;
    }
    return t(i, ...s);
  }));
}, Wd = /* @__PURE__ */ Lt({ patchProp: Ud }, Sd);
let Yo;
function qd() {
  return Yo || (Yo = Qu(Wd));
}
const Kd = ((...t) => {
  const e = qd().createApp(...t);
  process.env.NODE_ENV !== "production" && (Yd(e), Xd(e));
  const { mount: n } = e;
  return e.mount = (r) => {
    const i = Jd(r);
    if (!i) return;
    const s = e._component;
    !dt(s) && !s.render && !s.template && (s.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const a = n(i, !1, zd(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), a;
  }, e;
});
function zd(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function Yd(t) {
  Object.defineProperty(t.config, "isNativeTag", {
    value: (e) => Xc(e) || Jc(e) || Qc(e),
    writable: !1
  });
}
function Xd(t) {
  {
    const e = t.config.isCustomElement;
    Object.defineProperty(t.config, "isCustomElement", {
      get() {
        return e;
      },
      set() {
        xe(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = t.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(t.config, "compilerOptions", {
      get() {
        return xe(r), n;
      },
      set() {
        xe(r);
      }
    });
  }
}
function Jd(t) {
  if (Rt(t)) {
    const e = document.querySelector(t);
    return process.env.NODE_ENV !== "production" && !e && xe(
      `Failed to mount app: mount target selector "${t}" returned null.`
    ), e;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && t instanceof window.ShadowRoot && t.mode === "closed" && xe(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), t;
}
/**
* vue v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Qd() {
  yd();
}
process.env.NODE_ENV !== "production" && Qd();
var Xo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Zd(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var or = { exports: {} }, An = {}, es = {}, ns = {}, Jo;
function vt() {
  return Jo || (Jo = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t._registerNode = t.Konva = t.glob = void 0;
    const e = Math.PI / 180;
    function n() {
      return typeof window < "u" && ({}.toString.call(window) === "[object Window]" || {}.toString.call(window) === "[object global]");
    }
    t.glob = typeof Xo < "u" ? Xo : typeof window < "u" ? window : typeof WorkerGlobalScope < "u" ? self : {}, t.Konva = {
      _global: t.glob,
      version: "9.3.22",
      isBrowser: n(),
      isUnminified: /param/.test((function(i) {
      }).toString()),
      dblClickWindow: 400,
      getAngle(i) {
        return t.Konva.angleDeg ? i * e : i;
      },
      enableTrace: !1,
      pointerEventsEnabled: !0,
      autoDrawEnabled: !0,
      hitOnDragEnabled: !1,
      capturePointerEventsEnabled: !1,
      _mouseListenClick: !1,
      _touchListenClick: !1,
      _pointerListenClick: !1,
      _mouseInDblClickWindow: !1,
      _touchInDblClickWindow: !1,
      _pointerInDblClickWindow: !1,
      _mouseDblClickPointerId: null,
      _touchDblClickPointerId: null,
      _pointerDblClickPointerId: null,
      _fixTextRendering: !1,
      pixelRatio: typeof window < "u" && window.devicePixelRatio || 1,
      dragDistance: 3,
      angleDeg: !0,
      showWarnings: !0,
      dragButtons: [0, 1],
      isDragging() {
        return t.Konva.DD.isDragging;
      },
      isTransforming() {
        var i;
        return (i = t.Konva.Transformer) === null || i === void 0 ? void 0 : i.isTransforming();
      },
      isDragReady() {
        return !!t.Konva.DD.node;
      },
      releaseCanvasOnDestroy: !0,
      document: t.glob.document,
      _injectGlobal(i) {
        t.glob.Konva = i;
      }
    };
    const r = (i) => {
      t.Konva[i.prototype.getClassName()] = i;
    };
    t._registerNode = r, t.Konva._injectGlobal(t.Konva);
  })(ns)), ns;
}
var is = {}, Qo;
function kt() {
  return Qo || (Qo = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Util = t.Transform = void 0;
    const e = vt();
    class n {
      constructor(_ = [1, 0, 0, 1, 0, 0]) {
        this.dirty = !1, this.m = _ && _.slice() || [1, 0, 0, 1, 0, 0];
      }
      reset() {
        this.m[0] = 1, this.m[1] = 0, this.m[2] = 0, this.m[3] = 1, this.m[4] = 0, this.m[5] = 0;
      }
      copy() {
        return new n(this.m);
      }
      copyInto(_) {
        _.m[0] = this.m[0], _.m[1] = this.m[1], _.m[2] = this.m[2], _.m[3] = this.m[3], _.m[4] = this.m[4], _.m[5] = this.m[5];
      }
      point(_) {
        const y = this.m;
        return {
          x: y[0] * _.x + y[2] * _.y + y[4],
          y: y[1] * _.x + y[3] * _.y + y[5]
        };
      }
      translate(_, y) {
        return this.m[4] += this.m[0] * _ + this.m[2] * y, this.m[5] += this.m[1] * _ + this.m[3] * y, this;
      }
      scale(_, y) {
        return this.m[0] *= _, this.m[1] *= _, this.m[2] *= y, this.m[3] *= y, this;
      }
      rotate(_) {
        const y = Math.cos(_), x = Math.sin(_), P = this.m[0] * y + this.m[2] * x, C = this.m[1] * y + this.m[3] * x, E = this.m[0] * -x + this.m[2] * y, N = this.m[1] * -x + this.m[3] * y;
        return this.m[0] = P, this.m[1] = C, this.m[2] = E, this.m[3] = N, this;
      }
      getTranslation() {
        return {
          x: this.m[4],
          y: this.m[5]
        };
      }
      skew(_, y) {
        const x = this.m[0] + this.m[2] * y, P = this.m[1] + this.m[3] * y, C = this.m[2] + this.m[0] * _, E = this.m[3] + this.m[1] * _;
        return this.m[0] = x, this.m[1] = P, this.m[2] = C, this.m[3] = E, this;
      }
      multiply(_) {
        const y = this.m[0] * _.m[0] + this.m[2] * _.m[1], x = this.m[1] * _.m[0] + this.m[3] * _.m[1], P = this.m[0] * _.m[2] + this.m[2] * _.m[3], C = this.m[1] * _.m[2] + this.m[3] * _.m[3], E = this.m[0] * _.m[4] + this.m[2] * _.m[5] + this.m[4], N = this.m[1] * _.m[4] + this.m[3] * _.m[5] + this.m[5];
        return this.m[0] = y, this.m[1] = x, this.m[2] = P, this.m[3] = C, this.m[4] = E, this.m[5] = N, this;
      }
      invert() {
        const _ = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]), y = this.m[3] * _, x = -this.m[1] * _, P = -this.m[2] * _, C = this.m[0] * _, E = _ * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), N = _ * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
        return this.m[0] = y, this.m[1] = x, this.m[2] = P, this.m[3] = C, this.m[4] = E, this.m[5] = N, this;
      }
      getMatrix() {
        return this.m;
      }
      decompose() {
        const _ = this.m[0], y = this.m[1], x = this.m[2], P = this.m[3], C = this.m[4], E = this.m[5], N = _ * P - y * x, A = {
          x: C,
          y: E,
          rotation: 0,
          scaleX: 0,
          scaleY: 0,
          skewX: 0,
          skewY: 0
        };
        if (_ != 0 || y != 0) {
          const F = Math.sqrt(_ * _ + y * y);
          A.rotation = y > 0 ? Math.acos(_ / F) : -Math.acos(_ / F), A.scaleX = F, A.scaleY = N / F, A.skewX = (_ * x + y * P) / N, A.skewY = 0;
        } else if (x != 0 || P != 0) {
          const F = Math.sqrt(x * x + P * P);
          A.rotation = Math.PI / 2 - (P > 0 ? Math.acos(-x / F) : -Math.acos(x / F)), A.scaleX = N / F, A.scaleY = F, A.skewX = 0, A.skewY = (_ * x + y * P) / N;
        }
        return A.rotation = t.Util._getRotation(A.rotation), A;
      }
    }
    t.Transform = n;
    const r = "[object Array]", i = "[object Number]", s = "[object String]", a = "[object Boolean]", o = Math.PI / 180, l = 180 / Math.PI, u = "#", c = "", d = "0", g = "Konva warning: ", f = "Konva error: ", m = "rgb(", v = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 132, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 255, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 203],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [119, 128, 144],
      slategrey: [119, 128, 144],
      snow: [255, 255, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      transparent: [255, 255, 255, 0],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 5]
    }, S = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;
    let w = [];
    const p = typeof requestAnimationFrame < "u" && requestAnimationFrame || function(h) {
      setTimeout(h, 60);
    };
    t.Util = {
      _isElement(h) {
        return !!(h && h.nodeType == 1);
      },
      _isFunction(h) {
        return !!(h && h.constructor && h.call && h.apply);
      },
      _isPlainObject(h) {
        return !!h && h.constructor === Object;
      },
      _isArray(h) {
        return Object.prototype.toString.call(h) === r;
      },
      _isNumber(h) {
        return Object.prototype.toString.call(h) === i && !isNaN(h) && isFinite(h);
      },
      _isString(h) {
        return Object.prototype.toString.call(h) === s;
      },
      _isBoolean(h) {
        return Object.prototype.toString.call(h) === a;
      },
      isObject(h) {
        return h instanceof Object;
      },
      isValidSelector(h) {
        if (typeof h != "string")
          return !1;
        const _ = h[0];
        return _ === "#" || _ === "." || _ === _.toUpperCase();
      },
      _sign(h) {
        return h === 0 || h > 0 ? 1 : -1;
      },
      requestAnimFrame(h) {
        w.push(h), w.length === 1 && p(function() {
          const _ = w;
          w = [], _.forEach(function(y) {
            y();
          });
        });
      },
      createCanvasElement() {
        const h = document.createElement("canvas");
        try {
          h.style = h.style || {};
        } catch {
        }
        return h;
      },
      createImageElement() {
        return document.createElement("img");
      },
      _isInDocument(h) {
        for (; h = h.parentNode; )
          if (h == document)
            return !0;
        return !1;
      },
      _urlToImage(h, _) {
        const y = t.Util.createImageElement();
        y.onload = function() {
          _(y);
        }, y.src = h;
      },
      _rgbToHex(h, _, y) {
        return ((1 << 24) + (h << 16) + (_ << 8) + y).toString(16).slice(1);
      },
      _hexToRgb(h) {
        h = h.replace(u, c);
        const _ = parseInt(h, 16);
        return {
          r: _ >> 16 & 255,
          g: _ >> 8 & 255,
          b: _ & 255
        };
      },
      getRandomColor() {
        let h = (Math.random() * 16777215 << 0).toString(16);
        for (; h.length < 6; )
          h = d + h;
        return u + h;
      },
      getRGB(h) {
        let _;
        return h in v ? (_ = v[h], {
          r: _[0],
          g: _[1],
          b: _[2]
        }) : h[0] === u ? this._hexToRgb(h.substring(1)) : h.substr(0, 4) === m ? (_ = S.exec(h.replace(/ /g, "")), {
          r: parseInt(_[1], 10),
          g: parseInt(_[2], 10),
          b: parseInt(_[3], 10)
        }) : {
          r: 0,
          g: 0,
          b: 0
        };
      },
      colorToRGBA(h) {
        return h = h || "black", t.Util._namedColorToRBA(h) || t.Util._hex3ColorToRGBA(h) || t.Util._hex4ColorToRGBA(h) || t.Util._hex6ColorToRGBA(h) || t.Util._hex8ColorToRGBA(h) || t.Util._rgbColorToRGBA(h) || t.Util._rgbaColorToRGBA(h) || t.Util._hslColorToRGBA(h);
      },
      _namedColorToRBA(h) {
        const _ = v[h.toLowerCase()];
        return _ ? {
          r: _[0],
          g: _[1],
          b: _[2],
          a: 1
        } : null;
      },
      _rgbColorToRGBA(h) {
        if (h.indexOf("rgb(") === 0) {
          h = h.match(/rgb\(([^)]+)\)/)[1];
          const _ = h.split(/ *, */).map(Number);
          return {
            r: _[0],
            g: _[1],
            b: _[2],
            a: 1
          };
        }
      },
      _rgbaColorToRGBA(h) {
        if (h.indexOf("rgba(") === 0) {
          h = h.match(/rgba\(([^)]+)\)/)[1];
          const _ = h.split(/ *, */).map((y, x) => y.slice(-1) === "%" ? x === 3 ? parseInt(y) / 100 : parseInt(y) / 100 * 255 : Number(y));
          return {
            r: _[0],
            g: _[1],
            b: _[2],
            a: _[3]
          };
        }
      },
      _hex8ColorToRGBA(h) {
        if (h[0] === "#" && h.length === 9)
          return {
            r: parseInt(h.slice(1, 3), 16),
            g: parseInt(h.slice(3, 5), 16),
            b: parseInt(h.slice(5, 7), 16),
            a: parseInt(h.slice(7, 9), 16) / 255
          };
      },
      _hex6ColorToRGBA(h) {
        if (h[0] === "#" && h.length === 7)
          return {
            r: parseInt(h.slice(1, 3), 16),
            g: parseInt(h.slice(3, 5), 16),
            b: parseInt(h.slice(5, 7), 16),
            a: 1
          };
      },
      _hex4ColorToRGBA(h) {
        if (h[0] === "#" && h.length === 5)
          return {
            r: parseInt(h[1] + h[1], 16),
            g: parseInt(h[2] + h[2], 16),
            b: parseInt(h[3] + h[3], 16),
            a: parseInt(h[4] + h[4], 16) / 255
          };
      },
      _hex3ColorToRGBA(h) {
        if (h[0] === "#" && h.length === 4)
          return {
            r: parseInt(h[1] + h[1], 16),
            g: parseInt(h[2] + h[2], 16),
            b: parseInt(h[3] + h[3], 16),
            a: 1
          };
      },
      _hslColorToRGBA(h) {
        if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(h)) {
          const [_, ...y] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(h), x = Number(y[0]) / 360, P = Number(y[1]) / 100, C = Number(y[2]) / 100;
          let E, N, A;
          if (P === 0)
            return A = C * 255, {
              r: Math.round(A),
              g: Math.round(A),
              b: Math.round(A),
              a: 1
            };
          C < 0.5 ? E = C * (1 + P) : E = C + P - C * P;
          const F = 2 * C - E, G = [0, 0, 0];
          for (let B = 0; B < 3; B++)
            N = x + 1 / 3 * -(B - 1), N < 0 && N++, N > 1 && N--, 6 * N < 1 ? A = F + (E - F) * 6 * N : 2 * N < 1 ? A = E : 3 * N < 2 ? A = F + (E - F) * (2 / 3 - N) * 6 : A = F, G[B] = A * 255;
          return {
            r: Math.round(G[0]),
            g: Math.round(G[1]),
            b: Math.round(G[2]),
            a: 1
          };
        }
      },
      haveIntersection(h, _) {
        return !(_.x > h.x + h.width || _.x + _.width < h.x || _.y > h.y + h.height || _.y + _.height < h.y);
      },
      cloneObject(h) {
        const _ = {};
        for (const y in h)
          this._isPlainObject(h[y]) ? _[y] = this.cloneObject(h[y]) : this._isArray(h[y]) ? _[y] = this.cloneArray(h[y]) : _[y] = h[y];
        return _;
      },
      cloneArray(h) {
        return h.slice(0);
      },
      degToRad(h) {
        return h * o;
      },
      radToDeg(h) {
        return h * l;
      },
      _degToRad(h) {
        return t.Util.warn("Util._degToRad is removed. Please use public Util.degToRad instead."), t.Util.degToRad(h);
      },
      _radToDeg(h) {
        return t.Util.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead."), t.Util.radToDeg(h);
      },
      _getRotation(h) {
        return e.Konva.angleDeg ? t.Util.radToDeg(h) : h;
      },
      _capitalize(h) {
        return h.charAt(0).toUpperCase() + h.slice(1);
      },
      throw(h) {
        throw new Error(f + h);
      },
      error(h) {
        console.error(f + h);
      },
      warn(h) {
        e.Konva.showWarnings && console.warn(g + h);
      },
      each(h, _) {
        for (const y in h)
          _(y, h[y]);
      },
      _inRange(h, _, y) {
        return _ <= h && h < y;
      },
      _getProjectionToSegment(h, _, y, x, P, C) {
        let E, N, A;
        const F = (h - y) * (h - y) + (_ - x) * (_ - x);
        if (F == 0)
          E = h, N = _, A = (P - y) * (P - y) + (C - x) * (C - x);
        else {
          const G = ((P - h) * (y - h) + (C - _) * (x - _)) / F;
          G < 0 ? (E = h, N = _, A = (h - P) * (h - P) + (_ - C) * (_ - C)) : G > 1 ? (E = y, N = x, A = (y - P) * (y - P) + (x - C) * (x - C)) : (E = h + G * (y - h), N = _ + G * (x - _), A = (E - P) * (E - P) + (N - C) * (N - C));
        }
        return [E, N, A];
      },
      _getProjectionToLine(h, _, y) {
        const x = t.Util.cloneObject(h);
        let P = Number.MAX_VALUE;
        return _.forEach(function(C, E) {
          if (!y && E === _.length - 1)
            return;
          const N = _[(E + 1) % _.length], A = t.Util._getProjectionToSegment(C.x, C.y, N.x, N.y, h.x, h.y), F = A[0], G = A[1], B = A[2];
          B < P && (x.x = F, x.y = G, P = B);
        }), x;
      },
      _prepareArrayForTween(h, _, y) {
        const x = [], P = [];
        if (h.length > _.length) {
          const E = _;
          _ = h, h = E;
        }
        for (let E = 0; E < h.length; E += 2)
          x.push({
            x: h[E],
            y: h[E + 1]
          });
        for (let E = 0; E < _.length; E += 2)
          P.push({
            x: _[E],
            y: _[E + 1]
          });
        const C = [];
        return P.forEach(function(E) {
          const N = t.Util._getProjectionToLine(E, x, y);
          C.push(N.x), C.push(N.y);
        }), C;
      },
      _prepareToStringify(h) {
        let _;
        h.visitedByCircularReferenceRemoval = !0;
        for (const y in h)
          if (h.hasOwnProperty(y) && h[y] && typeof h[y] == "object") {
            if (_ = Object.getOwnPropertyDescriptor(h, y), h[y].visitedByCircularReferenceRemoval || t.Util._isElement(h[y]))
              if (_.configurable)
                delete h[y];
              else
                return null;
            else if (t.Util._prepareToStringify(h[y]) === null)
              if (_.configurable)
                delete h[y];
              else
                return null;
          }
        return delete h.visitedByCircularReferenceRemoval, h;
      },
      _assign(h, _) {
        for (const y in _)
          h[y] = _[y];
        return h;
      },
      _getFirstPointerId(h) {
        return h.touches ? h.changedTouches[0].identifier : h.pointerId || 999;
      },
      releaseCanvas(...h) {
        e.Konva.releaseCanvasOnDestroy && h.forEach((_) => {
          _.width = 0, _.height = 0;
        });
      },
      drawRoundedRectPath(h, _, y, x) {
        let P = 0, C = 0, E = 0, N = 0;
        typeof x == "number" ? P = C = E = N = Math.min(x, _ / 2, y / 2) : (P = Math.min(x[0] || 0, _ / 2, y / 2), C = Math.min(x[1] || 0, _ / 2, y / 2), N = Math.min(x[2] || 0, _ / 2, y / 2), E = Math.min(x[3] || 0, _ / 2, y / 2)), h.moveTo(P, 0), h.lineTo(_ - C, 0), h.arc(_ - C, C, C, Math.PI * 3 / 2, 0, !1), h.lineTo(_, y - N), h.arc(_ - N, y - N, N, 0, Math.PI / 2, !1), h.lineTo(E, y), h.arc(E, y - E, E, Math.PI / 2, Math.PI, !1), h.lineTo(0, P), h.arc(P, P, P, Math.PI, Math.PI * 3 / 2, !1);
      }
    };
  })(is)), is;
}
var Rn = {}, Oe = {}, Te = {}, Zo;
function Nc() {
  if (Zo) return Te;
  Zo = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.HitContext = Te.SceneContext = Te.Context = void 0;
  const t = kt(), e = vt();
  function n(w) {
    const p = [], h = w.length, _ = t.Util;
    for (let y = 0; y < h; y++) {
      let x = w[y];
      _._isNumber(x) ? x = Math.round(x * 1e3) / 1e3 : _._isString(x) || (x = x + ""), p.push(x);
    }
    return p;
  }
  const r = ",", i = "(", s = ")", a = "([", o = "])", l = ";", u = "()", c = "=", d = [
    "arc",
    "arcTo",
    "beginPath",
    "bezierCurveTo",
    "clearRect",
    "clip",
    "closePath",
    "createLinearGradient",
    "createPattern",
    "createRadialGradient",
    "drawImage",
    "ellipse",
    "fill",
    "fillText",
    "getImageData",
    "createImageData",
    "lineTo",
    "moveTo",
    "putImageData",
    "quadraticCurveTo",
    "rect",
    "roundRect",
    "restore",
    "rotate",
    "save",
    "scale",
    "setLineDash",
    "setTransform",
    "stroke",
    "strokeText",
    "transform",
    "translate"
  ], g = [
    "fillStyle",
    "strokeStyle",
    "shadowColor",
    "shadowBlur",
    "shadowOffsetX",
    "shadowOffsetY",
    "letterSpacing",
    "lineCap",
    "lineDashOffset",
    "lineJoin",
    "lineWidth",
    "miterLimit",
    "direction",
    "font",
    "textAlign",
    "textBaseline",
    "globalAlpha",
    "globalCompositeOperation",
    "imageSmoothingEnabled"
  ], f = 100;
  let m = class {
    constructor(p) {
      this.canvas = p, e.Konva.enableTrace && (this.traceArr = [], this._enableTrace());
    }
    fillShape(p) {
      p.fillEnabled() && this._fill(p);
    }
    _fill(p) {
    }
    strokeShape(p) {
      p.hasStroke() && this._stroke(p);
    }
    _stroke(p) {
    }
    fillStrokeShape(p) {
      p.attrs.fillAfterStrokeEnabled ? (this.strokeShape(p), this.fillShape(p)) : (this.fillShape(p), this.strokeShape(p));
    }
    getTrace(p, h) {
      let _ = this.traceArr, y = _.length, x = "", P, C, E, N;
      for (P = 0; P < y; P++)
        C = _[P], E = C.method, E ? (N = C.args, x += E, p ? x += u : t.Util._isArray(N[0]) ? x += a + N.join(r) + o : (h && (N = N.map((A) => typeof A == "number" ? Math.floor(A) : A)), x += i + N.join(r) + s)) : (x += C.property, p || (x += c + C.val)), x += l;
      return x;
    }
    clearTrace() {
      this.traceArr = [];
    }
    _trace(p) {
      let h = this.traceArr, _;
      h.push(p), _ = h.length, _ >= f && h.shift();
    }
    reset() {
      const p = this.getCanvas().getPixelRatio();
      this.setTransform(1 * p, 0, 0, 1 * p, 0, 0);
    }
    getCanvas() {
      return this.canvas;
    }
    clear(p) {
      const h = this.getCanvas();
      p ? this.clearRect(p.x || 0, p.y || 0, p.width || 0, p.height || 0) : this.clearRect(0, 0, h.getWidth() / h.pixelRatio, h.getHeight() / h.pixelRatio);
    }
    _applyLineCap(p) {
      const h = p.attrs.lineCap;
      h && this.setAttr("lineCap", h);
    }
    _applyOpacity(p) {
      const h = p.getAbsoluteOpacity();
      h !== 1 && this.setAttr("globalAlpha", h);
    }
    _applyLineJoin(p) {
      const h = p.attrs.lineJoin;
      h && this.setAttr("lineJoin", h);
    }
    setAttr(p, h) {
      this._context[p] = h;
    }
    arc(p, h, _, y, x, P) {
      this._context.arc(p, h, _, y, x, P);
    }
    arcTo(p, h, _, y, x) {
      this._context.arcTo(p, h, _, y, x);
    }
    beginPath() {
      this._context.beginPath();
    }
    bezierCurveTo(p, h, _, y, x, P) {
      this._context.bezierCurveTo(p, h, _, y, x, P);
    }
    clearRect(p, h, _, y) {
      this._context.clearRect(p, h, _, y);
    }
    clip(...p) {
      this._context.clip.apply(this._context, p);
    }
    closePath() {
      this._context.closePath();
    }
    createImageData(p, h) {
      const _ = arguments;
      if (_.length === 2)
        return this._context.createImageData(p, h);
      if (_.length === 1)
        return this._context.createImageData(p);
    }
    createLinearGradient(p, h, _, y) {
      return this._context.createLinearGradient(p, h, _, y);
    }
    createPattern(p, h) {
      return this._context.createPattern(p, h);
    }
    createRadialGradient(p, h, _, y, x, P) {
      return this._context.createRadialGradient(p, h, _, y, x, P);
    }
    drawImage(p, h, _, y, x, P, C, E, N) {
      const A = arguments, F = this._context;
      A.length === 3 ? F.drawImage(p, h, _) : A.length === 5 ? F.drawImage(p, h, _, y, x) : A.length === 9 && F.drawImage(p, h, _, y, x, P, C, E, N);
    }
    ellipse(p, h, _, y, x, P, C, E) {
      this._context.ellipse(p, h, _, y, x, P, C, E);
    }
    isPointInPath(p, h, _, y) {
      return _ ? this._context.isPointInPath(_, p, h, y) : this._context.isPointInPath(p, h, y);
    }
    fill(...p) {
      this._context.fill.apply(this._context, p);
    }
    fillRect(p, h, _, y) {
      this._context.fillRect(p, h, _, y);
    }
    strokeRect(p, h, _, y) {
      this._context.strokeRect(p, h, _, y);
    }
    fillText(p, h, _, y) {
      y ? this._context.fillText(p, h, _, y) : this._context.fillText(p, h, _);
    }
    measureText(p) {
      return this._context.measureText(p);
    }
    getImageData(p, h, _, y) {
      return this._context.getImageData(p, h, _, y);
    }
    lineTo(p, h) {
      this._context.lineTo(p, h);
    }
    moveTo(p, h) {
      this._context.moveTo(p, h);
    }
    rect(p, h, _, y) {
      this._context.rect(p, h, _, y);
    }
    roundRect(p, h, _, y, x) {
      this._context.roundRect(p, h, _, y, x);
    }
    putImageData(p, h, _) {
      this._context.putImageData(p, h, _);
    }
    quadraticCurveTo(p, h, _, y) {
      this._context.quadraticCurveTo(p, h, _, y);
    }
    restore() {
      this._context.restore();
    }
    rotate(p) {
      this._context.rotate(p);
    }
    save() {
      this._context.save();
    }
    scale(p, h) {
      this._context.scale(p, h);
    }
    setLineDash(p) {
      this._context.setLineDash ? this._context.setLineDash(p) : "mozDash" in this._context ? this._context.mozDash = p : "webkitLineDash" in this._context && (this._context.webkitLineDash = p);
    }
    getLineDash() {
      return this._context.getLineDash();
    }
    setTransform(p, h, _, y, x, P) {
      this._context.setTransform(p, h, _, y, x, P);
    }
    stroke(p) {
      p ? this._context.stroke(p) : this._context.stroke();
    }
    strokeText(p, h, _, y) {
      this._context.strokeText(p, h, _, y);
    }
    transform(p, h, _, y, x, P) {
      this._context.transform(p, h, _, y, x, P);
    }
    translate(p, h) {
      this._context.translate(p, h);
    }
    _enableTrace() {
      let p = this, h = d.length, _ = this.setAttr, y, x;
      const P = function(C) {
        let E = p[C], N;
        p[C] = function() {
          return x = n(Array.prototype.slice.call(arguments, 0)), N = E.apply(p, arguments), p._trace({
            method: C,
            args: x
          }), N;
        };
      };
      for (y = 0; y < h; y++)
        P(d[y]);
      p.setAttr = function() {
        _.apply(p, arguments);
        const C = arguments[0];
        let E = arguments[1];
        (C === "shadowOffsetX" || C === "shadowOffsetY" || C === "shadowBlur") && (E = E / this.canvas.getPixelRatio()), p._trace({
          property: C,
          val: E
        });
      };
    }
    _applyGlobalCompositeOperation(p) {
      const h = p.attrs.globalCompositeOperation;
      !h || h === "source-over" || this.setAttr("globalCompositeOperation", h);
    }
  };
  Te.Context = m, g.forEach(function(w) {
    Object.defineProperty(m.prototype, w, {
      get() {
        return this._context[w];
      },
      set(p) {
        this._context[w] = p;
      }
    });
  });
  class v extends m {
    constructor(p, { willReadFrequently: h = !1 } = {}) {
      super(p), this._context = p._canvas.getContext("2d", {
        willReadFrequently: h
      });
    }
    _fillColor(p) {
      const h = p.fill();
      this.setAttr("fillStyle", h), p._fillFunc(this);
    }
    _fillPattern(p) {
      this.setAttr("fillStyle", p._getFillPattern()), p._fillFunc(this);
    }
    _fillLinearGradient(p) {
      const h = p._getLinearGradient();
      h && (this.setAttr("fillStyle", h), p._fillFunc(this));
    }
    _fillRadialGradient(p) {
      const h = p._getRadialGradient();
      h && (this.setAttr("fillStyle", h), p._fillFunc(this));
    }
    _fill(p) {
      const h = p.fill(), _ = p.getFillPriority();
      if (h && _ === "color") {
        this._fillColor(p);
        return;
      }
      const y = p.getFillPatternImage();
      if (y && _ === "pattern") {
        this._fillPattern(p);
        return;
      }
      const x = p.getFillLinearGradientColorStops();
      if (x && _ === "linear-gradient") {
        this._fillLinearGradient(p);
        return;
      }
      const P = p.getFillRadialGradientColorStops();
      if (P && _ === "radial-gradient") {
        this._fillRadialGradient(p);
        return;
      }
      h ? this._fillColor(p) : y ? this._fillPattern(p) : x ? this._fillLinearGradient(p) : P && this._fillRadialGradient(p);
    }
    _strokeLinearGradient(p) {
      const h = p.getStrokeLinearGradientStartPoint(), _ = p.getStrokeLinearGradientEndPoint(), y = p.getStrokeLinearGradientColorStops(), x = this.createLinearGradient(h.x, h.y, _.x, _.y);
      if (y) {
        for (let P = 0; P < y.length; P += 2)
          x.addColorStop(y[P], y[P + 1]);
        this.setAttr("strokeStyle", x);
      }
    }
    _stroke(p) {
      const h = p.dash(), _ = p.getStrokeScaleEnabled();
      if (p.hasStroke()) {
        if (!_) {
          this.save();
          const x = this.getCanvas().getPixelRatio();
          this.setTransform(x, 0, 0, x, 0, 0);
        }
        this._applyLineCap(p), h && p.dashEnabled() && (this.setLineDash(h), this.setAttr("lineDashOffset", p.dashOffset())), this.setAttr("lineWidth", p.strokeWidth()), p.getShadowForStrokeEnabled() || this.setAttr("shadowColor", "rgba(0,0,0,0)"), p.getStrokeLinearGradientColorStops() ? this._strokeLinearGradient(p) : this.setAttr("strokeStyle", p.stroke()), p._strokeFunc(this), _ || this.restore();
      }
    }
    _applyShadow(p) {
      var h, _, y;
      const x = (h = p.getShadowRGBA()) !== null && h !== void 0 ? h : "black", P = (_ = p.getShadowBlur()) !== null && _ !== void 0 ? _ : 5, C = (y = p.getShadowOffset()) !== null && y !== void 0 ? y : {
        x: 0,
        y: 0
      }, E = p.getAbsoluteScale(), N = this.canvas.getPixelRatio(), A = E.x * N, F = E.y * N;
      this.setAttr("shadowColor", x), this.setAttr("shadowBlur", P * Math.min(Math.abs(A), Math.abs(F))), this.setAttr("shadowOffsetX", C.x * A), this.setAttr("shadowOffsetY", C.y * F);
    }
  }
  Te.SceneContext = v;
  class S extends m {
    constructor(p) {
      super(p), this._context = p._canvas.getContext("2d", {
        willReadFrequently: !0
      });
    }
    _fill(p) {
      this.save(), this.setAttr("fillStyle", p.colorKey), p._fillFuncHit(this), this.restore();
    }
    strokeShape(p) {
      p.hasHitStroke() && this._stroke(p);
    }
    _stroke(p) {
      if (p.hasHitStroke()) {
        const h = p.getStrokeScaleEnabled();
        if (!h) {
          this.save();
          const x = this.getCanvas().getPixelRatio();
          this.setTransform(x, 0, 0, x, 0, 0);
        }
        this._applyLineCap(p);
        const _ = p.hitStrokeWidth(), y = _ === "auto" ? p.strokeWidth() : _;
        this.setAttr("lineWidth", y), this.setAttr("strokeStyle", p.colorKey), p._strokeFuncHit(this), h || this.restore();
      }
    }
  }
  return Te.HitContext = S, Te;
}
var ta;
function Hr() {
  if (ta) return Oe;
  ta = 1, Object.defineProperty(Oe, "__esModule", { value: !0 }), Oe.HitCanvas = Oe.SceneCanvas = Oe.Canvas = void 0;
  const t = kt(), e = Nc(), n = vt();
  let r;
  function i() {
    if (r)
      return r;
    const l = t.Util.createCanvasElement(), u = l.getContext("2d");
    return r = (function() {
      const c = n.Konva._global.devicePixelRatio || 1, d = u.webkitBackingStorePixelRatio || u.mozBackingStorePixelRatio || u.msBackingStorePixelRatio || u.oBackingStorePixelRatio || u.backingStorePixelRatio || 1;
      return c / d;
    })(), t.Util.releaseCanvas(l), r;
  }
  let s = class {
    constructor(u) {
      this.pixelRatio = 1, this.width = 0, this.height = 0, this.isCache = !1;
      const d = (u || {}).pixelRatio || n.Konva.pixelRatio || i();
      this.pixelRatio = d, this._canvas = t.Util.createCanvasElement(), this._canvas.style.padding = "0", this._canvas.style.margin = "0", this._canvas.style.border = "0", this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = "0", this._canvas.style.left = "0";
    }
    getContext() {
      return this.context;
    }
    getPixelRatio() {
      return this.pixelRatio;
    }
    setPixelRatio(u) {
      const c = this.pixelRatio;
      this.pixelRatio = u, this.setSize(this.getWidth() / c, this.getHeight() / c);
    }
    setWidth(u) {
      this.width = this._canvas.width = u * this.pixelRatio, this._canvas.style.width = u + "px";
      const c = this.pixelRatio;
      this.getContext()._context.scale(c, c);
    }
    setHeight(u) {
      this.height = this._canvas.height = u * this.pixelRatio, this._canvas.style.height = u + "px";
      const c = this.pixelRatio;
      this.getContext()._context.scale(c, c);
    }
    getWidth() {
      return this.width;
    }
    getHeight() {
      return this.height;
    }
    setSize(u, c) {
      this.setWidth(u || 0), this.setHeight(c || 0);
    }
    toDataURL(u, c) {
      try {
        return this._canvas.toDataURL(u, c);
      } catch {
        try {
          return this._canvas.toDataURL();
        } catch (g) {
          return t.Util.error("Unable to get data URL. " + g.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."), "";
        }
      }
    }
  };
  Oe.Canvas = s;
  class a extends s {
    constructor(u = { width: 0, height: 0, willReadFrequently: !1 }) {
      super(u), this.context = new e.SceneContext(this, {
        willReadFrequently: u.willReadFrequently
      }), this.setSize(u.width, u.height);
    }
  }
  Oe.SceneCanvas = a;
  class o extends s {
    constructor(u = { width: 0, height: 0 }) {
      super(u), this.hitCanvas = !0, this.context = new e.HitContext(this), this.setSize(u.width, u.height);
    }
  }
  return Oe.HitCanvas = o, Oe;
}
var rs = {}, ea;
function Zs() {
  return ea || (ea = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.DD = void 0;
    const e = vt(), n = kt();
    t.DD = {
      get isDragging() {
        let r = !1;
        return t.DD._dragElements.forEach((i) => {
          i.dragStatus === "dragging" && (r = !0);
        }), r;
      },
      justDragged: !1,
      get node() {
        let r;
        return t.DD._dragElements.forEach((i) => {
          r = i.node;
        }), r;
      },
      _dragElements: /* @__PURE__ */ new Map(),
      _drag(r) {
        const i = [];
        t.DD._dragElements.forEach((s, a) => {
          const { node: o } = s, l = o.getStage();
          l.setPointersPositions(r), s.pointerId === void 0 && (s.pointerId = n.Util._getFirstPointerId(r));
          const u = l._changedPointerPositions.find((c) => c.id === s.pointerId);
          if (u) {
            if (s.dragStatus !== "dragging") {
              const c = o.dragDistance();
              if (Math.max(Math.abs(u.x - s.startPointerPos.x), Math.abs(u.y - s.startPointerPos.y)) < c || (o.startDrag({ evt: r }), !o.isDragging()))
                return;
            }
            o._setDragPosition(r, s), i.push(o);
          }
        }), i.forEach((s) => {
          s.fire("dragmove", {
            type: "dragmove",
            target: s,
            evt: r
          }, !0);
        });
      },
      _endDragBefore(r) {
        const i = [];
        t.DD._dragElements.forEach((s) => {
          const { node: a } = s, o = a.getStage();
          if (r && o.setPointersPositions(r), !o._changedPointerPositions.find((c) => c.id === s.pointerId))
            return;
          (s.dragStatus === "dragging" || s.dragStatus === "stopped") && (t.DD.justDragged = !0, e.Konva._mouseListenClick = !1, e.Konva._touchListenClick = !1, e.Konva._pointerListenClick = !1, s.dragStatus = "stopped");
          const u = s.node.getLayer() || s.node instanceof e.Konva.Stage && s.node;
          u && i.indexOf(u) === -1 && i.push(u);
        }), i.forEach((s) => {
          s.draw();
        });
      },
      _endDragAfter(r) {
        t.DD._dragElements.forEach((i, s) => {
          i.dragStatus === "stopped" && i.node.fire("dragend", {
            type: "dragend",
            target: i.node,
            evt: r
          }, !0), i.dragStatus !== "dragging" && t.DD._dragElements.delete(s);
        });
      }
    }, e.Konva.isBrowser && (window.addEventListener("mouseup", t.DD._endDragBefore, !0), window.addEventListener("touchend", t.DD._endDragBefore, !0), window.addEventListener("touchcancel", t.DD._endDragBefore, !0), window.addEventListener("mousemove", t.DD._drag), window.addEventListener("touchmove", t.DD._drag), window.addEventListener("mouseup", t.DD._endDragAfter, !1), window.addEventListener("touchend", t.DD._endDragAfter, !1), window.addEventListener("touchcancel", t.DD._endDragAfter, !1));
  })(rs)), rs;
}
var ss = {}, Qt = {}, na;
function St() {
  if (na) return Qt;
  na = 1, Object.defineProperty(Qt, "__esModule", { value: !0 }), Qt.RGBComponent = r, Qt.alphaComponent = i, Qt.getNumberValidator = s, Qt.getNumberOrArrayOfNumbersValidator = a, Qt.getNumberOrAutoValidator = o, Qt.getStringValidator = l, Qt.getStringOrGradientValidator = u, Qt.getFunctionValidator = c, Qt.getNumberArrayValidator = d, Qt.getBooleanValidator = g, Qt.getComponentValidator = f;
  const t = vt(), e = kt();
  function n(m) {
    return e.Util._isString(m) ? '"' + m + '"' : Object.prototype.toString.call(m) === "[object Number]" || e.Util._isBoolean(m) ? m : Object.prototype.toString.call(m);
  }
  function r(m) {
    return m > 255 ? 255 : m < 0 ? 0 : Math.round(m);
  }
  function i(m) {
    return m > 1 ? 1 : m < 1e-4 ? 1e-4 : m;
  }
  function s() {
    if (t.Konva.isUnminified)
      return function(m, v) {
        return e.Util._isNumber(m) || e.Util.warn(n(m) + ' is a not valid value for "' + v + '" attribute. The value should be a number.'), m;
      };
  }
  function a(m) {
    if (t.Konva.isUnminified)
      return function(v, S) {
        let w = e.Util._isNumber(v), p = e.Util._isArray(v) && v.length == m;
        return !w && !p && e.Util.warn(n(v) + ' is a not valid value for "' + S + '" attribute. The value should be a number or Array<number>(' + m + ")"), v;
      };
  }
  function o() {
    if (t.Konva.isUnminified)
      return function(m, v) {
        return e.Util._isNumber(m) || m === "auto" || e.Util.warn(n(m) + ' is a not valid value for "' + v + '" attribute. The value should be a number or "auto".'), m;
      };
  }
  function l() {
    if (t.Konva.isUnminified)
      return function(m, v) {
        return e.Util._isString(m) || e.Util.warn(n(m) + ' is a not valid value for "' + v + '" attribute. The value should be a string.'), m;
      };
  }
  function u() {
    if (t.Konva.isUnminified)
      return function(m, v) {
        const S = e.Util._isString(m), w = Object.prototype.toString.call(m) === "[object CanvasGradient]" || m && m.addColorStop;
        return S || w || e.Util.warn(n(m) + ' is a not valid value for "' + v + '" attribute. The value should be a string or a native gradient.'), m;
      };
  }
  function c() {
    if (t.Konva.isUnminified)
      return function(m, v) {
        return e.Util._isFunction(m) || e.Util.warn(n(m) + ' is a not valid value for "' + v + '" attribute. The value should be a function.'), m;
      };
  }
  function d() {
    if (t.Konva.isUnminified)
      return function(m, v) {
        const S = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
        return S && m instanceof S || (e.Util._isArray(m) ? m.forEach(function(w) {
          e.Util._isNumber(w) || e.Util.warn('"' + v + '" attribute has non numeric element ' + w + ". Make sure that all elements are numbers.");
        }) : e.Util.warn(n(m) + ' is a not valid value for "' + v + '" attribute. The value should be a array of numbers.')), m;
      };
  }
  function g() {
    if (t.Konva.isUnminified)
      return function(m, v) {
        return m === !0 || m === !1 || e.Util.warn(n(m) + ' is a not valid value for "' + v + '" attribute. The value should be a boolean.'), m;
      };
  }
  function f(m) {
    if (t.Konva.isUnminified)
      return function(v, S) {
        return v == null || e.Util.isObject(v) || e.Util.warn(n(v) + ' is a not valid value for "' + S + '" attribute. The value should be an object with properties ' + m), v;
      };
  }
  return Qt;
}
var ia;
function bt() {
  return ia || (ia = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Factory = void 0;
    const e = kt(), n = St(), r = "get", i = "set";
    t.Factory = {
      addGetterSetter(s, a, o, l, u) {
        t.Factory.addGetter(s, a, o), t.Factory.addSetter(s, a, l, u), t.Factory.addOverloadedGetterSetter(s, a);
      },
      addGetter(s, a, o) {
        const l = r + e.Util._capitalize(a);
        s.prototype[l] = s.prototype[l] || function() {
          const u = this.attrs[a];
          return u === void 0 ? o : u;
        };
      },
      addSetter(s, a, o, l) {
        const u = i + e.Util._capitalize(a);
        s.prototype[u] || t.Factory.overWriteSetter(s, a, o, l);
      },
      overWriteSetter(s, a, o, l) {
        const u = i + e.Util._capitalize(a);
        s.prototype[u] = function(c) {
          return o && c !== void 0 && c !== null && (c = o.call(this, c, a)), this._setAttr(a, c), l && l.call(this), this;
        };
      },
      addComponentsGetterSetter(s, a, o, l, u) {
        const c = o.length, d = e.Util._capitalize, g = r + d(a), f = i + d(a);
        s.prototype[g] = function() {
          const v = {};
          for (let S = 0; S < c; S++) {
            const w = o[S];
            v[w] = this.getAttr(a + d(w));
          }
          return v;
        };
        const m = (0, n.getComponentValidator)(o);
        s.prototype[f] = function(v) {
          const S = this.attrs[a];
          l && (v = l.call(this, v, a)), m && m.call(this, v, a);
          for (const w in v)
            v.hasOwnProperty(w) && this._setAttr(a + d(w), v[w]);
          return v || o.forEach((w) => {
            this._setAttr(a + d(w), void 0);
          }), this._fireChangeEvent(a, S, v), u && u.call(this), this;
        }, t.Factory.addOverloadedGetterSetter(s, a);
      },
      addOverloadedGetterSetter(s, a) {
        const o = e.Util._capitalize(a), l = i + o, u = r + o;
        s.prototype[a] = function() {
          return arguments.length ? (this[l](arguments[0]), this) : this[u]();
        };
      },
      addDeprecatedGetterSetter(s, a, o, l) {
        e.Util.error("Adding deprecated " + a);
        const u = r + e.Util._capitalize(a), c = a + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
        s.prototype[u] = function() {
          e.Util.error(c);
          const d = this.attrs[a];
          return d === void 0 ? o : d;
        }, t.Factory.addSetter(s, a, l, function() {
          e.Util.error(c);
        }), t.Factory.addOverloadedGetterSetter(s, a);
      },
      backCompat(s, a) {
        e.Util.each(a, function(o, l) {
          const u = s.prototype[l], c = r + e.Util._capitalize(o), d = i + e.Util._capitalize(o);
          function g() {
            u.apply(this, arguments), e.Util.error('"' + o + '" method is deprecated and will be removed soon. Use ""' + l + '" instead.');
          }
          s.prototype[o] = g, s.prototype[c] = g, s.prototype[d] = g;
        });
      },
      afterSetFilter() {
        this._filterUpToDate = !1;
      }
    };
  })(ss)), ss;
}
var ra;
function It() {
  if (ra) return Rn;
  ra = 1, Object.defineProperty(Rn, "__esModule", { value: !0 }), Rn.Node = void 0;
  const t = Hr(), e = Zs(), n = bt(), r = vt(), i = kt(), s = St(), a = "absoluteOpacity", o = "allEventListeners", l = "absoluteTransform", u = "absoluteScale", c = "canvas", d = "Change", g = "children", f = "konva", m = "listening", v = "mouseenter", S = "mouseleave", w = "pointerenter", p = "pointerleave", h = "touchenter", _ = "touchleave", y = "set", x = "Shape", P = " ", C = "stage", E = "transform", N = "Stage", A = "visible", F = [
    "xChange.konva",
    "yChange.konva",
    "scaleXChange.konva",
    "scaleYChange.konva",
    "skewXChange.konva",
    "skewYChange.konva",
    "rotationChange.konva",
    "offsetXChange.konva",
    "offsetYChange.konva",
    "transformsEnabledChange.konva"
  ].join(P);
  let G = 1, B = class Rs {
    constructor(b) {
      this._id = G++, this.eventListeners = {}, this.attrs = {}, this.index = 0, this._allEventListeners = null, this.parent = null, this._cache = /* @__PURE__ */ new Map(), this._attachedDepsListeners = /* @__PURE__ */ new Map(), this._lastPos = null, this._batchingTransformChange = !1, this._needClearTransformCache = !1, this._filterUpToDate = !1, this._isUnderCache = !1, this._dragEventId = null, this._shouldFireChangeEvents = !1, this.setAttrs(b), this._shouldFireChangeEvents = !0;
    }
    hasChildren() {
      return !1;
    }
    _clearCache(b) {
      (b === E || b === l) && this._cache.get(b) ? this._cache.get(b).dirty = !0 : b ? this._cache.delete(b) : this._cache.clear();
    }
    _getCache(b, O) {
      let D = this._cache.get(b);
      return (D === void 0 || (b === E || b === l) && D.dirty === !0) && (D = O.call(this), this._cache.set(b, D)), D;
    }
    _calculate(b, O, D) {
      if (!this._attachedDepsListeners.get(b)) {
        const R = O.map((V) => V + "Change.konva").join(P);
        this.on(R, () => {
          this._clearCache(b);
        }), this._attachedDepsListeners.set(b, !0);
      }
      return this._getCache(b, D);
    }
    _getCanvasCache() {
      return this._cache.get(c);
    }
    _clearSelfAndDescendantCache(b) {
      this._clearCache(b), b === l && this.fire("absoluteTransformChange");
    }
    clearCache() {
      if (this._cache.has(c)) {
        const { scene: b, filter: O, hit: D, buffer: R } = this._cache.get(c);
        i.Util.releaseCanvas(b, O, D, R), this._cache.delete(c);
      }
      return this._clearSelfAndDescendantCache(), this._requestDraw(), this;
    }
    cache(b) {
      const O = b || {};
      let D = {};
      (O.x === void 0 || O.y === void 0 || O.width === void 0 || O.height === void 0) && (D = this.getClientRect({
        skipTransform: !0,
        relativeTo: this.getParent() || void 0
      }));
      let R = Math.ceil(O.width || D.width), V = Math.ceil(O.height || D.height), W = O.pixelRatio, I = O.x === void 0 ? Math.floor(D.x) : O.x, J = O.y === void 0 ? Math.floor(D.y) : O.y, ot = O.offset || 0, q = O.drawBorder || !1, M = O.hitCanvasPixelRatio || 1;
      if (!R || !V) {
        i.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
        return;
      }
      const $ = Math.abs(Math.round(D.x) - I) > 0.5 ? 1 : 0, Z = Math.abs(Math.round(D.y) - J) > 0.5 ? 1 : 0;
      R += ot * 2 + $, V += ot * 2 + Z, I -= ot, J -= ot;
      const j = new t.SceneCanvas({
        pixelRatio: W,
        width: R,
        height: V
      }), at = new t.SceneCanvas({
        pixelRatio: W,
        width: 0,
        height: 0,
        willReadFrequently: !0
      }), ft = new t.HitCanvas({
        pixelRatio: M,
        width: R,
        height: V
      }), T = j.getContext(), k = ft.getContext(), H = new t.SceneCanvas({
        width: j.width / j.pixelRatio + Math.abs(I),
        height: j.height / j.pixelRatio + Math.abs(J),
        pixelRatio: j.pixelRatio
      }), Y = H.getContext();
      return ft.isCache = !0, j.isCache = !0, this._cache.delete(c), this._filterUpToDate = !1, O.imageSmoothingEnabled === !1 && (j.getContext()._context.imageSmoothingEnabled = !1, at.getContext()._context.imageSmoothingEnabled = !1), T.save(), k.save(), Y.save(), T.translate(-I, -J), k.translate(-I, -J), Y.translate(-I, -J), H.x = I, H.y = J, this._isUnderCache = !0, this._clearSelfAndDescendantCache(a), this._clearSelfAndDescendantCache(u), this.drawScene(j, this, H), this.drawHit(ft, this), this._isUnderCache = !1, T.restore(), k.restore(), q && (T.save(), T.beginPath(), T.rect(0, 0, R, V), T.closePath(), T.setAttr("strokeStyle", "red"), T.setAttr("lineWidth", 5), T.stroke(), T.restore()), this._cache.set(c, {
        scene: j,
        filter: at,
        hit: ft,
        buffer: H,
        x: I,
        y: J
      }), this._requestDraw(), this;
    }
    isCached() {
      return this._cache.has(c);
    }
    getClientRect(b) {
      throw new Error('abstract "getClientRect" method call');
    }
    _transformedRect(b, O) {
      const D = [
        { x: b.x, y: b.y },
        { x: b.x + b.width, y: b.y },
        { x: b.x + b.width, y: b.y + b.height },
        { x: b.x, y: b.y + b.height }
      ];
      let R = 1 / 0, V = 1 / 0, W = -1 / 0, I = -1 / 0;
      const J = this.getAbsoluteTransform(O);
      return D.forEach(function(ot) {
        const q = J.point(ot);
        R === void 0 && (R = W = q.x, V = I = q.y), R = Math.min(R, q.x), V = Math.min(V, q.y), W = Math.max(W, q.x), I = Math.max(I, q.y);
      }), {
        x: R,
        y: V,
        width: W - R,
        height: I - V
      };
    }
    _drawCachedSceneCanvas(b) {
      b.save(), b._applyOpacity(this), b._applyGlobalCompositeOperation(this);
      const O = this._getCanvasCache();
      b.translate(O.x, O.y);
      const D = this._getCachedSceneCanvas(), R = D.pixelRatio;
      b.drawImage(D._canvas, 0, 0, D.width / R, D.height / R), b.restore();
    }
    _drawCachedHitCanvas(b) {
      const O = this._getCanvasCache(), D = O.hit;
      b.save(), b.translate(O.x, O.y), b.drawImage(D._canvas, 0, 0, D.width / D.pixelRatio, D.height / D.pixelRatio), b.restore();
    }
    _getCachedSceneCanvas() {
      let b = this.filters(), O = this._getCanvasCache(), D = O.scene, R = O.filter, V = R.getContext(), W, I, J, ot;
      if (b) {
        if (!this._filterUpToDate) {
          const q = D.pixelRatio;
          R.setSize(D.width / D.pixelRatio, D.height / D.pixelRatio);
          try {
            for (W = b.length, V.clear(), V.drawImage(D._canvas, 0, 0, D.getWidth() / q, D.getHeight() / q), I = V.getImageData(0, 0, R.getWidth(), R.getHeight()), J = 0; J < W; J++) {
              if (ot = b[J], typeof ot != "function") {
                i.Util.error("Filter should be type of function, but got " + typeof ot + " instead. Please check correct filters");
                continue;
              }
              ot.call(this, I), V.putImageData(I, 0, 0);
            }
          } catch (M) {
            i.Util.error("Unable to apply filter. " + M.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
          }
          this._filterUpToDate = !0;
        }
        return R;
      }
      return D;
    }
    on(b, O) {
      if (this._cache && this._cache.delete(o), arguments.length === 3)
        return this._delegate.apply(this, arguments);
      const D = b.split(P);
      for (let R = 0; R < D.length; R++) {
        const W = D[R].split("."), I = W[0], J = W[1] || "";
        this.eventListeners[I] || (this.eventListeners[I] = []), this.eventListeners[I].push({ name: J, handler: O });
      }
      return this;
    }
    off(b, O) {
      let D = (b || "").split(P), R = D.length, V, W, I, J, ot, q;
      if (this._cache && this._cache.delete(o), !b)
        for (W in this.eventListeners)
          this._off(W);
      for (V = 0; V < R; V++)
        if (I = D[V], J = I.split("."), ot = J[0], q = J[1], ot)
          this.eventListeners[ot] && this._off(ot, q, O);
        else
          for (W in this.eventListeners)
            this._off(W, q, O);
      return this;
    }
    dispatchEvent(b) {
      const O = {
        target: this,
        type: b.type,
        evt: b
      };
      return this.fire(b.type, O), this;
    }
    addEventListener(b, O) {
      return this.on(b, function(D) {
        O.call(this, D.evt);
      }), this;
    }
    removeEventListener(b) {
      return this.off(b), this;
    }
    _delegate(b, O, D) {
      const R = this;
      this.on(b, function(V) {
        const W = V.target.findAncestors(O, !0, R);
        for (let I = 0; I < W.length; I++)
          V = i.Util.cloneObject(V), V.currentTarget = W[I], D.call(W[I], V);
      });
    }
    remove() {
      return this.isDragging() && this.stopDrag(), e.DD._dragElements.delete(this._id), this._remove(), this;
    }
    _clearCaches() {
      this._clearSelfAndDescendantCache(l), this._clearSelfAndDescendantCache(a), this._clearSelfAndDescendantCache(u), this._clearSelfAndDescendantCache(C), this._clearSelfAndDescendantCache(A), this._clearSelfAndDescendantCache(m);
    }
    _remove() {
      this._clearCaches();
      const b = this.getParent();
      b && b.children && (b.children.splice(this.index, 1), b._setChildrenIndices(), this.parent = null);
    }
    destroy() {
      return this.remove(), this.clearCache(), this;
    }
    getAttr(b) {
      const O = "get" + i.Util._capitalize(b);
      return i.Util._isFunction(this[O]) ? this[O]() : this.attrs[b];
    }
    getAncestors() {
      let b = this.getParent(), O = [];
      for (; b; )
        O.push(b), b = b.getParent();
      return O;
    }
    getAttrs() {
      return this.attrs || {};
    }
    setAttrs(b) {
      return this._batchTransformChanges(() => {
        let O, D;
        if (!b)
          return this;
        for (O in b)
          O !== g && (D = y + i.Util._capitalize(O), i.Util._isFunction(this[D]) ? this[D](b[O]) : this._setAttr(O, b[O]));
      }), this;
    }
    isListening() {
      return this._getCache(m, this._isListening);
    }
    _isListening(b) {
      if (!this.listening())
        return !1;
      const D = this.getParent();
      return D && D !== b && this !== b ? D._isListening(b) : !0;
    }
    isVisible() {
      return this._getCache(A, this._isVisible);
    }
    _isVisible(b) {
      if (!this.visible())
        return !1;
      const D = this.getParent();
      return D && D !== b && this !== b ? D._isVisible(b) : !0;
    }
    shouldDrawHit(b, O = !1) {
      if (b)
        return this._isVisible(b) && this._isListening(b);
      const D = this.getLayer();
      let R = !1;
      e.DD._dragElements.forEach((W) => {
        W.dragStatus === "dragging" && (W.node.nodeType === "Stage" || W.node.getLayer() === D) && (R = !0);
      });
      const V = !O && !r.Konva.hitOnDragEnabled && (R || r.Konva.isTransforming());
      return this.isListening() && this.isVisible() && !V;
    }
    show() {
      return this.visible(!0), this;
    }
    hide() {
      return this.visible(!1), this;
    }
    getZIndex() {
      return this.index || 0;
    }
    getAbsoluteZIndex() {
      let b = this.getDepth(), O = this, D = 0, R, V, W, I;
      function J(q) {
        for (R = [], V = q.length, W = 0; W < V; W++)
          I = q[W], D++, I.nodeType !== x && (R = R.concat(I.getChildren().slice())), I._id === O._id && (W = V);
        R.length > 0 && R[0].getDepth() <= b && J(R);
      }
      const ot = this.getStage();
      return O.nodeType !== N && ot && J(ot.getChildren()), D;
    }
    getDepth() {
      let b = 0, O = this.parent;
      for (; O; )
        b++, O = O.parent;
      return b;
    }
    _batchTransformChanges(b) {
      this._batchingTransformChange = !0, b(), this._batchingTransformChange = !1, this._needClearTransformCache && (this._clearCache(E), this._clearSelfAndDescendantCache(l)), this._needClearTransformCache = !1;
    }
    setPosition(b) {
      return this._batchTransformChanges(() => {
        this.x(b.x), this.y(b.y);
      }), this;
    }
    getPosition() {
      return {
        x: this.x(),
        y: this.y()
      };
    }
    getRelativePointerPosition() {
      const b = this.getStage();
      if (!b)
        return null;
      const O = b.getPointerPosition();
      if (!O)
        return null;
      const D = this.getAbsoluteTransform().copy();
      return D.invert(), D.point(O);
    }
    getAbsolutePosition(b) {
      let O = !1, D = this.parent;
      for (; D; ) {
        if (D.isCached()) {
          O = !0;
          break;
        }
        D = D.parent;
      }
      O && !b && (b = !0);
      const R = this.getAbsoluteTransform(b).getMatrix(), V = new i.Transform(), W = this.offset();
      return V.m = R.slice(), V.translate(W.x, W.y), V.getTranslation();
    }
    setAbsolutePosition(b) {
      const { x: O, y: D, ...R } = this._clearTransform();
      this.attrs.x = O, this.attrs.y = D, this._clearCache(E);
      const V = this._getAbsoluteTransform().copy();
      return V.invert(), V.translate(b.x, b.y), b = {
        x: this.attrs.x + V.getTranslation().x,
        y: this.attrs.y + V.getTranslation().y
      }, this._setTransform(R), this.setPosition({ x: b.x, y: b.y }), this._clearCache(E), this._clearSelfAndDescendantCache(l), this;
    }
    _setTransform(b) {
      let O;
      for (O in b)
        this.attrs[O] = b[O];
    }
    _clearTransform() {
      const b = {
        x: this.x(),
        y: this.y(),
        rotation: this.rotation(),
        scaleX: this.scaleX(),
        scaleY: this.scaleY(),
        offsetX: this.offsetX(),
        offsetY: this.offsetY(),
        skewX: this.skewX(),
        skewY: this.skewY()
      };
      return this.attrs.x = 0, this.attrs.y = 0, this.attrs.rotation = 0, this.attrs.scaleX = 1, this.attrs.scaleY = 1, this.attrs.offsetX = 0, this.attrs.offsetY = 0, this.attrs.skewX = 0, this.attrs.skewY = 0, b;
    }
    move(b) {
      let O = b.x, D = b.y, R = this.x(), V = this.y();
      return O !== void 0 && (R += O), D !== void 0 && (V += D), this.setPosition({ x: R, y: V }), this;
    }
    _eachAncestorReverse(b, O) {
      let D = [], R = this.getParent(), V, W;
      if (!(O && O._id === this._id)) {
        for (D.unshift(this); R && (!O || R._id !== O._id); )
          D.unshift(R), R = R.parent;
        for (V = D.length, W = 0; W < V; W++)
          b(D[W]);
      }
    }
    rotate(b) {
      return this.rotation(this.rotation() + b), this;
    }
    moveToTop() {
      if (!this.parent)
        return i.Util.warn("Node has no parent. moveToTop function is ignored."), !1;
      const b = this.index, O = this.parent.getChildren().length;
      return b < O - 1 ? (this.parent.children.splice(b, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0) : !1;
    }
    moveUp() {
      if (!this.parent)
        return i.Util.warn("Node has no parent. moveUp function is ignored."), !1;
      const b = this.index, O = this.parent.getChildren().length;
      return b < O - 1 ? (this.parent.children.splice(b, 1), this.parent.children.splice(b + 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
    }
    moveDown() {
      if (!this.parent)
        return i.Util.warn("Node has no parent. moveDown function is ignored."), !1;
      const b = this.index;
      return b > 0 ? (this.parent.children.splice(b, 1), this.parent.children.splice(b - 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
    }
    moveToBottom() {
      if (!this.parent)
        return i.Util.warn("Node has no parent. moveToBottom function is ignored."), !1;
      const b = this.index;
      return b > 0 ? (this.parent.children.splice(b, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0) : !1;
    }
    setZIndex(b) {
      if (!this.parent)
        return i.Util.warn("Node has no parent. zIndex parameter is ignored."), this;
      (b < 0 || b >= this.parent.children.length) && i.Util.warn("Unexpected value " + b + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
      const O = this.index;
      return this.parent.children.splice(O, 1), this.parent.children.splice(b, 0, this), this.parent._setChildrenIndices(), this;
    }
    getAbsoluteOpacity() {
      return this._getCache(a, this._getAbsoluteOpacity);
    }
    _getAbsoluteOpacity() {
      let b = this.opacity();
      const O = this.getParent();
      return O && !O._isUnderCache && (b *= O.getAbsoluteOpacity()), b;
    }
    moveTo(b) {
      return this.getParent() !== b && (this._remove(), b.add(this)), this;
    }
    toObject() {
      let b = this.getAttrs(), O, D, R, V, W;
      const I = {
        attrs: {},
        className: this.getClassName()
      };
      for (O in b)
        D = b[O], W = i.Util.isObject(D) && !i.Util._isPlainObject(D) && !i.Util._isArray(D), !W && (R = typeof this[O] == "function" && this[O], delete b[O], V = R ? R.call(this) : null, b[O] = D, V !== D && (I.attrs[O] = D));
      return i.Util._prepareToStringify(I);
    }
    toJSON() {
      return JSON.stringify(this.toObject());
    }
    getParent() {
      return this.parent;
    }
    findAncestors(b, O, D) {
      const R = [];
      O && this._isMatch(b) && R.push(this);
      let V = this.parent;
      for (; V; ) {
        if (V === D)
          return R;
        V._isMatch(b) && R.push(V), V = V.parent;
      }
      return R;
    }
    isAncestorOf(b) {
      return !1;
    }
    findAncestor(b, O, D) {
      return this.findAncestors(b, O, D)[0];
    }
    _isMatch(b) {
      if (!b)
        return !1;
      if (typeof b == "function")
        return b(this);
      let O = b.replace(/ /g, "").split(","), D = O.length, R, V;
      for (R = 0; R < D; R++)
        if (V = O[R], i.Util.isValidSelector(V) || (i.Util.warn('Selector "' + V + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'), i.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'), i.Util.warn("Konva is awesome, right?")), V.charAt(0) === "#") {
          if (this.id() === V.slice(1))
            return !0;
        } else if (V.charAt(0) === ".") {
          if (this.hasName(V.slice(1)))
            return !0;
        } else if (this.className === V || this.nodeType === V)
          return !0;
      return !1;
    }
    getLayer() {
      const b = this.getParent();
      return b ? b.getLayer() : null;
    }
    getStage() {
      return this._getCache(C, this._getStage);
    }
    _getStage() {
      const b = this.getParent();
      return b ? b.getStage() : null;
    }
    fire(b, O = {}, D) {
      return O.target = O.target || this, D ? this._fireAndBubble(b, O) : this._fire(b, O), this;
    }
    getAbsoluteTransform(b) {
      return b ? this._getAbsoluteTransform(b) : this._getCache(l, this._getAbsoluteTransform);
    }
    _getAbsoluteTransform(b) {
      let O;
      if (b)
        return O = new i.Transform(), this._eachAncestorReverse(function(D) {
          const R = D.transformsEnabled();
          R === "all" ? O.multiply(D.getTransform()) : R === "position" && O.translate(D.x() - D.offsetX(), D.y() - D.offsetY());
        }, b), O;
      {
        O = this._cache.get(l) || new i.Transform(), this.parent ? this.parent.getAbsoluteTransform().copyInto(O) : O.reset();
        const D = this.transformsEnabled();
        if (D === "all")
          O.multiply(this.getTransform());
        else if (D === "position") {
          const R = this.attrs.x || 0, V = this.attrs.y || 0, W = this.attrs.offsetX || 0, I = this.attrs.offsetY || 0;
          O.translate(R - W, V - I);
        }
        return O.dirty = !1, O;
      }
    }
    getAbsoluteScale(b) {
      let O = this;
      for (; O; )
        O._isUnderCache && (b = O), O = O.getParent();
      const R = this.getAbsoluteTransform(b).decompose();
      return {
        x: R.scaleX,
        y: R.scaleY
      };
    }
    getAbsoluteRotation() {
      return this.getAbsoluteTransform().decompose().rotation;
    }
    getTransform() {
      return this._getCache(E, this._getTransform);
    }
    _getTransform() {
      var b, O;
      const D = this._cache.get(E) || new i.Transform();
      D.reset();
      const R = this.x(), V = this.y(), W = r.Konva.getAngle(this.rotation()), I = (b = this.attrs.scaleX) !== null && b !== void 0 ? b : 1, J = (O = this.attrs.scaleY) !== null && O !== void 0 ? O : 1, ot = this.attrs.skewX || 0, q = this.attrs.skewY || 0, M = this.attrs.offsetX || 0, $ = this.attrs.offsetY || 0;
      return (R !== 0 || V !== 0) && D.translate(R, V), W !== 0 && D.rotate(W), (ot !== 0 || q !== 0) && D.skew(ot, q), (I !== 1 || J !== 1) && D.scale(I, J), (M !== 0 || $ !== 0) && D.translate(-1 * M, -1 * $), D.dirty = !1, D;
    }
    clone(b) {
      let O = i.Util.cloneObject(this.attrs), D, R, V, W, I;
      for (D in b)
        O[D] = b[D];
      const J = new this.constructor(O);
      for (D in this.eventListeners)
        for (R = this.eventListeners[D], V = R.length, W = 0; W < V; W++)
          I = R[W], I.name.indexOf(f) < 0 && (J.eventListeners[D] || (J.eventListeners[D] = []), J.eventListeners[D].push(I));
      return J;
    }
    _toKonvaCanvas(b) {
      b = b || {};
      const O = this.getClientRect(), D = this.getStage(), R = b.x !== void 0 ? b.x : Math.floor(O.x), V = b.y !== void 0 ? b.y : Math.floor(O.y), W = b.pixelRatio || 1, I = new t.SceneCanvas({
        width: b.width || Math.ceil(O.width) || (D ? D.width() : 0),
        height: b.height || Math.ceil(O.height) || (D ? D.height() : 0),
        pixelRatio: W
      }), J = I.getContext(), ot = new t.SceneCanvas({
        width: I.width / I.pixelRatio + Math.abs(R),
        height: I.height / I.pixelRatio + Math.abs(V),
        pixelRatio: I.pixelRatio
      });
      return b.imageSmoothingEnabled === !1 && (J._context.imageSmoothingEnabled = !1), J.save(), (R || V) && J.translate(-1 * R, -1 * V), this.drawScene(I, void 0, ot), J.restore(), I;
    }
    toCanvas(b) {
      return this._toKonvaCanvas(b)._canvas;
    }
    toDataURL(b) {
      b = b || {};
      const O = b.mimeType || null, D = b.quality || null, R = this._toKonvaCanvas(b).toDataURL(O, D);
      return b.callback && b.callback(R), R;
    }
    toImage(b) {
      return new Promise((O, D) => {
        try {
          const R = b == null ? void 0 : b.callback;
          R && delete b.callback, i.Util._urlToImage(this.toDataURL(b), function(V) {
            O(V), R == null || R(V);
          });
        } catch (R) {
          D(R);
        }
      });
    }
    toBlob(b) {
      return new Promise((O, D) => {
        try {
          const R = b == null ? void 0 : b.callback;
          R && delete b.callback, this.toCanvas(b).toBlob((V) => {
            O(V), R == null || R(V);
          }, b == null ? void 0 : b.mimeType, b == null ? void 0 : b.quality);
        } catch (R) {
          D(R);
        }
      });
    }
    setSize(b) {
      return this.width(b.width), this.height(b.height), this;
    }
    getSize() {
      return {
        width: this.width(),
        height: this.height()
      };
    }
    getClassName() {
      return this.className || this.nodeType;
    }
    getType() {
      return this.nodeType;
    }
    getDragDistance() {
      return this.attrs.dragDistance !== void 0 ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : r.Konva.dragDistance;
    }
    _off(b, O, D) {
      let R = this.eventListeners[b], V, W, I;
      for (V = 0; V < R.length; V++)
        if (W = R[V].name, I = R[V].handler, (W !== "konva" || O === "konva") && (!O || W === O) && (!D || D === I)) {
          if (R.splice(V, 1), R.length === 0) {
            delete this.eventListeners[b];
            break;
          }
          V--;
        }
    }
    _fireChangeEvent(b, O, D) {
      this._fire(b + d, {
        oldVal: O,
        newVal: D
      });
    }
    addName(b) {
      if (!this.hasName(b)) {
        const O = this.name(), D = O ? O + " " + b : b;
        this.name(D);
      }
      return this;
    }
    hasName(b) {
      if (!b)
        return !1;
      const O = this.name();
      return O ? (O || "").split(/\s/g).indexOf(b) !== -1 : !1;
    }
    removeName(b) {
      const O = (this.name() || "").split(/\s/g), D = O.indexOf(b);
      return D !== -1 && (O.splice(D, 1), this.name(O.join(" "))), this;
    }
    setAttr(b, O) {
      const D = this[y + i.Util._capitalize(b)];
      return i.Util._isFunction(D) ? D.call(this, O) : this._setAttr(b, O), this;
    }
    _requestDraw() {
      if (r.Konva.autoDrawEnabled) {
        const b = this.getLayer() || this.getStage();
        b == null || b.batchDraw();
      }
    }
    _setAttr(b, O) {
      const D = this.attrs[b];
      D === O && !i.Util.isObject(O) || (O == null ? delete this.attrs[b] : this.attrs[b] = O, this._shouldFireChangeEvents && this._fireChangeEvent(b, D, O), this._requestDraw());
    }
    _setComponentAttr(b, O, D) {
      let R;
      D !== void 0 && (R = this.attrs[b], R || (this.attrs[b] = this.getAttr(b)), this.attrs[b][O] = D, this._fireChangeEvent(b, R, D));
    }
    _fireAndBubble(b, O, D) {
      O && this.nodeType === x && (O.target = this);
      const R = [
        v,
        S,
        w,
        p,
        h,
        _
      ];
      if (!(R.indexOf(b) !== -1 && (D && (this === D || this.isAncestorOf && this.isAncestorOf(D)) || this.nodeType === "Stage" && !D))) {
        this._fire(b, O);
        const W = R.indexOf(b) !== -1 && D && D.isAncestorOf && D.isAncestorOf(this) && !D.isAncestorOf(this.parent);
        (O && !O.cancelBubble || !O) && this.parent && this.parent.isListening() && !W && (D && D.parent ? this._fireAndBubble.call(this.parent, b, O, D) : this._fireAndBubble.call(this.parent, b, O));
      }
    }
    _getProtoListeners(b) {
      var O, D, R;
      const V = (O = this._cache.get(o)) !== null && O !== void 0 ? O : {};
      let W = V == null ? void 0 : V[b];
      if (W === void 0) {
        W = [];
        let I = Object.getPrototypeOf(this);
        for (; I; ) {
          const J = (R = (D = I.eventListeners) === null || D === void 0 ? void 0 : D[b]) !== null && R !== void 0 ? R : [];
          W.push(...J), I = Object.getPrototypeOf(I);
        }
        V[b] = W, this._cache.set(o, V);
      }
      return W;
    }
    _fire(b, O) {
      O = O || {}, O.currentTarget = this, O.type = b;
      const D = this._getProtoListeners(b);
      if (D)
        for (let V = 0; V < D.length; V++)
          D[V].handler.call(this, O);
      const R = this.eventListeners[b];
      if (R)
        for (let V = 0; V < R.length; V++)
          R[V].handler.call(this, O);
    }
    draw() {
      return this.drawScene(), this.drawHit(), this;
    }
    _createDragElement(b) {
      const O = b ? b.pointerId : void 0, D = this.getStage(), R = this.getAbsolutePosition();
      if (!D)
        return;
      const V = D._getPointerById(O) || D._changedPointerPositions[0] || R;
      e.DD._dragElements.set(this._id, {
        node: this,
        startPointerPos: V,
        offset: {
          x: V.x - R.x,
          y: V.y - R.y
        },
        dragStatus: "ready",
        pointerId: O
      });
    }
    startDrag(b, O = !0) {
      e.DD._dragElements.has(this._id) || this._createDragElement(b);
      const D = e.DD._dragElements.get(this._id);
      D.dragStatus = "dragging", this.fire("dragstart", {
        type: "dragstart",
        target: this,
        evt: b && b.evt
      }, O);
    }
    _setDragPosition(b, O) {
      const D = this.getStage()._getPointerById(O.pointerId);
      if (!D)
        return;
      let R = {
        x: D.x - O.offset.x,
        y: D.y - O.offset.y
      };
      const V = this.dragBoundFunc();
      if (V !== void 0) {
        const W = V.call(this, R, b);
        W ? R = W : i.Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
      }
      (!this._lastPos || this._lastPos.x !== R.x || this._lastPos.y !== R.y) && (this.setAbsolutePosition(R), this._requestDraw()), this._lastPos = R;
    }
    stopDrag(b) {
      const O = e.DD._dragElements.get(this._id);
      O && (O.dragStatus = "stopped"), e.DD._endDragBefore(b), e.DD._endDragAfter(b);
    }
    setDraggable(b) {
      this._setAttr("draggable", b), this._dragChange();
    }
    isDragging() {
      const b = e.DD._dragElements.get(this._id);
      return b ? b.dragStatus === "dragging" : !1;
    }
    _listenDrag() {
      this._dragCleanup(), this.on("mousedown.konva touchstart.konva", function(b) {
        if (!(!(b.evt.button !== void 0) || r.Konva.dragButtons.indexOf(b.evt.button) >= 0) || this.isDragging())
          return;
        let R = !1;
        e.DD._dragElements.forEach((V) => {
          this.isAncestorOf(V.node) && (R = !0);
        }), R || this._createDragElement(b);
      });
    }
    _dragChange() {
      if (this.attrs.draggable)
        this._listenDrag();
      else {
        if (this._dragCleanup(), !this.getStage())
          return;
        const O = e.DD._dragElements.get(this._id), D = O && O.dragStatus === "dragging", R = O && O.dragStatus === "ready";
        D ? this.stopDrag() : R && e.DD._dragElements.delete(this._id);
      }
    }
    _dragCleanup() {
      this.off("mousedown.konva"), this.off("touchstart.konva");
    }
    isClientRectOnScreen(b = { x: 0, y: 0 }) {
      const O = this.getStage();
      if (!O)
        return !1;
      const D = {
        x: -b.x,
        y: -b.y,
        width: O.width() + 2 * b.x,
        height: O.height() + 2 * b.y
      };
      return i.Util.haveIntersection(D, this.getClientRect());
    }
    static create(b, O) {
      return i.Util._isString(b) && (b = JSON.parse(b)), this._createNode(b, O);
    }
    static _createNode(b, O) {
      let D = Rs.prototype.getClassName.call(b), R = b.children, V, W, I;
      O && (b.attrs.container = O), r.Konva[D] || (i.Util.warn('Can not find a node with class name "' + D + '". Fallback to "Shape".'), D = "Shape");
      const J = r.Konva[D];
      if (V = new J(b.attrs), R)
        for (W = R.length, I = 0; I < W; I++)
          V.add(Rs._createNode(R[I]));
      return V;
    }
  };
  Rn.Node = B, B.prototype.nodeType = "Node", B.prototype._attrsAffectingSize = [], B.prototype.eventListeners = {}, B.prototype.on.call(B.prototype, F, function() {
    if (this._batchingTransformChange) {
      this._needClearTransformCache = !0;
      return;
    }
    this._clearCache(E), this._clearSelfAndDescendantCache(l);
  }), B.prototype.on.call(B.prototype, "visibleChange.konva", function() {
    this._clearSelfAndDescendantCache(A);
  }), B.prototype.on.call(B.prototype, "listeningChange.konva", function() {
    this._clearSelfAndDescendantCache(m);
  }), B.prototype.on.call(B.prototype, "opacityChange.konva", function() {
    this._clearSelfAndDescendantCache(a);
  });
  const L = n.Factory.addGetterSetter;
  return L(B, "zIndex"), L(B, "absolutePosition"), L(B, "position"), L(B, "x", 0, (0, s.getNumberValidator)()), L(B, "y", 0, (0, s.getNumberValidator)()), L(B, "globalCompositeOperation", "source-over", (0, s.getStringValidator)()), L(B, "opacity", 1, (0, s.getNumberValidator)()), L(B, "name", "", (0, s.getStringValidator)()), L(B, "id", "", (0, s.getStringValidator)()), L(B, "rotation", 0, (0, s.getNumberValidator)()), n.Factory.addComponentsGetterSetter(B, "scale", ["x", "y"]), L(B, "scaleX", 1, (0, s.getNumberValidator)()), L(B, "scaleY", 1, (0, s.getNumberValidator)()), n.Factory.addComponentsGetterSetter(B, "skew", ["x", "y"]), L(B, "skewX", 0, (0, s.getNumberValidator)()), L(B, "skewY", 0, (0, s.getNumberValidator)()), n.Factory.addComponentsGetterSetter(B, "offset", ["x", "y"]), L(B, "offsetX", 0, (0, s.getNumberValidator)()), L(B, "offsetY", 0, (0, s.getNumberValidator)()), L(B, "dragDistance", void 0, (0, s.getNumberValidator)()), L(B, "width", 0, (0, s.getNumberValidator)()), L(B, "height", 0, (0, s.getNumberValidator)()), L(B, "listening", !0, (0, s.getBooleanValidator)()), L(B, "preventDefault", !0, (0, s.getBooleanValidator)()), L(B, "filters", void 0, function(X) {
    return this._filterUpToDate = !1, X;
  }), L(B, "visible", !0, (0, s.getBooleanValidator)()), L(B, "transformsEnabled", "all", (0, s.getStringValidator)()), L(B, "size"), L(B, "dragBoundFunc"), L(B, "draggable", !1, (0, s.getBooleanValidator)()), n.Factory.backCompat(B, {
    rotateDeg: "rotate",
    setRotationDeg: "setRotation",
    getRotationDeg: "getRotation"
  }), Rn;
}
var Dn = {}, sa;
function jr() {
  if (sa) return Dn;
  sa = 1, Object.defineProperty(Dn, "__esModule", { value: !0 }), Dn.Container = void 0;
  const t = bt(), e = It(), n = St();
  let r = class extends e.Node {
    constructor() {
      super(...arguments), this.children = [];
    }
    getChildren(s) {
      const a = this.children || [];
      return s ? a.filter(s) : a;
    }
    hasChildren() {
      return this.getChildren().length > 0;
    }
    removeChildren() {
      return this.getChildren().forEach((s) => {
        s.parent = null, s.index = 0, s.remove();
      }), this.children = [], this._requestDraw(), this;
    }
    destroyChildren() {
      return this.getChildren().forEach((s) => {
        s.parent = null, s.index = 0, s.destroy();
      }), this.children = [], this._requestDraw(), this;
    }
    add(...s) {
      if (s.length === 0)
        return this;
      if (s.length > 1) {
        for (let o = 0; o < s.length; o++)
          this.add(s[o]);
        return this;
      }
      const a = s[0];
      return a.getParent() ? (a.moveTo(this), this) : (this._validateAdd(a), a.index = this.getChildren().length, a.parent = this, a._clearCaches(), this.getChildren().push(a), this._fire("add", {
        child: a
      }), this._requestDraw(), this);
    }
    destroy() {
      return this.hasChildren() && this.destroyChildren(), super.destroy(), this;
    }
    find(s) {
      return this._generalFind(s, !1);
    }
    findOne(s) {
      const a = this._generalFind(s, !0);
      return a.length > 0 ? a[0] : void 0;
    }
    _generalFind(s, a) {
      const o = [];
      return this._descendants((l) => {
        const u = l._isMatch(s);
        return u && o.push(l), !!(u && a);
      }), o;
    }
    _descendants(s) {
      let a = !1;
      const o = this.getChildren();
      for (const l of o) {
        if (a = s(l), a)
          return !0;
        if (l.hasChildren() && (a = l._descendants(s), a))
          return !0;
      }
      return !1;
    }
    toObject() {
      const s = e.Node.prototype.toObject.call(this);
      return s.children = [], this.getChildren().forEach((a) => {
        s.children.push(a.toObject());
      }), s;
    }
    isAncestorOf(s) {
      let a = s.getParent();
      for (; a; ) {
        if (a._id === this._id)
          return !0;
        a = a.getParent();
      }
      return !1;
    }
    clone(s) {
      const a = e.Node.prototype.clone.call(this, s);
      return this.getChildren().forEach(function(o) {
        a.add(o.clone());
      }), a;
    }
    getAllIntersections(s) {
      const a = [];
      return this.find("Shape").forEach((o) => {
        o.isVisible() && o.intersects(s) && a.push(o);
      }), a;
    }
    _clearSelfAndDescendantCache(s) {
      var a;
      super._clearSelfAndDescendantCache(s), !this.isCached() && ((a = this.children) === null || a === void 0 || a.forEach(function(o) {
        o._clearSelfAndDescendantCache(s);
      }));
    }
    _setChildrenIndices() {
      var s;
      (s = this.children) === null || s === void 0 || s.forEach(function(a, o) {
        a.index = o;
      }), this._requestDraw();
    }
    drawScene(s, a, o) {
      const l = this.getLayer(), u = s || l && l.getCanvas(), c = u && u.getContext(), d = this._getCanvasCache(), g = d && d.scene, f = u && u.isCache;
      if (!this.isVisible() && !f)
        return this;
      if (g) {
        c.save();
        const m = this.getAbsoluteTransform(a).getMatrix();
        c.transform(m[0], m[1], m[2], m[3], m[4], m[5]), this._drawCachedSceneCanvas(c), c.restore();
      } else
        this._drawChildren("drawScene", u, a, o);
      return this;
    }
    drawHit(s, a) {
      if (!this.shouldDrawHit(a))
        return this;
      const o = this.getLayer(), l = s || o && o.hitCanvas, u = l && l.getContext(), c = this._getCanvasCache();
      if (c && c.hit) {
        u.save();
        const g = this.getAbsoluteTransform(a).getMatrix();
        u.transform(g[0], g[1], g[2], g[3], g[4], g[5]), this._drawCachedHitCanvas(u), u.restore();
      } else
        this._drawChildren("drawHit", l, a);
      return this;
    }
    _drawChildren(s, a, o, l) {
      var u;
      const c = a && a.getContext(), d = this.clipWidth(), g = this.clipHeight(), f = this.clipFunc(), m = typeof d == "number" && typeof g == "number" || f, v = o === this;
      if (m) {
        c.save();
        const w = this.getAbsoluteTransform(o);
        let p = w.getMatrix();
        c.transform(p[0], p[1], p[2], p[3], p[4], p[5]), c.beginPath();
        let h;
        if (f)
          h = f.call(this, c, this);
        else {
          const _ = this.clipX(), y = this.clipY();
          c.rect(_ || 0, y || 0, d, g);
        }
        c.clip.apply(c, h), p = w.copy().invert().getMatrix(), c.transform(p[0], p[1], p[2], p[3], p[4], p[5]);
      }
      const S = !v && this.globalCompositeOperation() !== "source-over" && s === "drawScene";
      S && (c.save(), c._applyGlobalCompositeOperation(this)), (u = this.children) === null || u === void 0 || u.forEach(function(w) {
        w[s](a, o, l);
      }), S && c.restore(), m && c.restore();
    }
    getClientRect(s = {}) {
      var a;
      const o = s.skipTransform, l = s.relativeTo;
      let u, c, d, g, f = {
        x: 1 / 0,
        y: 1 / 0,
        width: 0,
        height: 0
      };
      const m = this;
      (a = this.children) === null || a === void 0 || a.forEach(function(w) {
        if (!w.visible())
          return;
        const p = w.getClientRect({
          relativeTo: m,
          skipShadow: s.skipShadow,
          skipStroke: s.skipStroke
        });
        p.width === 0 && p.height === 0 || (u === void 0 ? (u = p.x, c = p.y, d = p.x + p.width, g = p.y + p.height) : (u = Math.min(u, p.x), c = Math.min(c, p.y), d = Math.max(d, p.x + p.width), g = Math.max(g, p.y + p.height)));
      });
      const v = this.find("Shape");
      let S = !1;
      for (let w = 0; w < v.length; w++)
        if (v[w]._isVisible(this)) {
          S = !0;
          break;
        }
      return S && u !== void 0 ? f = {
        x: u,
        y: c,
        width: d - u,
        height: g - c
      } : f = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }, o ? f : this._transformedRect(f, l);
    }
  };
  return Dn.Container = r, t.Factory.addComponentsGetterSetter(r, "clip", [
    "x",
    "y",
    "width",
    "height"
  ]), t.Factory.addGetterSetter(r, "clipX", void 0, (0, n.getNumberValidator)()), t.Factory.addGetterSetter(r, "clipY", void 0, (0, n.getNumberValidator)()), t.Factory.addGetterSetter(r, "clipWidth", void 0, (0, n.getNumberValidator)()), t.Factory.addGetterSetter(r, "clipHeight", void 0, (0, n.getNumberValidator)()), t.Factory.addGetterSetter(r, "clipFunc"), Dn;
}
var os = {}, Ie = {}, oa;
function Oc() {
  if (oa) return Ie;
  oa = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.getCapturedShape = r, Ie.createEvent = i, Ie.hasPointerCapture = s, Ie.setPointerCapture = a, Ie.releaseCapture = o;
  const t = vt(), e = /* @__PURE__ */ new Map(), n = t.Konva._global.PointerEvent !== void 0;
  function r(l) {
    return e.get(l);
  }
  function i(l) {
    return {
      evt: l,
      pointerId: l.pointerId
    };
  }
  function s(l, u) {
    return e.get(l) === u;
  }
  function a(l, u) {
    o(l), u.getStage() && (e.set(l, u), n && u._fire("gotpointercapture", i(new PointerEvent("gotpointercapture"))));
  }
  function o(l, u) {
    const c = e.get(l);
    if (!c)
      return;
    const d = c.getStage();
    d && d.content, e.delete(l), n && c._fire("lostpointercapture", i(new PointerEvent("lostpointercapture")));
  }
  return Ie;
}
var aa;
function tf() {
  return aa || (aa = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Stage = t.stages = void 0;
    const e = kt(), n = bt(), r = jr(), i = vt(), s = Hr(), a = Zs(), o = vt(), l = Oc(), u = "Stage", c = "string", d = "px", g = "mouseout", f = "mouseleave", m = "mouseover", v = "mouseenter", S = "mousemove", w = "mousedown", p = "mouseup", h = "pointermove", _ = "pointerdown", y = "pointerup", x = "pointercancel", P = "lostpointercapture", C = "pointerout", E = "pointerleave", N = "pointerover", A = "pointerenter", F = "contextmenu", G = "touchstart", B = "touchend", L = "touchmove", X = "touchcancel", b = "wheel", O = 5, D = [
      [v, "_pointerenter"],
      [w, "_pointerdown"],
      [S, "_pointermove"],
      [p, "_pointerup"],
      [f, "_pointerleave"],
      [G, "_pointerdown"],
      [L, "_pointermove"],
      [B, "_pointerup"],
      [X, "_pointercancel"],
      [m, "_pointerover"],
      [b, "_wheel"],
      [F, "_contextmenu"],
      [_, "_pointerdown"],
      [h, "_pointermove"],
      [y, "_pointerup"],
      [x, "_pointercancel"],
      [E, "_pointerleave"],
      [P, "_lostpointercapture"]
    ], R = {
      mouse: {
        [C]: g,
        [E]: f,
        [N]: m,
        [A]: v,
        [h]: S,
        [_]: w,
        [y]: p,
        [x]: "mousecancel",
        pointerclick: "click",
        pointerdblclick: "dblclick"
      },
      touch: {
        [C]: "touchout",
        [E]: "touchleave",
        [N]: "touchover",
        [A]: "touchenter",
        [h]: L,
        [_]: G,
        [y]: B,
        [x]: X,
        pointerclick: "tap",
        pointerdblclick: "dbltap"
      },
      pointer: {
        [C]: C,
        [E]: E,
        [N]: N,
        [A]: A,
        [h]: h,
        [_]: _,
        [y]: y,
        [x]: x,
        pointerclick: "pointerclick",
        pointerdblclick: "pointerdblclick"
      }
    }, V = (q) => q.indexOf("pointer") >= 0 ? "pointer" : q.indexOf("touch") >= 0 ? "touch" : "mouse", W = (q) => {
      const M = V(q);
      if (M === "pointer")
        return i.Konva.pointerEventsEnabled && R.pointer;
      if (M === "touch")
        return R.touch;
      if (M === "mouse")
        return R.mouse;
    };
    function I(q = {}) {
      return (q.clipFunc || q.clipWidth || q.clipHeight) && e.Util.warn("Stage does not support clipping. Please use clip for Layers or Groups."), q;
    }
    const J = "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);";
    t.stages = [];
    class ot extends r.Container {
      constructor(M) {
        super(I(M)), this._pointerPositions = [], this._changedPointerPositions = [], this._buildDOM(), this._bindContentEvents(), t.stages.push(this), this.on("widthChange.konva heightChange.konva", this._resizeDOM), this.on("visibleChange.konva", this._checkVisibility), this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
          I(this.attrs);
        }), this._checkVisibility();
      }
      _validateAdd(M) {
        const $ = M.getType() === "Layer", Z = M.getType() === "FastLayer";
        $ || Z || e.Util.throw("You may only add layers to the stage.");
      }
      _checkVisibility() {
        if (!this.content)
          return;
        const M = this.visible() ? "" : "none";
        this.content.style.display = M;
      }
      setContainer(M) {
        if (typeof M === c) {
          let $;
          if (M.charAt(0) === ".") {
            const Z = M.slice(1);
            M = document.getElementsByClassName(Z)[0];
          } else
            M.charAt(0) !== "#" ? $ = M : $ = M.slice(1), M = document.getElementById($);
          if (!M)
            throw "Can not find container in document with id " + $;
        }
        return this._setAttr("container", M), this.content && (this.content.parentElement && this.content.parentElement.removeChild(this.content), M.appendChild(this.content)), this;
      }
      shouldDrawHit() {
        return !0;
      }
      clear() {
        const M = this.children, $ = M.length;
        for (let Z = 0; Z < $; Z++)
          M[Z].clear();
        return this;
      }
      clone(M) {
        return M || (M = {}), M.container = typeof document < "u" && document.createElement("div"), r.Container.prototype.clone.call(this, M);
      }
      destroy() {
        super.destroy();
        const M = this.content;
        M && e.Util._isInDocument(M) && this.container().removeChild(M);
        const $ = t.stages.indexOf(this);
        return $ > -1 && t.stages.splice($, 1), e.Util.releaseCanvas(this.bufferCanvas._canvas, this.bufferHitCanvas._canvas), this;
      }
      getPointerPosition() {
        const M = this._pointerPositions[0] || this._changedPointerPositions[0];
        return M ? {
          x: M.x,
          y: M.y
        } : (e.Util.warn(J), null);
      }
      _getPointerById(M) {
        return this._pointerPositions.find(($) => $.id === M);
      }
      getPointersPositions() {
        return this._pointerPositions;
      }
      getStage() {
        return this;
      }
      getContent() {
        return this.content;
      }
      _toKonvaCanvas(M) {
        M = M || {}, M.x = M.x || 0, M.y = M.y || 0, M.width = M.width || this.width(), M.height = M.height || this.height();
        const $ = new s.SceneCanvas({
          width: M.width,
          height: M.height,
          pixelRatio: M.pixelRatio || 1
        }), Z = $.getContext()._context, j = this.children;
        return (M.x || M.y) && Z.translate(-1 * M.x, -1 * M.y), j.forEach(function(at) {
          if (!at.isVisible())
            return;
          const ft = at._toKonvaCanvas(M);
          Z.drawImage(ft._canvas, M.x, M.y, ft.getWidth() / ft.getPixelRatio(), ft.getHeight() / ft.getPixelRatio());
        }), $;
      }
      getIntersection(M) {
        if (!M)
          return null;
        const $ = this.children, Z = $.length, j = Z - 1;
        for (let at = j; at >= 0; at--) {
          const ft = $[at].getIntersection(M);
          if (ft)
            return ft;
        }
        return null;
      }
      _resizeDOM() {
        const M = this.width(), $ = this.height();
        this.content && (this.content.style.width = M + d, this.content.style.height = $ + d), this.bufferCanvas.setSize(M, $), this.bufferHitCanvas.setSize(M, $), this.children.forEach((Z) => {
          Z.setSize({ width: M, height: $ }), Z.draw();
        });
      }
      add(M, ...$) {
        if (arguments.length > 1) {
          for (let j = 0; j < arguments.length; j++)
            this.add(arguments[j]);
          return this;
        }
        super.add(M);
        const Z = this.children.length;
        return Z > O && e.Util.warn("The stage has " + Z + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."), M.setSize({ width: this.width(), height: this.height() }), M.draw(), i.Konva.isBrowser && this.content.appendChild(M.canvas._canvas), this;
      }
      getParent() {
        return null;
      }
      getLayer() {
        return null;
      }
      hasPointerCapture(M) {
        return l.hasPointerCapture(M, this);
      }
      setPointerCapture(M) {
        l.setPointerCapture(M, this);
      }
      releaseCapture(M) {
        l.releaseCapture(M, this);
      }
      getLayers() {
        return this.children;
      }
      _bindContentEvents() {
        i.Konva.isBrowser && D.forEach(([M, $]) => {
          this.content.addEventListener(M, (Z) => {
            this[$](Z);
          }, { passive: !1 });
        });
      }
      _pointerenter(M) {
        this.setPointersPositions(M);
        const $ = W(M.type);
        $ && this._fire($.pointerenter, {
          evt: M,
          target: this,
          currentTarget: this
        });
      }
      _pointerover(M) {
        this.setPointersPositions(M);
        const $ = W(M.type);
        $ && this._fire($.pointerover, {
          evt: M,
          target: this,
          currentTarget: this
        });
      }
      _getTargetShape(M) {
        let $ = this[M + "targetShape"];
        return $ && !$.getStage() && ($ = null), $;
      }
      _pointerleave(M) {
        const $ = W(M.type), Z = V(M.type);
        if (!$)
          return;
        this.setPointersPositions(M);
        const j = this._getTargetShape(Z), at = !(i.Konva.isDragging() || i.Konva.isTransforming()) || i.Konva.hitOnDragEnabled;
        j && at ? (j._fireAndBubble($.pointerout, { evt: M }), j._fireAndBubble($.pointerleave, { evt: M }), this._fire($.pointerleave, {
          evt: M,
          target: this,
          currentTarget: this
        }), this[Z + "targetShape"] = null) : at && (this._fire($.pointerleave, {
          evt: M,
          target: this,
          currentTarget: this
        }), this._fire($.pointerout, {
          evt: M,
          target: this,
          currentTarget: this
        })), this.pointerPos = null, this._pointerPositions = [];
      }
      _pointerdown(M) {
        const $ = W(M.type), Z = V(M.type);
        if (!$)
          return;
        this.setPointersPositions(M);
        let j = !1;
        this._changedPointerPositions.forEach((at) => {
          const ft = this.getIntersection(at);
          if (a.DD.justDragged = !1, i.Konva["_" + Z + "ListenClick"] = !0, !ft || !ft.isListening()) {
            this[Z + "ClickStartShape"] = void 0;
            return;
          }
          i.Konva.capturePointerEventsEnabled && ft.setPointerCapture(at.id), this[Z + "ClickStartShape"] = ft, ft._fireAndBubble($.pointerdown, {
            evt: M,
            pointerId: at.id
          }), j = !0;
          const T = M.type.indexOf("touch") >= 0;
          ft.preventDefault() && M.cancelable && T && M.preventDefault();
        }), j || this._fire($.pointerdown, {
          evt: M,
          target: this,
          currentTarget: this,
          pointerId: this._pointerPositions[0].id
        });
      }
      _pointermove(M) {
        const $ = W(M.type), Z = V(M.type);
        if (!$ || (i.Konva.isDragging() && a.DD.node.preventDefault() && M.cancelable && M.preventDefault(), this.setPointersPositions(M), !(!(i.Konva.isDragging() || i.Konva.isTransforming()) || i.Konva.hitOnDragEnabled)))
          return;
        const at = {};
        let ft = !1;
        const T = this._getTargetShape(Z);
        this._changedPointerPositions.forEach((k) => {
          const H = l.getCapturedShape(k.id) || this.getIntersection(k), Y = k.id, K = { evt: M, pointerId: Y }, U = T !== H;
          if (U && T && (T._fireAndBubble($.pointerout, { ...K }, H), T._fireAndBubble($.pointerleave, { ...K }, H)), H) {
            if (at[H._id])
              return;
            at[H._id] = !0;
          }
          H && H.isListening() ? (ft = !0, U && (H._fireAndBubble($.pointerover, { ...K }, T), H._fireAndBubble($.pointerenter, { ...K }, T), this[Z + "targetShape"] = H), H._fireAndBubble($.pointermove, { ...K })) : T && (this._fire($.pointerover, {
            evt: M,
            target: this,
            currentTarget: this,
            pointerId: Y
          }), this[Z + "targetShape"] = null);
        }), ft || this._fire($.pointermove, {
          evt: M,
          target: this,
          currentTarget: this,
          pointerId: this._changedPointerPositions[0].id
        });
      }
      _pointerup(M) {
        const $ = W(M.type), Z = V(M.type);
        if (!$)
          return;
        this.setPointersPositions(M);
        const j = this[Z + "ClickStartShape"], at = this[Z + "ClickEndShape"], ft = {};
        let T = !1;
        this._changedPointerPositions.forEach((k) => {
          const H = l.getCapturedShape(k.id) || this.getIntersection(k);
          if (H) {
            if (H.releaseCapture(k.id), ft[H._id])
              return;
            ft[H._id] = !0;
          }
          const Y = k.id, K = { evt: M, pointerId: Y };
          let U = !1;
          i.Konva["_" + Z + "InDblClickWindow"] ? (U = !0, clearTimeout(this[Z + "DblTimeout"])) : a.DD.justDragged || (i.Konva["_" + Z + "InDblClickWindow"] = !0, clearTimeout(this[Z + "DblTimeout"])), this[Z + "DblTimeout"] = setTimeout(function() {
            i.Konva["_" + Z + "InDblClickWindow"] = !1;
          }, i.Konva.dblClickWindow), H && H.isListening() ? (T = !0, this[Z + "ClickEndShape"] = H, H._fireAndBubble($.pointerup, { ...K }), i.Konva["_" + Z + "ListenClick"] && j && j === H && (H._fireAndBubble($.pointerclick, { ...K }), U && at && at === H && H._fireAndBubble($.pointerdblclick, { ...K }))) : (this[Z + "ClickEndShape"] = null, i.Konva["_" + Z + "ListenClick"] && this._fire($.pointerclick, {
            evt: M,
            target: this,
            currentTarget: this,
            pointerId: Y
          }), U && this._fire($.pointerdblclick, {
            evt: M,
            target: this,
            currentTarget: this,
            pointerId: Y
          }));
        }), T || this._fire($.pointerup, {
          evt: M,
          target: this,
          currentTarget: this,
          pointerId: this._changedPointerPositions[0].id
        }), i.Konva["_" + Z + "ListenClick"] = !1, M.cancelable && Z !== "touch" && Z !== "pointer" && M.preventDefault();
      }
      _contextmenu(M) {
        this.setPointersPositions(M);
        const $ = this.getIntersection(this.getPointerPosition());
        $ && $.isListening() ? $._fireAndBubble(F, { evt: M }) : this._fire(F, {
          evt: M,
          target: this,
          currentTarget: this
        });
      }
      _wheel(M) {
        this.setPointersPositions(M);
        const $ = this.getIntersection(this.getPointerPosition());
        $ && $.isListening() ? $._fireAndBubble(b, { evt: M }) : this._fire(b, {
          evt: M,
          target: this,
          currentTarget: this
        });
      }
      _pointercancel(M) {
        this.setPointersPositions(M);
        const $ = l.getCapturedShape(M.pointerId) || this.getIntersection(this.getPointerPosition());
        $ && $._fireAndBubble(y, l.createEvent(M)), l.releaseCapture(M.pointerId);
      }
      _lostpointercapture(M) {
        l.releaseCapture(M.pointerId);
      }
      setPointersPositions(M) {
        const $ = this._getContentPosition();
        let Z = null, j = null;
        M = M || window.event, M.touches !== void 0 ? (this._pointerPositions = [], this._changedPointerPositions = [], Array.prototype.forEach.call(M.touches, (at) => {
          this._pointerPositions.push({
            id: at.identifier,
            x: (at.clientX - $.left) / $.scaleX,
            y: (at.clientY - $.top) / $.scaleY
          });
        }), Array.prototype.forEach.call(M.changedTouches || M.touches, (at) => {
          this._changedPointerPositions.push({
            id: at.identifier,
            x: (at.clientX - $.left) / $.scaleX,
            y: (at.clientY - $.top) / $.scaleY
          });
        })) : (Z = (M.clientX - $.left) / $.scaleX, j = (M.clientY - $.top) / $.scaleY, this.pointerPos = {
          x: Z,
          y: j
        }, this._pointerPositions = [{ x: Z, y: j, id: e.Util._getFirstPointerId(M) }], this._changedPointerPositions = [
          { x: Z, y: j, id: e.Util._getFirstPointerId(M) }
        ]);
      }
      _setPointerPosition(M) {
        e.Util.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'), this.setPointersPositions(M);
      }
      _getContentPosition() {
        if (!this.content || !this.content.getBoundingClientRect)
          return {
            top: 0,
            left: 0,
            scaleX: 1,
            scaleY: 1
          };
        const M = this.content.getBoundingClientRect();
        return {
          top: M.top,
          left: M.left,
          scaleX: M.width / this.content.clientWidth || 1,
          scaleY: M.height / this.content.clientHeight || 1
        };
      }
      _buildDOM() {
        if (this.bufferCanvas = new s.SceneCanvas({
          width: this.width(),
          height: this.height()
        }), this.bufferHitCanvas = new s.HitCanvas({
          pixelRatio: 1,
          width: this.width(),
          height: this.height()
        }), !i.Konva.isBrowser)
          return;
        const M = this.container();
        if (!M)
          throw "Stage has no container. A container is required.";
        M.innerHTML = "", this.content = document.createElement("div"), this.content.style.position = "relative", this.content.style.userSelect = "none", this.content.className = "konvajs-content", this.content.setAttribute("role", "presentation"), M.appendChild(this.content), this._resizeDOM();
      }
      cache() {
        return e.Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."), this;
      }
      clearCache() {
        return this;
      }
      batchDraw() {
        return this.getChildren().forEach(function(M) {
          M.batchDraw();
        }), this;
      }
    }
    t.Stage = ot, ot.prototype.nodeType = u, (0, o._registerNode)(ot), n.Factory.addGetterSetter(ot, "container"), i.Konva.isBrowser && document.addEventListener("visibilitychange", () => {
      t.stages.forEach((q) => {
        q.batchDraw();
      });
    });
  })(os)), os;
}
var Mn = {}, as = {}, la;
function $t() {
  return la || (la = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Shape = t.shapes = void 0;
    const e = vt(), n = kt(), r = bt(), i = It(), s = St(), a = vt(), o = Oc(), l = "hasShadow", u = "shadowRGBA", c = "patternImage", d = "linearGradient", g = "radialGradient";
    let f;
    function m() {
      return f || (f = n.Util.createCanvasElement().getContext("2d"), f);
    }
    t.shapes = {};
    function v(E) {
      const N = this.attrs.fillRule;
      N ? E.fill(N) : E.fill();
    }
    function S(E) {
      E.stroke();
    }
    function w(E) {
      const N = this.attrs.fillRule;
      N ? E.fill(N) : E.fill();
    }
    function p(E) {
      E.stroke();
    }
    function h() {
      this._clearCache(l);
    }
    function _() {
      this._clearCache(u);
    }
    function y() {
      this._clearCache(c);
    }
    function x() {
      this._clearCache(d);
    }
    function P() {
      this._clearCache(g);
    }
    class C extends i.Node {
      constructor(N) {
        super(N);
        let A;
        for (; A = n.Util.getRandomColor(), !(A && !(A in t.shapes)); )
          ;
        this.colorKey = A, t.shapes[A] = this;
      }
      getContext() {
        return n.Util.warn("shape.getContext() method is deprecated. Please do not use it."), this.getLayer().getContext();
      }
      getCanvas() {
        return n.Util.warn("shape.getCanvas() method is deprecated. Please do not use it."), this.getLayer().getCanvas();
      }
      getSceneFunc() {
        return this.attrs.sceneFunc || this._sceneFunc;
      }
      getHitFunc() {
        return this.attrs.hitFunc || this._hitFunc;
      }
      hasShadow() {
        return this._getCache(l, this._hasShadow);
      }
      _hasShadow() {
        return this.shadowEnabled() && this.shadowOpacity() !== 0 && !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY());
      }
      _getFillPattern() {
        return this._getCache(c, this.__getFillPattern);
      }
      __getFillPattern() {
        if (this.fillPatternImage()) {
          const A = m().createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
          if (A && A.setTransform) {
            const F = new n.Transform();
            F.translate(this.fillPatternX(), this.fillPatternY()), F.rotate(e.Konva.getAngle(this.fillPatternRotation())), F.scale(this.fillPatternScaleX(), this.fillPatternScaleY()), F.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
            const G = F.getMatrix(), B = typeof DOMMatrix > "u" ? {
              a: G[0],
              b: G[1],
              c: G[2],
              d: G[3],
              e: G[4],
              f: G[5]
            } : new DOMMatrix(G);
            A.setTransform(B);
          }
          return A;
        }
      }
      _getLinearGradient() {
        return this._getCache(d, this.__getLinearGradient);
      }
      __getLinearGradient() {
        const N = this.fillLinearGradientColorStops();
        if (N) {
          const A = m(), F = this.fillLinearGradientStartPoint(), G = this.fillLinearGradientEndPoint(), B = A.createLinearGradient(F.x, F.y, G.x, G.y);
          for (let L = 0; L < N.length; L += 2)
            B.addColorStop(N[L], N[L + 1]);
          return B;
        }
      }
      _getRadialGradient() {
        return this._getCache(g, this.__getRadialGradient);
      }
      __getRadialGradient() {
        const N = this.fillRadialGradientColorStops();
        if (N) {
          const A = m(), F = this.fillRadialGradientStartPoint(), G = this.fillRadialGradientEndPoint(), B = A.createRadialGradient(F.x, F.y, this.fillRadialGradientStartRadius(), G.x, G.y, this.fillRadialGradientEndRadius());
          for (let L = 0; L < N.length; L += 2)
            B.addColorStop(N[L], N[L + 1]);
          return B;
        }
      }
      getShadowRGBA() {
        return this._getCache(u, this._getShadowRGBA);
      }
      _getShadowRGBA() {
        if (!this.hasShadow())
          return;
        const N = n.Util.colorToRGBA(this.shadowColor());
        if (N)
          return "rgba(" + N.r + "," + N.g + "," + N.b + "," + N.a * (this.shadowOpacity() || 1) + ")";
      }
      hasFill() {
        return this._calculate("hasFill", [
          "fillEnabled",
          "fill",
          "fillPatternImage",
          "fillLinearGradientColorStops",
          "fillRadialGradientColorStops"
        ], () => this.fillEnabled() && !!(this.fill() || this.fillPatternImage() || this.fillLinearGradientColorStops() || this.fillRadialGradientColorStops()));
      }
      hasStroke() {
        return this._calculate("hasStroke", [
          "strokeEnabled",
          "strokeWidth",
          "stroke",
          "strokeLinearGradientColorStops"
        ], () => this.strokeEnabled() && this.strokeWidth() && !!(this.stroke() || this.strokeLinearGradientColorStops()));
      }
      hasHitStroke() {
        const N = this.hitStrokeWidth();
        return N === "auto" ? this.hasStroke() : this.strokeEnabled() && !!N;
      }
      intersects(N) {
        const A = this.getStage();
        if (!A)
          return !1;
        const F = A.bufferHitCanvas;
        return F.getContext().clear(), this.drawHit(F, void 0, !0), F.context.getImageData(Math.round(N.x), Math.round(N.y), 1, 1).data[3] > 0;
      }
      destroy() {
        return i.Node.prototype.destroy.call(this), delete t.shapes[this.colorKey], delete this.colorKey, this;
      }
      _useBufferCanvas(N) {
        var A;
        if (!((A = this.attrs.perfectDrawEnabled) !== null && A !== void 0 ? A : !0))
          return !1;
        const G = N || this.hasFill(), B = this.hasStroke(), L = this.getAbsoluteOpacity() !== 1;
        if (G && B && L)
          return !0;
        const X = this.hasShadow(), b = this.shadowForStrokeEnabled();
        return !!(G && B && X && b);
      }
      setStrokeHitEnabled(N) {
        n.Util.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."), N ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0);
      }
      getStrokeHitEnabled() {
        return this.hitStrokeWidth() !== 0;
      }
      getSelfRect() {
        const N = this.size();
        return {
          x: this._centroid ? -N.width / 2 : 0,
          y: this._centroid ? -N.height / 2 : 0,
          width: N.width,
          height: N.height
        };
      }
      getClientRect(N = {}) {
        let A = !1, F = this.getParent();
        for (; F; ) {
          if (F.isCached()) {
            A = !0;
            break;
          }
          F = F.getParent();
        }
        const G = N.skipTransform, B = N.relativeTo || A && this.getStage() || void 0, L = this.getSelfRect(), b = !N.skipStroke && this.hasStroke() && this.strokeWidth() || 0, O = L.width + b, D = L.height + b, R = !N.skipShadow && this.hasShadow(), V = R ? this.shadowOffsetX() : 0, W = R ? this.shadowOffsetY() : 0, I = O + Math.abs(V), J = D + Math.abs(W), ot = R && this.shadowBlur() || 0, q = I + ot * 2, M = J + ot * 2, $ = {
          width: q,
          height: M,
          x: -(b / 2 + ot) + Math.min(V, 0) + L.x,
          y: -(b / 2 + ot) + Math.min(W, 0) + L.y
        };
        return G ? $ : this._transformedRect($, B);
      }
      drawScene(N, A, F) {
        const G = this.getLayer(), B = N || G.getCanvas(), L = B.getContext(), X = this._getCanvasCache(), b = this.getSceneFunc(), O = this.hasShadow();
        let D;
        const R = A === this;
        if (!this.isVisible() && !R)
          return this;
        if (X) {
          L.save();
          const V = this.getAbsoluteTransform(A).getMatrix();
          return L.transform(V[0], V[1], V[2], V[3], V[4], V[5]), this._drawCachedSceneCanvas(L), L.restore(), this;
        }
        if (!b)
          return this;
        if (L.save(), this._useBufferCanvas()) {
          D = this.getStage();
          const V = F || D.bufferCanvas, W = V.getContext();
          W.clear(), W.save(), W._applyLineJoin(this);
          const I = this.getAbsoluteTransform(A).getMatrix();
          W.transform(I[0], I[1], I[2], I[3], I[4], I[5]), b.call(this, W, this), W.restore();
          const J = V.pixelRatio;
          O && L._applyShadow(this), L._applyOpacity(this), L._applyGlobalCompositeOperation(this), L.drawImage(V._canvas, V.x || 0, V.y || 0, V.width / J, V.height / J);
        } else {
          if (L._applyLineJoin(this), !R) {
            const V = this.getAbsoluteTransform(A).getMatrix();
            L.transform(V[0], V[1], V[2], V[3], V[4], V[5]), L._applyOpacity(this), L._applyGlobalCompositeOperation(this);
          }
          O && L._applyShadow(this), b.call(this, L, this);
        }
        return L.restore(), this;
      }
      drawHit(N, A, F = !1) {
        if (!this.shouldDrawHit(A, F))
          return this;
        const G = this.getLayer(), B = N || G.hitCanvas, L = B && B.getContext(), X = this.hitFunc() || this.sceneFunc(), b = this._getCanvasCache(), O = b && b.hit;
        if (this.colorKey || n.Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"), O) {
          L.save();
          const R = this.getAbsoluteTransform(A).getMatrix();
          return L.transform(R[0], R[1], R[2], R[3], R[4], R[5]), this._drawCachedHitCanvas(L), L.restore(), this;
        }
        if (!X)
          return this;
        if (L.save(), L._applyLineJoin(this), !(this === A)) {
          const R = this.getAbsoluteTransform(A).getMatrix();
          L.transform(R[0], R[1], R[2], R[3], R[4], R[5]);
        }
        return X.call(this, L, this), L.restore(), this;
      }
      drawHitFromCache(N = 0) {
        const A = this._getCanvasCache(), F = this._getCachedSceneCanvas(), G = A.hit, B = G.getContext(), L = G.getWidth(), X = G.getHeight();
        B.clear(), B.drawImage(F._canvas, 0, 0, L, X);
        try {
          const b = B.getImageData(0, 0, L, X), O = b.data, D = O.length, R = n.Util._hexToRgb(this.colorKey);
          for (let V = 0; V < D; V += 4)
            O[V + 3] > N ? (O[V] = R.r, O[V + 1] = R.g, O[V + 2] = R.b, O[V + 3] = 255) : O[V + 3] = 0;
          B.putImageData(b, 0, 0);
        } catch (b) {
          n.Util.error("Unable to draw hit graph from cached scene canvas. " + b.message);
        }
        return this;
      }
      hasPointerCapture(N) {
        return o.hasPointerCapture(N, this);
      }
      setPointerCapture(N) {
        o.setPointerCapture(N, this);
      }
      releaseCapture(N) {
        o.releaseCapture(N, this);
      }
    }
    t.Shape = C, C.prototype._fillFunc = v, C.prototype._strokeFunc = S, C.prototype._fillFuncHit = w, C.prototype._strokeFuncHit = p, C.prototype._centroid = !1, C.prototype.nodeType = "Shape", (0, a._registerNode)(C), C.prototype.eventListeners = {}, C.prototype.on.call(C.prototype, "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", h), C.prototype.on.call(C.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", _), C.prototype.on.call(C.prototype, "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", y), C.prototype.on.call(C.prototype, "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", x), C.prototype.on.call(C.prototype, "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", P), r.Factory.addGetterSetter(C, "stroke", void 0, (0, s.getStringOrGradientValidator)()), r.Factory.addGetterSetter(C, "strokeWidth", 2, (0, s.getNumberValidator)()), r.Factory.addGetterSetter(C, "fillAfterStrokeEnabled", !1), r.Factory.addGetterSetter(C, "hitStrokeWidth", "auto", (0, s.getNumberOrAutoValidator)()), r.Factory.addGetterSetter(C, "strokeHitEnabled", !0, (0, s.getBooleanValidator)()), r.Factory.addGetterSetter(C, "perfectDrawEnabled", !0, (0, s.getBooleanValidator)()), r.Factory.addGetterSetter(C, "shadowForStrokeEnabled", !0, (0, s.getBooleanValidator)()), r.Factory.addGetterSetter(C, "lineJoin"), r.Factory.addGetterSetter(C, "lineCap"), r.Factory.addGetterSetter(C, "sceneFunc"), r.Factory.addGetterSetter(C, "hitFunc"), r.Factory.addGetterSetter(C, "dash"), r.Factory.addGetterSetter(C, "dashOffset", 0, (0, s.getNumberValidator)()), r.Factory.addGetterSetter(C, "shadowColor", void 0, (0, s.getStringValidator)()), r.Factory.addGetterSetter(C, "shadowBlur", 0, (0, s.getNumberValidator)()), r.Factory.addGetterSetter(C, "shadowOpacity", 1, (0, s.getNumberValidator)()), r.Factory.addComponentsGetterSetter(C, "shadowOffset", ["x", "y"]), r.Factory.addGetterSetter(C, "shadowOffsetX", 0, (0, s.getNumberValidator)()), r.Factory.addGetterSetter(C, "shadowOffsetY", 0, (0, s.getNumberValidator)()), r.Factory.addGetterSetter(C, "fillPatternImage"), r.Factory.addGetterSetter(C, "fill", void 0, (0, s.getStringOrGradientValidator)()), r.Factory.addGetterSetter(C, "fillPatternX", 0, (0, s.getNumberValidator)()), r.Factory.addGetterSetter(C, "fillPatternY", 0, (0, s.getNumberValidator)()), r.Factory.addGetterSetter(C, "fillLinearGradientColorStops"), r.Factory.addGetterSetter(C, "strokeLinearGradientColorStops"), r.Factory.addGetterSetter(C, "fillRadialGradientStartRadius", 0), r.Factory.addGetterSetter(C, "fillRadialGradientEndRadius", 0), r.Factory.addGetterSetter(C, "fillRadialGradientColorStops"), r.Factory.addGetterSetter(C, "fillPatternRepeat", "repeat"), r.Factory.addGetterSetter(C, "fillEnabled", !0), r.Factory.addGetterSetter(C, "strokeEnabled", !0), r.Factory.addGetterSetter(C, "shadowEnabled", !0), r.Factory.addGetterSetter(C, "dashEnabled", !0), r.Factory.addGetterSetter(C, "strokeScaleEnabled", !0), r.Factory.addGetterSetter(C, "fillPriority", "color"), r.Factory.addComponentsGetterSetter(C, "fillPatternOffset", ["x", "y"]), r.Factory.addGetterSetter(C, "fillPatternOffsetX", 0, (0, s.getNumberValidator)()), r.Factory.addGetterSetter(C, "fillPatternOffsetY", 0, (0, s.getNumberValidator)()), r.Factory.addComponentsGetterSetter(C, "fillPatternScale", ["x", "y"]), r.Factory.addGetterSetter(C, "fillPatternScaleX", 1, (0, s.getNumberValidator)()), r.Factory.addGetterSetter(C, "fillPatternScaleY", 1, (0, s.getNumberValidator)()), r.Factory.addComponentsGetterSetter(C, "fillLinearGradientStartPoint", [
      "x",
      "y"
    ]), r.Factory.addComponentsGetterSetter(C, "strokeLinearGradientStartPoint", [
      "x",
      "y"
    ]), r.Factory.addGetterSetter(C, "fillLinearGradientStartPointX", 0), r.Factory.addGetterSetter(C, "strokeLinearGradientStartPointX", 0), r.Factory.addGetterSetter(C, "fillLinearGradientStartPointY", 0), r.Factory.addGetterSetter(C, "strokeLinearGradientStartPointY", 0), r.Factory.addComponentsGetterSetter(C, "fillLinearGradientEndPoint", [
      "x",
      "y"
    ]), r.Factory.addComponentsGetterSetter(C, "strokeLinearGradientEndPoint", [
      "x",
      "y"
    ]), r.Factory.addGetterSetter(C, "fillLinearGradientEndPointX", 0), r.Factory.addGetterSetter(C, "strokeLinearGradientEndPointX", 0), r.Factory.addGetterSetter(C, "fillLinearGradientEndPointY", 0), r.Factory.addGetterSetter(C, "strokeLinearGradientEndPointY", 0), r.Factory.addComponentsGetterSetter(C, "fillRadialGradientStartPoint", [
      "x",
      "y"
    ]), r.Factory.addGetterSetter(C, "fillRadialGradientStartPointX", 0), r.Factory.addGetterSetter(C, "fillRadialGradientStartPointY", 0), r.Factory.addComponentsGetterSetter(C, "fillRadialGradientEndPoint", [
      "x",
      "y"
    ]), r.Factory.addGetterSetter(C, "fillRadialGradientEndPointX", 0), r.Factory.addGetterSetter(C, "fillRadialGradientEndPointY", 0), r.Factory.addGetterSetter(C, "fillPatternRotation", 0), r.Factory.addGetterSetter(C, "fillRule", void 0, (0, s.getStringValidator)()), r.Factory.backCompat(C, {
      dashArray: "dash",
      getDashArray: "getDash",
      setDashArray: "getDash",
      drawFunc: "sceneFunc",
      getDrawFunc: "getSceneFunc",
      setDrawFunc: "setSceneFunc",
      drawHitFunc: "hitFunc",
      getDrawHitFunc: "getHitFunc",
      setDrawHitFunc: "setHitFunc"
    });
  })(as)), as;
}
var ca;
function Tc() {
  if (ca) return Mn;
  ca = 1, Object.defineProperty(Mn, "__esModule", { value: !0 }), Mn.Layer = void 0;
  const t = kt(), e = jr(), n = It(), r = bt(), i = Hr(), s = St(), a = $t(), o = vt(), l = "#", u = "beforeDraw", c = "draw", d = [
    { x: 0, y: 0 },
    { x: -1, y: -1 },
    { x: 1, y: -1 },
    { x: 1, y: 1 },
    { x: -1, y: 1 }
  ], g = d.length;
  let f = class extends e.Container {
    constructor(v) {
      super(v), this.canvas = new i.SceneCanvas(), this.hitCanvas = new i.HitCanvas({
        pixelRatio: 1
      }), this._waitingForDraw = !1, this.on("visibleChange.konva", this._checkVisibility), this._checkVisibility(), this.on("imageSmoothingEnabledChange.konva", this._setSmoothEnabled), this._setSmoothEnabled();
    }
    createPNGStream() {
      return this.canvas._canvas.createPNGStream();
    }
    getCanvas() {
      return this.canvas;
    }
    getNativeCanvasElement() {
      return this.canvas._canvas;
    }
    getHitCanvas() {
      return this.hitCanvas;
    }
    getContext() {
      return this.getCanvas().getContext();
    }
    clear(v) {
      return this.getContext().clear(v), this.getHitCanvas().getContext().clear(v), this;
    }
    setZIndex(v) {
      super.setZIndex(v);
      const S = this.getStage();
      return S && S.content && (S.content.removeChild(this.getNativeCanvasElement()), v < S.children.length - 1 ? S.content.insertBefore(this.getNativeCanvasElement(), S.children[v + 1].getCanvas()._canvas) : S.content.appendChild(this.getNativeCanvasElement())), this;
    }
    moveToTop() {
      n.Node.prototype.moveToTop.call(this);
      const v = this.getStage();
      return v && v.content && (v.content.removeChild(this.getNativeCanvasElement()), v.content.appendChild(this.getNativeCanvasElement())), !0;
    }
    moveUp() {
      if (!n.Node.prototype.moveUp.call(this))
        return !1;
      const S = this.getStage();
      return !S || !S.content ? !1 : (S.content.removeChild(this.getNativeCanvasElement()), this.index < S.children.length - 1 ? S.content.insertBefore(this.getNativeCanvasElement(), S.children[this.index + 1].getCanvas()._canvas) : S.content.appendChild(this.getNativeCanvasElement()), !0);
    }
    moveDown() {
      if (n.Node.prototype.moveDown.call(this)) {
        const v = this.getStage();
        if (v) {
          const S = v.children;
          v.content && (v.content.removeChild(this.getNativeCanvasElement()), v.content.insertBefore(this.getNativeCanvasElement(), S[this.index + 1].getCanvas()._canvas));
        }
        return !0;
      }
      return !1;
    }
    moveToBottom() {
      if (n.Node.prototype.moveToBottom.call(this)) {
        const v = this.getStage();
        if (v) {
          const S = v.children;
          v.content && (v.content.removeChild(this.getNativeCanvasElement()), v.content.insertBefore(this.getNativeCanvasElement(), S[1].getCanvas()._canvas));
        }
        return !0;
      }
      return !1;
    }
    getLayer() {
      return this;
    }
    remove() {
      const v = this.getNativeCanvasElement();
      return n.Node.prototype.remove.call(this), v && v.parentNode && t.Util._isInDocument(v) && v.parentNode.removeChild(v), this;
    }
    getStage() {
      return this.parent;
    }
    setSize({ width: v, height: S }) {
      return this.canvas.setSize(v, S), this.hitCanvas.setSize(v, S), this._setSmoothEnabled(), this;
    }
    _validateAdd(v) {
      const S = v.getType();
      S !== "Group" && S !== "Shape" && t.Util.throw("You may only add groups and shapes to a layer.");
    }
    _toKonvaCanvas(v) {
      return v = v || {}, v.width = v.width || this.getWidth(), v.height = v.height || this.getHeight(), v.x = v.x !== void 0 ? v.x : this.x(), v.y = v.y !== void 0 ? v.y : this.y(), n.Node.prototype._toKonvaCanvas.call(this, v);
    }
    _checkVisibility() {
      this.visible() ? this.canvas._canvas.style.display = "block" : this.canvas._canvas.style.display = "none";
    }
    _setSmoothEnabled() {
      this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled();
    }
    getWidth() {
      if (this.parent)
        return this.parent.width();
    }
    setWidth() {
      t.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
    }
    getHeight() {
      if (this.parent)
        return this.parent.height();
    }
    setHeight() {
      t.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
    }
    batchDraw() {
      return this._waitingForDraw || (this._waitingForDraw = !0, t.Util.requestAnimFrame(() => {
        this.draw(), this._waitingForDraw = !1;
      })), this;
    }
    getIntersection(v) {
      if (!this.isListening() || !this.isVisible())
        return null;
      let S = 1, w = !1;
      for (; ; ) {
        for (let p = 0; p < g; p++) {
          const h = d[p], _ = this._getIntersection({
            x: v.x + h.x * S,
            y: v.y + h.y * S
          }), y = _.shape;
          if (y)
            return y;
          if (w = !!_.antialiased, !_.antialiased)
            break;
        }
        if (w)
          S += 1;
        else
          return null;
      }
    }
    _getIntersection(v) {
      const S = this.hitCanvas.pixelRatio, w = this.hitCanvas.context.getImageData(Math.round(v.x * S), Math.round(v.y * S), 1, 1).data, p = w[3];
      if (p === 255) {
        const h = t.Util._rgbToHex(w[0], w[1], w[2]), _ = a.shapes[l + h];
        return _ ? {
          shape: _
        } : {
          antialiased: !0
        };
      } else if (p > 0)
        return {
          antialiased: !0
        };
      return {};
    }
    drawScene(v, S, w) {
      const p = this.getLayer(), h = v || p && p.getCanvas();
      return this._fire(u, {
        node: this
      }), this.clearBeforeDraw() && h.getContext().clear(), e.Container.prototype.drawScene.call(this, h, S, w), this._fire(c, {
        node: this
      }), this;
    }
    drawHit(v, S) {
      const w = this.getLayer(), p = v || w && w.hitCanvas;
      return w && w.clearBeforeDraw() && w.getHitCanvas().getContext().clear(), e.Container.prototype.drawHit.call(this, p, S), this;
    }
    enableHitGraph() {
      return this.hitGraphEnabled(!0), this;
    }
    disableHitGraph() {
      return this.hitGraphEnabled(!1), this;
    }
    setHitGraphEnabled(v) {
      t.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening(v);
    }
    getHitGraphEnabled(v) {
      return t.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening();
    }
    toggleHitCanvas() {
      if (!this.parent || !this.parent.content)
        return;
      const v = this.parent;
      !!this.hitCanvas._canvas.parentNode ? v.content.removeChild(this.hitCanvas._canvas) : v.content.appendChild(this.hitCanvas._canvas);
    }
    destroy() {
      return t.Util.releaseCanvas(this.getNativeCanvasElement(), this.getHitCanvas()._canvas), super.destroy();
    }
  };
  return Mn.Layer = f, f.prototype.nodeType = "Layer", (0, o._registerNode)(f), r.Factory.addGetterSetter(f, "imageSmoothingEnabled", !0), r.Factory.addGetterSetter(f, "clearBeforeDraw", !0), r.Factory.addGetterSetter(f, "hitGraphEnabled", !0, (0, s.getBooleanValidator)()), Mn;
}
var kn = {}, ha;
function ef() {
  if (ha) return kn;
  ha = 1, Object.defineProperty(kn, "__esModule", { value: !0 }), kn.FastLayer = void 0;
  const t = kt(), e = Tc(), n = vt();
  let r = class extends e.Layer {
    constructor(s) {
      super(s), this.listening(!1), t.Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
    }
  };
  return kn.FastLayer = r, r.prototype.nodeType = "FastLayer", (0, n._registerNode)(r), kn;
}
var Fn = {}, ua;
function to() {
  if (ua) return Fn;
  ua = 1, Object.defineProperty(Fn, "__esModule", { value: !0 }), Fn.Group = void 0;
  const t = kt(), e = jr(), n = vt();
  let r = class extends e.Container {
    _validateAdd(s) {
      const a = s.getType();
      a !== "Group" && a !== "Shape" && t.Util.throw("You may only add groups and shapes to groups.");
    }
  };
  return Fn.Group = r, r.prototype.nodeType = "Group", (0, n._registerNode)(r), Fn;
}
var Vn = {}, da;
function eo() {
  if (da) return Vn;
  da = 1, Object.defineProperty(Vn, "__esModule", { value: !0 }), Vn.Animation = void 0;
  const t = vt(), e = kt(), n = (function() {
    return t.glob.performance && t.glob.performance.now ? function() {
      return t.glob.performance.now();
    } : function() {
      return (/* @__PURE__ */ new Date()).getTime();
    };
  })();
  let r = class mn {
    constructor(s, a) {
      this.id = mn.animIdCounter++, this.frame = {
        time: 0,
        timeDiff: 0,
        lastTime: n(),
        frameRate: 0
      }, this.func = s, this.setLayers(a);
    }
    setLayers(s) {
      let a = [];
      return s && (a = Array.isArray(s) ? s : [s]), this.layers = a, this;
    }
    getLayers() {
      return this.layers;
    }
    addLayer(s) {
      const a = this.layers, o = a.length;
      for (let l = 0; l < o; l++)
        if (a[l]._id === s._id)
          return !1;
      return this.layers.push(s), !0;
    }
    isRunning() {
      const a = mn.animations, o = a.length;
      for (let l = 0; l < o; l++)
        if (a[l].id === this.id)
          return !0;
      return !1;
    }
    start() {
      return this.stop(), this.frame.timeDiff = 0, this.frame.lastTime = n(), mn._addAnimation(this), this;
    }
    stop() {
      return mn._removeAnimation(this), this;
    }
    _updateFrameObject(s) {
      this.frame.timeDiff = s - this.frame.lastTime, this.frame.lastTime = s, this.frame.time += this.frame.timeDiff, this.frame.frameRate = 1e3 / this.frame.timeDiff;
    }
    static _addAnimation(s) {
      this.animations.push(s), this._handleAnimation();
    }
    static _removeAnimation(s) {
      const a = s.id, o = this.animations, l = o.length;
      for (let u = 0; u < l; u++)
        if (o[u].id === a) {
          this.animations.splice(u, 1);
          break;
        }
    }
    static _runFrames() {
      const s = {}, a = this.animations;
      for (let o = 0; o < a.length; o++) {
        const l = a[o], u = l.layers, c = l.func;
        l._updateFrameObject(n());
        const d = u.length;
        let g;
        if (c ? g = c.call(l, l.frame) !== !1 : g = !0, !!g)
          for (let f = 0; f < d; f++) {
            const m = u[f];
            m._id !== void 0 && (s[m._id] = m);
          }
      }
      for (const o in s)
        s.hasOwnProperty(o) && s[o].batchDraw();
    }
    static _animationLoop() {
      const s = mn;
      s.animations.length ? (s._runFrames(), e.Util.requestAnimFrame(s._animationLoop)) : s.animRunning = !1;
    }
    static _handleAnimation() {
      this.animRunning || (this.animRunning = !0, e.Util.requestAnimFrame(this._animationLoop));
    }
  };
  return Vn.Animation = r, r.animations = [], r.animIdCounter = 0, r.animRunning = !1, Vn;
}
var ls = {}, fa;
function nf() {
  return fa || (fa = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Easings = t.Tween = void 0;
    const e = kt(), n = eo(), r = It(), i = vt(), s = {
      node: 1,
      duration: 1,
      easing: 1,
      onFinish: 1,
      yoyo: 1
    }, a = 1, o = 2, l = 3, u = ["fill", "stroke", "shadowColor"];
    let c = 0;
    class d {
      constructor(m, v, S, w, p, h, _) {
        this.prop = m, this.propFunc = v, this.begin = w, this._pos = w, this.duration = h, this._change = 0, this.prevPos = 0, this.yoyo = _, this._time = 0, this._position = 0, this._startTime = 0, this._finish = 0, this.func = S, this._change = p - this.begin, this.pause();
      }
      fire(m) {
        const v = this[m];
        v && v();
      }
      setTime(m) {
        m > this.duration ? this.yoyo ? (this._time = this.duration, this.reverse()) : this.finish() : m < 0 ? this.yoyo ? (this._time = 0, this.play()) : this.reset() : (this._time = m, this.update());
      }
      getTime() {
        return this._time;
      }
      setPosition(m) {
        this.prevPos = this._pos, this.propFunc(m), this._pos = m;
      }
      getPosition(m) {
        return m === void 0 && (m = this._time), this.func(m, this.begin, this._change, this.duration);
      }
      play() {
        this.state = o, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onPlay");
      }
      reverse() {
        this.state = l, this._time = this.duration - this._time, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onReverse");
      }
      seek(m) {
        this.pause(), this._time = m, this.update(), this.fire("onSeek");
      }
      reset() {
        this.pause(), this._time = 0, this.update(), this.fire("onReset");
      }
      finish() {
        this.pause(), this._time = this.duration, this.update(), this.fire("onFinish");
      }
      update() {
        this.setPosition(this.getPosition(this._time)), this.fire("onUpdate");
      }
      onEnterFrame() {
        const m = this.getTimer() - this._startTime;
        this.state === o ? this.setTime(m) : this.state === l && this.setTime(this.duration - m);
      }
      pause() {
        this.state = a, this.fire("onPause");
      }
      getTimer() {
        return (/* @__PURE__ */ new Date()).getTime();
      }
    }
    class g {
      constructor(m) {
        const v = this, S = m.node, w = S._id, p = m.easing || t.Easings.Linear, h = !!m.yoyo;
        let _, y;
        typeof m.duration > "u" ? _ = 0.3 : m.duration === 0 ? _ = 1e-3 : _ = m.duration, this.node = S, this._id = c++;
        const x = S.getLayer() || (S instanceof i.Konva.Stage ? S.getLayers() : null);
        x || e.Util.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."), this.anim = new n.Animation(function() {
          v.tween.onEnterFrame();
        }, x), this.tween = new d(y, function(P) {
          v._tweenFunc(P);
        }, p, 0, 1, _ * 1e3, h), this._addListeners(), g.attrs[w] || (g.attrs[w] = {}), g.attrs[w][this._id] || (g.attrs[w][this._id] = {}), g.tweens[w] || (g.tweens[w] = {});
        for (y in m)
          s[y] === void 0 && this._addAttr(y, m[y]);
        this.reset(), this.onFinish = m.onFinish, this.onReset = m.onReset, this.onUpdate = m.onUpdate;
      }
      _addAttr(m, v) {
        const S = this.node, w = S._id;
        let p, h, _, y, x;
        const P = g.tweens[w][m];
        P && delete g.attrs[w][P][m];
        let C = S.getAttr(m);
        if (e.Util._isArray(v))
          if (p = [], h = Math.max(v.length, C.length), m === "points" && v.length !== C.length && (v.length > C.length ? (y = C, C = e.Util._prepareArrayForTween(C, v, S.closed())) : (_ = v, v = e.Util._prepareArrayForTween(v, C, S.closed()))), m.indexOf("fill") === 0)
            for (let E = 0; E < h; E++)
              if (E % 2 === 0)
                p.push(v[E] - C[E]);
              else {
                const N = e.Util.colorToRGBA(C[E]);
                x = e.Util.colorToRGBA(v[E]), C[E] = N, p.push({
                  r: x.r - N.r,
                  g: x.g - N.g,
                  b: x.b - N.b,
                  a: x.a - N.a
                });
              }
          else
            for (let E = 0; E < h; E++)
              p.push(v[E] - C[E]);
        else u.indexOf(m) !== -1 ? (C = e.Util.colorToRGBA(C), x = e.Util.colorToRGBA(v), p = {
          r: x.r - C.r,
          g: x.g - C.g,
          b: x.b - C.b,
          a: x.a - C.a
        }) : p = v - C;
        g.attrs[w][this._id][m] = {
          start: C,
          diff: p,
          end: v,
          trueEnd: _,
          trueStart: y
        }, g.tweens[w][m] = this._id;
      }
      _tweenFunc(m) {
        const v = this.node, S = g.attrs[v._id][this._id];
        let w, p, h, _, y, x, P, C;
        for (w in S) {
          if (p = S[w], h = p.start, _ = p.diff, C = p.end, e.Util._isArray(h))
            if (y = [], P = Math.max(h.length, C.length), w.indexOf("fill") === 0)
              for (x = 0; x < P; x++)
                x % 2 === 0 ? y.push((h[x] || 0) + _[x] * m) : y.push("rgba(" + Math.round(h[x].r + _[x].r * m) + "," + Math.round(h[x].g + _[x].g * m) + "," + Math.round(h[x].b + _[x].b * m) + "," + (h[x].a + _[x].a * m) + ")");
            else
              for (x = 0; x < P; x++)
                y.push((h[x] || 0) + _[x] * m);
          else u.indexOf(w) !== -1 ? y = "rgba(" + Math.round(h.r + _.r * m) + "," + Math.round(h.g + _.g * m) + "," + Math.round(h.b + _.b * m) + "," + (h.a + _.a * m) + ")" : y = h + _ * m;
          v.setAttr(w, y);
        }
      }
      _addListeners() {
        this.tween.onPlay = () => {
          this.anim.start();
        }, this.tween.onReverse = () => {
          this.anim.start();
        }, this.tween.onPause = () => {
          this.anim.stop();
        }, this.tween.onFinish = () => {
          const m = this.node, v = g.attrs[m._id][this._id];
          v.points && v.points.trueEnd && m.setAttr("points", v.points.trueEnd), this.onFinish && this.onFinish.call(this);
        }, this.tween.onReset = () => {
          const m = this.node, v = g.attrs[m._id][this._id];
          v.points && v.points.trueStart && m.points(v.points.trueStart), this.onReset && this.onReset();
        }, this.tween.onUpdate = () => {
          this.onUpdate && this.onUpdate.call(this);
        };
      }
      play() {
        return this.tween.play(), this;
      }
      reverse() {
        return this.tween.reverse(), this;
      }
      reset() {
        return this.tween.reset(), this;
      }
      seek(m) {
        return this.tween.seek(m * 1e3), this;
      }
      pause() {
        return this.tween.pause(), this;
      }
      finish() {
        return this.tween.finish(), this;
      }
      destroy() {
        const m = this.node._id, v = this._id, S = g.tweens[m];
        this.pause(), this.anim && this.anim.stop();
        for (const w in S)
          delete g.tweens[m][w];
        delete g.attrs[m][v], g.tweens[m] && (Object.keys(g.tweens[m]).length === 0 && delete g.tweens[m], Object.keys(g.attrs[m]).length === 0 && delete g.attrs[m]);
      }
    }
    t.Tween = g, g.attrs = {}, g.tweens = {}, r.Node.prototype.to = function(f) {
      const m = f.onFinish;
      f.node = this, f.onFinish = function() {
        this.destroy(), m && m();
      }, new g(f).play();
    }, t.Easings = {
      BackEaseIn(f, m, v, S) {
        return v * (f /= S) * f * ((1.70158 + 1) * f - 1.70158) + m;
      },
      BackEaseOut(f, m, v, S) {
        return v * ((f = f / S - 1) * f * ((1.70158 + 1) * f + 1.70158) + 1) + m;
      },
      BackEaseInOut(f, m, v, S) {
        let w = 1.70158;
        return (f /= S / 2) < 1 ? v / 2 * (f * f * (((w *= 1.525) + 1) * f - w)) + m : v / 2 * ((f -= 2) * f * (((w *= 1.525) + 1) * f + w) + 2) + m;
      },
      ElasticEaseIn(f, m, v, S, w, p) {
        let h = 0;
        return f === 0 ? m : (f /= S) === 1 ? m + v : (p || (p = S * 0.3), !w || w < Math.abs(v) ? (w = v, h = p / 4) : h = p / (2 * Math.PI) * Math.asin(v / w), -(w * Math.pow(2, 10 * (f -= 1)) * Math.sin((f * S - h) * (2 * Math.PI) / p)) + m);
      },
      ElasticEaseOut(f, m, v, S, w, p) {
        let h = 0;
        return f === 0 ? m : (f /= S) === 1 ? m + v : (p || (p = S * 0.3), !w || w < Math.abs(v) ? (w = v, h = p / 4) : h = p / (2 * Math.PI) * Math.asin(v / w), w * Math.pow(2, -10 * f) * Math.sin((f * S - h) * (2 * Math.PI) / p) + v + m);
      },
      ElasticEaseInOut(f, m, v, S, w, p) {
        let h = 0;
        return f === 0 ? m : (f /= S / 2) === 2 ? m + v : (p || (p = S * (0.3 * 1.5)), !w || w < Math.abs(v) ? (w = v, h = p / 4) : h = p / (2 * Math.PI) * Math.asin(v / w), f < 1 ? -0.5 * (w * Math.pow(2, 10 * (f -= 1)) * Math.sin((f * S - h) * (2 * Math.PI) / p)) + m : w * Math.pow(2, -10 * (f -= 1)) * Math.sin((f * S - h) * (2 * Math.PI) / p) * 0.5 + v + m);
      },
      BounceEaseOut(f, m, v, S) {
        return (f /= S) < 1 / 2.75 ? v * (7.5625 * f * f) + m : f < 2 / 2.75 ? v * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + m : f < 2.5 / 2.75 ? v * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + m : v * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + m;
      },
      BounceEaseIn(f, m, v, S) {
        return v - t.Easings.BounceEaseOut(S - f, 0, v, S) + m;
      },
      BounceEaseInOut(f, m, v, S) {
        return f < S / 2 ? t.Easings.BounceEaseIn(f * 2, 0, v, S) * 0.5 + m : t.Easings.BounceEaseOut(f * 2 - S, 0, v, S) * 0.5 + v * 0.5 + m;
      },
      EaseIn(f, m, v, S) {
        return v * (f /= S) * f + m;
      },
      EaseOut(f, m, v, S) {
        return -v * (f /= S) * (f - 2) + m;
      },
      EaseInOut(f, m, v, S) {
        return (f /= S / 2) < 1 ? v / 2 * f * f + m : -v / 2 * (--f * (f - 2) - 1) + m;
      },
      StrongEaseIn(f, m, v, S) {
        return v * (f /= S) * f * f * f * f + m;
      },
      StrongEaseOut(f, m, v, S) {
        return v * ((f = f / S - 1) * f * f * f * f + 1) + m;
      },
      StrongEaseInOut(f, m, v, S) {
        return (f /= S / 2) < 1 ? v / 2 * f * f * f * f * f + m : v / 2 * ((f -= 2) * f * f * f * f + 2) + m;
      },
      Linear(f, m, v, S) {
        return v * f / S + m;
      }
    };
  })(ls)), ls;
}
var pa;
function rf() {
  return pa || (pa = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Konva = void 0;
    const e = vt(), n = kt(), r = It(), i = jr(), s = tf(), a = Tc(), o = ef(), l = to(), u = Zs(), c = $t(), d = eo(), g = nf(), f = Nc(), m = Hr();
    t.Konva = n.Util._assign(e.Konva, {
      Util: n.Util,
      Transform: n.Transform,
      Node: r.Node,
      Container: i.Container,
      Stage: s.Stage,
      stages: s.stages,
      Layer: a.Layer,
      FastLayer: o.FastLayer,
      Group: l.Group,
      DD: u.DD,
      Shape: c.Shape,
      shapes: c.shapes,
      Animation: d.Animation,
      Tween: g.Tween,
      Easings: g.Easings,
      Context: f.Context,
      Canvas: m.Canvas
    }), t.default = t.Konva;
  })(es)), es;
}
var Ln = {}, ga;
function sf() {
  if (ga) return Ln;
  ga = 1, Object.defineProperty(Ln, "__esModule", { value: !0 }), Ln.Arc = void 0;
  const t = bt(), e = $t(), n = vt(), r = St(), i = vt();
  let s = class extends e.Shape {
    _sceneFunc(o) {
      const l = n.Konva.getAngle(this.angle()), u = this.clockwise();
      o.beginPath(), o.arc(0, 0, this.outerRadius(), 0, l, u), o.arc(0, 0, this.innerRadius(), l, 0, !u), o.closePath(), o.fillStrokeShape(this);
    }
    getWidth() {
      return this.outerRadius() * 2;
    }
    getHeight() {
      return this.outerRadius() * 2;
    }
    setWidth(o) {
      this.outerRadius(o / 2);
    }
    setHeight(o) {
      this.outerRadius(o / 2);
    }
    getSelfRect() {
      const o = this.innerRadius(), l = this.outerRadius(), u = this.clockwise(), c = n.Konva.getAngle(u ? 360 - this.angle() : this.angle()), d = Math.cos(Math.min(c, Math.PI)), g = 1, f = Math.sin(Math.min(Math.max(Math.PI, c), 3 * Math.PI / 2)), m = Math.sin(Math.min(c, Math.PI / 2)), v = d * (d > 0 ? o : l), S = g * l, w = f * (f > 0 ? o : l), p = m * (m > 0 ? l : o);
      return {
        x: v,
        y: u ? -1 * p : w,
        width: S - v,
        height: p - w
      };
    }
  };
  return Ln.Arc = s, s.prototype._centroid = !0, s.prototype.className = "Arc", s.prototype._attrsAffectingSize = [
    "innerRadius",
    "outerRadius",
    "angle",
    "clockwise"
  ], (0, i._registerNode)(s), t.Factory.addGetterSetter(s, "innerRadius", 0, (0, r.getNumberValidator)()), t.Factory.addGetterSetter(s, "outerRadius", 0, (0, r.getNumberValidator)()), t.Factory.addGetterSetter(s, "angle", 0, (0, r.getNumberValidator)()), t.Factory.addGetterSetter(s, "clockwise", !1, (0, r.getBooleanValidator)()), Ln;
}
var In = {}, Gn = {}, ma;
function Pc() {
  if (ma) return Gn;
  ma = 1, Object.defineProperty(Gn, "__esModule", { value: !0 }), Gn.Line = void 0;
  const t = bt(), e = vt(), n = $t(), r = St();
  function i(o, l, u, c, d, g, f) {
    const m = Math.sqrt(Math.pow(u - o, 2) + Math.pow(c - l, 2)), v = Math.sqrt(Math.pow(d - u, 2) + Math.pow(g - c, 2)), S = f * m / (m + v), w = f * v / (m + v), p = u - S * (d - o), h = c - S * (g - l), _ = u + w * (d - o), y = c + w * (g - l);
    return [p, h, _, y];
  }
  function s(o, l) {
    const u = o.length, c = [];
    for (let d = 2; d < u - 2; d += 2) {
      const g = i(o[d - 2], o[d - 1], o[d], o[d + 1], o[d + 2], o[d + 3], l);
      isNaN(g[0]) || (c.push(g[0]), c.push(g[1]), c.push(o[d]), c.push(o[d + 1]), c.push(g[2]), c.push(g[3]));
    }
    return c;
  }
  let a = class extends n.Shape {
    constructor(l) {
      super(l), this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", function() {
        this._clearCache("tensionPoints");
      });
    }
    _sceneFunc(l) {
      const u = this.points(), c = u.length, d = this.tension(), g = this.closed(), f = this.bezier();
      if (!c)
        return;
      let m = 0;
      if (l.beginPath(), l.moveTo(u[0], u[1]), d !== 0 && c > 4) {
        const v = this.getTensionPoints(), S = v.length;
        for (m = g ? 0 : 4, g || l.quadraticCurveTo(v[0], v[1], v[2], v[3]); m < S - 2; )
          l.bezierCurveTo(v[m++], v[m++], v[m++], v[m++], v[m++], v[m++]);
        g || l.quadraticCurveTo(v[S - 2], v[S - 1], u[c - 2], u[c - 1]);
      } else if (f)
        for (m = 2; m < c; )
          l.bezierCurveTo(u[m++], u[m++], u[m++], u[m++], u[m++], u[m++]);
      else
        for (m = 2; m < c; m += 2)
          l.lineTo(u[m], u[m + 1]);
      g ? (l.closePath(), l.fillStrokeShape(this)) : l.strokeShape(this);
    }
    getTensionPoints() {
      return this._getCache("tensionPoints", this._getTensionPoints);
    }
    _getTensionPoints() {
      return this.closed() ? this._getTensionPointsClosed() : s(this.points(), this.tension());
    }
    _getTensionPointsClosed() {
      const l = this.points(), u = l.length, c = this.tension(), d = i(l[u - 2], l[u - 1], l[0], l[1], l[2], l[3], c), g = i(l[u - 4], l[u - 3], l[u - 2], l[u - 1], l[0], l[1], c), f = s(l, c);
      return [d[2], d[3]].concat(f).concat([
        g[0],
        g[1],
        l[u - 2],
        l[u - 1],
        g[2],
        g[3],
        d[0],
        d[1],
        l[0],
        l[1]
      ]);
    }
    getWidth() {
      return this.getSelfRect().width;
    }
    getHeight() {
      return this.getSelfRect().height;
    }
    getSelfRect() {
      let l = this.points();
      if (l.length < 4)
        return {
          x: l[0] || 0,
          y: l[1] || 0,
          width: 0,
          height: 0
        };
      this.tension() !== 0 ? l = [
        l[0],
        l[1],
        ...this._getTensionPoints(),
        l[l.length - 2],
        l[l.length - 1]
      ] : l = this.points();
      let u = l[0], c = l[0], d = l[1], g = l[1], f, m;
      for (let v = 0; v < l.length / 2; v++)
        f = l[v * 2], m = l[v * 2 + 1], u = Math.min(u, f), c = Math.max(c, f), d = Math.min(d, m), g = Math.max(g, m);
      return {
        x: u,
        y: d,
        width: c - u,
        height: g - d
      };
    }
  };
  return Gn.Line = a, a.prototype.className = "Line", a.prototype._attrsAffectingSize = ["points", "bezier", "tension"], (0, e._registerNode)(a), t.Factory.addGetterSetter(a, "closed", !1), t.Factory.addGetterSetter(a, "bezier", !1), t.Factory.addGetterSetter(a, "tension", 0, (0, r.getNumberValidator)()), t.Factory.addGetterSetter(a, "points", [], (0, r.getNumberArrayValidator)()), Gn;
}
var Un = {}, cs = {}, _a;
function of() {
  return _a || (_a = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.t2length = t.getQuadraticArcLength = t.getCubicArcLength = t.binomialCoefficients = t.cValues = t.tValues = void 0, t.tValues = [
      [],
      [],
      [
        -0.5773502691896257,
        0.5773502691896257
      ],
      [
        0,
        -0.7745966692414834,
        0.7745966692414834
      ],
      [
        -0.33998104358485626,
        0.33998104358485626,
        -0.8611363115940526,
        0.8611363115940526
      ],
      [
        0,
        -0.5384693101056831,
        0.5384693101056831,
        -0.906179845938664,
        0.906179845938664
      ],
      [
        0.6612093864662645,
        -0.6612093864662645,
        -0.2386191860831969,
        0.2386191860831969,
        -0.932469514203152,
        0.932469514203152
      ],
      [
        0,
        0.4058451513773972,
        -0.4058451513773972,
        -0.7415311855993945,
        0.7415311855993945,
        -0.9491079123427585,
        0.9491079123427585
      ],
      [
        -0.1834346424956498,
        0.1834346424956498,
        -0.525532409916329,
        0.525532409916329,
        -0.7966664774136267,
        0.7966664774136267,
        -0.9602898564975363,
        0.9602898564975363
      ],
      [
        0,
        -0.8360311073266358,
        0.8360311073266358,
        -0.9681602395076261,
        0.9681602395076261,
        -0.3242534234038089,
        0.3242534234038089,
        -0.6133714327005904,
        0.6133714327005904
      ],
      [
        -0.14887433898163122,
        0.14887433898163122,
        -0.4333953941292472,
        0.4333953941292472,
        -0.6794095682990244,
        0.6794095682990244,
        -0.8650633666889845,
        0.8650633666889845,
        -0.9739065285171717,
        0.9739065285171717
      ],
      [
        0,
        -0.26954315595234496,
        0.26954315595234496,
        -0.5190961292068118,
        0.5190961292068118,
        -0.7301520055740494,
        0.7301520055740494,
        -0.8870625997680953,
        0.8870625997680953,
        -0.978228658146057,
        0.978228658146057
      ],
      [
        -0.1252334085114689,
        0.1252334085114689,
        -0.3678314989981802,
        0.3678314989981802,
        -0.5873179542866175,
        0.5873179542866175,
        -0.7699026741943047,
        0.7699026741943047,
        -0.9041172563704749,
        0.9041172563704749,
        -0.9815606342467192,
        0.9815606342467192
      ],
      [
        0,
        -0.2304583159551348,
        0.2304583159551348,
        -0.44849275103644687,
        0.44849275103644687,
        -0.6423493394403402,
        0.6423493394403402,
        -0.8015780907333099,
        0.8015780907333099,
        -0.9175983992229779,
        0.9175983992229779,
        -0.9841830547185881,
        0.9841830547185881
      ],
      [
        -0.10805494870734367,
        0.10805494870734367,
        -0.31911236892788974,
        0.31911236892788974,
        -0.5152486363581541,
        0.5152486363581541,
        -0.6872929048116855,
        0.6872929048116855,
        -0.827201315069765,
        0.827201315069765,
        -0.9284348836635735,
        0.9284348836635735,
        -0.9862838086968123,
        0.9862838086968123
      ],
      [
        0,
        -0.20119409399743451,
        0.20119409399743451,
        -0.3941513470775634,
        0.3941513470775634,
        -0.5709721726085388,
        0.5709721726085388,
        -0.7244177313601701,
        0.7244177313601701,
        -0.8482065834104272,
        0.8482065834104272,
        -0.937273392400706,
        0.937273392400706,
        -0.9879925180204854,
        0.9879925180204854
      ],
      [
        -0.09501250983763744,
        0.09501250983763744,
        -0.2816035507792589,
        0.2816035507792589,
        -0.45801677765722737,
        0.45801677765722737,
        -0.6178762444026438,
        0.6178762444026438,
        -0.755404408355003,
        0.755404408355003,
        -0.8656312023878318,
        0.8656312023878318,
        -0.9445750230732326,
        0.9445750230732326,
        -0.9894009349916499,
        0.9894009349916499
      ],
      [
        0,
        -0.17848418149584785,
        0.17848418149584785,
        -0.3512317634538763,
        0.3512317634538763,
        -0.5126905370864769,
        0.5126905370864769,
        -0.6576711592166907,
        0.6576711592166907,
        -0.7815140038968014,
        0.7815140038968014,
        -0.8802391537269859,
        0.8802391537269859,
        -0.9506755217687678,
        0.9506755217687678,
        -0.9905754753144174,
        0.9905754753144174
      ],
      [
        -0.0847750130417353,
        0.0847750130417353,
        -0.2518862256915055,
        0.2518862256915055,
        -0.41175116146284263,
        0.41175116146284263,
        -0.5597708310739475,
        0.5597708310739475,
        -0.6916870430603532,
        0.6916870430603532,
        -0.8037049589725231,
        0.8037049589725231,
        -0.8926024664975557,
        0.8926024664975557,
        -0.9558239495713977,
        0.9558239495713977,
        -0.9915651684209309,
        0.9915651684209309
      ],
      [
        0,
        -0.16035864564022537,
        0.16035864564022537,
        -0.31656409996362983,
        0.31656409996362983,
        -0.46457074137596094,
        0.46457074137596094,
        -0.600545304661681,
        0.600545304661681,
        -0.7209661773352294,
        0.7209661773352294,
        -0.8227146565371428,
        0.8227146565371428,
        -0.9031559036148179,
        0.9031559036148179,
        -0.96020815213483,
        0.96020815213483,
        -0.9924068438435844,
        0.9924068438435844
      ],
      [
        -0.07652652113349734,
        0.07652652113349734,
        -0.22778585114164507,
        0.22778585114164507,
        -0.37370608871541955,
        0.37370608871541955,
        -0.5108670019508271,
        0.5108670019508271,
        -0.636053680726515,
        0.636053680726515,
        -0.7463319064601508,
        0.7463319064601508,
        -0.8391169718222188,
        0.8391169718222188,
        -0.912234428251326,
        0.912234428251326,
        -0.9639719272779138,
        0.9639719272779138,
        -0.9931285991850949,
        0.9931285991850949
      ],
      [
        0,
        -0.1455618541608951,
        0.1455618541608951,
        -0.2880213168024011,
        0.2880213168024011,
        -0.4243421202074388,
        0.4243421202074388,
        -0.5516188358872198,
        0.5516188358872198,
        -0.6671388041974123,
        0.6671388041974123,
        -0.7684399634756779,
        0.7684399634756779,
        -0.8533633645833173,
        0.8533633645833173,
        -0.9200993341504008,
        0.9200993341504008,
        -0.9672268385663063,
        0.9672268385663063,
        -0.9937521706203895,
        0.9937521706203895
      ],
      [
        -0.06973927331972223,
        0.06973927331972223,
        -0.20786042668822127,
        0.20786042668822127,
        -0.34193582089208424,
        0.34193582089208424,
        -0.469355837986757,
        0.469355837986757,
        -0.5876404035069116,
        0.5876404035069116,
        -0.6944872631866827,
        0.6944872631866827,
        -0.7878168059792081,
        0.7878168059792081,
        -0.8658125777203002,
        0.8658125777203002,
        -0.926956772187174,
        0.926956772187174,
        -0.9700604978354287,
        0.9700604978354287,
        -0.9942945854823992,
        0.9942945854823992
      ],
      [
        0,
        -0.1332568242984661,
        0.1332568242984661,
        -0.26413568097034495,
        0.26413568097034495,
        -0.3903010380302908,
        0.3903010380302908,
        -0.5095014778460075,
        0.5095014778460075,
        -0.6196098757636461,
        0.6196098757636461,
        -0.7186613631319502,
        0.7186613631319502,
        -0.8048884016188399,
        0.8048884016188399,
        -0.8767523582704416,
        0.8767523582704416,
        -0.9329710868260161,
        0.9329710868260161,
        -0.9725424712181152,
        0.9725424712181152,
        -0.9947693349975522,
        0.9947693349975522
      ],
      [
        -0.06405689286260563,
        0.06405689286260563,
        -0.1911188674736163,
        0.1911188674736163,
        -0.3150426796961634,
        0.3150426796961634,
        -0.4337935076260451,
        0.4337935076260451,
        -0.5454214713888396,
        0.5454214713888396,
        -0.6480936519369755,
        0.6480936519369755,
        -0.7401241915785544,
        0.7401241915785544,
        -0.820001985973903,
        0.820001985973903,
        -0.8864155270044011,
        0.8864155270044011,
        -0.9382745520027328,
        0.9382745520027328,
        -0.9747285559713095,
        0.9747285559713095,
        -0.9951872199970213,
        0.9951872199970213
      ]
    ], t.cValues = [
      [],
      [],
      [1, 1],
      [
        0.8888888888888888,
        0.5555555555555556,
        0.5555555555555556
      ],
      [
        0.6521451548625461,
        0.6521451548625461,
        0.34785484513745385,
        0.34785484513745385
      ],
      [
        0.5688888888888889,
        0.47862867049936647,
        0.47862867049936647,
        0.23692688505618908,
        0.23692688505618908
      ],
      [
        0.3607615730481386,
        0.3607615730481386,
        0.46791393457269104,
        0.46791393457269104,
        0.17132449237917036,
        0.17132449237917036
      ],
      [
        0.4179591836734694,
        0.3818300505051189,
        0.3818300505051189,
        0.27970539148927664,
        0.27970539148927664,
        0.1294849661688697,
        0.1294849661688697
      ],
      [
        0.362683783378362,
        0.362683783378362,
        0.31370664587788727,
        0.31370664587788727,
        0.22238103445337448,
        0.22238103445337448,
        0.10122853629037626,
        0.10122853629037626
      ],
      [
        0.3302393550012598,
        0.1806481606948574,
        0.1806481606948574,
        0.08127438836157441,
        0.08127438836157441,
        0.31234707704000286,
        0.31234707704000286,
        0.26061069640293544,
        0.26061069640293544
      ],
      [
        0.29552422471475287,
        0.29552422471475287,
        0.26926671930999635,
        0.26926671930999635,
        0.21908636251598204,
        0.21908636251598204,
        0.1494513491505806,
        0.1494513491505806,
        0.06667134430868814,
        0.06667134430868814
      ],
      [
        0.2729250867779006,
        0.26280454451024665,
        0.26280454451024665,
        0.23319376459199048,
        0.23319376459199048,
        0.18629021092773426,
        0.18629021092773426,
        0.1255803694649046,
        0.1255803694649046,
        0.05566856711617366,
        0.05566856711617366
      ],
      [
        0.24914704581340277,
        0.24914704581340277,
        0.2334925365383548,
        0.2334925365383548,
        0.20316742672306592,
        0.20316742672306592,
        0.16007832854334622,
        0.16007832854334622,
        0.10693932599531843,
        0.10693932599531843,
        0.04717533638651183,
        0.04717533638651183
      ],
      [
        0.2325515532308739,
        0.22628318026289723,
        0.22628318026289723,
        0.2078160475368885,
        0.2078160475368885,
        0.17814598076194574,
        0.17814598076194574,
        0.13887351021978725,
        0.13887351021978725,
        0.09212149983772845,
        0.09212149983772845,
        0.04048400476531588,
        0.04048400476531588
      ],
      [
        0.2152638534631578,
        0.2152638534631578,
        0.2051984637212956,
        0.2051984637212956,
        0.18553839747793782,
        0.18553839747793782,
        0.15720316715819355,
        0.15720316715819355,
        0.12151857068790319,
        0.12151857068790319,
        0.08015808715976021,
        0.08015808715976021,
        0.03511946033175186,
        0.03511946033175186
      ],
      [
        0.2025782419255613,
        0.19843148532711158,
        0.19843148532711158,
        0.1861610000155622,
        0.1861610000155622,
        0.16626920581699392,
        0.16626920581699392,
        0.13957067792615432,
        0.13957067792615432,
        0.10715922046717194,
        0.10715922046717194,
        0.07036604748810812,
        0.07036604748810812,
        0.03075324199611727,
        0.03075324199611727
      ],
      [
        0.1894506104550685,
        0.1894506104550685,
        0.18260341504492358,
        0.18260341504492358,
        0.16915651939500254,
        0.16915651939500254,
        0.14959598881657674,
        0.14959598881657674,
        0.12462897125553388,
        0.12462897125553388,
        0.09515851168249279,
        0.09515851168249279,
        0.062253523938647894,
        0.062253523938647894,
        0.027152459411754096,
        0.027152459411754096
      ],
      [
        0.17944647035620653,
        0.17656270536699264,
        0.17656270536699264,
        0.16800410215645004,
        0.16800410215645004,
        0.15404576107681028,
        0.15404576107681028,
        0.13513636846852548,
        0.13513636846852548,
        0.11188384719340397,
        0.11188384719340397,
        0.08503614831717918,
        0.08503614831717918,
        0.0554595293739872,
        0.0554595293739872,
        0.02414830286854793,
        0.02414830286854793
      ],
      [
        0.1691423829631436,
        0.1691423829631436,
        0.16427648374583273,
        0.16427648374583273,
        0.15468467512626524,
        0.15468467512626524,
        0.14064291467065065,
        0.14064291467065065,
        0.12255520671147846,
        0.12255520671147846,
        0.10094204410628717,
        0.10094204410628717,
        0.07642573025488905,
        0.07642573025488905,
        0.0497145488949698,
        0.0497145488949698,
        0.02161601352648331,
        0.02161601352648331
      ],
      [
        0.1610544498487837,
        0.15896884339395434,
        0.15896884339395434,
        0.15276604206585967,
        0.15276604206585967,
        0.1426067021736066,
        0.1426067021736066,
        0.12875396253933621,
        0.12875396253933621,
        0.11156664554733399,
        0.11156664554733399,
        0.09149002162245,
        0.09149002162245,
        0.06904454273764123,
        0.06904454273764123,
        0.0448142267656996,
        0.0448142267656996,
        0.019461788229726478,
        0.019461788229726478
      ],
      [
        0.15275338713072584,
        0.15275338713072584,
        0.14917298647260374,
        0.14917298647260374,
        0.14209610931838204,
        0.14209610931838204,
        0.13168863844917664,
        0.13168863844917664,
        0.11819453196151841,
        0.11819453196151841,
        0.10193011981724044,
        0.10193011981724044,
        0.08327674157670475,
        0.08327674157670475,
        0.06267204833410907,
        0.06267204833410907,
        0.04060142980038694,
        0.04060142980038694,
        0.017614007139152118,
        0.017614007139152118
      ],
      [
        0.14608113364969041,
        0.14452440398997005,
        0.14452440398997005,
        0.13988739479107315,
        0.13988739479107315,
        0.13226893863333747,
        0.13226893863333747,
        0.12183141605372853,
        0.12183141605372853,
        0.10879729916714838,
        0.10879729916714838,
        0.09344442345603386,
        0.09344442345603386,
        0.0761001136283793,
        0.0761001136283793,
        0.057134425426857205,
        0.057134425426857205,
        0.036953789770852494,
        0.036953789770852494,
        0.016017228257774335,
        0.016017228257774335
      ],
      [
        0.13925187285563198,
        0.13925187285563198,
        0.13654149834601517,
        0.13654149834601517,
        0.13117350478706238,
        0.13117350478706238,
        0.12325237681051242,
        0.12325237681051242,
        0.11293229608053922,
        0.11293229608053922,
        0.10041414444288096,
        0.10041414444288096,
        0.08594160621706773,
        0.08594160621706773,
        0.06979646842452049,
        0.06979646842452049,
        0.052293335152683286,
        0.052293335152683286,
        0.03377490158481415,
        0.03377490158481415,
        0.0146279952982722,
        0.0146279952982722
      ],
      [
        0.13365457218610619,
        0.1324620394046966,
        0.1324620394046966,
        0.12890572218808216,
        0.12890572218808216,
        0.12304908430672953,
        0.12304908430672953,
        0.11499664022241136,
        0.11499664022241136,
        0.10489209146454141,
        0.10489209146454141,
        0.09291576606003515,
        0.09291576606003515,
        0.07928141177671895,
        0.07928141177671895,
        0.06423242140852585,
        0.06423242140852585,
        0.04803767173108467,
        0.04803767173108467,
        0.030988005856979445,
        0.030988005856979445,
        0.013411859487141771,
        0.013411859487141771
      ],
      [
        0.12793819534675216,
        0.12793819534675216,
        0.1258374563468283,
        0.1258374563468283,
        0.12167047292780339,
        0.12167047292780339,
        0.1155056680537256,
        0.1155056680537256,
        0.10744427011596563,
        0.10744427011596563,
        0.09761865210411388,
        0.09761865210411388,
        0.08619016153195327,
        0.08619016153195327,
        0.0733464814110803,
        0.0733464814110803,
        0.05929858491543678,
        0.05929858491543678,
        0.04427743881741981,
        0.04427743881741981,
        0.028531388628933663,
        0.028531388628933663,
        0.0123412297999872,
        0.0123412297999872
      ]
    ], t.binomialCoefficients = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]];
    const e = (a, o, l) => {
      let u, c;
      const g = l / 2;
      u = 0;
      for (let f = 0; f < 20; f++)
        c = g * t.tValues[20][f] + g, u += t.cValues[20][f] * r(a, o, c);
      return g * u;
    };
    t.getCubicArcLength = e;
    const n = (a, o, l) => {
      l === void 0 && (l = 1);
      const u = a[0] - 2 * a[1] + a[2], c = o[0] - 2 * o[1] + o[2], d = 2 * a[1] - 2 * a[0], g = 2 * o[1] - 2 * o[0], f = 4 * (u * u + c * c), m = 4 * (u * d + c * g), v = d * d + g * g;
      if (f === 0)
        return l * Math.sqrt(Math.pow(a[2] - a[0], 2) + Math.pow(o[2] - o[0], 2));
      const S = m / (2 * f), w = v / f, p = l + S, h = w - S * S, _ = p * p + h > 0 ? Math.sqrt(p * p + h) : 0, y = S * S + h > 0 ? Math.sqrt(S * S + h) : 0, x = S + Math.sqrt(S * S + h) !== 0 ? h * Math.log(Math.abs((p + _) / (S + y))) : 0;
      return Math.sqrt(f) / 2 * (p * _ - S * y + x);
    };
    t.getQuadraticArcLength = n;
    function r(a, o, l) {
      const u = i(1, l, a), c = i(1, l, o), d = u * u + c * c;
      return Math.sqrt(d);
    }
    const i = (a, o, l) => {
      const u = l.length - 1;
      let c, d;
      if (u === 0)
        return 0;
      if (a === 0) {
        d = 0;
        for (let g = 0; g <= u; g++)
          d += t.binomialCoefficients[u][g] * Math.pow(1 - o, u - g) * Math.pow(o, g) * l[g];
        return d;
      } else {
        c = new Array(u);
        for (let g = 0; g < u; g++)
          c[g] = u * (l[g + 1] - l[g]);
        return i(a - 1, o, c);
      }
    }, s = (a, o, l) => {
      let u = 1, c = a / o, d = (a - l(c)) / o, g = 0;
      for (; u > 1e-3; ) {
        const f = l(c + d), m = Math.abs(a - f) / o;
        if (m < u)
          u = m, c += d;
        else {
          const v = l(c - d), S = Math.abs(a - v) / o;
          S < u ? (u = S, c -= d) : d /= 2;
        }
        if (g++, g > 500)
          break;
      }
      return c;
    };
    t.t2length = s;
  })(cs)), cs;
}
var ya;
function no() {
  if (ya) return Un;
  ya = 1, Object.defineProperty(Un, "__esModule", { value: !0 }), Un.Path = void 0;
  const t = bt(), e = vt(), n = $t(), r = of();
  let i = class Zt extends n.Shape {
    constructor(a) {
      super(a), this.dataArray = [], this.pathLength = 0, this._readDataAttribute(), this.on("dataChange.konva", function() {
        this._readDataAttribute();
      });
    }
    _readDataAttribute() {
      this.dataArray = Zt.parsePathData(this.data()), this.pathLength = Zt.getPathLength(this.dataArray);
    }
    _sceneFunc(a) {
      const o = this.dataArray;
      a.beginPath();
      let l = !1;
      for (let u = 0; u < o.length; u++) {
        const c = o[u].command, d = o[u].points;
        switch (c) {
          case "L":
            a.lineTo(d[0], d[1]);
            break;
          case "M":
            a.moveTo(d[0], d[1]);
            break;
          case "C":
            a.bezierCurveTo(d[0], d[1], d[2], d[3], d[4], d[5]);
            break;
          case "Q":
            a.quadraticCurveTo(d[0], d[1], d[2], d[3]);
            break;
          case "A":
            const g = d[0], f = d[1], m = d[2], v = d[3], S = d[4], w = d[5], p = d[6], h = d[7], _ = m > v ? m : v, y = m > v ? 1 : m / v, x = m > v ? v / m : 1;
            a.translate(g, f), a.rotate(p), a.scale(y, x), a.arc(0, 0, _, S, S + w, 1 - h), a.scale(1 / y, 1 / x), a.rotate(-p), a.translate(-g, -f);
            break;
          case "z":
            l = !0, a.closePath();
            break;
        }
      }
      !l && !this.hasFill() ? a.strokeShape(this) : a.fillStrokeShape(this);
    }
    getSelfRect() {
      let a = [];
      this.dataArray.forEach(function(f) {
        if (f.command === "A") {
          const m = f.points[4], v = f.points[5], S = f.points[4] + v;
          let w = Math.PI / 180;
          if (Math.abs(m - S) < w && (w = Math.abs(m - S)), v < 0)
            for (let p = m - w; p > S; p -= w) {
              const h = Zt.getPointOnEllipticalArc(f.points[0], f.points[1], f.points[2], f.points[3], p, 0);
              a.push(h.x, h.y);
            }
          else
            for (let p = m + w; p < S; p += w) {
              const h = Zt.getPointOnEllipticalArc(f.points[0], f.points[1], f.points[2], f.points[3], p, 0);
              a.push(h.x, h.y);
            }
        } else if (f.command === "C")
          for (let m = 0; m <= 1; m += 0.01) {
            const v = Zt.getPointOnCubicBezier(m, f.start.x, f.start.y, f.points[0], f.points[1], f.points[2], f.points[3], f.points[4], f.points[5]);
            a.push(v.x, v.y);
          }
        else
          a = a.concat(f.points);
      });
      let o = a[0], l = a[0], u = a[1], c = a[1], d, g;
      for (let f = 0; f < a.length / 2; f++)
        d = a[f * 2], g = a[f * 2 + 1], isNaN(d) || (o = Math.min(o, d), l = Math.max(l, d)), isNaN(g) || (u = Math.min(u, g), c = Math.max(c, g));
      return {
        x: o,
        y: u,
        width: l - o,
        height: c - u
      };
    }
    getLength() {
      return this.pathLength;
    }
    getPointAtLength(a) {
      return Zt.getPointAtLengthOfDataArray(a, this.dataArray);
    }
    static getLineLength(a, o, l, u) {
      return Math.sqrt((l - a) * (l - a) + (u - o) * (u - o));
    }
    static getPathLength(a) {
      let o = 0;
      for (let l = 0; l < a.length; ++l)
        o += a[l].pathLength;
      return o;
    }
    static getPointAtLengthOfDataArray(a, o) {
      let l, u = 0, c = o.length;
      if (!c)
        return null;
      for (; u < c && a > o[u].pathLength; )
        a -= o[u].pathLength, ++u;
      if (u === c)
        return l = o[u - 1].points.slice(-2), {
          x: l[0],
          y: l[1]
        };
      if (a < 0.01)
        return o[u].command === "M" ? (l = o[u].points.slice(0, 2), {
          x: l[0],
          y: l[1]
        }) : {
          x: o[u].start.x,
          y: o[u].start.y
        };
      const d = o[u], g = d.points;
      switch (d.command) {
        case "L":
          return Zt.getPointOnLine(a, d.start.x, d.start.y, g[0], g[1]);
        case "C":
          return Zt.getPointOnCubicBezier((0, r.t2length)(a, Zt.getPathLength(o), (_) => (0, r.getCubicArcLength)([d.start.x, g[0], g[2], g[4]], [d.start.y, g[1], g[3], g[5]], _)), d.start.x, d.start.y, g[0], g[1], g[2], g[3], g[4], g[5]);
        case "Q":
          return Zt.getPointOnQuadraticBezier((0, r.t2length)(a, Zt.getPathLength(o), (_) => (0, r.getQuadraticArcLength)([d.start.x, g[0], g[2]], [d.start.y, g[1], g[3]], _)), d.start.x, d.start.y, g[0], g[1], g[2], g[3]);
        case "A":
          const f = g[0], m = g[1], v = g[2], S = g[3], w = g[5], p = g[6];
          let h = g[4];
          return h += w * a / d.pathLength, Zt.getPointOnEllipticalArc(f, m, v, S, h, p);
      }
      return null;
    }
    static getPointOnLine(a, o, l, u, c, d, g) {
      d = d ?? o, g = g ?? l;
      const f = this.getLineLength(o, l, u, c);
      if (f < 1e-10)
        return { x: o, y: l };
      if (u === o)
        return { x: d, y: g + (c > l ? a : -a) };
      const m = (c - l) / (u - o), v = Math.sqrt(a * a / (1 + m * m)) * (u < o ? -1 : 1), S = m * v;
      if (Math.abs(g - l - m * (d - o)) < 1e-10)
        return { x: d + v, y: g + S };
      const w = ((d - o) * (u - o) + (g - l) * (c - l)) / (f * f), p = o + w * (u - o), h = l + w * (c - l), _ = this.getLineLength(d, g, p, h), y = Math.sqrt(a * a - _ * _), x = Math.sqrt(y * y / (1 + m * m)) * (u < o ? -1 : 1), P = m * x;
      return { x: p + x, y: h + P };
    }
    static getPointOnCubicBezier(a, o, l, u, c, d, g, f, m) {
      function v(y) {
        return y * y * y;
      }
      function S(y) {
        return 3 * y * y * (1 - y);
      }
      function w(y) {
        return 3 * y * (1 - y) * (1 - y);
      }
      function p(y) {
        return (1 - y) * (1 - y) * (1 - y);
      }
      const h = f * v(a) + d * S(a) + u * w(a) + o * p(a), _ = m * v(a) + g * S(a) + c * w(a) + l * p(a);
      return { x: h, y: _ };
    }
    static getPointOnQuadraticBezier(a, o, l, u, c, d, g) {
      function f(p) {
        return p * p;
      }
      function m(p) {
        return 2 * p * (1 - p);
      }
      function v(p) {
        return (1 - p) * (1 - p);
      }
      const S = d * f(a) + u * m(a) + o * v(a), w = g * f(a) + c * m(a) + l * v(a);
      return { x: S, y: w };
    }
    static getPointOnEllipticalArc(a, o, l, u, c, d) {
      const g = Math.cos(d), f = Math.sin(d), m = {
        x: l * Math.cos(c),
        y: u * Math.sin(c)
      };
      return {
        x: a + (m.x * g - m.y * f),
        y: o + (m.x * f + m.y * g)
      };
    }
    static parsePathData(a) {
      if (!a)
        return [];
      let o = a;
      const l = [
        "m",
        "M",
        "l",
        "L",
        "v",
        "V",
        "h",
        "H",
        "z",
        "Z",
        "c",
        "C",
        "q",
        "Q",
        "t",
        "T",
        "s",
        "S",
        "a",
        "A"
      ];
      o = o.replace(new RegExp(" ", "g"), ",");
      for (let S = 0; S < l.length; S++)
        o = o.replace(new RegExp(l[S], "g"), "|" + l[S]);
      const u = o.split("|"), c = [], d = [];
      let g = 0, f = 0;
      const m = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
      let v;
      for (let S = 1; S < u.length; S++) {
        let w = u[S], p = w.charAt(0);
        for (w = w.slice(1), d.length = 0; v = m.exec(w); )
          d.push(v[0]);
        const h = [];
        for (let _ = 0, y = d.length; _ < y; _++) {
          if (d[_] === "00") {
            h.push(0, 0);
            continue;
          }
          const x = parseFloat(d[_]);
          isNaN(x) ? h.push(0) : h.push(x);
        }
        for (; h.length > 0 && !isNaN(h[0]); ) {
          let _ = "", y = [];
          const x = g, P = f;
          let C, E, N, A, F, G, B, L, X, b;
          switch (p) {
            case "l":
              g += h.shift(), f += h.shift(), _ = "L", y.push(g, f);
              break;
            case "L":
              g = h.shift(), f = h.shift(), y.push(g, f);
              break;
            case "m":
              const O = h.shift(), D = h.shift();
              if (g += O, f += D, _ = "M", c.length > 2 && c[c.length - 1].command === "z") {
                for (let R = c.length - 2; R >= 0; R--)
                  if (c[R].command === "M") {
                    g = c[R].points[0] + O, f = c[R].points[1] + D;
                    break;
                  }
              }
              y.push(g, f), p = "l";
              break;
            case "M":
              g = h.shift(), f = h.shift(), _ = "M", y.push(g, f), p = "L";
              break;
            case "h":
              g += h.shift(), _ = "L", y.push(g, f);
              break;
            case "H":
              g = h.shift(), _ = "L", y.push(g, f);
              break;
            case "v":
              f += h.shift(), _ = "L", y.push(g, f);
              break;
            case "V":
              f = h.shift(), _ = "L", y.push(g, f);
              break;
            case "C":
              y.push(h.shift(), h.shift(), h.shift(), h.shift()), g = h.shift(), f = h.shift(), y.push(g, f);
              break;
            case "c":
              y.push(g + h.shift(), f + h.shift(), g + h.shift(), f + h.shift()), g += h.shift(), f += h.shift(), _ = "C", y.push(g, f);
              break;
            case "S":
              E = g, N = f, C = c[c.length - 1], C.command === "C" && (E = g + (g - C.points[2]), N = f + (f - C.points[3])), y.push(E, N, h.shift(), h.shift()), g = h.shift(), f = h.shift(), _ = "C", y.push(g, f);
              break;
            case "s":
              E = g, N = f, C = c[c.length - 1], C.command === "C" && (E = g + (g - C.points[2]), N = f + (f - C.points[3])), y.push(E, N, g + h.shift(), f + h.shift()), g += h.shift(), f += h.shift(), _ = "C", y.push(g, f);
              break;
            case "Q":
              y.push(h.shift(), h.shift()), g = h.shift(), f = h.shift(), y.push(g, f);
              break;
            case "q":
              y.push(g + h.shift(), f + h.shift()), g += h.shift(), f += h.shift(), _ = "Q", y.push(g, f);
              break;
            case "T":
              E = g, N = f, C = c[c.length - 1], C.command === "Q" && (E = g + (g - C.points[0]), N = f + (f - C.points[1])), g = h.shift(), f = h.shift(), _ = "Q", y.push(E, N, g, f);
              break;
            case "t":
              E = g, N = f, C = c[c.length - 1], C.command === "Q" && (E = g + (g - C.points[0]), N = f + (f - C.points[1])), g += h.shift(), f += h.shift(), _ = "Q", y.push(E, N, g, f);
              break;
            case "A":
              A = h.shift(), F = h.shift(), G = h.shift(), B = h.shift(), L = h.shift(), X = g, b = f, g = h.shift(), f = h.shift(), _ = "A", y = this.convertEndpointToCenterParameterization(X, b, g, f, B, L, A, F, G);
              break;
            case "a":
              A = h.shift(), F = h.shift(), G = h.shift(), B = h.shift(), L = h.shift(), X = g, b = f, g += h.shift(), f += h.shift(), _ = "A", y = this.convertEndpointToCenterParameterization(X, b, g, f, B, L, A, F, G);
              break;
          }
          c.push({
            command: _ || p,
            points: y,
            start: {
              x,
              y: P
            },
            pathLength: this.calcLength(x, P, _ || p, y)
          });
        }
        (p === "z" || p === "Z") && c.push({
          command: "z",
          points: [],
          start: void 0,
          pathLength: 0
        });
      }
      return c;
    }
    static calcLength(a, o, l, u) {
      let c, d, g, f;
      const m = Zt;
      switch (l) {
        case "L":
          return m.getLineLength(a, o, u[0], u[1]);
        case "C":
          return (0, r.getCubicArcLength)([a, u[0], u[2], u[4]], [o, u[1], u[3], u[5]], 1);
        case "Q":
          return (0, r.getQuadraticArcLength)([a, u[0], u[2]], [o, u[1], u[3]], 1);
        case "A":
          c = 0;
          const v = u[4], S = u[5], w = u[4] + S;
          let p = Math.PI / 180;
          if (Math.abs(v - w) < p && (p = Math.abs(v - w)), d = m.getPointOnEllipticalArc(u[0], u[1], u[2], u[3], v, 0), S < 0)
            for (f = v - p; f > w; f -= p)
              g = m.getPointOnEllipticalArc(u[0], u[1], u[2], u[3], f, 0), c += m.getLineLength(d.x, d.y, g.x, g.y), d = g;
          else
            for (f = v + p; f < w; f += p)
              g = m.getPointOnEllipticalArc(u[0], u[1], u[2], u[3], f, 0), c += m.getLineLength(d.x, d.y, g.x, g.y), d = g;
          return g = m.getPointOnEllipticalArc(u[0], u[1], u[2], u[3], w, 0), c += m.getLineLength(d.x, d.y, g.x, g.y), c;
      }
      return 0;
    }
    static convertEndpointToCenterParameterization(a, o, l, u, c, d, g, f, m) {
      const v = m * (Math.PI / 180), S = Math.cos(v) * (a - l) / 2 + Math.sin(v) * (o - u) / 2, w = -1 * Math.sin(v) * (a - l) / 2 + Math.cos(v) * (o - u) / 2, p = S * S / (g * g) + w * w / (f * f);
      p > 1 && (g *= Math.sqrt(p), f *= Math.sqrt(p));
      let h = Math.sqrt((g * g * (f * f) - g * g * (w * w) - f * f * (S * S)) / (g * g * (w * w) + f * f * (S * S)));
      c === d && (h *= -1), isNaN(h) && (h = 0);
      const _ = h * g * w / f, y = h * -f * S / g, x = (a + l) / 2 + Math.cos(v) * _ - Math.sin(v) * y, P = (o + u) / 2 + Math.sin(v) * _ + Math.cos(v) * y, C = function(L) {
        return Math.sqrt(L[0] * L[0] + L[1] * L[1]);
      }, E = function(L, X) {
        return (L[0] * X[0] + L[1] * X[1]) / (C(L) * C(X));
      }, N = function(L, X) {
        return (L[0] * X[1] < L[1] * X[0] ? -1 : 1) * Math.acos(E(L, X));
      }, A = N([1, 0], [(S - _) / g, (w - y) / f]), F = [(S - _) / g, (w - y) / f], G = [(-1 * S - _) / g, (-1 * w - y) / f];
      let B = N(F, G);
      return E(F, G) <= -1 && (B = Math.PI), E(F, G) >= 1 && (B = 0), d === 0 && B > 0 && (B = B - 2 * Math.PI), d === 1 && B < 0 && (B = B + 2 * Math.PI), [x, P, g, f, A, B, v, d];
    }
  };
  return Un.Path = i, i.prototype.className = "Path", i.prototype._attrsAffectingSize = ["data"], (0, e._registerNode)(i), t.Factory.addGetterSetter(i, "data"), Un;
}
var va;
function af() {
  if (va) return In;
  va = 1, Object.defineProperty(In, "__esModule", { value: !0 }), In.Arrow = void 0;
  const t = bt(), e = Pc(), n = St(), r = vt(), i = no();
  let s = class extends e.Line {
    _sceneFunc(o) {
      super._sceneFunc(o);
      const l = Math.PI * 2, u = this.points();
      let c = u;
      const d = this.tension() !== 0 && u.length > 4;
      d && (c = this.getTensionPoints());
      const g = this.pointerLength(), f = u.length;
      let m, v;
      if (d) {
        const p = [
          c[c.length - 4],
          c[c.length - 3],
          c[c.length - 2],
          c[c.length - 1],
          u[f - 2],
          u[f - 1]
        ], h = i.Path.calcLength(c[c.length - 4], c[c.length - 3], "C", p), _ = i.Path.getPointOnQuadraticBezier(Math.min(1, 1 - g / h), p[0], p[1], p[2], p[3], p[4], p[5]);
        m = u[f - 2] - _.x, v = u[f - 1] - _.y;
      } else
        m = u[f - 2] - u[f - 4], v = u[f - 1] - u[f - 3];
      const S = (Math.atan2(v, m) + l) % l, w = this.pointerWidth();
      this.pointerAtEnding() && (o.save(), o.beginPath(), o.translate(u[f - 2], u[f - 1]), o.rotate(S), o.moveTo(0, 0), o.lineTo(-g, w / 2), o.lineTo(-g, -w / 2), o.closePath(), o.restore(), this.__fillStroke(o)), this.pointerAtBeginning() && (o.save(), o.beginPath(), o.translate(u[0], u[1]), d ? (m = (c[0] + c[2]) / 2 - u[0], v = (c[1] + c[3]) / 2 - u[1]) : (m = u[2] - u[0], v = u[3] - u[1]), o.rotate((Math.atan2(-v, -m) + l) % l), o.moveTo(0, 0), o.lineTo(-g, w / 2), o.lineTo(-g, -w / 2), o.closePath(), o.restore(), this.__fillStroke(o));
    }
    __fillStroke(o) {
      const l = this.dashEnabled();
      l && (this.attrs.dashEnabled = !1, o.setLineDash([])), o.fillStrokeShape(this), l && (this.attrs.dashEnabled = !0);
    }
    getSelfRect() {
      const o = super.getSelfRect(), l = this.pointerWidth() / 2;
      return {
        x: o.x,
        y: o.y - l,
        width: o.width,
        height: o.height + l * 2
      };
    }
  };
  return In.Arrow = s, s.prototype.className = "Arrow", (0, r._registerNode)(s), t.Factory.addGetterSetter(s, "pointerLength", 10, (0, n.getNumberValidator)()), t.Factory.addGetterSetter(s, "pointerWidth", 10, (0, n.getNumberValidator)()), t.Factory.addGetterSetter(s, "pointerAtBeginning", !1), t.Factory.addGetterSetter(s, "pointerAtEnding", !0), In;
}
var Bn = {}, ba;
function lf() {
  if (ba) return Bn;
  ba = 1, Object.defineProperty(Bn, "__esModule", { value: !0 }), Bn.Circle = void 0;
  const t = bt(), e = $t(), n = St(), r = vt();
  let i = class extends e.Shape {
    _sceneFunc(a) {
      a.beginPath(), a.arc(0, 0, this.attrs.radius || 0, 0, Math.PI * 2, !1), a.closePath(), a.fillStrokeShape(this);
    }
    getWidth() {
      return this.radius() * 2;
    }
    getHeight() {
      return this.radius() * 2;
    }
    setWidth(a) {
      this.radius() !== a / 2 && this.radius(a / 2);
    }
    setHeight(a) {
      this.radius() !== a / 2 && this.radius(a / 2);
    }
  };
  return Bn.Circle = i, i.prototype._centroid = !0, i.prototype.className = "Circle", i.prototype._attrsAffectingSize = ["radius"], (0, r._registerNode)(i), t.Factory.addGetterSetter(i, "radius", 0, (0, n.getNumberValidator)()), Bn;
}
var Hn = {}, Sa;
function cf() {
  if (Sa) return Hn;
  Sa = 1, Object.defineProperty(Hn, "__esModule", { value: !0 }), Hn.Ellipse = void 0;
  const t = bt(), e = $t(), n = St(), r = vt();
  let i = class extends e.Shape {
    _sceneFunc(a) {
      const o = this.radiusX(), l = this.radiusY();
      a.beginPath(), a.save(), o !== l && a.scale(1, l / o), a.arc(0, 0, o, 0, Math.PI * 2, !1), a.restore(), a.closePath(), a.fillStrokeShape(this);
    }
    getWidth() {
      return this.radiusX() * 2;
    }
    getHeight() {
      return this.radiusY() * 2;
    }
    setWidth(a) {
      this.radiusX(a / 2);
    }
    setHeight(a) {
      this.radiusY(a / 2);
    }
  };
  return Hn.Ellipse = i, i.prototype.className = "Ellipse", i.prototype._centroid = !0, i.prototype._attrsAffectingSize = ["radiusX", "radiusY"], (0, r._registerNode)(i), t.Factory.addComponentsGetterSetter(i, "radius", ["x", "y"]), t.Factory.addGetterSetter(i, "radiusX", 0, (0, n.getNumberValidator)()), t.Factory.addGetterSetter(i, "radiusY", 0, (0, n.getNumberValidator)()), Hn;
}
var jn = {}, Ca;
function hf() {
  if (Ca) return jn;
  Ca = 1, Object.defineProperty(jn, "__esModule", { value: !0 }), jn.Image = void 0;
  const t = kt(), e = bt(), n = $t(), r = vt(), i = St();
  class s extends n.Shape {
    constructor(o) {
      super(o), this._loadListener = () => {
        this._requestDraw();
      }, this.on("imageChange.konva", (l) => {
        this._removeImageLoad(l.oldVal), this._setImageLoad();
      }), this._setImageLoad();
    }
    _setImageLoad() {
      const o = this.image();
      o && o.complete || o && o.readyState === 4 || o && o.addEventListener && o.addEventListener("load", this._loadListener);
    }
    _removeImageLoad(o) {
      o && o.removeEventListener && o.removeEventListener("load", this._loadListener);
    }
    destroy() {
      return this._removeImageLoad(this.image()), super.destroy(), this;
    }
    _useBufferCanvas() {
      const o = !!this.cornerRadius(), l = this.hasShadow();
      return o && l ? !0 : super._useBufferCanvas(!0);
    }
    _sceneFunc(o) {
      const l = this.getWidth(), u = this.getHeight(), c = this.cornerRadius(), d = this.attrs.image;
      let g;
      if (d) {
        const f = this.attrs.cropWidth, m = this.attrs.cropHeight;
        f && m ? g = [
          d,
          this.cropX(),
          this.cropY(),
          f,
          m,
          0,
          0,
          l,
          u
        ] : g = [d, 0, 0, l, u];
      }
      (this.hasFill() || this.hasStroke() || c) && (o.beginPath(), c ? t.Util.drawRoundedRectPath(o, l, u, c) : o.rect(0, 0, l, u), o.closePath(), o.fillStrokeShape(this)), d && (c && o.clip(), o.drawImage.apply(o, g));
    }
    _hitFunc(o) {
      const l = this.width(), u = this.height(), c = this.cornerRadius();
      o.beginPath(), c ? t.Util.drawRoundedRectPath(o, l, u, c) : o.rect(0, 0, l, u), o.closePath(), o.fillStrokeShape(this);
    }
    getWidth() {
      var o, l;
      return (o = this.attrs.width) !== null && o !== void 0 ? o : (l = this.image()) === null || l === void 0 ? void 0 : l.width;
    }
    getHeight() {
      var o, l;
      return (o = this.attrs.height) !== null && o !== void 0 ? o : (l = this.image()) === null || l === void 0 ? void 0 : l.height;
    }
    static fromURL(o, l, u = null) {
      const c = t.Util.createImageElement();
      c.onload = function() {
        const d = new s({
          image: c
        });
        l(d);
      }, c.onerror = u, c.crossOrigin = "Anonymous", c.src = o;
    }
  }
  return jn.Image = s, s.prototype.className = "Image", (0, r._registerNode)(s), e.Factory.addGetterSetter(s, "cornerRadius", 0, (0, i.getNumberOrArrayOfNumbersValidator)(4)), e.Factory.addGetterSetter(s, "image"), e.Factory.addComponentsGetterSetter(s, "crop", ["x", "y", "width", "height"]), e.Factory.addGetterSetter(s, "cropX", 0, (0, i.getNumberValidator)()), e.Factory.addGetterSetter(s, "cropY", 0, (0, i.getNumberValidator)()), e.Factory.addGetterSetter(s, "cropWidth", 0, (0, i.getNumberValidator)()), e.Factory.addGetterSetter(s, "cropHeight", 0, (0, i.getNumberValidator)()), jn;
}
var Ye = {}, Ea;
function uf() {
  if (Ea) return Ye;
  Ea = 1, Object.defineProperty(Ye, "__esModule", { value: !0 }), Ye.Tag = Ye.Label = void 0;
  const t = bt(), e = $t(), n = to(), r = St(), i = vt(), s = [
    "fontFamily",
    "fontSize",
    "fontStyle",
    "padding",
    "lineHeight",
    "text",
    "width",
    "height",
    "pointerDirection",
    "pointerWidth",
    "pointerHeight"
  ], a = "Change.konva", o = "none", l = "up", u = "right", c = "down", d = "left", g = s.length;
  let f = class extends n.Group {
    constructor(S) {
      super(S), this.on("add.konva", function(w) {
        this._addListeners(w.child), this._sync();
      });
    }
    getText() {
      return this.find("Text")[0];
    }
    getTag() {
      return this.find("Tag")[0];
    }
    _addListeners(S) {
      let w = this, p;
      const h = function() {
        w._sync();
      };
      for (p = 0; p < g; p++)
        S.on(s[p] + a, h);
    }
    getWidth() {
      return this.getText().width();
    }
    getHeight() {
      return this.getText().height();
    }
    _sync() {
      let S = this.getText(), w = this.getTag(), p, h, _, y, x, P, C;
      if (S && w) {
        switch (p = S.width(), h = S.height(), _ = w.pointerDirection(), y = w.pointerWidth(), C = w.pointerHeight(), x = 0, P = 0, _) {
          case l:
            x = p / 2, P = -1 * C;
            break;
          case u:
            x = p + y, P = h / 2;
            break;
          case c:
            x = p / 2, P = h + C;
            break;
          case d:
            x = -1 * y, P = h / 2;
            break;
        }
        w.setAttrs({
          x: -1 * x,
          y: -1 * P,
          width: p,
          height: h
        }), S.setAttrs({
          x: -1 * x,
          y: -1 * P
        });
      }
    }
  };
  Ye.Label = f, f.prototype.className = "Label", (0, i._registerNode)(f);
  class m extends e.Shape {
    _sceneFunc(S) {
      const w = this.width(), p = this.height(), h = this.pointerDirection(), _ = this.pointerWidth(), y = this.pointerHeight(), x = this.cornerRadius();
      let P = 0, C = 0, E = 0, N = 0;
      typeof x == "number" ? P = C = E = N = Math.min(x, w / 2, p / 2) : (P = Math.min(x[0] || 0, w / 2, p / 2), C = Math.min(x[1] || 0, w / 2, p / 2), N = Math.min(x[2] || 0, w / 2, p / 2), E = Math.min(x[3] || 0, w / 2, p / 2)), S.beginPath(), S.moveTo(P, 0), h === l && (S.lineTo((w - _) / 2, 0), S.lineTo(w / 2, -1 * y), S.lineTo((w + _) / 2, 0)), S.lineTo(w - C, 0), S.arc(w - C, C, C, Math.PI * 3 / 2, 0, !1), h === u && (S.lineTo(w, (p - y) / 2), S.lineTo(w + _, p / 2), S.lineTo(w, (p + y) / 2)), S.lineTo(w, p - N), S.arc(w - N, p - N, N, 0, Math.PI / 2, !1), h === c && (S.lineTo((w + _) / 2, p), S.lineTo(w / 2, p + y), S.lineTo((w - _) / 2, p)), S.lineTo(E, p), S.arc(E, p - E, E, Math.PI / 2, Math.PI, !1), h === d && (S.lineTo(0, (p + y) / 2), S.lineTo(-1 * _, p / 2), S.lineTo(0, (p - y) / 2)), S.lineTo(0, P), S.arc(P, P, P, Math.PI, Math.PI * 3 / 2, !1), S.closePath(), S.fillStrokeShape(this);
    }
    getSelfRect() {
      let S = 0, w = 0, p = this.pointerWidth(), h = this.pointerHeight(), _ = this.pointerDirection(), y = this.width(), x = this.height();
      return _ === l ? (w -= h, x += h) : _ === c ? x += h : _ === d ? (S -= p * 1.5, y += p) : _ === u && (y += p * 1.5), {
        x: S,
        y: w,
        width: y,
        height: x
      };
    }
  }
  return Ye.Tag = m, m.prototype.className = "Tag", (0, i._registerNode)(m), t.Factory.addGetterSetter(m, "pointerDirection", o), t.Factory.addGetterSetter(m, "pointerWidth", 0, (0, r.getNumberValidator)()), t.Factory.addGetterSetter(m, "pointerHeight", 0, (0, r.getNumberValidator)()), t.Factory.addGetterSetter(m, "cornerRadius", 0, (0, r.getNumberOrArrayOfNumbersValidator)(4)), Ye;
}
var $n = {}, wa;
function Ac() {
  if (wa) return $n;
  wa = 1, Object.defineProperty($n, "__esModule", { value: !0 }), $n.Rect = void 0;
  const t = bt(), e = $t(), n = vt(), r = kt(), i = St();
  let s = class extends e.Shape {
    _sceneFunc(o) {
      const l = this.cornerRadius(), u = this.width(), c = this.height();
      o.beginPath(), l ? r.Util.drawRoundedRectPath(o, u, c, l) : o.rect(0, 0, u, c), o.closePath(), o.fillStrokeShape(this);
    }
  };
  return $n.Rect = s, s.prototype.className = "Rect", (0, n._registerNode)(s), t.Factory.addGetterSetter(s, "cornerRadius", 0, (0, i.getNumberOrArrayOfNumbersValidator)(4)), $n;
}
var Wn = {}, xa;
function df() {
  if (xa) return Wn;
  xa = 1, Object.defineProperty(Wn, "__esModule", { value: !0 }), Wn.RegularPolygon = void 0;
  const t = bt(), e = $t(), n = St(), r = vt();
  let i = class extends e.Shape {
    _sceneFunc(a) {
      const o = this._getPoints();
      a.beginPath(), a.moveTo(o[0].x, o[0].y);
      for (let l = 1; l < o.length; l++)
        a.lineTo(o[l].x, o[l].y);
      a.closePath(), a.fillStrokeShape(this);
    }
    _getPoints() {
      const a = this.attrs.sides, o = this.attrs.radius || 0, l = [];
      for (let u = 0; u < a; u++)
        l.push({
          x: o * Math.sin(u * 2 * Math.PI / a),
          y: -1 * o * Math.cos(u * 2 * Math.PI / a)
        });
      return l;
    }
    getSelfRect() {
      const a = this._getPoints();
      let o = a[0].x, l = a[0].y, u = a[0].x, c = a[0].y;
      return a.forEach((d) => {
        o = Math.min(o, d.x), l = Math.max(l, d.x), u = Math.min(u, d.y), c = Math.max(c, d.y);
      }), {
        x: o,
        y: u,
        width: l - o,
        height: c - u
      };
    }
    getWidth() {
      return this.radius() * 2;
    }
    getHeight() {
      return this.radius() * 2;
    }
    setWidth(a) {
      this.radius(a / 2);
    }
    setHeight(a) {
      this.radius(a / 2);
    }
  };
  return Wn.RegularPolygon = i, i.prototype.className = "RegularPolygon", i.prototype._centroid = !0, i.prototype._attrsAffectingSize = ["radius"], (0, r._registerNode)(i), t.Factory.addGetterSetter(i, "radius", 0, (0, n.getNumberValidator)()), t.Factory.addGetterSetter(i, "sides", 0, (0, n.getNumberValidator)()), Wn;
}
var qn = {}, Na;
function ff() {
  if (Na) return qn;
  Na = 1, Object.defineProperty(qn, "__esModule", { value: !0 }), qn.Ring = void 0;
  const t = bt(), e = $t(), n = St(), r = vt(), i = Math.PI * 2;
  let s = class extends e.Shape {
    _sceneFunc(o) {
      o.beginPath(), o.arc(0, 0, this.innerRadius(), 0, i, !1), o.moveTo(this.outerRadius(), 0), o.arc(0, 0, this.outerRadius(), i, 0, !0), o.closePath(), o.fillStrokeShape(this);
    }
    getWidth() {
      return this.outerRadius() * 2;
    }
    getHeight() {
      return this.outerRadius() * 2;
    }
    setWidth(o) {
      this.outerRadius(o / 2);
    }
    setHeight(o) {
      this.outerRadius(o / 2);
    }
  };
  return qn.Ring = s, s.prototype.className = "Ring", s.prototype._centroid = !0, s.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], (0, r._registerNode)(s), t.Factory.addGetterSetter(s, "innerRadius", 0, (0, n.getNumberValidator)()), t.Factory.addGetterSetter(s, "outerRadius", 0, (0, n.getNumberValidator)()), qn;
}
var Kn = {}, Oa;
function pf() {
  if (Oa) return Kn;
  Oa = 1, Object.defineProperty(Kn, "__esModule", { value: !0 }), Kn.Sprite = void 0;
  const t = bt(), e = $t(), n = eo(), r = St(), i = vt();
  let s = class extends e.Shape {
    constructor(o) {
      super(o), this._updated = !0, this.anim = new n.Animation(() => {
        const l = this._updated;
        return this._updated = !1, l;
      }), this.on("animationChange.konva", function() {
        this.frameIndex(0);
      }), this.on("frameIndexChange.konva", function() {
        this._updated = !0;
      }), this.on("frameRateChange.konva", function() {
        this.anim.isRunning() && (clearInterval(this.interval), this._setInterval());
      });
    }
    _sceneFunc(o) {
      const l = this.animation(), u = this.frameIndex(), c = u * 4, d = this.animations()[l], g = this.frameOffsets(), f = d[c + 0], m = d[c + 1], v = d[c + 2], S = d[c + 3], w = this.image();
      if ((this.hasFill() || this.hasStroke()) && (o.beginPath(), o.rect(0, 0, v, S), o.closePath(), o.fillStrokeShape(this)), w)
        if (g) {
          const p = g[l], h = u * 2;
          o.drawImage(w, f, m, v, S, p[h + 0], p[h + 1], v, S);
        } else
          o.drawImage(w, f, m, v, S, 0, 0, v, S);
    }
    _hitFunc(o) {
      const l = this.animation(), u = this.frameIndex(), c = u * 4, d = this.animations()[l], g = this.frameOffsets(), f = d[c + 2], m = d[c + 3];
      if (o.beginPath(), g) {
        const v = g[l], S = u * 2;
        o.rect(v[S + 0], v[S + 1], f, m);
      } else
        o.rect(0, 0, f, m);
      o.closePath(), o.fillShape(this);
    }
    _useBufferCanvas() {
      return super._useBufferCanvas(!0);
    }
    _setInterval() {
      const o = this;
      this.interval = setInterval(function() {
        o._updateIndex();
      }, 1e3 / this.frameRate());
    }
    start() {
      if (this.isRunning())
        return;
      const o = this.getLayer();
      this.anim.setLayers(o), this._setInterval(), this.anim.start();
    }
    stop() {
      this.anim.stop(), clearInterval(this.interval);
    }
    isRunning() {
      return this.anim.isRunning();
    }
    _updateIndex() {
      const o = this.frameIndex(), l = this.animation(), u = this.animations(), c = u[l], d = c.length / 4;
      o < d - 1 ? this.frameIndex(o + 1) : this.frameIndex(0);
    }
  };
  return Kn.Sprite = s, s.prototype.className = "Sprite", (0, i._registerNode)(s), t.Factory.addGetterSetter(s, "animation"), t.Factory.addGetterSetter(s, "animations"), t.Factory.addGetterSetter(s, "frameOffsets"), t.Factory.addGetterSetter(s, "image"), t.Factory.addGetterSetter(s, "frameIndex", 0, (0, r.getNumberValidator)()), t.Factory.addGetterSetter(s, "frameRate", 17, (0, r.getNumberValidator)()), t.Factory.backCompat(s, {
    index: "frameIndex",
    getIndex: "getFrameIndex",
    setIndex: "setFrameIndex"
  }), Kn;
}
var zn = {}, Ta;
function gf() {
  if (Ta) return zn;
  Ta = 1, Object.defineProperty(zn, "__esModule", { value: !0 }), zn.Star = void 0;
  const t = bt(), e = $t(), n = St(), r = vt();
  let i = class extends e.Shape {
    _sceneFunc(a) {
      const o = this.innerRadius(), l = this.outerRadius(), u = this.numPoints();
      a.beginPath(), a.moveTo(0, 0 - l);
      for (let c = 1; c < u * 2; c++) {
        const d = c % 2 === 0 ? l : o, g = d * Math.sin(c * Math.PI / u), f = -1 * d * Math.cos(c * Math.PI / u);
        a.lineTo(g, f);
      }
      a.closePath(), a.fillStrokeShape(this);
    }
    getWidth() {
      return this.outerRadius() * 2;
    }
    getHeight() {
      return this.outerRadius() * 2;
    }
    setWidth(a) {
      this.outerRadius(a / 2);
    }
    setHeight(a) {
      this.outerRadius(a / 2);
    }
  };
  return zn.Star = i, i.prototype.className = "Star", i.prototype._centroid = !0, i.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], (0, r._registerNode)(i), t.Factory.addGetterSetter(i, "numPoints", 5, (0, n.getNumberValidator)()), t.Factory.addGetterSetter(i, "innerRadius", 0, (0, n.getNumberValidator)()), t.Factory.addGetterSetter(i, "outerRadius", 0, (0, n.getNumberValidator)()), zn;
}
var pn = {}, Pa;
function Rc() {
  if (Pa) return pn;
  Pa = 1, Object.defineProperty(pn, "__esModule", { value: !0 }), pn.Text = void 0, pn.stringToArray = a;
  const t = kt(), e = bt(), n = $t(), r = vt(), i = St(), s = vt();
  function a(W) {
    return [...W].reduce((I, J, ot, q) => {
      if (new RegExp("\\p{Emoji}", "u").test(J)) {
        const M = q[ot + 1];
        M && new RegExp("\\p{Emoji_Modifier}|\\u200D", "u").test(M) ? (I.push(J + M), q[ot + 1] = "") : I.push(J);
      } else new RegExp("\\p{Regional_Indicator}{2}", "u").test(J + (q[ot + 1] || "")) ? I.push(J + q[ot + 1]) : ot > 0 && new RegExp("\\p{Mn}|\\p{Me}|\\p{Mc}", "u").test(J) ? I[I.length - 1] += J : J && I.push(J);
      return I;
    }, []);
  }
  const o = "auto", l = "center", u = "inherit", c = "justify", d = "Change.konva", g = "2d", f = "-", m = "left", v = "text", S = "Text", w = "top", p = "bottom", h = "middle", _ = "normal", y = "px ", x = " ", P = "right", C = "rtl", E = "word", N = "char", A = "none", F = "…", G = [
    "direction",
    "fontFamily",
    "fontSize",
    "fontStyle",
    "fontVariant",
    "padding",
    "align",
    "verticalAlign",
    "lineHeight",
    "text",
    "width",
    "height",
    "wrap",
    "ellipsis",
    "letterSpacing"
  ], B = G.length;
  function L(W) {
    return W.split(",").map((I) => {
      I = I.trim();
      const J = I.indexOf(" ") >= 0, ot = I.indexOf('"') >= 0 || I.indexOf("'") >= 0;
      return J && !ot && (I = `"${I}"`), I;
    }).join(", ");
  }
  let X;
  function b() {
    return X || (X = t.Util.createCanvasElement().getContext(g), X);
  }
  function O(W) {
    W.fillText(this._partialText, this._partialTextX, this._partialTextY);
  }
  function D(W) {
    W.setAttr("miterLimit", 2), W.strokeText(this._partialText, this._partialTextX, this._partialTextY);
  }
  function R(W) {
    return W = W || {}, !W.fillLinearGradientColorStops && !W.fillRadialGradientColorStops && !W.fillPatternImage && (W.fill = W.fill || "black"), W;
  }
  let V = class extends n.Shape {
    constructor(I) {
      super(R(I)), this._partialTextX = 0, this._partialTextY = 0;
      for (let J = 0; J < B; J++)
        this.on(G[J] + d, this._setTextData);
      this._setTextData();
    }
    _sceneFunc(I) {
      const J = this.textArr, ot = J.length;
      if (!this.text())
        return;
      let q = this.padding(), M = this.fontSize(), $ = this.lineHeight() * M, Z = this.verticalAlign(), j = this.direction(), at = 0, ft = this.align(), T = this.getWidth(), k = this.letterSpacing(), H = this.fill(), Y = this.textDecoration(), K = Y.indexOf("underline") !== -1, U = Y.indexOf("line-through") !== -1, tt;
      j = j === u ? I.direction : j;
      let Q = $ / 2, et = h;
      if (r.Konva._fixTextRendering) {
        const z = this.measureSize("M");
        et = "alphabetic", Q = (z.fontBoundingBoxAscent - z.fontBoundingBoxDescent) / 2 + $ / 2;
      }
      for (j === C && I.setAttr("direction", j), I.setAttr("font", this._getContextFont()), I.setAttr("textBaseline", et), I.setAttr("textAlign", m), Z === h ? at = (this.getHeight() - ot * $ - q * 2) / 2 : Z === p && (at = this.getHeight() - ot * $ - q * 2), I.translate(q, at + q), tt = 0; tt < ot; tt++) {
        let z = 0, lt = 0;
        const st = J[tt], ct = st.text, ht = st.width, gt = st.lastInParagraph;
        if (I.save(), ft === P ? z += T - ht - q * 2 : ft === l && (z += (T - ht - q * 2) / 2), K) {
          I.save(), I.beginPath();
          const mt = r.Konva._fixTextRendering ? Math.round(M / 4) : Math.round(M / 2), _t = z, Ct = Q + lt + mt;
          I.moveTo(_t, Ct);
          const xt = ft === c && !gt ? T - q * 2 : ht;
          I.lineTo(_t + Math.round(xt), Ct), I.lineWidth = M / 15;
          const qt = this._getLinearGradient();
          I.strokeStyle = qt || H, I.stroke(), I.restore();
        }
        if (U) {
          I.save(), I.beginPath();
          const mt = r.Konva._fixTextRendering ? -Math.round(M / 4) : 0;
          I.moveTo(z, Q + lt + mt);
          const _t = ft === c && !gt ? T - q * 2 : ht;
          I.lineTo(z + Math.round(_t), Q + lt + mt), I.lineWidth = M / 15;
          const Ct = this._getLinearGradient();
          I.strokeStyle = Ct || H, I.stroke(), I.restore();
        }
        if (j !== C && (k !== 0 || ft === c)) {
          const mt = ct.split(" ").length - 1, _t = a(ct);
          for (let Ct = 0; Ct < _t.length; Ct++) {
            const xt = _t[Ct];
            xt === " " && !gt && ft === c && (z += (T - q * 2 - ht) / mt), this._partialTextX = z, this._partialTextY = Q + lt, this._partialText = xt, I.fillStrokeShape(this), z += this.measureSize(xt).width + k;
          }
        } else
          k !== 0 && I.setAttr("letterSpacing", `${k}px`), this._partialTextX = z, this._partialTextY = Q + lt, this._partialText = ct, I.fillStrokeShape(this);
        I.restore(), ot > 1 && (Q += $);
      }
    }
    _hitFunc(I) {
      const J = this.getWidth(), ot = this.getHeight();
      I.beginPath(), I.rect(0, 0, J, ot), I.closePath(), I.fillStrokeShape(this);
    }
    setText(I) {
      const J = t.Util._isString(I) ? I : I == null ? "" : I + "";
      return this._setAttr(v, J), this;
    }
    getWidth() {
      return this.attrs.width === o || this.attrs.width === void 0 ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
    }
    getHeight() {
      return this.attrs.height === o || this.attrs.height === void 0 ? this.fontSize() * this.textArr.length * this.lineHeight() + this.padding() * 2 : this.attrs.height;
    }
    getTextWidth() {
      return this.textWidth;
    }
    getTextHeight() {
      return t.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
    }
    measureSize(I) {
      var J, ot, q, M, $, Z, j, at, ft, T, k;
      let H = b(), Y = this.fontSize(), K;
      H.save(), H.font = this._getContextFont(), K = H.measureText(I), H.restore();
      const U = Y / 100;
      return {
        actualBoundingBoxAscent: (J = K.actualBoundingBoxAscent) !== null && J !== void 0 ? J : 71.58203125 * U,
        actualBoundingBoxDescent: (ot = K.actualBoundingBoxDescent) !== null && ot !== void 0 ? ot : 0,
        actualBoundingBoxLeft: (q = K.actualBoundingBoxLeft) !== null && q !== void 0 ? q : -7.421875 * U,
        actualBoundingBoxRight: (M = K.actualBoundingBoxRight) !== null && M !== void 0 ? M : 75.732421875 * U,
        alphabeticBaseline: ($ = K.alphabeticBaseline) !== null && $ !== void 0 ? $ : 0,
        emHeightAscent: (Z = K.emHeightAscent) !== null && Z !== void 0 ? Z : 100 * U,
        emHeightDescent: (j = K.emHeightDescent) !== null && j !== void 0 ? j : -20 * U,
        fontBoundingBoxAscent: (at = K.fontBoundingBoxAscent) !== null && at !== void 0 ? at : 91 * U,
        fontBoundingBoxDescent: (ft = K.fontBoundingBoxDescent) !== null && ft !== void 0 ? ft : 21 * U,
        hangingBaseline: (T = K.hangingBaseline) !== null && T !== void 0 ? T : 72.80000305175781 * U,
        ideographicBaseline: (k = K.ideographicBaseline) !== null && k !== void 0 ? k : -21 * U,
        width: K.width,
        height: Y
      };
    }
    _getContextFont() {
      return this.fontStyle() + x + this.fontVariant() + x + (this.fontSize() + y) + L(this.fontFamily());
    }
    _addTextLine(I) {
      this.align() === c && (I = I.trim());
      const ot = this._getTextWidth(I);
      return this.textArr.push({
        text: I,
        width: ot,
        lastInParagraph: !1
      });
    }
    _getTextWidth(I) {
      const J = this.letterSpacing(), ot = I.length;
      return b().measureText(I).width + J * ot;
    }
    _setTextData() {
      let I = this.text().split(`
`), J = +this.fontSize(), ot = 0, q = this.lineHeight() * J, M = this.attrs.width, $ = this.attrs.height, Z = M !== o && M !== void 0, j = $ !== o && $ !== void 0, at = this.padding(), ft = M - at * 2, T = $ - at * 2, k = 0, H = this.wrap(), Y = H !== A, K = H !== N && Y, U = this.ellipsis();
      this.textArr = [], b().font = this._getContextFont();
      const tt = U ? this._getTextWidth(F) : 0;
      for (let Q = 0, et = I.length; Q < et; ++Q) {
        let z = I[Q], lt = this._getTextWidth(z);
        if (Z && lt > ft)
          for (; z.length > 0; ) {
            let st = 0, ct = a(z).length, ht = "", gt = 0;
            for (; st < ct; ) {
              const mt = st + ct >>> 1, _t = a(z), Ct = _t.slice(0, mt + 1).join(""), xt = this._getTextWidth(Ct);
              (U && j && k + q > T ? xt + tt : xt) <= ft ? (st = mt + 1, ht = Ct, gt = xt) : ct = mt;
            }
            if (ht) {
              if (K) {
                const Ct = a(z), xt = a(ht), qt = Ct[xt.length], ie = qt === x || qt === f;
                let me;
                if (ie && gt <= ft)
                  me = xt.length;
                else {
                  const zi = xt.lastIndexOf(x), Wt = xt.lastIndexOf(f);
                  me = Math.max(zi, Wt) + 1;
                }
                me > 0 && (st = me, ht = Ct.slice(0, st).join(""), gt = this._getTextWidth(ht));
              }
              if (ht = ht.trimRight(), this._addTextLine(ht), ot = Math.max(ot, gt), k += q, this._shouldHandleEllipsis(k)) {
                this._tryToAddEllipsisToLastLine();
                break;
              }
              if (z = a(z).slice(st).join("").trimLeft(), z.length > 0 && (lt = this._getTextWidth(z), lt <= ft)) {
                this._addTextLine(z), k += q, ot = Math.max(ot, lt);
                break;
              }
            } else
              break;
          }
        else
          this._addTextLine(z), k += q, ot = Math.max(ot, lt), this._shouldHandleEllipsis(k) && Q < et - 1 && this._tryToAddEllipsisToLastLine();
        if (this.textArr[this.textArr.length - 1] && (this.textArr[this.textArr.length - 1].lastInParagraph = !0), j && k + q > T)
          break;
      }
      this.textHeight = J, this.textWidth = ot;
    }
    _shouldHandleEllipsis(I) {
      const J = +this.fontSize(), ot = this.lineHeight() * J, q = this.attrs.height, M = q !== o && q !== void 0, $ = this.padding(), Z = q - $ * 2;
      return !(this.wrap() !== A) || M && I + ot > Z;
    }
    _tryToAddEllipsisToLastLine() {
      const I = this.attrs.width, J = I !== o && I !== void 0, ot = this.padding(), q = I - ot * 2, M = this.ellipsis(), $ = this.textArr[this.textArr.length - 1];
      !$ || !M || (J && (this._getTextWidth($.text + F) < q || ($.text = $.text.slice(0, $.text.length - 3))), this.textArr.splice(this.textArr.length - 1, 1), this._addTextLine($.text + F));
    }
    getStrokeScaleEnabled() {
      return !0;
    }
    _useBufferCanvas() {
      const I = this.textDecoration().indexOf("underline") !== -1 || this.textDecoration().indexOf("line-through") !== -1, J = this.hasShadow();
      return I && J ? !0 : super._useBufferCanvas();
    }
  };
  return pn.Text = V, V.prototype._fillFunc = O, V.prototype._strokeFunc = D, V.prototype.className = S, V.prototype._attrsAffectingSize = [
    "text",
    "fontSize",
    "padding",
    "wrap",
    "lineHeight",
    "letterSpacing"
  ], (0, s._registerNode)(V), e.Factory.overWriteSetter(V, "width", (0, i.getNumberOrAutoValidator)()), e.Factory.overWriteSetter(V, "height", (0, i.getNumberOrAutoValidator)()), e.Factory.addGetterSetter(V, "direction", u), e.Factory.addGetterSetter(V, "fontFamily", "Arial"), e.Factory.addGetterSetter(V, "fontSize", 12, (0, i.getNumberValidator)()), e.Factory.addGetterSetter(V, "fontStyle", _), e.Factory.addGetterSetter(V, "fontVariant", _), e.Factory.addGetterSetter(V, "padding", 0, (0, i.getNumberValidator)()), e.Factory.addGetterSetter(V, "align", m), e.Factory.addGetterSetter(V, "verticalAlign", w), e.Factory.addGetterSetter(V, "lineHeight", 1, (0, i.getNumberValidator)()), e.Factory.addGetterSetter(V, "wrap", E), e.Factory.addGetterSetter(V, "ellipsis", !1, (0, i.getBooleanValidator)()), e.Factory.addGetterSetter(V, "letterSpacing", 0, (0, i.getNumberValidator)()), e.Factory.addGetterSetter(V, "text", "", (0, i.getStringValidator)()), e.Factory.addGetterSetter(V, "textDecoration", ""), pn;
}
var Yn = {}, Aa;
function mf() {
  if (Aa) return Yn;
  Aa = 1, Object.defineProperty(Yn, "__esModule", { value: !0 }), Yn.TextPath = void 0;
  const t = kt(), e = bt(), n = $t(), r = no(), i = Rc(), s = St(), a = vt(), o = "", l = "normal";
  function u(g) {
    g.fillText(this.partialText, 0, 0);
  }
  function c(g) {
    g.strokeText(this.partialText, 0, 0);
  }
  let d = class extends n.Shape {
    constructor(f) {
      super(f), this.dummyCanvas = t.Util.createCanvasElement(), this.dataArray = [], this._readDataAttribute(), this.on("dataChange.konva", function() {
        this._readDataAttribute(), this._setTextData();
      }), this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva", this._setTextData), this._setTextData();
    }
    _getTextPathLength() {
      return r.Path.getPathLength(this.dataArray);
    }
    _getPointAtLength(f) {
      if (!this.attrs.data)
        return null;
      const m = this.pathLength;
      return f - 1 > m ? null : r.Path.getPointAtLengthOfDataArray(f, this.dataArray);
    }
    _readDataAttribute() {
      this.dataArray = r.Path.parsePathData(this.attrs.data), this.pathLength = this._getTextPathLength();
    }
    _sceneFunc(f) {
      f.setAttr("font", this._getContextFont()), f.setAttr("textBaseline", this.textBaseline()), f.setAttr("textAlign", "left"), f.save();
      const m = this.textDecoration(), v = this.fill(), S = this.fontSize(), w = this.glyphInfo;
      m === "underline" && f.beginPath();
      for (let p = 0; p < w.length; p++) {
        f.save();
        const h = w[p].p0;
        f.translate(h.x, h.y), f.rotate(w[p].rotation), this.partialText = w[p].text, f.fillStrokeShape(this), m === "underline" && (p === 0 && f.moveTo(0, S / 2 + 1), f.lineTo(S, S / 2 + 1)), f.restore();
      }
      m === "underline" && (f.strokeStyle = v, f.lineWidth = S / 20, f.stroke()), f.restore();
    }
    _hitFunc(f) {
      f.beginPath();
      const m = this.glyphInfo;
      if (m.length >= 1) {
        const v = m[0].p0;
        f.moveTo(v.x, v.y);
      }
      for (let v = 0; v < m.length; v++) {
        const S = m[v].p1;
        f.lineTo(S.x, S.y);
      }
      f.setAttr("lineWidth", this.fontSize()), f.setAttr("strokeStyle", this.colorKey), f.stroke();
    }
    getTextWidth() {
      return this.textWidth;
    }
    getTextHeight() {
      return t.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
    }
    setText(f) {
      return i.Text.prototype.setText.call(this, f);
    }
    _getContextFont() {
      return i.Text.prototype._getContextFont.call(this);
    }
    _getTextSize(f) {
      const v = this.dummyCanvas.getContext("2d");
      v.save(), v.font = this._getContextFont();
      const S = v.measureText(f);
      return v.restore(), {
        width: S.width,
        height: parseInt(`${this.fontSize()}`, 10)
      };
    }
    _setTextData() {
      const { width: f, height: m } = this._getTextSize(this.attrs.text);
      if (this.textWidth = f, this.textHeight = m, this.glyphInfo = [], !this.attrs.data)
        return null;
      const v = this.letterSpacing(), S = this.align(), w = this.kerningFunc(), p = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * v, 0);
      let h = 0;
      S === "center" && (h = Math.max(0, this.pathLength / 2 - p / 2)), S === "right" && (h = Math.max(0, this.pathLength - p));
      const _ = (0, i.stringToArray)(this.text());
      let y = h;
      for (let x = 0; x < _.length; x++) {
        const P = this._getPointAtLength(y);
        if (!P)
          return;
        let C = this._getTextSize(_[x]).width + v;
        if (_[x] === " " && S === "justify") {
          const B = this.text().split(" ").length - 1;
          C += (this.pathLength - p) / B;
        }
        const E = this._getPointAtLength(y + C);
        if (!E)
          return;
        const N = r.Path.getLineLength(P.x, P.y, E.x, E.y);
        let A = 0;
        if (w)
          try {
            A = w(_[x - 1], _[x]) * this.fontSize();
          } catch {
            A = 0;
          }
        P.x += A, E.x += A, this.textWidth += A;
        const F = r.Path.getPointOnLine(A + N / 2, P.x, P.y, E.x, E.y), G = Math.atan2(E.y - P.y, E.x - P.x);
        this.glyphInfo.push({
          transposeX: F.x,
          transposeY: F.y,
          text: _[x],
          rotation: G,
          p0: P,
          p1: E
        }), y += C;
      }
    }
    getSelfRect() {
      if (!this.glyphInfo.length)
        return {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      const f = [];
      this.glyphInfo.forEach(function(y) {
        f.push(y.p0.x), f.push(y.p0.y), f.push(y.p1.x), f.push(y.p1.y);
      });
      let m = f[0] || 0, v = f[0] || 0, S = f[1] || 0, w = f[1] || 0, p, h;
      for (let y = 0; y < f.length / 2; y++)
        p = f[y * 2], h = f[y * 2 + 1], m = Math.min(m, p), v = Math.max(v, p), S = Math.min(S, h), w = Math.max(w, h);
      const _ = this.fontSize();
      return {
        x: m - _ / 2,
        y: S - _ / 2,
        width: v - m + _,
        height: w - S + _
      };
    }
    destroy() {
      return t.Util.releaseCanvas(this.dummyCanvas), super.destroy();
    }
  };
  return Yn.TextPath = d, d.prototype._fillFunc = u, d.prototype._strokeFunc = c, d.prototype._fillFuncHit = u, d.prototype._strokeFuncHit = c, d.prototype.className = "TextPath", d.prototype._attrsAffectingSize = ["text", "fontSize", "data"], (0, a._registerNode)(d), e.Factory.addGetterSetter(d, "data"), e.Factory.addGetterSetter(d, "fontFamily", "Arial"), e.Factory.addGetterSetter(d, "fontSize", 12, (0, s.getNumberValidator)()), e.Factory.addGetterSetter(d, "fontStyle", l), e.Factory.addGetterSetter(d, "align", "left"), e.Factory.addGetterSetter(d, "letterSpacing", 0, (0, s.getNumberValidator)()), e.Factory.addGetterSetter(d, "textBaseline", "middle"), e.Factory.addGetterSetter(d, "fontVariant", l), e.Factory.addGetterSetter(d, "text", o), e.Factory.addGetterSetter(d, "textDecoration", ""), e.Factory.addGetterSetter(d, "kerningFunc", void 0), Yn;
}
var Xn = {}, Ra;
function _f() {
  if (Ra) return Xn;
  Ra = 1, Object.defineProperty(Xn, "__esModule", { value: !0 }), Xn.Transformer = void 0;
  const t = kt(), e = bt(), n = It(), r = $t(), i = Ac(), s = to(), a = vt(), o = St(), l = vt(), u = "tr-konva", c = [
    "resizeEnabledChange",
    "rotateAnchorOffsetChange",
    "rotateEnabledChange",
    "enabledAnchorsChange",
    "anchorSizeChange",
    "borderEnabledChange",
    "borderStrokeChange",
    "borderStrokeWidthChange",
    "borderDashChange",
    "anchorStrokeChange",
    "anchorStrokeWidthChange",
    "anchorFillChange",
    "anchorCornerRadiusChange",
    "ignoreStrokeChange",
    "anchorStyleFuncChange"
  ].map((C) => C + `.${u}`).join(" "), d = "nodesRect", g = [
    "widthChange",
    "heightChange",
    "scaleXChange",
    "scaleYChange",
    "skewXChange",
    "skewYChange",
    "rotationChange",
    "offsetXChange",
    "offsetYChange",
    "transformsEnabledChange",
    "strokeWidthChange"
  ], f = {
    "top-left": -45,
    "top-center": 0,
    "top-right": 45,
    "middle-right": -90,
    "middle-left": 90,
    "bottom-left": -135,
    "bottom-center": 180,
    "bottom-right": 135
  }, m = "ontouchstart" in a.Konva._global;
  function v(C, E, N) {
    if (C === "rotater")
      return N;
    E += t.Util.degToRad(f[C] || 0);
    const A = (t.Util.radToDeg(E) % 360 + 360) % 360;
    return t.Util._inRange(A, 315 + 22.5, 360) || t.Util._inRange(A, 0, 22.5) ? "ns-resize" : t.Util._inRange(A, 45 - 22.5, 45 + 22.5) ? "nesw-resize" : t.Util._inRange(A, 90 - 22.5, 90 + 22.5) ? "ew-resize" : t.Util._inRange(A, 135 - 22.5, 135 + 22.5) ? "nwse-resize" : t.Util._inRange(A, 180 - 22.5, 180 + 22.5) ? "ns-resize" : t.Util._inRange(A, 225 - 22.5, 225 + 22.5) ? "nesw-resize" : t.Util._inRange(A, 270 - 22.5, 270 + 22.5) ? "ew-resize" : t.Util._inRange(A, 315 - 22.5, 315 + 22.5) ? "nwse-resize" : (t.Util.error("Transformer has unknown angle for cursor detection: " + A), "pointer");
  }
  const S = [
    "top-left",
    "top-center",
    "top-right",
    "middle-right",
    "middle-left",
    "bottom-left",
    "bottom-center",
    "bottom-right"
  ];
  function w(C) {
    return {
      x: C.x + C.width / 2 * Math.cos(C.rotation) + C.height / 2 * Math.sin(-C.rotation),
      y: C.y + C.height / 2 * Math.cos(C.rotation) + C.width / 2 * Math.sin(C.rotation)
    };
  }
  function p(C, E, N) {
    const A = N.x + (C.x - N.x) * Math.cos(E) - (C.y - N.y) * Math.sin(E), F = N.y + (C.x - N.x) * Math.sin(E) + (C.y - N.y) * Math.cos(E);
    return {
      ...C,
      rotation: C.rotation + E,
      x: A,
      y: F
    };
  }
  function h(C, E) {
    const N = w(C);
    return p(C, E, N);
  }
  function _(C, E, N) {
    let A = E;
    for (let F = 0; F < C.length; F++) {
      const G = a.Konva.getAngle(C[F]), B = Math.abs(G - E) % (Math.PI * 2);
      Math.min(B, Math.PI * 2 - B) < N && (A = G);
    }
    return A;
  }
  let y = 0, x = class extends s.Group {
    constructor(E) {
      super(E), this._movingAnchorName = null, this._transforming = !1, this._createElements(), this._handleMouseMove = this._handleMouseMove.bind(this), this._handleMouseUp = this._handleMouseUp.bind(this), this.update = this.update.bind(this), this.on(c, this.update), this.getNode() && this.update();
    }
    attachTo(E) {
      return this.setNode(E), this;
    }
    setNode(E) {
      return t.Util.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."), this.setNodes([E]);
    }
    getNode() {
      return this._nodes && this._nodes[0];
    }
    _getEventNamespace() {
      return u + this._id;
    }
    setNodes(E = []) {
      this._nodes && this._nodes.length && this.detach();
      const N = E.filter((F) => F.isAncestorOf(this) ? (t.Util.error("Konva.Transformer cannot be an a child of the node you are trying to attach"), !1) : !0);
      return this._nodes = E = N, E.length === 1 && this.useSingleNodeRotation() ? this.rotation(E[0].getAbsoluteRotation()) : this.rotation(0), this._nodes.forEach((F) => {
        const G = () => {
          this.nodes().length === 1 && this.useSingleNodeRotation() && this.rotation(this.nodes()[0].getAbsoluteRotation()), this._resetTransformCache(), !this._transforming && !this.isDragging() && this.update();
        };
        if (F._attrsAffectingSize.length) {
          const B = F._attrsAffectingSize.map((L) => L + "Change." + this._getEventNamespace()).join(" ");
          F.on(B, G);
        }
        F.on(g.map((B) => B + `.${this._getEventNamespace()}`).join(" "), G), F.on(`absoluteTransformChange.${this._getEventNamespace()}`, G), this._proxyDrag(F);
      }), this._resetTransformCache(), !!this.findOne(".top-left") && this.update(), this;
    }
    _proxyDrag(E) {
      let N;
      E.on(`dragstart.${this._getEventNamespace()}`, (A) => {
        N = E.getAbsolutePosition(), !this.isDragging() && E !== this.findOne(".back") && this.startDrag(A, !1);
      }), E.on(`dragmove.${this._getEventNamespace()}`, (A) => {
        if (!N)
          return;
        const F = E.getAbsolutePosition(), G = F.x - N.x, B = F.y - N.y;
        this.nodes().forEach((L) => {
          if (L === E || L.isDragging())
            return;
          const X = L.getAbsolutePosition();
          L.setAbsolutePosition({
            x: X.x + G,
            y: X.y + B
          }), L.startDrag(A);
        }), N = null;
      });
    }
    getNodes() {
      return this._nodes || [];
    }
    getActiveAnchor() {
      return this._movingAnchorName;
    }
    detach() {
      this._nodes && this._nodes.forEach((E) => {
        E.off("." + this._getEventNamespace());
      }), this._nodes = [], this._resetTransformCache();
    }
    _resetTransformCache() {
      this._clearCache(d), this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform");
    }
    _getNodeRect() {
      return this._getCache(d, this.__getNodeRect);
    }
    __getNodeShape(E, N = this.rotation(), A) {
      const F = E.getClientRect({
        skipTransform: !0,
        skipShadow: !0,
        skipStroke: this.ignoreStroke()
      }), G = E.getAbsoluteScale(A), B = E.getAbsolutePosition(A), L = F.x * G.x - E.offsetX() * G.x, X = F.y * G.y - E.offsetY() * G.y, b = (a.Konva.getAngle(E.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2), O = {
        x: B.x + L * Math.cos(b) + X * Math.sin(-b),
        y: B.y + X * Math.cos(b) + L * Math.sin(b),
        width: F.width * G.x,
        height: F.height * G.y,
        rotation: b
      };
      return p(O, -a.Konva.getAngle(N), {
        x: 0,
        y: 0
      });
    }
    __getNodeRect() {
      if (!this.getNode())
        return {
          x: -1e8,
          y: -1e8,
          width: 0,
          height: 0,
          rotation: 0
        };
      const N = [];
      this.nodes().map((b) => {
        const O = b.getClientRect({
          skipTransform: !0,
          skipShadow: !0,
          skipStroke: this.ignoreStroke()
        }), D = [
          { x: O.x, y: O.y },
          { x: O.x + O.width, y: O.y },
          { x: O.x + O.width, y: O.y + O.height },
          { x: O.x, y: O.y + O.height }
        ], R = b.getAbsoluteTransform();
        D.forEach(function(V) {
          const W = R.point(V);
          N.push(W);
        });
      });
      const A = new t.Transform();
      A.rotate(-a.Konva.getAngle(this.rotation()));
      let F = 1 / 0, G = 1 / 0, B = -1 / 0, L = -1 / 0;
      N.forEach(function(b) {
        const O = A.point(b);
        F === void 0 && (F = B = O.x, G = L = O.y), F = Math.min(F, O.x), G = Math.min(G, O.y), B = Math.max(B, O.x), L = Math.max(L, O.y);
      }), A.invert();
      const X = A.point({ x: F, y: G });
      return {
        x: X.x,
        y: X.y,
        width: B - F,
        height: L - G,
        rotation: a.Konva.getAngle(this.rotation())
      };
    }
    getX() {
      return this._getNodeRect().x;
    }
    getY() {
      return this._getNodeRect().y;
    }
    getWidth() {
      return this._getNodeRect().width;
    }
    getHeight() {
      return this._getNodeRect().height;
    }
    _createElements() {
      this._createBack(), S.forEach((E) => {
        this._createAnchor(E);
      }), this._createAnchor("rotater");
    }
    _createAnchor(E) {
      const N = new i.Rect({
        stroke: "rgb(0, 161, 255)",
        fill: "white",
        strokeWidth: 1,
        name: E + " _anchor",
        dragDistance: 0,
        draggable: !0,
        hitStrokeWidth: m ? 10 : "auto"
      }), A = this;
      N.on("mousedown touchstart", function(F) {
        A._handleMouseDown(F);
      }), N.on("dragstart", (F) => {
        N.stopDrag(), F.cancelBubble = !0;
      }), N.on("dragend", (F) => {
        F.cancelBubble = !0;
      }), N.on("mouseenter", () => {
        const F = a.Konva.getAngle(this.rotation()), G = this.rotateAnchorCursor(), B = v(E, F, G);
        N.getStage().content && (N.getStage().content.style.cursor = B), this._cursorChange = !0;
      }), N.on("mouseout", () => {
        N.getStage().content && (N.getStage().content.style.cursor = ""), this._cursorChange = !1;
      }), this.add(N);
    }
    _createBack() {
      const E = new r.Shape({
        name: "back",
        width: 0,
        height: 0,
        draggable: !0,
        sceneFunc(N, A) {
          const F = A.getParent(), G = F.padding();
          N.beginPath(), N.rect(-G, -G, A.width() + G * 2, A.height() + G * 2), N.moveTo(A.width() / 2, -G), F.rotateEnabled() && F.rotateLineVisible() && N.lineTo(A.width() / 2, -F.rotateAnchorOffset() * t.Util._sign(A.height()) - G), N.fillStrokeShape(A);
        },
        hitFunc: (N, A) => {
          if (!this.shouldOverdrawWholeArea())
            return;
          const F = this.padding();
          N.beginPath(), N.rect(-F, -F, A.width() + F * 2, A.height() + F * 2), N.fillStrokeShape(A);
        }
      });
      this.add(E), this._proxyDrag(E), E.on("dragstart", (N) => {
        N.cancelBubble = !0;
      }), E.on("dragmove", (N) => {
        N.cancelBubble = !0;
      }), E.on("dragend", (N) => {
        N.cancelBubble = !0;
      }), this.on("dragmove", (N) => {
        this.update();
      });
    }
    _handleMouseDown(E) {
      if (this._transforming)
        return;
      this._movingAnchorName = E.target.name().split(" ")[0];
      const N = this._getNodeRect(), A = N.width, F = N.height, G = Math.sqrt(Math.pow(A, 2) + Math.pow(F, 2));
      this.sin = Math.abs(F / G), this.cos = Math.abs(A / G), typeof window < "u" && (window.addEventListener("mousemove", this._handleMouseMove), window.addEventListener("touchmove", this._handleMouseMove), window.addEventListener("mouseup", this._handleMouseUp, !0), window.addEventListener("touchend", this._handleMouseUp, !0)), this._transforming = !0;
      const B = E.target.getAbsolutePosition(), L = E.target.getStage().getPointerPosition();
      this._anchorDragOffset = {
        x: L.x - B.x,
        y: L.y - B.y
      }, y++, this._fire("transformstart", { evt: E.evt, target: this.getNode() }), this._nodes.forEach((X) => {
        X._fire("transformstart", { evt: E.evt, target: X });
      });
    }
    _handleMouseMove(E) {
      let N, A, F;
      const G = this.findOne("." + this._movingAnchorName), B = G.getStage();
      B.setPointersPositions(E);
      const L = B.getPointerPosition();
      let X = {
        x: L.x - this._anchorDragOffset.x,
        y: L.y - this._anchorDragOffset.y
      };
      const b = G.getAbsolutePosition();
      this.anchorDragBoundFunc() && (X = this.anchorDragBoundFunc()(b, X, E)), G.setAbsolutePosition(X);
      const O = G.getAbsolutePosition();
      if (b.x === O.x && b.y === O.y)
        return;
      if (this._movingAnchorName === "rotater") {
        const q = this._getNodeRect();
        N = G.x() - q.width / 2, A = -G.y() + q.height / 2;
        let M = Math.atan2(-A, N) + Math.PI / 2;
        q.height < 0 && (M -= Math.PI);
        const Z = a.Konva.getAngle(this.rotation()) + M, j = a.Konva.getAngle(this.rotationSnapTolerance()), ft = _(this.rotationSnaps(), Z, j) - q.rotation, T = h(q, ft);
        this._fitNodesInto(T, E);
        return;
      }
      const D = this.shiftBehavior();
      let R;
      D === "inverted" ? R = this.keepRatio() && !E.shiftKey : D === "none" ? R = this.keepRatio() : R = this.keepRatio() || E.shiftKey;
      let V = this.centeredScaling() || E.altKey;
      if (this._movingAnchorName === "top-left") {
        if (R) {
          const q = V ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-right").x(),
            y: this.findOne(".bottom-right").y()
          };
          F = Math.sqrt(Math.pow(q.x - G.x(), 2) + Math.pow(q.y - G.y(), 2));
          const M = this.findOne(".top-left").x() > q.x ? -1 : 1, $ = this.findOne(".top-left").y() > q.y ? -1 : 1;
          N = F * this.cos * M, A = F * this.sin * $, this.findOne(".top-left").x(q.x - N), this.findOne(".top-left").y(q.y - A);
        }
      } else if (this._movingAnchorName === "top-center")
        this.findOne(".top-left").y(G.y());
      else if (this._movingAnchorName === "top-right") {
        if (R) {
          const q = V ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-left").x(),
            y: this.findOne(".bottom-left").y()
          };
          F = Math.sqrt(Math.pow(G.x() - q.x, 2) + Math.pow(q.y - G.y(), 2));
          const M = this.findOne(".top-right").x() < q.x ? -1 : 1, $ = this.findOne(".top-right").y() > q.y ? -1 : 1;
          N = F * this.cos * M, A = F * this.sin * $, this.findOne(".top-right").x(q.x + N), this.findOne(".top-right").y(q.y - A);
        }
        var W = G.position();
        this.findOne(".top-left").y(W.y), this.findOne(".bottom-right").x(W.x);
      } else if (this._movingAnchorName === "middle-left")
        this.findOne(".top-left").x(G.x());
      else if (this._movingAnchorName === "middle-right")
        this.findOne(".bottom-right").x(G.x());
      else if (this._movingAnchorName === "bottom-left") {
        if (R) {
          const q = V ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-right").x(),
            y: this.findOne(".top-right").y()
          };
          F = Math.sqrt(Math.pow(q.x - G.x(), 2) + Math.pow(G.y() - q.y, 2));
          const M = q.x < G.x() ? -1 : 1, $ = G.y() < q.y ? -1 : 1;
          N = F * this.cos * M, A = F * this.sin * $, G.x(q.x - N), G.y(q.y + A);
        }
        W = G.position(), this.findOne(".top-left").x(W.x), this.findOne(".bottom-right").y(W.y);
      } else if (this._movingAnchorName === "bottom-center")
        this.findOne(".bottom-right").y(G.y());
      else if (this._movingAnchorName === "bottom-right") {
        if (R) {
          const q = V ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-left").x(),
            y: this.findOne(".top-left").y()
          };
          F = Math.sqrt(Math.pow(G.x() - q.x, 2) + Math.pow(G.y() - q.y, 2));
          const M = this.findOne(".bottom-right").x() < q.x ? -1 : 1, $ = this.findOne(".bottom-right").y() < q.y ? -1 : 1;
          N = F * this.cos * M, A = F * this.sin * $, this.findOne(".bottom-right").x(q.x + N), this.findOne(".bottom-right").y(q.y + A);
        }
      } else
        console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
      if (V = this.centeredScaling() || E.altKey, V) {
        const q = this.findOne(".top-left"), M = this.findOne(".bottom-right"), $ = q.x(), Z = q.y(), j = this.getWidth() - M.x(), at = this.getHeight() - M.y();
        M.move({
          x: -$,
          y: -Z
        }), q.move({
          x: j,
          y: at
        });
      }
      const I = this.findOne(".top-left").getAbsolutePosition();
      N = I.x, A = I.y;
      const J = this.findOne(".bottom-right").x() - this.findOne(".top-left").x(), ot = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
      this._fitNodesInto({
        x: N,
        y: A,
        width: J,
        height: ot,
        rotation: a.Konva.getAngle(this.rotation())
      }, E);
    }
    _handleMouseUp(E) {
      this._removeEvents(E);
    }
    getAbsoluteTransform() {
      return this.getTransform();
    }
    _removeEvents(E) {
      var N;
      if (this._transforming) {
        this._transforming = !1, typeof window < "u" && (window.removeEventListener("mousemove", this._handleMouseMove), window.removeEventListener("touchmove", this._handleMouseMove), window.removeEventListener("mouseup", this._handleMouseUp, !0), window.removeEventListener("touchend", this._handleMouseUp, !0));
        const A = this.getNode();
        y--, this._fire("transformend", { evt: E, target: A }), (N = this.getLayer()) === null || N === void 0 || N.batchDraw(), A && this._nodes.forEach((F) => {
          var G;
          F._fire("transformend", { evt: E, target: F }), (G = F.getLayer()) === null || G === void 0 || G.batchDraw();
        }), this._movingAnchorName = null;
      }
    }
    _fitNodesInto(E, N) {
      const A = this._getNodeRect(), F = 1;
      if (t.Util._inRange(E.width, -this.padding() * 2 - F, F)) {
        this.update();
        return;
      }
      if (t.Util._inRange(E.height, -this.padding() * 2 - F, F)) {
        this.update();
        return;
      }
      const G = new t.Transform();
      if (G.rotate(a.Konva.getAngle(this.rotation())), this._movingAnchorName && E.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
        const R = G.point({
          x: -this.padding() * 2,
          y: 0
        });
        E.x += R.x, E.y += R.y, E.width += this.padding() * 2, this._movingAnchorName = this._movingAnchorName.replace("left", "right"), this._anchorDragOffset.x -= R.x, this._anchorDragOffset.y -= R.y;
      } else if (this._movingAnchorName && E.width < 0 && this._movingAnchorName.indexOf("right") >= 0) {
        const R = G.point({
          x: this.padding() * 2,
          y: 0
        });
        this._movingAnchorName = this._movingAnchorName.replace("right", "left"), this._anchorDragOffset.x -= R.x, this._anchorDragOffset.y -= R.y, E.width += this.padding() * 2;
      }
      if (this._movingAnchorName && E.height < 0 && this._movingAnchorName.indexOf("top") >= 0) {
        const R = G.point({
          x: 0,
          y: -this.padding() * 2
        });
        E.x += R.x, E.y += R.y, this._movingAnchorName = this._movingAnchorName.replace("top", "bottom"), this._anchorDragOffset.x -= R.x, this._anchorDragOffset.y -= R.y, E.height += this.padding() * 2;
      } else if (this._movingAnchorName && E.height < 0 && this._movingAnchorName.indexOf("bottom") >= 0) {
        const R = G.point({
          x: 0,
          y: this.padding() * 2
        });
        this._movingAnchorName = this._movingAnchorName.replace("bottom", "top"), this._anchorDragOffset.x -= R.x, this._anchorDragOffset.y -= R.y, E.height += this.padding() * 2;
      }
      if (this.boundBoxFunc()) {
        const R = this.boundBoxFunc()(A, E);
        R ? E = R : t.Util.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
      }
      const B = 1e7, L = new t.Transform();
      L.translate(A.x, A.y), L.rotate(A.rotation), L.scale(A.width / B, A.height / B);
      const X = new t.Transform(), b = E.width / B, O = E.height / B;
      this.flipEnabled() === !1 ? (X.translate(E.x, E.y), X.rotate(E.rotation), X.translate(E.width < 0 ? E.width : 0, E.height < 0 ? E.height : 0), X.scale(Math.abs(b), Math.abs(O))) : (X.translate(E.x, E.y), X.rotate(E.rotation), X.scale(b, O));
      const D = X.multiply(L.invert());
      this._nodes.forEach((R) => {
        var V;
        const W = R.getParent().getAbsoluteTransform(), I = R.getTransform().copy();
        I.translate(R.offsetX(), R.offsetY());
        const J = new t.Transform();
        J.multiply(W.copy().invert()).multiply(D).multiply(W).multiply(I);
        const ot = J.decompose();
        R.setAttrs(ot), (V = R.getLayer()) === null || V === void 0 || V.batchDraw();
      }), this.rotation(t.Util._getRotation(E.rotation)), this._nodes.forEach((R) => {
        this._fire("transform", { evt: N, target: R }), R._fire("transform", { evt: N, target: R });
      }), this._resetTransformCache(), this.update(), this.getLayer().batchDraw();
    }
    forceUpdate() {
      this._resetTransformCache(), this.update();
    }
    _batchChangeChild(E, N) {
      this.findOne(E).setAttrs(N);
    }
    update() {
      var E;
      const N = this._getNodeRect();
      this.rotation(t.Util._getRotation(N.rotation));
      const A = N.width, F = N.height, G = this.enabledAnchors(), B = this.resizeEnabled(), L = this.padding(), X = this.anchorSize(), b = this.find("._anchor");
      b.forEach((D) => {
        D.setAttrs({
          width: X,
          height: X,
          offsetX: X / 2,
          offsetY: X / 2,
          stroke: this.anchorStroke(),
          strokeWidth: this.anchorStrokeWidth(),
          fill: this.anchorFill(),
          cornerRadius: this.anchorCornerRadius()
        });
      }), this._batchChangeChild(".top-left", {
        x: 0,
        y: 0,
        offsetX: X / 2 + L,
        offsetY: X / 2 + L,
        visible: B && G.indexOf("top-left") >= 0
      }), this._batchChangeChild(".top-center", {
        x: A / 2,
        y: 0,
        offsetY: X / 2 + L,
        visible: B && G.indexOf("top-center") >= 0
      }), this._batchChangeChild(".top-right", {
        x: A,
        y: 0,
        offsetX: X / 2 - L,
        offsetY: X / 2 + L,
        visible: B && G.indexOf("top-right") >= 0
      }), this._batchChangeChild(".middle-left", {
        x: 0,
        y: F / 2,
        offsetX: X / 2 + L,
        visible: B && G.indexOf("middle-left") >= 0
      }), this._batchChangeChild(".middle-right", {
        x: A,
        y: F / 2,
        offsetX: X / 2 - L,
        visible: B && G.indexOf("middle-right") >= 0
      }), this._batchChangeChild(".bottom-left", {
        x: 0,
        y: F,
        offsetX: X / 2 + L,
        offsetY: X / 2 - L,
        visible: B && G.indexOf("bottom-left") >= 0
      }), this._batchChangeChild(".bottom-center", {
        x: A / 2,
        y: F,
        offsetY: X / 2 - L,
        visible: B && G.indexOf("bottom-center") >= 0
      }), this._batchChangeChild(".bottom-right", {
        x: A,
        y: F,
        offsetX: X / 2 - L,
        offsetY: X / 2 - L,
        visible: B && G.indexOf("bottom-right") >= 0
      }), this._batchChangeChild(".rotater", {
        x: A / 2,
        y: -this.rotateAnchorOffset() * t.Util._sign(F) - L,
        visible: this.rotateEnabled()
      }), this._batchChangeChild(".back", {
        width: A,
        height: F,
        visible: this.borderEnabled(),
        stroke: this.borderStroke(),
        strokeWidth: this.borderStrokeWidth(),
        dash: this.borderDash(),
        x: 0,
        y: 0
      });
      const O = this.anchorStyleFunc();
      O && b.forEach((D) => {
        O(D);
      }), (E = this.getLayer()) === null || E === void 0 || E.batchDraw();
    }
    isTransforming() {
      return this._transforming;
    }
    stopTransform() {
      if (this._transforming) {
        this._removeEvents();
        const E = this.findOne("." + this._movingAnchorName);
        E && E.stopDrag();
      }
    }
    destroy() {
      return this.getStage() && this._cursorChange && this.getStage().content && (this.getStage().content.style.cursor = ""), s.Group.prototype.destroy.call(this), this.detach(), this._removeEvents(), this;
    }
    toObject() {
      return n.Node.prototype.toObject.call(this);
    }
    clone(E) {
      return n.Node.prototype.clone.call(this, E);
    }
    getClientRect() {
      return this.nodes().length > 0 ? super.getClientRect() : { x: 0, y: 0, width: 0, height: 0 };
    }
  };
  Xn.Transformer = x, x.isTransforming = () => y > 0;
  function P(C) {
    return C instanceof Array || t.Util.warn("enabledAnchors value should be an array"), C instanceof Array && C.forEach(function(E) {
      S.indexOf(E) === -1 && t.Util.warn("Unknown anchor name: " + E + ". Available names are: " + S.join(", "));
    }), C || [];
  }
  return x.prototype.className = "Transformer", (0, l._registerNode)(x), e.Factory.addGetterSetter(x, "enabledAnchors", S, P), e.Factory.addGetterSetter(x, "flipEnabled", !0, (0, o.getBooleanValidator)()), e.Factory.addGetterSetter(x, "resizeEnabled", !0), e.Factory.addGetterSetter(x, "anchorSize", 10, (0, o.getNumberValidator)()), e.Factory.addGetterSetter(x, "rotateEnabled", !0), e.Factory.addGetterSetter(x, "rotateLineVisible", !0), e.Factory.addGetterSetter(x, "rotationSnaps", []), e.Factory.addGetterSetter(x, "rotateAnchorOffset", 50, (0, o.getNumberValidator)()), e.Factory.addGetterSetter(x, "rotateAnchorCursor", "crosshair"), e.Factory.addGetterSetter(x, "rotationSnapTolerance", 5, (0, o.getNumberValidator)()), e.Factory.addGetterSetter(x, "borderEnabled", !0), e.Factory.addGetterSetter(x, "anchorStroke", "rgb(0, 161, 255)"), e.Factory.addGetterSetter(x, "anchorStrokeWidth", 1, (0, o.getNumberValidator)()), e.Factory.addGetterSetter(x, "anchorFill", "white"), e.Factory.addGetterSetter(x, "anchorCornerRadius", 0, (0, o.getNumberValidator)()), e.Factory.addGetterSetter(x, "borderStroke", "rgb(0, 161, 255)"), e.Factory.addGetterSetter(x, "borderStrokeWidth", 1, (0, o.getNumberValidator)()), e.Factory.addGetterSetter(x, "borderDash"), e.Factory.addGetterSetter(x, "keepRatio", !0), e.Factory.addGetterSetter(x, "shiftBehavior", "default"), e.Factory.addGetterSetter(x, "centeredScaling", !1), e.Factory.addGetterSetter(x, "ignoreStroke", !1), e.Factory.addGetterSetter(x, "padding", 0, (0, o.getNumberValidator)()), e.Factory.addGetterSetter(x, "nodes"), e.Factory.addGetterSetter(x, "node"), e.Factory.addGetterSetter(x, "boundBoxFunc"), e.Factory.addGetterSetter(x, "anchorDragBoundFunc"), e.Factory.addGetterSetter(x, "anchorStyleFunc"), e.Factory.addGetterSetter(x, "shouldOverdrawWholeArea", !1), e.Factory.addGetterSetter(x, "useSingleNodeRotation", !0), e.Factory.backCompat(x, {
    lineEnabled: "borderEnabled",
    rotateHandlerOffset: "rotateAnchorOffset",
    enabledHandlers: "enabledAnchors"
  }), Xn;
}
var Jn = {}, Da;
function yf() {
  if (Da) return Jn;
  Da = 1, Object.defineProperty(Jn, "__esModule", { value: !0 }), Jn.Wedge = void 0;
  const t = bt(), e = $t(), n = vt(), r = St(), i = vt();
  let s = class extends e.Shape {
    _sceneFunc(o) {
      o.beginPath(), o.arc(0, 0, this.radius(), 0, n.Konva.getAngle(this.angle()), this.clockwise()), o.lineTo(0, 0), o.closePath(), o.fillStrokeShape(this);
    }
    getWidth() {
      return this.radius() * 2;
    }
    getHeight() {
      return this.radius() * 2;
    }
    setWidth(o) {
      this.radius(o / 2);
    }
    setHeight(o) {
      this.radius(o / 2);
    }
  };
  return Jn.Wedge = s, s.prototype.className = "Wedge", s.prototype._centroid = !0, s.prototype._attrsAffectingSize = ["radius"], (0, i._registerNode)(s), t.Factory.addGetterSetter(s, "radius", 0, (0, r.getNumberValidator)()), t.Factory.addGetterSetter(s, "angle", 0, (0, r.getNumberValidator)()), t.Factory.addGetterSetter(s, "clockwise", !1), t.Factory.backCompat(s, {
    angleDeg: "angle",
    getAngleDeg: "getAngle",
    setAngleDeg: "setAngle"
  }), Jn;
}
var Qn = {}, Ma;
function vf() {
  if (Ma) return Qn;
  Ma = 1, Object.defineProperty(Qn, "__esModule", { value: !0 }), Qn.Blur = void 0;
  const t = bt(), e = It(), n = St();
  function r() {
    this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
  }
  const i = [
    512,
    512,
    456,
    512,
    328,
    456,
    335,
    512,
    405,
    328,
    271,
    456,
    388,
    335,
    292,
    512,
    454,
    405,
    364,
    328,
    298,
    271,
    496,
    456,
    420,
    388,
    360,
    335,
    312,
    292,
    273,
    512,
    482,
    454,
    428,
    405,
    383,
    364,
    345,
    328,
    312,
    298,
    284,
    271,
    259,
    496,
    475,
    456,
    437,
    420,
    404,
    388,
    374,
    360,
    347,
    335,
    323,
    312,
    302,
    292,
    282,
    273,
    265,
    512,
    497,
    482,
    468,
    454,
    441,
    428,
    417,
    405,
    394,
    383,
    373,
    364,
    354,
    345,
    337,
    328,
    320,
    312,
    305,
    298,
    291,
    284,
    278,
    271,
    265,
    259,
    507,
    496,
    485,
    475,
    465,
    456,
    446,
    437,
    428,
    420,
    412,
    404,
    396,
    388,
    381,
    374,
    367,
    360,
    354,
    347,
    341,
    335,
    329,
    323,
    318,
    312,
    307,
    302,
    297,
    292,
    287,
    282,
    278,
    273,
    269,
    265,
    261,
    512,
    505,
    497,
    489,
    482,
    475,
    468,
    461,
    454,
    447,
    441,
    435,
    428,
    422,
    417,
    411,
    405,
    399,
    394,
    389,
    383,
    378,
    373,
    368,
    364,
    359,
    354,
    350,
    345,
    341,
    337,
    332,
    328,
    324,
    320,
    316,
    312,
    309,
    305,
    301,
    298,
    294,
    291,
    287,
    284,
    281,
    278,
    274,
    271,
    268,
    265,
    262,
    259,
    257,
    507,
    501,
    496,
    491,
    485,
    480,
    475,
    470,
    465,
    460,
    456,
    451,
    446,
    442,
    437,
    433,
    428,
    424,
    420,
    416,
    412,
    408,
    404,
    400,
    396,
    392,
    388,
    385,
    381,
    377,
    374,
    370,
    367,
    363,
    360,
    357,
    354,
    350,
    347,
    344,
    341,
    338,
    335,
    332,
    329,
    326,
    323,
    320,
    318,
    315,
    312,
    310,
    307,
    304,
    302,
    299,
    297,
    294,
    292,
    289,
    287,
    285,
    282,
    280,
    278,
    275,
    273,
    271,
    269,
    267,
    265,
    263,
    261,
    259
  ], s = [
    9,
    11,
    12,
    13,
    13,
    14,
    14,
    15,
    15,
    15,
    15,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24
  ];
  function a(l, u) {
    const c = l.data, d = l.width, g = l.height;
    let f, m, v, S, w, p, h, _, y, x, P, C, E, N, A, F, G, B, L, X;
    const b = u + u + 1, O = d - 1, D = g - 1, R = u + 1, V = R * (R + 1) / 2, W = new r(), I = i[u], J = s[u];
    let ot = null, q = W, M = null, $ = null;
    for (let Z = 1; Z < b; Z++)
      q = q.next = new r(), Z === R && (ot = q);
    q.next = W, v = m = 0;
    for (let Z = 0; Z < g; Z++) {
      C = E = N = A = S = w = p = h = 0, _ = R * (F = c[m]), y = R * (G = c[m + 1]), x = R * (B = c[m + 2]), P = R * (L = c[m + 3]), S += V * F, w += V * G, p += V * B, h += V * L, q = W;
      for (let j = 0; j < R; j++)
        q.r = F, q.g = G, q.b = B, q.a = L, q = q.next;
      for (let j = 1; j < R; j++)
        f = m + ((O < j ? O : j) << 2), S += (q.r = F = c[f]) * (X = R - j), w += (q.g = G = c[f + 1]) * X, p += (q.b = B = c[f + 2]) * X, h += (q.a = L = c[f + 3]) * X, C += F, E += G, N += B, A += L, q = q.next;
      M = W, $ = ot;
      for (let j = 0; j < d; j++)
        c[m + 3] = L = h * I >> J, L !== 0 ? (L = 255 / L, c[m] = (S * I >> J) * L, c[m + 1] = (w * I >> J) * L, c[m + 2] = (p * I >> J) * L) : c[m] = c[m + 1] = c[m + 2] = 0, S -= _, w -= y, p -= x, h -= P, _ -= M.r, y -= M.g, x -= M.b, P -= M.a, f = v + ((f = j + u + 1) < O ? f : O) << 2, C += M.r = c[f], E += M.g = c[f + 1], N += M.b = c[f + 2], A += M.a = c[f + 3], S += C, w += E, p += N, h += A, M = M.next, _ += F = $.r, y += G = $.g, x += B = $.b, P += L = $.a, C -= F, E -= G, N -= B, A -= L, $ = $.next, m += 4;
      v += d;
    }
    for (let Z = 0; Z < d; Z++) {
      E = N = A = C = w = p = h = S = 0, m = Z << 2, _ = R * (F = c[m]), y = R * (G = c[m + 1]), x = R * (B = c[m + 2]), P = R * (L = c[m + 3]), S += V * F, w += V * G, p += V * B, h += V * L, q = W;
      for (let at = 0; at < R; at++)
        q.r = F, q.g = G, q.b = B, q.a = L, q = q.next;
      let j = d;
      for (let at = 1; at <= u; at++)
        m = j + Z << 2, S += (q.r = F = c[m]) * (X = R - at), w += (q.g = G = c[m + 1]) * X, p += (q.b = B = c[m + 2]) * X, h += (q.a = L = c[m + 3]) * X, C += F, E += G, N += B, A += L, q = q.next, at < D && (j += d);
      m = Z, M = W, $ = ot;
      for (let at = 0; at < g; at++)
        f = m << 2, c[f + 3] = L = h * I >> J, L > 0 ? (L = 255 / L, c[f] = (S * I >> J) * L, c[f + 1] = (w * I >> J) * L, c[f + 2] = (p * I >> J) * L) : c[f] = c[f + 1] = c[f + 2] = 0, S -= _, w -= y, p -= x, h -= P, _ -= M.r, y -= M.g, x -= M.b, P -= M.a, f = Z + ((f = at + R) < D ? f : D) * d << 2, S += C += M.r = c[f], w += E += M.g = c[f + 1], p += N += M.b = c[f + 2], h += A += M.a = c[f + 3], M = M.next, _ += F = $.r, y += G = $.g, x += B = $.b, P += L = $.a, C -= F, E -= G, N -= B, A -= L, $ = $.next, m += d;
    }
  }
  const o = function(u) {
    const c = Math.round(this.blurRadius());
    c > 0 && a(u, c);
  };
  return Qn.Blur = o, t.Factory.addGetterSetter(e.Node, "blurRadius", 0, (0, n.getNumberValidator)(), t.Factory.afterSetFilter), Qn;
}
var Zn = {}, ka;
function bf() {
  if (ka) return Zn;
  ka = 1, Object.defineProperty(Zn, "__esModule", { value: !0 }), Zn.Brighten = void 0;
  const t = bt(), e = It(), n = St(), r = function(i) {
    const s = this.brightness() * 255, a = i.data, o = a.length;
    for (let l = 0; l < o; l += 4)
      a[l] += s, a[l + 1] += s, a[l + 2] += s;
  };
  return Zn.Brighten = r, t.Factory.addGetterSetter(e.Node, "brightness", 0, (0, n.getNumberValidator)(), t.Factory.afterSetFilter), Zn;
}
var ti = {}, Fa;
function Sf() {
  if (Fa) return ti;
  Fa = 1, Object.defineProperty(ti, "__esModule", { value: !0 }), ti.Contrast = void 0;
  const t = bt(), e = It(), n = St(), r = function(i) {
    const s = Math.pow((this.contrast() + 100) / 100, 2), a = i.data, o = a.length;
    let l = 150, u = 150, c = 150;
    for (let d = 0; d < o; d += 4)
      l = a[d], u = a[d + 1], c = a[d + 2], l /= 255, l -= 0.5, l *= s, l += 0.5, l *= 255, u /= 255, u -= 0.5, u *= s, u += 0.5, u *= 255, c /= 255, c -= 0.5, c *= s, c += 0.5, c *= 255, l = l < 0 ? 0 : l > 255 ? 255 : l, u = u < 0 ? 0 : u > 255 ? 255 : u, c = c < 0 ? 0 : c > 255 ? 255 : c, a[d] = l, a[d + 1] = u, a[d + 2] = c;
  };
  return ti.Contrast = r, t.Factory.addGetterSetter(e.Node, "contrast", 0, (0, n.getNumberValidator)(), t.Factory.afterSetFilter), ti;
}
var ei = {}, Va;
function Cf() {
  if (Va) return ei;
  Va = 1, Object.defineProperty(ei, "__esModule", { value: !0 }), ei.Emboss = void 0;
  const t = bt(), e = It(), n = kt(), r = St(), i = function(s) {
    const a = this.embossStrength() * 10, o = this.embossWhiteLevel() * 255, l = this.embossDirection(), u = this.embossBlend(), c = s.data, d = s.width, g = s.height, f = d * 4;
    let m = 0, v = 0, S = g;
    switch (l) {
      case "top-left":
        m = -1, v = -1;
        break;
      case "top":
        m = -1, v = 0;
        break;
      case "top-right":
        m = -1, v = 1;
        break;
      case "right":
        m = 0, v = 1;
        break;
      case "bottom-right":
        m = 1, v = 1;
        break;
      case "bottom":
        m = 1, v = 0;
        break;
      case "bottom-left":
        m = 1, v = -1;
        break;
      case "left":
        m = 0, v = -1;
        break;
      default:
        n.Util.error("Unknown emboss direction: " + l);
    }
    do {
      const w = (S - 1) * f;
      let p = m;
      S + p < 1 && (p = 0), S + p > g && (p = 0);
      const h = (S - 1 + p) * d * 4;
      let _ = d;
      do {
        const y = w + (_ - 1) * 4;
        let x = v;
        _ + x < 1 && (x = 0), _ + x > d && (x = 0);
        const P = h + (_ - 1 + x) * 4, C = c[y] - c[P], E = c[y + 1] - c[P + 1], N = c[y + 2] - c[P + 2];
        let A = C;
        const F = A > 0 ? A : -A, G = E > 0 ? E : -E, B = N > 0 ? N : -N;
        if (G > F && (A = E), B > F && (A = N), A *= a, u) {
          const L = c[y] + A, X = c[y + 1] + A, b = c[y + 2] + A;
          c[y] = L > 255 ? 255 : L < 0 ? 0 : L, c[y + 1] = X > 255 ? 255 : X < 0 ? 0 : X, c[y + 2] = b > 255 ? 255 : b < 0 ? 0 : b;
        } else {
          let L = o - A;
          L < 0 ? L = 0 : L > 255 && (L = 255), c[y] = c[y + 1] = c[y + 2] = L;
        }
      } while (--_);
    } while (--S);
  };
  return ei.Emboss = i, t.Factory.addGetterSetter(e.Node, "embossStrength", 0.5, (0, r.getNumberValidator)(), t.Factory.afterSetFilter), t.Factory.addGetterSetter(e.Node, "embossWhiteLevel", 0.5, (0, r.getNumberValidator)(), t.Factory.afterSetFilter), t.Factory.addGetterSetter(e.Node, "embossDirection", "top-left", void 0, t.Factory.afterSetFilter), t.Factory.addGetterSetter(e.Node, "embossBlend", !1, void 0, t.Factory.afterSetFilter), ei;
}
var ni = {}, La;
function Ef() {
  if (La) return ni;
  La = 1, Object.defineProperty(ni, "__esModule", { value: !0 }), ni.Enhance = void 0;
  const t = bt(), e = It(), n = St();
  function r(s, a, o, l, u) {
    const c = o - a, d = u - l;
    if (c === 0)
      return l + d / 2;
    if (d === 0)
      return l;
    let g = (s - a) / c;
    return g = d * g + l, g;
  }
  const i = function(s) {
    const a = s.data, o = a.length;
    let l = a[0], u = l, c, d = a[1], g = d, f, m = a[2], v = m, S;
    const w = this.enhance();
    if (w === 0)
      return;
    for (let C = 0; C < o; C += 4)
      c = a[C + 0], c < l ? l = c : c > u && (u = c), f = a[C + 1], f < d ? d = f : f > g && (g = f), S = a[C + 2], S < m ? m = S : S > v && (v = S);
    u === l && (u = 255, l = 0), g === d && (g = 255, d = 0), v === m && (v = 255, m = 0);
    let p, h, _, y, x, P;
    if (w > 0)
      p = u + w * (255 - u), h = l - w * (l - 0), _ = g + w * (255 - g), y = d - w * (d - 0), x = v + w * (255 - v), P = m - w * (m - 0);
    else {
      const C = (u + l) * 0.5;
      p = u + w * (u - C), h = l + w * (l - C);
      const E = (g + d) * 0.5;
      _ = g + w * (g - E), y = d + w * (d - E);
      const N = (v + m) * 0.5;
      x = v + w * (v - N), P = m + w * (m - N);
    }
    for (let C = 0; C < o; C += 4)
      a[C + 0] = r(a[C + 0], l, u, h, p), a[C + 1] = r(a[C + 1], d, g, y, _), a[C + 2] = r(a[C + 2], m, v, P, x);
  };
  return ni.Enhance = i, t.Factory.addGetterSetter(e.Node, "enhance", 0, (0, n.getNumberValidator)(), t.Factory.afterSetFilter), ni;
}
var ii = {}, Ia;
function wf() {
  if (Ia) return ii;
  Ia = 1, Object.defineProperty(ii, "__esModule", { value: !0 }), ii.Grayscale = void 0;
  const t = function(e) {
    const n = e.data, r = n.length;
    for (let i = 0; i < r; i += 4) {
      const s = 0.34 * n[i] + 0.5 * n[i + 1] + 0.16 * n[i + 2];
      n[i] = s, n[i + 1] = s, n[i + 2] = s;
    }
  };
  return ii.Grayscale = t, ii;
}
var ri = {}, Ga;
function xf() {
  if (Ga) return ri;
  Ga = 1, Object.defineProperty(ri, "__esModule", { value: !0 }), ri.HSL = void 0;
  const t = bt(), e = It(), n = St();
  t.Factory.addGetterSetter(e.Node, "hue", 0, (0, n.getNumberValidator)(), t.Factory.afterSetFilter), t.Factory.addGetterSetter(e.Node, "saturation", 0, (0, n.getNumberValidator)(), t.Factory.afterSetFilter), t.Factory.addGetterSetter(e.Node, "luminance", 0, (0, n.getNumberValidator)(), t.Factory.afterSetFilter);
  const r = function(i) {
    const s = i.data, a = s.length, o = 1, l = Math.pow(2, this.saturation()), u = Math.abs(this.hue() + 360) % 360, c = this.luminance() * 127, d = o * l * Math.cos(u * Math.PI / 180), g = o * l * Math.sin(u * Math.PI / 180), f = 0.299 * o + 0.701 * d + 0.167 * g, m = 0.587 * o - 0.587 * d + 0.33 * g, v = 0.114 * o - 0.114 * d - 0.497 * g, S = 0.299 * o - 0.299 * d - 0.328 * g, w = 0.587 * o + 0.413 * d + 0.035 * g, p = 0.114 * o - 0.114 * d + 0.293 * g, h = 0.299 * o - 0.3 * d + 1.25 * g, _ = 0.587 * o - 0.586 * d - 1.05 * g, y = 0.114 * o + 0.886 * d - 0.2 * g;
    let x, P, C, E;
    for (let N = 0; N < a; N += 4)
      x = s[N + 0], P = s[N + 1], C = s[N + 2], E = s[N + 3], s[N + 0] = f * x + m * P + v * C + c, s[N + 1] = S * x + w * P + p * C + c, s[N + 2] = h * x + _ * P + y * C + c, s[N + 3] = E;
  };
  return ri.HSL = r, ri;
}
var si = {}, Ua;
function Nf() {
  if (Ua) return si;
  Ua = 1, Object.defineProperty(si, "__esModule", { value: !0 }), si.HSV = void 0;
  const t = bt(), e = It(), n = St(), r = function(i) {
    const s = i.data, a = s.length, o = Math.pow(2, this.value()), l = Math.pow(2, this.saturation()), u = Math.abs(this.hue() + 360) % 360, c = o * l * Math.cos(u * Math.PI / 180), d = o * l * Math.sin(u * Math.PI / 180), g = 0.299 * o + 0.701 * c + 0.167 * d, f = 0.587 * o - 0.587 * c + 0.33 * d, m = 0.114 * o - 0.114 * c - 0.497 * d, v = 0.299 * o - 0.299 * c - 0.328 * d, S = 0.587 * o + 0.413 * c + 0.035 * d, w = 0.114 * o - 0.114 * c + 0.293 * d, p = 0.299 * o - 0.3 * c + 1.25 * d, h = 0.587 * o - 0.586 * c - 1.05 * d, _ = 0.114 * o + 0.886 * c - 0.2 * d;
    for (let y = 0; y < a; y += 4) {
      const x = s[y + 0], P = s[y + 1], C = s[y + 2], E = s[y + 3];
      s[y + 0] = g * x + f * P + m * C, s[y + 1] = v * x + S * P + w * C, s[y + 2] = p * x + h * P + _ * C, s[y + 3] = E;
    }
  };
  return si.HSV = r, t.Factory.addGetterSetter(e.Node, "hue", 0, (0, n.getNumberValidator)(), t.Factory.afterSetFilter), t.Factory.addGetterSetter(e.Node, "saturation", 0, (0, n.getNumberValidator)(), t.Factory.afterSetFilter), t.Factory.addGetterSetter(e.Node, "value", 0, (0, n.getNumberValidator)(), t.Factory.afterSetFilter), si;
}
var oi = {}, Ba;
function Of() {
  if (Ba) return oi;
  Ba = 1, Object.defineProperty(oi, "__esModule", { value: !0 }), oi.Invert = void 0;
  const t = function(e) {
    const n = e.data, r = n.length;
    for (let i = 0; i < r; i += 4)
      n[i] = 255 - n[i], n[i + 1] = 255 - n[i + 1], n[i + 2] = 255 - n[i + 2];
  };
  return oi.Invert = t, oi;
}
var ai = {}, Ha;
function Tf() {
  if (Ha) return ai;
  Ha = 1, Object.defineProperty(ai, "__esModule", { value: !0 }), ai.Kaleidoscope = void 0;
  const t = bt(), e = It(), n = kt(), r = St(), i = function(o, l, u) {
    const c = o.data, d = l.data, g = o.width, f = o.height, m = u.polarCenterX || g / 2, v = u.polarCenterY || f / 2;
    let S = Math.sqrt(m * m + v * v), w = g - m, p = f - v;
    const h = Math.sqrt(w * w + p * p);
    S = h > S ? h : S;
    const _ = f, y = g, x = 360 / y * Math.PI / 180;
    for (let P = 0; P < y; P += 1) {
      const C = Math.sin(P * x), E = Math.cos(P * x);
      for (let N = 0; N < _; N += 1) {
        w = Math.floor(m + S * N / _ * E), p = Math.floor(v + S * N / _ * C);
        let A = (p * g + w) * 4;
        const F = c[A + 0], G = c[A + 1], B = c[A + 2], L = c[A + 3];
        A = (P + N * g) * 4, d[A + 0] = F, d[A + 1] = G, d[A + 2] = B, d[A + 3] = L;
      }
    }
  }, s = function(o, l, u) {
    const c = o.data, d = l.data, g = o.width, f = o.height, m = u.polarCenterX || g / 2, v = u.polarCenterY || f / 2;
    let S = Math.sqrt(m * m + v * v), w = g - m, p = f - v;
    const h = Math.sqrt(w * w + p * p);
    S = h > S ? h : S;
    const _ = f, y = g, x = 0;
    let P, C;
    for (w = 0; w < g; w += 1)
      for (p = 0; p < f; p += 1) {
        const E = w - m, N = p - v, A = Math.sqrt(E * E + N * N) * _ / S;
        let F = (Math.atan2(N, E) * 180 / Math.PI + 360 + x) % 360;
        F = F * y / 360, P = Math.floor(F), C = Math.floor(A);
        let G = (C * g + P) * 4;
        const B = c[G + 0], L = c[G + 1], X = c[G + 2], b = c[G + 3];
        G = (p * g + w) * 4, d[G + 0] = B, d[G + 1] = L, d[G + 2] = X, d[G + 3] = b;
      }
  }, a = function(o) {
    const l = o.width, u = o.height;
    let c, d, g, f, m, v, S, w, p, h, _ = Math.round(this.kaleidoscopePower());
    const y = Math.round(this.kaleidoscopeAngle()), x = Math.floor(l * (y % 360) / 360);
    if (_ < 1)
      return;
    const P = n.Util.createCanvasElement();
    P.width = l, P.height = u;
    const C = P.getContext("2d").getImageData(0, 0, l, u);
    n.Util.releaseCanvas(P), i(o, C, {
      polarCenterX: l / 2,
      polarCenterY: u / 2
    });
    let E = l / Math.pow(2, _);
    for (; E <= 8; )
      E = E * 2, _ -= 1;
    E = Math.ceil(E);
    let N = E, A = 0, F = N, G = 1;
    for (x + E > l && (A = N, F = 0, G = -1), d = 0; d < u; d += 1)
      for (c = A; c !== F; c += G)
        g = Math.round(c + x) % l, p = (l * d + g) * 4, m = C.data[p + 0], v = C.data[p + 1], S = C.data[p + 2], w = C.data[p + 3], h = (l * d + c) * 4, C.data[h + 0] = m, C.data[h + 1] = v, C.data[h + 2] = S, C.data[h + 3] = w;
    for (d = 0; d < u; d += 1)
      for (N = Math.floor(E), f = 0; f < _; f += 1) {
        for (c = 0; c < N + 1; c += 1)
          p = (l * d + c) * 4, m = C.data[p + 0], v = C.data[p + 1], S = C.data[p + 2], w = C.data[p + 3], h = (l * d + N * 2 - c - 1) * 4, C.data[h + 0] = m, C.data[h + 1] = v, C.data[h + 2] = S, C.data[h + 3] = w;
        N *= 2;
      }
    s(C, o, {});
  };
  return ai.Kaleidoscope = a, t.Factory.addGetterSetter(e.Node, "kaleidoscopePower", 2, (0, r.getNumberValidator)(), t.Factory.afterSetFilter), t.Factory.addGetterSetter(e.Node, "kaleidoscopeAngle", 0, (0, r.getNumberValidator)(), t.Factory.afterSetFilter), ai;
}
var li = {}, ja;
function Pf() {
  if (ja) return li;
  ja = 1, Object.defineProperty(li, "__esModule", { value: !0 }), li.Mask = void 0;
  const t = bt(), e = It(), n = St();
  function r(g, f, m) {
    let v = (m * g.width + f) * 4;
    const S = [];
    return S.push(g.data[v++], g.data[v++], g.data[v++], g.data[v++]), S;
  }
  function i(g, f) {
    return Math.sqrt(Math.pow(g[0] - f[0], 2) + Math.pow(g[1] - f[1], 2) + Math.pow(g[2] - f[2], 2));
  }
  function s(g) {
    const f = [0, 0, 0];
    for (let m = 0; m < g.length; m++)
      f[0] += g[m][0], f[1] += g[m][1], f[2] += g[m][2];
    return f[0] /= g.length, f[1] /= g.length, f[2] /= g.length, f;
  }
  function a(g, f) {
    const m = r(g, 0, 0), v = r(g, g.width - 1, 0), S = r(g, 0, g.height - 1), w = r(g, g.width - 1, g.height - 1), p = f || 10;
    if (i(m, v) < p && i(v, w) < p && i(w, S) < p && i(S, m) < p) {
      const h = s([v, m, w, S]), _ = [];
      for (let y = 0; y < g.width * g.height; y++) {
        const x = i(h, [
          g.data[y * 4],
          g.data[y * 4 + 1],
          g.data[y * 4 + 2]
        ]);
        _[y] = x < p ? 0 : 255;
      }
      return _;
    }
  }
  function o(g, f) {
    for (let m = 0; m < g.width * g.height; m++)
      g.data[4 * m + 3] = f[m];
  }
  function l(g, f, m) {
    const v = [1, 1, 1, 1, 0, 1, 1, 1, 1], S = Math.round(Math.sqrt(v.length)), w = Math.floor(S / 2), p = [];
    for (let h = 0; h < m; h++)
      for (let _ = 0; _ < f; _++) {
        const y = h * f + _;
        let x = 0;
        for (let P = 0; P < S; P++)
          for (let C = 0; C < S; C++) {
            const E = h + P - w, N = _ + C - w;
            if (E >= 0 && E < m && N >= 0 && N < f) {
              const A = E * f + N, F = v[P * S + C];
              x += g[A] * F;
            }
          }
        p[y] = x === 2040 ? 255 : 0;
      }
    return p;
  }
  function u(g, f, m) {
    const v = [1, 1, 1, 1, 1, 1, 1, 1, 1], S = Math.round(Math.sqrt(v.length)), w = Math.floor(S / 2), p = [];
    for (let h = 0; h < m; h++)
      for (let _ = 0; _ < f; _++) {
        const y = h * f + _;
        let x = 0;
        for (let P = 0; P < S; P++)
          for (let C = 0; C < S; C++) {
            const E = h + P - w, N = _ + C - w;
            if (E >= 0 && E < m && N >= 0 && N < f) {
              const A = E * f + N, F = v[P * S + C];
              x += g[A] * F;
            }
          }
        p[y] = x >= 1020 ? 255 : 0;
      }
    return p;
  }
  function c(g, f, m) {
    const v = [0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111], S = Math.round(Math.sqrt(v.length)), w = Math.floor(S / 2), p = [];
    for (let h = 0; h < m; h++)
      for (let _ = 0; _ < f; _++) {
        const y = h * f + _;
        let x = 0;
        for (let P = 0; P < S; P++)
          for (let C = 0; C < S; C++) {
            const E = h + P - w, N = _ + C - w;
            if (E >= 0 && E < m && N >= 0 && N < f) {
              const A = E * f + N, F = v[P * S + C];
              x += g[A] * F;
            }
          }
        p[y] = x;
      }
    return p;
  }
  const d = function(g) {
    const f = this.threshold();
    let m = a(g, f);
    return m && (m = l(m, g.width, g.height), m = u(m, g.width, g.height), m = c(m, g.width, g.height), o(g, m)), g;
  };
  return li.Mask = d, t.Factory.addGetterSetter(e.Node, "threshold", 0, (0, n.getNumberValidator)(), t.Factory.afterSetFilter), li;
}
var ci = {}, $a;
function Af() {
  if ($a) return ci;
  $a = 1, Object.defineProperty(ci, "__esModule", { value: !0 }), ci.Noise = void 0;
  const t = bt(), e = It(), n = St(), r = function(i) {
    const s = this.noise() * 255, a = i.data, o = a.length, l = s / 2;
    for (let u = 0; u < o; u += 4)
      a[u + 0] += l - 2 * l * Math.random(), a[u + 1] += l - 2 * l * Math.random(), a[u + 2] += l - 2 * l * Math.random();
  };
  return ci.Noise = r, t.Factory.addGetterSetter(e.Node, "noise", 0.2, (0, n.getNumberValidator)(), t.Factory.afterSetFilter), ci;
}
var hi = {}, Wa;
function Rf() {
  if (Wa) return hi;
  Wa = 1, Object.defineProperty(hi, "__esModule", { value: !0 }), hi.Pixelate = void 0;
  const t = bt(), e = kt(), n = It(), r = St(), i = function(s) {
    let a = Math.ceil(this.pixelSize()), o = s.width, l = s.height, u = Math.ceil(o / a), c = Math.ceil(l / a), d = s.data;
    if (a <= 0) {
      e.Util.error("pixelSize value can not be <= 0");
      return;
    }
    for (let g = 0; g < u; g += 1)
      for (let f = 0; f < c; f += 1) {
        let m = 0, v = 0, S = 0, w = 0;
        const p = g * a, h = p + a, _ = f * a, y = _ + a;
        let x = 0;
        for (let P = p; P < h; P += 1)
          if (!(P >= o))
            for (let C = _; C < y; C += 1) {
              if (C >= l)
                continue;
              const E = (o * C + P) * 4;
              m += d[E + 0], v += d[E + 1], S += d[E + 2], w += d[E + 3], x += 1;
            }
        m = m / x, v = v / x, S = S / x, w = w / x;
        for (let P = p; P < h; P += 1)
          if (!(P >= o))
            for (let C = _; C < y; C += 1) {
              if (C >= l)
                continue;
              const E = (o * C + P) * 4;
              d[E + 0] = m, d[E + 1] = v, d[E + 2] = S, d[E + 3] = w;
            }
      }
  };
  return hi.Pixelate = i, t.Factory.addGetterSetter(n.Node, "pixelSize", 8, (0, r.getNumberValidator)(), t.Factory.afterSetFilter), hi;
}
var ui = {}, qa;
function Df() {
  if (qa) return ui;
  qa = 1, Object.defineProperty(ui, "__esModule", { value: !0 }), ui.Posterize = void 0;
  const t = bt(), e = It(), n = St(), r = function(i) {
    const s = Math.round(this.levels() * 254) + 1, a = i.data, o = a.length, l = 255 / s;
    for (let u = 0; u < o; u += 1)
      a[u] = Math.floor(a[u] / l) * l;
  };
  return ui.Posterize = r, t.Factory.addGetterSetter(e.Node, "levels", 0.5, (0, n.getNumberValidator)(), t.Factory.afterSetFilter), ui;
}
var di = {}, Ka;
function Mf() {
  if (Ka) return di;
  Ka = 1, Object.defineProperty(di, "__esModule", { value: !0 }), di.RGB = void 0;
  const t = bt(), e = It(), n = St(), r = function(i) {
    const s = i.data, a = s.length, o = this.red(), l = this.green(), u = this.blue();
    for (let c = 0; c < a; c += 4) {
      const d = (0.34 * s[c] + 0.5 * s[c + 1] + 0.16 * s[c + 2]) / 255;
      s[c] = d * o, s[c + 1] = d * l, s[c + 2] = d * u, s[c + 3] = s[c + 3];
    }
  };
  return di.RGB = r, t.Factory.addGetterSetter(e.Node, "red", 0, function(i) {
    return this._filterUpToDate = !1, i > 255 ? 255 : i < 0 ? 0 : Math.round(i);
  }), t.Factory.addGetterSetter(e.Node, "green", 0, function(i) {
    return this._filterUpToDate = !1, i > 255 ? 255 : i < 0 ? 0 : Math.round(i);
  }), t.Factory.addGetterSetter(e.Node, "blue", 0, n.RGBComponent, t.Factory.afterSetFilter), di;
}
var fi = {}, za;
function kf() {
  if (za) return fi;
  za = 1, Object.defineProperty(fi, "__esModule", { value: !0 }), fi.RGBA = void 0;
  const t = bt(), e = It(), n = St(), r = function(i) {
    const s = i.data, a = s.length, o = this.red(), l = this.green(), u = this.blue(), c = this.alpha();
    for (let d = 0; d < a; d += 4) {
      const g = 1 - c;
      s[d] = o * c + s[d] * g, s[d + 1] = l * c + s[d + 1] * g, s[d + 2] = u * c + s[d + 2] * g;
    }
  };
  return fi.RGBA = r, t.Factory.addGetterSetter(e.Node, "red", 0, function(i) {
    return this._filterUpToDate = !1, i > 255 ? 255 : i < 0 ? 0 : Math.round(i);
  }), t.Factory.addGetterSetter(e.Node, "green", 0, function(i) {
    return this._filterUpToDate = !1, i > 255 ? 255 : i < 0 ? 0 : Math.round(i);
  }), t.Factory.addGetterSetter(e.Node, "blue", 0, n.RGBComponent, t.Factory.afterSetFilter), t.Factory.addGetterSetter(e.Node, "alpha", 1, function(i) {
    return this._filterUpToDate = !1, i > 1 ? 1 : i < 0 ? 0 : i;
  }), fi;
}
var pi = {}, Ya;
function Ff() {
  if (Ya) return pi;
  Ya = 1, Object.defineProperty(pi, "__esModule", { value: !0 }), pi.Sepia = void 0;
  const t = function(e) {
    const n = e.data, r = n.length;
    for (let i = 0; i < r; i += 4) {
      const s = n[i + 0], a = n[i + 1], o = n[i + 2];
      n[i + 0] = Math.min(255, s * 0.393 + a * 0.769 + o * 0.189), n[i + 1] = Math.min(255, s * 0.349 + a * 0.686 + o * 0.168), n[i + 2] = Math.min(255, s * 0.272 + a * 0.534 + o * 0.131);
    }
  };
  return pi.Sepia = t, pi;
}
var gi = {}, Xa;
function Vf() {
  if (Xa) return gi;
  Xa = 1, Object.defineProperty(gi, "__esModule", { value: !0 }), gi.Solarize = void 0;
  const t = function(e) {
    const n = e.data, r = e.width, i = e.height, s = r * 4;
    let a = i;
    do {
      const o = (a - 1) * s;
      let l = r;
      do {
        const u = o + (l - 1) * 4;
        let c = n[u], d = n[u + 1], g = n[u + 2];
        c > 127 && (c = 255 - c), d > 127 && (d = 255 - d), g > 127 && (g = 255 - g), n[u] = c, n[u + 1] = d, n[u + 2] = g;
      } while (--l);
    } while (--a);
  };
  return gi.Solarize = t, gi;
}
var mi = {}, Ja;
function Lf() {
  if (Ja) return mi;
  Ja = 1, Object.defineProperty(mi, "__esModule", { value: !0 }), mi.Threshold = void 0;
  const t = bt(), e = It(), n = St(), r = function(i) {
    const s = this.threshold() * 255, a = i.data, o = a.length;
    for (let l = 0; l < o; l += 1)
      a[l] = a[l] < s ? 0 : 255;
  };
  return mi.Threshold = r, t.Factory.addGetterSetter(e.Node, "threshold", 0.5, (0, n.getNumberValidator)(), t.Factory.afterSetFilter), mi;
}
var Qa;
function If() {
  if (Qa) return An;
  Qa = 1, Object.defineProperty(An, "__esModule", { value: !0 }), An.Konva = void 0;
  const t = rf(), e = sf(), n = af(), r = lf(), i = cf(), s = hf(), a = uf(), o = Pc(), l = no(), u = Ac(), c = df(), d = ff(), g = pf(), f = gf(), m = Rc(), v = mf(), S = _f(), w = yf(), p = vf(), h = bf(), _ = Sf(), y = Cf(), x = Ef(), P = wf(), C = xf(), E = Nf(), N = Of(), A = Tf(), F = Pf(), G = Af(), B = Rf(), L = Df(), X = Mf(), b = kf(), O = Ff(), D = Vf(), R = Lf();
  return An.Konva = t.Konva.Util._assign(t.Konva, {
    Arc: e.Arc,
    Arrow: n.Arrow,
    Circle: r.Circle,
    Ellipse: i.Ellipse,
    Image: s.Image,
    Label: a.Label,
    Tag: a.Tag,
    Line: o.Line,
    Path: l.Path,
    Rect: u.Rect,
    RegularPolygon: c.RegularPolygon,
    Ring: d.Ring,
    Sprite: g.Sprite,
    Star: f.Star,
    Text: m.Text,
    TextPath: v.TextPath,
    Transformer: S.Transformer,
    Wedge: w.Wedge,
    Filters: {
      Blur: p.Blur,
      Brighten: h.Brighten,
      Contrast: _.Contrast,
      Emboss: y.Emboss,
      Enhance: x.Enhance,
      Grayscale: P.Grayscale,
      HSL: C.HSL,
      HSV: E.HSV,
      Invert: N.Invert,
      Kaleidoscope: A.Kaleidoscope,
      Mask: F.Mask,
      Noise: G.Noise,
      Pixelate: B.Pixelate,
      Posterize: L.Posterize,
      RGB: X.RGB,
      RGBA: b.RGBA,
      Sepia: O.Sepia,
      Solarize: D.Solarize,
      Threshold: R.Threshold
    }
  }), An;
}
var Gf = or.exports, Za;
function Uf() {
  if (Za) return or.exports;
  Za = 1, Object.defineProperty(Gf, "__esModule", { value: !0 });
  const t = If();
  return or.exports = t.Konva, or.exports;
}
var Bf = Uf();
const Vi = /* @__PURE__ */ Zd(Bf);
function xr(t) {
  if (!Vi.autoDrawEnabled) {
    const e = t.getLayer() || t.getStage();
    e && e.batchDraw();
  }
}
const tl = { key: !0, style: !0, elm: !0, isRootInsert: !0 }, hs = ".vue-konva-event";
function Dc(t, e, n, r) {
  const i = t.__konvaNode, s = {};
  let a = !1;
  for (let o in n) {
    if (tl.hasOwnProperty(o))
      continue;
    const l = o.slice(0, 2) === "on", u = n[o] !== e[o];
    if (l && u) {
      let c = o.slice(2).toLowerCase();
      c.slice(0, 7) === "content" && (c = "content" + c.slice(7, 1).toUpperCase() + c.slice(8)), i == null || i.off(c + hs, n[o]);
    }
    !e.hasOwnProperty(o) && (i == null || i.setAttr(o, void 0));
  }
  for (let o in e) {
    if (tl.hasOwnProperty(o))
      continue;
    let l = o.slice(0, 2) === "on";
    const u = n[o] !== e[o];
    if (l && u) {
      let c = o.slice(2).toLowerCase();
      c.slice(0, 7) === "content" && (c = "content" + c.slice(7, 1).toUpperCase() + c.slice(8)), e[o] && (i == null || i.off(c + hs), i == null || i.on(c + hs, e[o]));
    }
    !l && (e[o] !== n[o] || r && e[o] !== (i == null ? void 0 : i.getAttr(o))) && (a = !0, s[o] = e[o]);
  }
  a && i && (i.setAttrs(s), xr(i));
}
const Ds = ".vue-konva-vmodel", el = "onUpdate:";
function Nr(t, e) {
  t.off(Ds);
  const n = e.vnode.props || {};
  for (const r in n)
    if (r.startsWith(el)) {
      const i = r.slice(el.length), s = n[r];
      t.on(`${i}Change${Ds}`, () => {
        s(t.getAttr(i));
      });
    }
}
const Hf = "V";
function jf(t) {
  function e(n) {
    return n != null && n.__konvaNode ? n : n != null && n.parent ? e(n.parent) : (console.error("vue-konva error: Can not find parent node"), null);
  }
  return e(t.parent);
}
function Mc(t) {
  return t.component ? t.component.__konvaNode || Mc(t.component.subTree) : null;
}
function $f(t) {
  const { el: e, component: n } = t, r = Mc(t);
  if (e != null && e.tagName && n && !r) {
    const i = e.tagName.toLowerCase();
    return console.error(
      `vue-konva error: You are trying to render "${i}" inside your component tree. Looks like it is not a Konva node. You can render only Konva components inside the Stage.`
    ), null;
  }
  return r;
}
function Wf(t) {
  const e = (i) => !!i && typeof i == "object" && "component" in i, n = (i) => Array.isArray(i), r = (i) => e(i) ? [i, ...r(i.children)] : n(i) ? i.flatMap(r) : [];
  return r(t.children);
}
function kc(t, e) {
  const n = Wf(t), r = [];
  n.forEach((s) => {
    const a = $f(s);
    a && r.push(a);
  });
  let i = !1;
  r.forEach((s, a) => {
    s.getZIndex() !== a && (s.setZIndex(a), i = !0);
  }), i && xr(e);
}
var al;
const qf = ((al = Vi.default) == null ? void 0 : al.Stage) || Vi.Stage, Kf = /* @__PURE__ */ cn({
  name: "Stage",
  props: {
    config: {
      type: Object,
      default: function() {
        return {};
      }
    },
    __useStrictMode: {
      type: Boolean
    }
  },
  inheritAttrs: !1,
  setup(t, { attrs: e, slots: n, expose: r }) {
    const i = Wi();
    if (!i) return;
    const s = /* @__PURE__ */ En({}), a = /* @__PURE__ */ Ot(null), o = new qf({
      width: t.config.width,
      height: t.config.height,
      container: document.createElement("div")
      // Fake container. Will be replaced
    });
    i.__konvaNode = o, c();
    function l() {
      return i == null ? void 0 : i.__konvaNode;
    }
    function u() {
      return i == null ? void 0 : i.__konvaNode;
    }
    function c() {
      if (!i) return;
      const d = s || {}, g = {
        ...e,
        ...t.config
      };
      Dc(i, g, d, t.__useStrictMode), Object.assign(s, g);
    }
    return ln(() => {
      a.value && o.container(a.value), c(), Nr(o, i);
    }), zs(() => {
      c(), kc(i.subTree, o), Nr(o, i);
    }), ji(() => {
      o.destroy();
    }), se(() => t.config, c, { deep: !0 }), r({
      getStage: u,
      getNode: l
    }), () => {
      var d;
      return _d(
        "div",
        {
          ref: a,
          id: e == null ? void 0 : e.id,
          accesskey: e == null ? void 0 : e.accesskey,
          class: e == null ? void 0 : e.class,
          role: e == null ? void 0 : e.role,
          style: e == null ? void 0 : e.style,
          tabindex: e == null ? void 0 : e.tabindex,
          title: e == null ? void 0 : e.title
        },
        (d = n.default) == null ? void 0 : d.call(n)
      );
    };
  }
}), zf = ".vue-konva-event", Yf = {
  Group: !0,
  Layer: !0,
  FastLayer: !0,
  Label: !0
};
function Mt(t, e) {
  return /* @__PURE__ */ cn({
    name: t,
    props: {
      config: {
        type: Object,
        default: function() {
          return {};
        }
      },
      __useStrictMode: {
        type: Boolean
      }
    },
    setup(n, { attrs: r, slots: i, expose: s }) {
      const a = Wi();
      if (!a) return;
      const o = /* @__PURE__ */ En({}), l = new e();
      a.__konvaNode = l, a.vnode.__konvaNode = l, d();
      function u() {
        return a == null ? void 0 : a.__konvaNode;
      }
      function c() {
        return a == null ? void 0 : a.__konvaNode;
      }
      function d() {
        if (!a) return;
        const f = {};
        for (const S in a == null ? void 0 : a.vnode.props)
          S.slice(0, 2) === "on" && (f[S] = a.vnode.props[S]);
        const m = o || {}, v = {
          ...r,
          ...n.config,
          ...f
        };
        Dc(a, v, m, n.__useStrictMode), Object.assign(o, v);
      }
      ln(() => {
        var m;
        const f = (m = jf(a)) == null ? void 0 : m.__konvaNode;
        f && "add" in f && f.add(l), xr(l), Nr(l, a);
      }), Ir(() => {
        xr(l), l.destroy(), l.off(zf), l.off(Ds);
      }), zs(() => {
        d(), kc(a.subTree, l), Nr(l, a);
      }), se(() => n.config, d, { deep: !0 }), s({
        getStage: c,
        getNode: u
      });
      const g = Yf.hasOwnProperty(t);
      return () => {
        var f;
        return g ? (f = i.default) == null ? void 0 : f.call(i) : null;
      };
    }
  });
}
const Ft = Vi.default || Vi, Xf = Mt("Arc", Ft.Arc), Jf = Mt("Arrow", Ft.Arrow), Qf = Mt("Circle", Ft.Circle), Zf = Mt("Ellipse", Ft.Ellipse), t0 = Mt("FastLayer", Ft.FastLayer), e0 = Mt("Group", Ft.Group), n0 = Mt("Image", Ft.Image), i0 = Mt("Label", Ft.Label), r0 = Mt("Layer", Ft.Layer), s0 = Mt("Line", Ft.Line), o0 = Mt("Path", Ft.Path), a0 = Mt("Rect", Ft.Rect), l0 = Mt("RegularPolygon", Ft.RegularPolygon), c0 = Mt("Ring", Ft.Ring), h0 = Mt("Shape", Ft.Shape), u0 = Mt("Sprite", Ft.Sprite), d0 = Mt("Star", Ft.Star), f0 = Mt("Tag", Ft.Tag), p0 = Mt("Text", Ft.Text), g0 = Mt("TextPath", Ft.TextPath), m0 = Mt("Transformer", Ft.Transformer), _0 = Mt("Wedge", Ft.Wedge), y0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Arc: Xf,
  Arrow: Jf,
  Circle: Qf,
  Ellipse: Zf,
  FastLayer: t0,
  Group: e0,
  Image: n0,
  Label: i0,
  Layer: r0,
  Line: s0,
  Path: o0,
  Rect: a0,
  RegularPolygon: l0,
  Ring: c0,
  Shape: h0,
  Sprite: u0,
  Star: d0,
  Tag: f0,
  Text: p0,
  TextPath: g0,
  Transformer: m0,
  Wedge: _0
}, Symbol.toStringTag, { value: "Module" })), v0 = {
  install: (t, e) => {
    const n = (e == null ? void 0 : e.prefix) || Hf, r = e != null && e.customNodes ? Object.entries(e.customNodes).map(
      ([i, s]) => Mt(i, s)
    ) : [];
    [
      Kf,
      ...Object.values(y0),
      ...r
    ].forEach((i) => {
      t.component(`${n}${i.name}`, i);
    });
  }
}, b0 = {
  key: 0,
  d: "M18 6 6 18M6 6l12 12"
}, S0 = {
  key: 3,
  d: "M20 6 9 17l-5-5"
}, C0 = /* @__PURE__ */ cn({
  __name: "Icon",
  props: {
    name: {},
    color: {}
  },
  setup(t) {
    return (e, n) => (Nt(), Dt("svg", vc({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "20",
      height: "20",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "aria-hidden": "true",
      style: { color: t.color || "currentColor" },
      class: "pe-icon"
    }, e.$attrs), [
      t.name === "close" ? (Nt(), Dt("path", b0)) : t.name === "reload" ? (Nt(), Dt(At, { key: 1 }, [
        n[0] || (n[0] = nt("path", { d: "M3 12a9 9 0 0 1 15-6.7L21 8" }, null, -1)),
        n[1] || (n[1] = nt("path", { d: "M21 3v5h-5" }, null, -1)),
        n[2] || (n[2] = nt("path", { d: "M21 12a9 9 0 0 1-15 6.7L3 16" }, null, -1)),
        n[3] || (n[3] = nt("path", { d: "M3 21v-5h5" }, null, -1))
      ], 64)) : t.name === "minimize" ? (Nt(), Dt(At, { key: 2 }, [
        n[4] || (n[4] = nt("path", { d: "M4 14h6v6" }, null, -1)),
        n[5] || (n[5] = nt("path", { d: "M20 10h-6V4" }, null, -1)),
        n[6] || (n[6] = nt("path", { d: "M14 10l7-7" }, null, -1)),
        n[7] || (n[7] = nt("path", { d: "M3 21l7-7" }, null, -1))
      ], 64)) : t.name === "success" ? (Nt(), Dt("path", S0)) : t.name === "flip" ? (Nt(), Dt(At, { key: 4 }, [
        n[8] || (n[8] = Fo('<path d="M8 3H5a2 2 0 0 0-2 2v3" data-v-c548d7a0></path><path d="M16 3h3a2 2 0 0 1 2 2v3" data-v-c548d7a0></path><path d="M8 21H5a2 2 0 0 1-2-2v-3" data-v-c548d7a0></path><path d="M16 21h3a2 2 0 0 0 2-2v-3" data-v-c548d7a0></path><path d="M12 3v18" data-v-c548d7a0></path>', 5))
      ], 64)) : t.name === "clock" ? (Nt(), Dt(At, { key: 5 }, [
        n[9] || (n[9] = nt("circle", {
          cx: "12",
          cy: "12",
          r: "10"
        }, null, -1)),
        n[10] || (n[10] = nt("path", { d: "M12 6v6l4 2" }, null, -1))
      ], 64)) : t.name === "sliders" ? (Nt(), Dt(At, { key: 6 }, [
        n[11] || (n[11] = Fo('<path d="M4 21v-7" data-v-c548d7a0></path><path d="M4 10V3" data-v-c548d7a0></path><path d="M12 21v-9" data-v-c548d7a0></path><path d="M12 8V3" data-v-c548d7a0></path><path d="M20 21v-5" data-v-c548d7a0></path><path d="M20 12V3" data-v-c548d7a0></path><path d="M1 14h6" data-v-c548d7a0></path><path d="M9 8h6" data-v-c548d7a0></path><path d="M17 16h6" data-v-c548d7a0></path>', 9))
      ], 64)) : t.name === "undo" ? (Nt(), Dt(At, { key: 7 }, [
        n[12] || (n[12] = nt("path", { d: "M3 7v6h6" }, null, -1)),
        n[13] || (n[13] = nt("path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6.7 2.9L3 13" }, null, -1))
      ], 64)) : t.name === "redo" ? (Nt(), Dt(At, { key: 8 }, [
        n[14] || (n[14] = nt("path", { d: "M21 7v6h-6" }, null, -1)),
        n[15] || (n[15] = nt("path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6.7 2.9L21 13" }, null, -1))
      ], 64)) : t.name === "image" ? (Nt(), Dt(At, { key: 9 }, [
        n[16] || (n[16] = nt("rect", {
          x: "3",
          y: "3",
          width: "18",
          height: "18",
          rx: "2"
        }, null, -1)),
        n[17] || (n[17] = nt("circle", {
          cx: "9",
          cy: "9",
          r: "2"
        }, null, -1)),
        n[18] || (n[18] = nt("path", { d: "m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" }, null, -1))
      ], 64)) : t.name === "expand" ? (Nt(), Dt(At, { key: 10 }, [
        n[19] || (n[19] = nt("path", { d: "M15 3h6v6" }, null, -1)),
        n[20] || (n[20] = nt("path", { d: "M9 21H3v-6" }, null, -1)),
        n[21] || (n[21] = nt("path", { d: "M21 3l-7 7" }, null, -1)),
        n[22] || (n[22] = nt("path", { d: "M3 21l7-7" }, null, -1))
      ], 64)) : t.name === "compress" ? (Nt(), Dt(At, { key: 11 }, [
        n[23] || (n[23] = nt("path", { d: "M4 14h6v6" }, null, -1)),
        n[24] || (n[24] = nt("path", { d: "M20 10h-6V4" }, null, -1)),
        n[25] || (n[25] = nt("path", { d: "M14 10l7-7" }, null, -1)),
        n[26] || (n[26] = nt("path", { d: "M3 21l7-7" }, null, -1))
      ], 64)) : Qe("", !0)
    ], 16));
  }
}), io = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, i] of e)
    n[r] = i;
  return n;
}, te = /* @__PURE__ */ io(C0, [["__scopeId", "data-v-c548d7a0"]]), E0 = { class: "lds-ring" }, w0 = /* @__PURE__ */ cn({
  __name: "Loader",
  props: {
    widthProp: { default: "24px" },
    heightProp: { default: "24px" },
    borderProp: { default: "2px" }
  },
  setup(t) {
    xd((s) => ({
      v609d0418: n.value,
      v0caf46b9: r.value,
      v030329be: i.value
    }));
    const e = t, n = /* @__PURE__ */ Ot(e.widthProp), r = /* @__PURE__ */ Ot(e.heightProp), i = /* @__PURE__ */ Ot(e.borderProp);
    return (s, a) => (Nt(), Dt("div", E0, [...a[0] || (a[0] = [
      nt("div", null, null, -1),
      nt("div", null, null, -1),
      nt("div", null, null, -1),
      nt("div", null, null, -1)
    ])]));
  }
}), x0 = /* @__PURE__ */ io(w0, [["__scopeId", "data-v-db5bcf8f"]]), N0 = { class: "pe-slider" }, O0 = { class: "pe-slider__meta" }, T0 = { class: "pe-slider__label" }, P0 = { class: "pe-slider__value" }, A0 = { class: "pe-slider__row" }, R0 = {
  class: "pe-slider__rail",
  "aria-hidden": "true"
}, D0 = ["min", "max", "step", "value", "aria-label"], M0 = /* @__PURE__ */ cn({
  __name: "Slider",
  props: {
    modelValue: {},
    label: {},
    min: { default: -100 },
    max: { default: 100 },
    step: { default: 1 },
    unit: { default: "signed" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, r = e, i = Cr(() => {
      const o = n.modelValue;
      return n.unit === "raw" ? String(o) : o > 0 ? `+${o}` : String(o);
    }), s = Cr(() => {
      const o = n.max - n.min || 1, l = (0 - n.min) / o * 100, u = (n.modelValue - n.min) / o * 100;
      return n.modelValue >= 0 ? {
        left: `${l}%`,
        width: `${Math.max(0, u - l)}%`
      } : {
        left: `${u}%`,
        width: `${Math.max(0, l - u)}%`
      };
    });
    function a(o) {
      r("update:modelValue", Number(o.target.value));
    }
    return (o, l) => (Nt(), Dt("div", N0, [
      nt("div", O0, [
        nt("span", T0, je(t.label), 1),
        nt("span", P0, je(i.value), 1)
      ]),
      nt("div", A0, [
        nt("div", R0, [
          l[0] || (l[0] = nt("i", { class: "pe-slider__zero" }, null, -1)),
          nt("i", {
            class: "pe-slider__fill",
            style: Ui(s.value)
          }, null, 4)
        ]),
        nt("input", {
          class: "pe-slider__input",
          type: "range",
          min: t.min,
          max: t.max,
          step: t.step,
          value: t.modelValue,
          "aria-label": t.label,
          onInput: a
        }, null, 40, D0)
      ])
    ]));
  }
}), ve = /* @__PURE__ */ io(M0, [["__scopeId", "data-v-35621ead"]]), k0 = [
  { id: 0, label: "Цвет", icon: "sliders" },
  { id: 1, label: "Поворот", icon: "reload" },
  { id: 2, label: "Кадр", icon: "minimize" },
  { id: 3, label: "Отражение", icon: "flip" }
], _i = {
  COLOR: 0,
  ROTATE: 1,
  CROP: 2,
  FLIP: 3,
  HISTORY: 4
};
function F0(t) {
  const e = new Date(t), n = e.getHours(), r = String(e.getMinutes()).padStart(2, "0");
  return `${n}:${r}`;
}
function Fc(t) {
  return new Promise((e, n) => {
    const r = new Image();
    r.onload = () => e(r), r.onerror = () => n(new Error(`Failed to load image: ${t}`)), r.src = t;
  });
}
const nl = 28;
function V0() {
  const t = /* @__PURE__ */ Ot(!1), e = /* @__PURE__ */ Ot(null), n = /* @__PURE__ */ Ot(), r = /* @__PURE__ */ Ot(), i = /* @__PURE__ */ Ot(), s = /* @__PURE__ */ Ot(), a = /* @__PURE__ */ Ot(), o = /* @__PURE__ */ Ot(), l = /* @__PURE__ */ Ot(), u = /* @__PURE__ */ Ot({ width: 400, height: 400 }), c = /* @__PURE__ */ Ot({
    x: 0,
    y: 0,
    image: new Image(),
    width: 0,
    height: 0,
    rotation: 0,
    offsetX: 0,
    offsetY: 0
  });
  function d(w = {}) {
    if (!e.value || !l.value) return;
    const p = e.value, h = p.naturalWidth || p.width, _ = p.naturalHeight || p.height;
    u.value.width = Math.max(1, l.value.clientWidth), u.value.height = Math.max(1, l.value.clientHeight), c.value.width = h, c.value.height = _, c.value.offsetX = h / 2, c.value.offsetY = _ / 2, c.value.x = u.value.width / 2, c.value.y = u.value.height / 2, w.resetRotation && (c.value.rotation = 0);
  }
  function g() {
    var p, h;
    d(), f();
    const w = (p = s.value) == null ? void 0 : p.getNode();
    (h = w == null ? void 0 : w.getLayer()) == null || h.batchDraw();
  }
  function f() {
    if (!e.value || !l.value || !s.value) return;
    const w = l.value, p = e.value, h = s.value.getNode(), _ = p.naturalWidth || p.width, y = p.naturalHeight || p.height;
    h.width(_), h.height(y), h.offsetX(_ / 2), h.offsetY(y / 2), h.x(u.value.width / 2), h.y(u.value.height / 2);
    const x = Math.sign(h.scaleX() || 1) || 1, P = Math.sign(h.scaleY() || 1) || 1, C = Math.max(1, w.clientWidth - nl * 2), E = Math.max(1, w.clientHeight - nl * 2), N = (Number(c.value.rotation) % 360 + 360) % 360, A = N === 90 || N === 270, F = A ? y : _, G = A ? _ : y;
    let B = 1;
    (F > C || G > E) && (B = Math.min(C / F, E / G)), h.scaleX(B * x), h.scaleY(B * P), h.clearCache();
  }
  function m() {
    var h;
    const w = (h = s.value) == null ? void 0 : h.getNode();
    if (!w) return null;
    const p = w.getClientRect({ skipShadow: !0, skipStroke: !0 });
    return {
      x: p.x,
      y: p.y,
      width: p.width,
      height: p.height
    };
  }
  async function v(w) {
    t.value = !0;
    try {
      const p = await Fc(w);
      e.value = p, c.value.image = p, d({ resetRotation: !0 });
    } finally {
      t.value = !1;
    }
  }
  function S() {
    var w;
    return ((w = s.value) == null ? void 0 : w.getNode()) ?? null;
  }
  return {
    isLoading: t,
    imageObj: e,
    stageRef: n,
    layerRef: r,
    dimLayer: i,
    imageNode: s,
    tranRef: a,
    rectRef: o,
    stageWrapper: l,
    configStage: u,
    imageConfig: c,
    setParams: d,
    scale: f,
    layout: g,
    loadImage: v,
    getKonvaImage: S,
    getImageBounds: m
  };
}
function L0(t) {
  return pl() ? (sh(t), !0) : !1;
}
function Or(t) {
  return typeof t == "function" ? t() : rt(t);
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Tr = () => {
};
function Vc(t, e) {
  function n(...r) {
    return new Promise((i, s) => {
      Promise.resolve(t(() => e.apply(this, r), { fn: e, thisArg: this, args: r })).then(i).catch(s);
    });
  }
  return n;
}
function I0(t, e = {}) {
  let n, r, i = Tr;
  const s = (o) => {
    clearTimeout(o), i(), i = Tr;
  };
  return (o) => {
    const l = Or(t), u = Or(e.maxWait);
    return n && s(n), l <= 0 || u !== void 0 && u <= 0 ? (r && (s(r), r = null), Promise.resolve(o())) : new Promise((c, d) => {
      i = e.rejectOnCancel ? d : c, u && !r && (r = setTimeout(() => {
        n && s(n), r = null, c(o());
      }, u)), n = setTimeout(() => {
        r && s(r), r = null, c(o());
      }, l);
    });
  };
}
function G0(...t) {
  let e = 0, n, r = !0, i = Tr, s, a, o, l, u;
  !/* @__PURE__ */ Vt(t[0]) && typeof t[0] == "object" ? { delay: a, trailing: o = !0, leading: l = !0, rejectOnCancel: u = !1 } = t[0] : [a, o = !0, l = !0, u = !1] = t;
  const c = () => {
    n && (clearTimeout(n), n = void 0, i(), i = Tr);
  };
  return (g) => {
    const f = Or(a), m = Date.now() - e, v = () => s = g();
    return c(), f <= 0 ? (e = Date.now(), v()) : (m > f && (l || !r) ? (e = Date.now(), v()) : o && (s = new Promise((S, w) => {
      i = u ? w : S, n = setTimeout(() => {
        e = Date.now(), r = !0, S(v()), c();
      }, Math.max(0, f - m));
    })), !l && !n && (n = setTimeout(() => r = !0, f)), r = !1, s);
  };
}
function U0(t, e = 200, n = {}) {
  return Vc(
    I0(e, n),
    t
  );
}
function B0(t, e = 200, n = !1, r = !0, i = !1) {
  return Vc(
    G0(e, n, r, i),
    t
  );
}
function H0(t) {
  const e = /* @__PURE__ */ Ot(), n = () => {
    e.value && URL.revokeObjectURL(e.value), e.value = void 0;
  };
  return se(
    () => Or(t),
    (r) => {
      n(), r && (e.value = URL.createObjectURL(r));
    },
    { immediate: !0 }
  ), L0(n), /* @__PURE__ */ cr(e);
}
const Ms = {
  temperature: 0,
  tint: 0,
  exposure: 0,
  contrast: 0,
  highlights: 0,
  shadows: 0,
  whites: 0,
  blacks: 0,
  vibrance: 0,
  saturation: 0
};
function Lc(t) {
  return Object.keys(Ms).every(
    (e) => t[e] === 0
  );
}
function Ze(t) {
  return t < 0 ? 0 : t > 1 ? 1 : t;
}
function us(t) {
  const e = t / 255;
  return e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
}
function ds(t) {
  const e = Ze(t);
  return (e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055) * 255;
}
function j0(t, e, n) {
  t /= 255, e /= 255, n /= 255;
  const r = Math.max(t, e, n), i = Math.min(t, e, n), s = (r + i) / 2;
  if (r === i) return { h: 0, s: 0, l: s };
  const a = r - i, o = s > 0.5 ? a / (2 - r - i) : a / (r + i);
  let l = 0;
  switch (r) {
    case t:
      l = ((e - n) / a + (e < n ? 6 : 0)) / 6;
      break;
    case e:
      l = ((n - t) / a + 2) / 6;
      break;
    default:
      l = ((t - e) / a + 4) / 6;
  }
  return { h: l, s: o, l: s };
}
function fs(t, e, n) {
  let r = n;
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (e - t) * 6 * r : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t;
}
function $0(t, e, n) {
  if (e === 0) {
    const s = Math.round(n * 255);
    return [s, s, s];
  }
  const r = n < 0.5 ? n * (1 + e) : n + e - n * e, i = 2 * n - r;
  return [
    Math.round(fs(i, r, t + 1 / 3) * 255),
    Math.round(fs(i, r, t) * 255),
    Math.round(fs(i, r, t - 1 / 3) * 255)
  ];
}
function tr(t, e, n) {
  const r = Ze((n - t) / (e - t));
  return r * r * (3 - 2 * r);
}
function W0(t, e, n, r) {
  let i = us(t), s = us(e), a = us(n);
  const o = r.temperature / 100, l = r.tint / 100;
  i *= 1 + o * 0.18 - l * 0.06, s *= 1 + l * 0.12, a *= 1 - o * 0.22 - l * 0.04;
  const c = 2 ** (r.exposure / 100 * 2);
  i *= c, s *= c, a *= c;
  const d = r.contrast / 100, g = 0.18, f = 1 + d * 0.85;
  i = (i - g) * f + g, s = (s - g) * f + g, a = (a - g) * f + g;
  let m = 0.2126 * i + 0.7152 * s + 0.0722 * a;
  const v = r.highlights / 100, S = r.shadows / 100, w = tr(0.35, 0.95, m), p = 1 - tr(0.05, 0.55, m), h = 1 - w * v * 0.65, _ = 1 + p * S * 0.75;
  i *= h * _, s *= h * _, a *= h * _, m = 0.2126 * i + 0.7152 * s + 0.0722 * a;
  const y = r.whites / 100, x = r.blacks / 100, P = tr(0.55, 1, m), C = 1 - tr(0, 0.45, m), E = 1 + P * y * 0.45, N = C * x * 0.12;
  i = i * E + N, s = s * E + N, a = a * E + N;
  let A = ds(i), F = ds(s), G = ds(a);
  const B = r.vibrance / 100, L = r.saturation / 100;
  if (B !== 0 || L !== 0) {
    const X = j0(A, F, G);
    let b = X.s;
    if (B !== 0) {
      const O = X.h > 0.02 && X.h < 0.12 ? 0.45 : 1, D = B * (1 - b) * O;
      b = Ze(b + D);
    }
    L !== 0 && (b = Ze(b * (1 + L))), [A, F, G] = $0(X.h, b, X.l);
  }
  return [
    Math.round(Ze(A / 255) * 255),
    Math.round(Ze(F / 255) * 255),
    Math.round(Ze(G / 255) * 255)
  ];
}
function il(t, e) {
  const n = t.naturalWidth || t.width, r = t.naturalHeight || t.height;
  let i = n, s = r;
  if (e && Number.isFinite(e) && Math.max(n, r) > e) {
    const l = e / Math.max(n, r);
    i = Math.max(1, Math.round(n * l)), s = Math.max(1, Math.round(r * l));
  }
  const a = document.createElement("canvas");
  a.width = i, a.height = s;
  const o = a.getContext("2d", { willReadFrequently: !0 });
  if (!o) throw new Error("2D context unavailable");
  return o.drawImage(t, 0, 0, i, s), { canvas: a, ctx: o, w: i, h: s };
}
function rl(t, e, n = {}) {
  if (Lc(e)) {
    const { canvas: u } = il(t, n.maxEdge);
    return u.toDataURL(n.mimeType ?? "image/jpeg", n.quality ?? 0.92);
  }
  const { canvas: r, ctx: i, w: s, h: a } = il(t, n.maxEdge), o = i.getImageData(0, 0, s, a), l = o.data;
  for (let u = 0; u < l.length; u += 4) {
    const [c, d, g] = W0(l[u], l[u + 1], l[u + 2], e);
    l[u] = c, l[u + 1] = d, l[u + 2] = g;
  }
  return i.putImageData(o, 0, 0), r.toDataURL(n.mimeType ?? "image/jpeg", n.quality ?? 0.92);
}
const q0 = 1400;
function K0(t) {
  const { imageObj: e, imageConfig: n, layout: r, dirty: i } = t, s = /* @__PURE__ */ En({ ...Ms }), a = /* @__PURE__ */ Ot(!1), o = /* @__PURE__ */ Ot(!1);
  let l = 0;
  const u = Cr(() => !Lc(s));
  function c() {
    e.value && (n.value.image = e.value, r());
  }
  async function d() {
    const S = e.value;
    if (!S) return;
    const w = ++l;
    if (a.value || !u.value) {
      c();
      return;
    }
    o.value = !0;
    try {
      const p = rl(S, { ...s }, { maxEdge: q0 });
      if (w !== l) return;
      const h = await Fc(p);
      if (w !== l) return;
      n.value.image = h, r();
    } finally {
      w === l && (o.value = !1);
    }
  }
  const g = U0(() => {
    d();
  }, 50);
  se(
    s,
    () => {
      i.value = u.value, g();
    },
    { deep: !0 }
  ), se(a, () => {
    d();
  });
  function f() {
    a.value = !1, Object.assign(s, Ms), i.value = !1, c();
  }
  function m(S) {
    a.value = S;
  }
  async function v() {
    const S = e.value;
    return !S || !u.value ? null : (a.value = !1, rl(S, { ...s }, { maxEdge: 1 / 0, quality: 0.95 }));
  }
  return {
    params: s,
    comparing: a,
    rendering: o,
    hasAdjustments: u,
    reset: f,
    setComparing: m,
    bakeToDataURL: v,
    showBase: c,
    schedulePreview: g
  };
}
function z0() {
  const t = /* @__PURE__ */ Ot([]), e = /* @__PURE__ */ Ot(0), n = /* @__PURE__ */ Ot("Настройки цвета");
  function r(a, o) {
    t.value.push({
      title: a,
      src: o,
      date: Date.now()
    }), e.value = t.value.length - 1;
  }
  function i() {
    t.value.length > 1 && e.value != null && t.value.splice(e.value + 1);
  }
  function s(a) {
    return e.value == null || t.value.length <= 1 ? !1 : a < 0 ? e.value > 0 : e.value < t.value.length - 1;
  }
  return {
    historyImage: t,
    historyIndex: e,
    title: n,
    addHistory: r,
    truncateAfterCurrent: i,
    canNavigate: s
  };
}
const yn = 24, sl = 16, Y0 = 22;
function ol(t, e) {
  let { x: n, y: r, width: i, height: s, rotation: a } = t;
  i < 0 && (n += i, i = Math.abs(i)), s < 0 && (r += s, s = Math.abs(s));
  const o = e.x + e.width, l = e.y + e.height;
  return i = Math.min(Math.max(i, yn), e.width), s = Math.min(Math.max(s, yn), e.height), n = Math.max(e.x, Math.min(n, o - i)), r = Math.max(e.y, Math.min(r, l - s)), Math.abs(n - e.x) < 1 && (n = e.x), Math.abs(r - e.y) < 1 && (r = e.y), Math.abs(n + i - o) < 1 && (i = o - n), Math.abs(r + s - l) < 1 && (s = l - r), i < yn || s < yn ? null : { x: n, y: r, width: i, height: s, rotation: a };
}
function X0(t, e, n, r, i) {
  const s = Math.max(yn, Math.abs(n)), a = Math.max(yn, Math.abs(r)), o = i.x + i.width - s, l = i.y + i.height - a;
  return {
    x: Math.max(i.x, Math.min(t, Math.max(i.x, o))),
    y: Math.max(i.y, Math.min(e, Math.max(i.y, l)))
  };
}
function J0(t) {
  const {
    imageNode: e,
    imageConfig: n,
    stageRef: r,
    dimLayer: i,
    rectRef: s,
    tranRef: a,
    scale: o,
    getImageBounds: l
  } = t, u = /* @__PURE__ */ Ot(!1);
  let c = !1;
  const d = /* @__PURE__ */ Ot({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    offsetX: 0,
    offsetY: 0,
    fill: "rgba(0,0,0,0.01)",
    stroke: "#3B82F6",
    strokeWidth: 1,
    strokeScaleEnabled: !1,
    draggable: !0,
    hitStrokeWidth: 0
  }), g = /* @__PURE__ */ Ot({
    listening: !1,
    perfectDrawEnabled: !1,
    sceneFunc: (_) => {
      var E, N;
      const y = (E = r.value) == null ? void 0 : E.getNode(), x = (N = s.value) == null ? void 0 : N.getNode();
      if (!y || !x) return;
      const P = Math.max(1, x.width() * x.scaleX()), C = Math.max(1, x.height() * x.scaleY());
      _.save(), _.beginPath(), _.rect(0, 0, y.width(), y.height()), _.rect(x.x(), x.y(), P, C), _.closePath(), _.fillStyle = "rgba(0, 0, 0, 0.45)", _.fill("evenodd"), _.restore();
    }
  }), f = /* @__PURE__ */ Ot({
    nodes: [],
    centeredScaling: !1,
    rotateEnabled: !1,
    keepRatio: !1,
    ignoreStroke: !0,
    borderStroke: "#3B82F6",
    anchorSize: sl,
    anchorCornerRadius: sl / 2,
    anchorStroke: "#fff",
    anchorStrokeWidth: 1,
    anchorFill: "#3B82F6",
    enabledAnchors: [
      "top-left",
      "top-center",
      "top-right",
      "middle-right",
      "bottom-right",
      "bottom-center",
      "bottom-left",
      "middle-left"
    ],
    anchorStyleFunc: (_) => {
      _.hitFunc((y) => {
        const x = Y0 / 2;
        y.beginPath(), y.arc(0, 0, x, 0, Math.PI * 2), y.closePath(), y.fillStrokeShape(_);
      });
    },
    boundBoxFunc: (_, y) => {
      const x = l();
      return x ? ol(y, x) ?? _ : _;
    }
  });
  function m() {
    const _ = l();
    _ && (d.value.x = _.x, d.value.y = _.y, d.value.width = _.width, d.value.height = _.height, u.value = !0);
  }
  function v() {
    var C, E, N, A, F;
    const _ = (C = s.value) == null ? void 0 : C.getNode(), y = (E = a.value) == null ? void 0 : E.getNode(), x = l();
    if (!_ || !x) return;
    const P = ol(
      {
        x: _.x(),
        y: _.y(),
        width: _.width() * _.scaleX(),
        height: _.height() * _.scaleY(),
        rotation: _.rotation()
      },
      x
    );
    P && (_.setAttrs({
      x: P.x,
      y: P.y,
      width: P.width,
      height: P.height,
      scaleX: 1,
      scaleY: 1
    }), y == null || y.forceUpdate(), (A = (N = i.value) == null ? void 0 : N.getNode()) == null || A.batchDraw(), (F = y == null ? void 0 : y.getLayer()) == null || F.batchDraw());
  }
  async function S() {
    var P, C, E, N;
    await kl(), await new Promise((A) => requestAnimationFrame(() => A()));
    const _ = (P = s.value) == null ? void 0 : P.getNode(), y = (C = a.value) == null ? void 0 : C.getNode(), x = (E = i.value) == null ? void 0 : E.getNode();
    !_ || !y || (x == null || x.clipFunc(void 0), _.setAttrs({
      x: d.value.x,
      y: d.value.y,
      width: d.value.width,
      height: d.value.height,
      scaleX: 1,
      scaleY: 1
    }), y.nodes([_]), y.forceUpdate(), (N = y.getLayer()) == null || N.batchDraw(), x == null || x.batchDraw(), c || (_.on("transform", v), _.on("transformend", v), _.on("dragmove", () => {
      var L;
      const A = l();
      if (!A) return;
      const F = _.width() * _.scaleX(), G = _.height() * _.scaleY(), B = X0(_.x(), _.y(), F, G, A);
      _.position({ x: B.x, y: B.y }), y.forceUpdate(), (L = y.getLayer()) == null || L.batchDraw(), x == null || x.batchDraw();
    }), c = !0));
  }
  function w() {
    var x, P;
    const _ = (x = s.value) == null ? void 0 : x.getNode();
    _ && c && (_.off("transform"), _.off("transformend"), _.off("dragmove")), c = !1;
    const y = (P = a.value) == null ? void 0 : P.getNode();
    y == null || y.nodes([]);
  }
  se(u, (_) => {
    if (!_) {
      w();
      return;
    }
    S();
  }), se([s, a, i], () => {
    u.value && S();
  }), ji(() => {
    w();
  });
  const p = B0((_) => {
    var x;
    const y = (x = e.value) == null ? void 0 : x.getNode();
    y && (_ === "x" ? y.to({ scaleX: -y.scaleX() }) : y.to({ scaleY: -y.scaleY() }));
  }, 1e3);
  function h(_) {
    var P, C;
    const y = ((n.value.rotation + _) % 360 + 360) % 360;
    n.value.rotation = y;
    const x = (P = e.value) == null ? void 0 : P.getNode();
    x && x.rotation(y), o(), (C = x == null ? void 0 : x.getLayer()) == null || C.batchDraw();
  }
  return {
    selected: u,
    rectCrop: d,
    tranConfig: f,
    dimShapeConfig: g,
    selectImage: m,
    flip: p,
    rotate: h
  };
}
function Q0(t, e) {
  const n = /* @__PURE__ */ Ot(!1), r = /* @__PURE__ */ Ot(_i.COLOR), i = V0(), s = z0(), a = K0({
    imageObj: i.imageObj,
    imageConfig: i.imageConfig,
    layout: i.layout,
    dirty: n
  }), o = J0({
    imageNode: i.imageNode,
    imageConfig: i.imageConfig,
    stageRef: i.stageRef,
    dimLayer: i.dimLayer,
    rectRef: i.rectRef,
    tranRef: i.tranRef,
    scale: i.scale,
    getImageBounds: i.getImageBounds
  });
  async function l(_) {
    const y = s.historyImage.value[_];
    y && (a.reset(), await i.loadImage(y.src), i.layout());
  }
  async function u(_) {
    s.historyIndex.value != null && (_ > 0 && s.historyIndex.value >= s.historyImage.value.length - 1 || _ < 0 && s.historyIndex.value <= 0 || (s.historyIndex.value += _, await l(s.historyIndex.value)));
  }
  async function c(_) {
    s.historyIndex.value = _, await l(_);
  }
  async function d(_ = s.title.value) {
    var E;
    const y = i.getKonvaImage();
    if (!y) return;
    const x = y.attrs.scaleX, P = y.attrs.scaleY;
    y.attrs.scaleX = y.attrs.scaleX < 0 ? -1 : 1, y.attrs.scaleY = y.attrs.scaleY < 0 ? -1 : 1;
    let C;
    if (i.tranRef.value && o.selected.value) {
      y.clearCache();
      const N = i.tranRef.value.getNode();
      C = y.toDataURL({
        x: (N.x() - (i.configStage.value.width - o.rectCrop.value.width) / 2) / x + y.x() - i.imageConfig.value.offsetX,
        y: (N.y() - (i.configStage.value.height - o.rectCrop.value.height) / 2) / P + y.y() - i.imageConfig.value.offsetY,
        width: N.width() / x,
        height: N.height() / P,
        mimeType: "image/jpeg"
      });
    } else
      y.clearCache(), C = y.toDataURL({ mimeType: "image/jpeg" });
    o.selected.value = !1, s.addHistory(_, C), await i.loadImage(C), a.reset(), (E = y.getLayer()) == null || E.batchDraw(), i.layout();
  }
  async function g() {
    if (!a.hasAdjustments.value) return;
    const _ = await a.bakeToDataURL();
    _ && (s.addHistory("Коррекция", _), await i.loadImage(_), a.reset(), n.value = !1, i.layout());
  }
  async function f() {
    if (n.value) {
      if (r.value === _i.COLOR && a.hasAdjustments.value) {
        await g();
        return;
      }
      await d(s.title.value), n.value = !1;
    }
  }
  async function m(_, y) {
    (r.value === _i.HISTORY || n.value) && s.historyImage.value.length > 1 && s.historyIndex.value != null && s.truncateAfterCurrent(), await f(), r.value = _, s.title.value = y, n.value = !1;
  }
  function v(_) {
    n.value = !0, o.rotate(_);
  }
  function S(_) {
    o.flip(_), n.value = !0;
  }
  function w() {
    o.selectImage(), n.value = !0;
  }
  async function p() {
    await m(_i.CROP, "Обрезка");
  }
  async function h() {
    await f();
    const _ = i.getKonvaImage();
    _ && (a.showBase(), e("saveImage", {
      src: _.toDataURL({ mimeType: "image/jpeg" })
    }));
  }
  return ln(async () => {
    var _;
    await i.loadImage(t.defImg), s.addHistory("Оригинал", (_ = i.imageObj.value) == null ? void 0 : _.src), s.title.value = "Цвет", requestAnimationFrame(() => i.layout());
  }), ln(() => {
    const _ = new ResizeObserver(() => {
      i.layout();
    });
    requestAnimationFrame(() => {
      i.stageWrapper.value && _.observe(i.stageWrapper.value);
    }), window.addEventListener("resize", i.layout), ji(() => {
      _.disconnect(), window.removeEventListener("resize", i.layout);
    });
  }), {
    EDITOR_TABS: k0,
    TAB: _i,
    dirty: n,
    activeTab: r,
    formatHistoryTime: F0,
    ...i,
    historyImage: s.historyImage,
    historyIndex: s.historyIndex,
    title: s.title,
    colorParams: a.params,
    hasAdjustments: a.hasAdjustments,
    comparing: a.comparing,
    colorRendering: a.rendering,
    resetColor: a.reset,
    setComparing: a.setComparing,
    applyColorAdjustments: g,
    selected: o.selected,
    rectCrop: o.rectCrop,
    tranConfig: o.tranConfig,
    dimShapeConfig: o.dimShapeConfig,
    navigateHistory: u,
    restoreHistory: c,
    changeTab: m,
    markDirtyAndRotate: v,
    markDirtyAndFlip: S,
    markDirtyAndCrop: w,
    applyCrop: p,
    onSaveExport: h
  };
}
const Z0 = { class: "pe-menubar" }, tp = { class: "pe-menubar__left" }, ep = { class: "pe-doc-badge" }, np = ["disabled"], ip = ["disabled"], rp = { class: "pe-menubar__center" }, sp = { class: "pe-menubar__title" }, op = { class: "pe-menubar__right" }, ap = ["title", "aria-pressed"], lp = { class: "pe-body" }, cp = {
  class: "pe-toolbox",
  "aria-label": "Инструменты"
}, hp = ["aria-label", "onClick"], up = {
  class: "pe-tooltip",
  role: "tooltip"
}, dp = { class: "pe-workspace" }, fp = { class: "pe-panels" }, pp = { class: "pe-panel-block" }, gp = { class: "pe-panel-body" }, mp = { class: "pe-section" }, _p = { class: "pe-section" }, yp = { class: "pe-section" }, vp = { class: "pe-color-actions" }, bp = ["disabled"], Sp = ["disabled"], Cp = ["disabled"], Ep = { class: "pe-panel-block pe-panel-block--grow" }, wp = { class: "pe-panel-body pe-history" }, xp = ["onClick"], Np = { class: "pe-history-row__text" }, Op = { class: "pe-statusbar" }, Tp = { key: 0 }, Pp = /* @__PURE__ */ cn({
  __name: "PhotoEditor",
  props: {
    defImg: {},
    root: {},
    innerWidth: {}
  },
  emits: ["saveImage", "close"],
  setup(t, { emit: e }) {
    const n = t, r = e, {
      EDITOR_TABS: i,
      TAB: s,
      activeTab: a,
      historyImage: o,
      historyIndex: l,
      isLoading: u,
      stageWrapper: c,
      stageRef: d,
      layerRef: g,
      dimLayer: f,
      imageNode: m,
      rectRef: v,
      tranRef: S,
      configStage: w,
      imageConfig: p,
      rectCrop: h,
      tranConfig: _,
      dimShapeConfig: y,
      selected: x,
      colorParams: P,
      hasAdjustments: C,
      comparing: E,
      resetColor: N,
      setComparing: A,
      applyColorAdjustments: F,
      formatHistoryTime: G,
      navigateHistory: B,
      restoreHistory: L,
      changeTab: X,
      markDirtyAndRotate: b,
      markDirtyAndFlip: O,
      markDirtyAndCrop: D,
      applyCrop: R,
      onSaveExport: V
    } = Q0(n, r), W = /* @__PURE__ */ Ot(!1);
    let I = "", J = "";
    function ot(Z) {
      W.value = Z;
    }
    function q() {
      ot(!W.value);
    }
    function M(Z) {
      Z.key === "Escape" && W.value && (Z.preventDefault(), ot(!1));
    }
    se(W, (Z) => {
      typeof document > "u" || (Z ? (I = document.body.style.overflow, J = document.documentElement.style.overflow, document.body.style.overflow = "hidden", document.documentElement.style.overflow = "hidden") : (document.body.style.overflow = I, document.documentElement.style.overflow = J));
    }), ln(() => {
      window.addEventListener("keydown", M);
    }), ji(() => {
      window.removeEventListener("keydown", M), W.value && (document.body.style.overflow = I, document.documentElement.style.overflow = J);
    });
    const $ = () => i.find((Z) => Z.id === a.value);
    return (Z, j) => {
      var K;
      const at = un("v-image"), ft = un("v-layer"), T = un("v-shape"), k = un("v-rect"), H = un("v-transformer"), Y = un("v-stage");
      return Nt(), _n(su, {
        to: "body",
        disabled: !W.value
      }, [
        nt("div", {
          class: He(["photo-editor-shell", { "is-fullscreen": W.value }]),
          style: Ui(W.value ? void 0 : { display: "contents" })
        }, [
          nt("div", {
            class: He(["pe-app", { "is-fullscreen": W.value }])
          }, [
            nt("header", Z0, [
              nt("div", tp, [
                nt("span", ep, [
                  pt(te, { name: "image" }),
                  j[27] || (j[27] = nt("span", null, "photo", -1))
                ]),
                j[28] || (j[28] = nt("div", { class: "pe-menubar__sep" }, null, -1)),
                nt("button", {
                  type: "button",
                  class: "pe-icon-btn",
                  title: "Отменить",
                  disabled: rt(o).length <= 1 || rt(l) === 0,
                  onClick: j[0] || (j[0] = (U) => rt(B)(-1))
                }, [
                  pt(te, { name: "undo" })
                ], 8, np),
                nt("button", {
                  type: "button",
                  class: "pe-icon-btn",
                  title: "Повторить",
                  disabled: rt(o).length <= 1 || rt(l) === rt(o).length - 1,
                  onClick: j[1] || (j[1] = (U) => rt(B)(1))
                }, [
                  pt(te, { name: "redo" })
                ], 8, ip)
              ]),
              nt("div", rp, [
                nt("span", sp, je(((K = $()) == null ? void 0 : K.label) ?? "Редактор"), 1)
              ]),
              nt("div", op, [
                nt("button", {
                  type: "button",
                  class: "pe-icon-btn",
                  title: W.value ? "Свернуть" : "На весь экран",
                  "aria-pressed": W.value,
                  onClick: q
                }, [
                  pt(te, {
                    name: W.value ? "compress" : "expand"
                  }, null, 8, ["name"])
                ], 8, ap),
                nt("button", {
                  type: "button",
                  class: "pe-btn pe-btn--ghost",
                  onClick: j[2] || (j[2] = (U) => r("close"))
                }, "Закрыть"),
                nt("button", {
                  type: "button",
                  class: "pe-btn pe-btn--primary",
                  onClick: j[3] || (j[3] = //@ts-ignore
                  (...U) => rt(V) && rt(V)(...U))
                }, "Сохранить")
              ])
            ]),
            nt("div", lp, [
              nt("aside", cp, [
                (Nt(!0), Dt(At, null, Eo(rt(i), (U) => (Nt(), Dt("button", {
                  key: U.id,
                  type: "button",
                  class: He(["pe-tool", { "is-active": rt(a) === U.id }]),
                  "aria-label": U.label,
                  onClick: (tt) => rt(X)(U.id, U.label)
                }, [
                  pt(te, {
                    name: U.icon
                  }, null, 8, ["name"]),
                  nt("span", up, je(U.label), 1)
                ], 10, hp))), 128))
              ]),
              nt("main", dp, [
                nt("div", {
                  ref_key: "stageWrapper",
                  ref: c,
                  class: He(["pe-stage", { "is-comparing": rt(E) }])
                }, [
                  rt(u) ? (Nt(), _n(x0, { key: 0 })) : Qe("", !0),
                  Jh(pt(Y, {
                    ref_key: "stageRef",
                    ref: d,
                    config: rt(w)
                  }, {
                    default: vi(() => [
                      pt(ft, {
                        ref_key: "layerRef",
                        ref: g
                      }, {
                        default: vi(() => [
                          pt(at, {
                            ref_key: "imageNode",
                            ref: m,
                            config: rt(p)
                          }, null, 8, ["config"])
                        ]),
                        _: 1
                      }, 512),
                      rt(x) ? (Nt(), _n(ft, {
                        key: 0,
                        ref_key: "dimLayer",
                        ref: f
                      }, {
                        default: vi(() => [
                          pt(T, { config: rt(y) }, null, 8, ["config"]),
                          pt(k, {
                            ref_key: "rectRef",
                            ref: v,
                            config: rt(h)
                          }, null, 8, ["config"])
                        ]),
                        _: 1
                      }, 512)) : Qe("", !0),
                      rt(x) ? (Nt(), _n(ft, { key: 1 }, {
                        default: vi(() => [
                          pt(H, {
                            ref_key: "tranRef",
                            ref: S,
                            config: rt(_)
                          }, null, 8, ["config"])
                        ]),
                        _: 1
                      })) : Qe("", !0)
                    ]),
                    _: 1
                  }, 8, ["config"]), [
                    [wd, !rt(u)]
                  ])
                ], 2)
              ]),
              nt("aside", fp, [
                nt("section", pp, [
                  j[40] || (j[40] = nt("header", { class: "pe-panel-head" }, "Свойства", -1)),
                  nt("div", gp, [
                    rt(a) === rt(s).COLOR ? (Nt(), Dt(At, { key: 0 }, [
                      nt("div", mp, [
                        j[29] || (j[29] = nt("div", { class: "pe-section__title" }, "Баланс белого", -1)),
                        pt(ve, {
                          modelValue: rt(P).temperature,
                          "onUpdate:modelValue": j[4] || (j[4] = (U) => rt(P).temperature = U),
                          label: "Температура"
                        }, null, 8, ["modelValue"]),
                        pt(ve, {
                          modelValue: rt(P).tint,
                          "onUpdate:modelValue": j[5] || (j[5] = (U) => rt(P).tint = U),
                          label: "Оттенок"
                        }, null, 8, ["modelValue"])
                      ]),
                      nt("div", _p, [
                        j[30] || (j[30] = nt("div", { class: "pe-section__title" }, "Тон", -1)),
                        pt(ve, {
                          modelValue: rt(P).exposure,
                          "onUpdate:modelValue": j[6] || (j[6] = (U) => rt(P).exposure = U),
                          label: "Экспозиция"
                        }, null, 8, ["modelValue"]),
                        pt(ve, {
                          modelValue: rt(P).contrast,
                          "onUpdate:modelValue": j[7] || (j[7] = (U) => rt(P).contrast = U),
                          label: "Контраст"
                        }, null, 8, ["modelValue"]),
                        pt(ve, {
                          modelValue: rt(P).highlights,
                          "onUpdate:modelValue": j[8] || (j[8] = (U) => rt(P).highlights = U),
                          label: "Света"
                        }, null, 8, ["modelValue"]),
                        pt(ve, {
                          modelValue: rt(P).shadows,
                          "onUpdate:modelValue": j[9] || (j[9] = (U) => rt(P).shadows = U),
                          label: "Тени"
                        }, null, 8, ["modelValue"]),
                        pt(ve, {
                          modelValue: rt(P).whites,
                          "onUpdate:modelValue": j[10] || (j[10] = (U) => rt(P).whites = U),
                          label: "Белые"
                        }, null, 8, ["modelValue"]),
                        pt(ve, {
                          modelValue: rt(P).blacks,
                          "onUpdate:modelValue": j[11] || (j[11] = (U) => rt(P).blacks = U),
                          label: "Чёрные"
                        }, null, 8, ["modelValue"])
                      ]),
                      nt("div", yp, [
                        j[31] || (j[31] = nt("div", { class: "pe-section__title" }, "Присутствие", -1)),
                        pt(ve, {
                          modelValue: rt(P).vibrance,
                          "onUpdate:modelValue": j[12] || (j[12] = (U) => rt(P).vibrance = U),
                          label: "Красочность"
                        }, null, 8, ["modelValue"]),
                        pt(ve, {
                          modelValue: rt(P).saturation,
                          "onUpdate:modelValue": j[13] || (j[13] = (U) => rt(P).saturation = U),
                          label: "Насыщенность"
                        }, null, 8, ["modelValue"])
                      ]),
                      nt("div", vp, [
                        nt("button", {
                          type: "button",
                          class: "pe-action",
                          disabled: !rt(C),
                          onMousedown: j[14] || (j[14] = (U) => rt(A)(!0)),
                          onMouseup: j[15] || (j[15] = (U) => rt(A)(!1)),
                          onMouseleave: j[16] || (j[16] = (U) => rt(A)(!1)),
                          onTouchstart: j[17] || (j[17] = As((U) => rt(A)(!0), ["prevent"])),
                          onTouchend: j[18] || (j[18] = As((U) => rt(A)(!1), ["prevent"]))
                        }, " До / После ", 40, bp),
                        nt("button", {
                          type: "button",
                          class: "pe-action",
                          disabled: !rt(C),
                          onClick: j[19] || (j[19] = //@ts-ignore
                          (...U) => rt(N) && rt(N)(...U))
                        }, " Сбросить ", 8, Sp),
                        nt("button", {
                          type: "button",
                          class: "pe-action pe-action--accent",
                          disabled: !rt(C) || rt(E),
                          onClick: j[20] || (j[20] = //@ts-ignore
                          (...U) => rt(F) && rt(F)(...U))
                        }, [
                          pt(te, { name: "success" }),
                          j[32] || (j[32] = Ue(" Применить ", -1))
                        ], 8, Cp)
                      ])
                    ], 64)) : rt(a) === rt(s).ROTATE ? (Nt(), Dt(At, { key: 1 }, [
                      nt("button", {
                        type: "button",
                        class: "pe-action",
                        onClick: j[21] || (j[21] = (U) => rt(b)(90))
                      }, [
                        pt(te, { name: "reload" }),
                        j[33] || (j[33] = Ue(" Вправо 90° ", -1))
                      ]),
                      nt("button", {
                        type: "button",
                        class: "pe-action",
                        onClick: j[22] || (j[22] = (U) => rt(b)(-90))
                      }, [
                        pt(te, {
                          name: "reload",
                          style: { transform: "scale(-1, 1)" }
                        }),
                        j[34] || (j[34] = Ue(" Влево 90° ", -1))
                      ])
                    ], 64)) : rt(a) === rt(s).CROP ? (Nt(), Dt(At, { key: 2 }, [
                      nt("button", {
                        type: "button",
                        class: "pe-action",
                        onClick: j[23] || (j[23] = //@ts-ignore
                        (...U) => rt(D) && rt(D)(...U))
                      }, [
                        pt(te, { name: "minimize" }),
                        j[35] || (j[35] = Ue(" Выделить кадр ", -1))
                      ]),
                      nt("button", {
                        type: "button",
                        class: "pe-action pe-action--accent",
                        onClick: j[24] || (j[24] = //@ts-ignore
                        (...U) => rt(R) && rt(R)(...U))
                      }, [
                        pt(te, { name: "success" }),
                        j[36] || (j[36] = Ue(" Применить ", -1))
                      ]),
                      j[37] || (j[37] = nt("p", { class: "pe-hint" }, "Потяните углы и стороны рамки, затем нажмите «Применить».", -1))
                    ], 64)) : rt(a) === rt(s).FLIP ? (Nt(), Dt(At, { key: 3 }, [
                      nt("button", {
                        type: "button",
                        class: "pe-action",
                        onClick: j[25] || (j[25] = (U) => rt(O)("x"))
                      }, [
                        pt(te, {
                          name: "flip",
                          class: "rotate-90"
                        }),
                        j[38] || (j[38] = Ue(" По горизонтали ", -1))
                      ]),
                      nt("button", {
                        type: "button",
                        class: "pe-action",
                        onClick: j[26] || (j[26] = (U) => rt(O)("y"))
                      }, [
                        pt(te, { name: "flip" }),
                        j[39] || (j[39] = Ue(" По вертикали ", -1))
                      ])
                    ], 64)) : Qe("", !0)
                  ])
                ]),
                nt("section", Ep, [
                  j[41] || (j[41] = nt("header", { class: "pe-panel-head" }, "История", -1)),
                  nt("div", wp, [
                    (Nt(!0), Dt(At, null, Eo(rt(o), (U, tt) => (Nt(), Dt("button", {
                      key: U.date,
                      type: "button",
                      class: He(["pe-history-row", { "is-current": tt === rt(l) }]),
                      onClick: (Q) => rt(L)(tt)
                    }, [
                      pt(te, { name: "clock" }),
                      nt("span", Np, [
                        nt("strong", null, je(U.title), 1),
                        nt("small", null, je(rt(G)(U.date)), 1)
                      ])
                    ], 10, xp))), 128))
                  ])
                ])
              ])
            ]),
            nt("footer", Op, [
              nt("span", null, je(rt(o).length) + " шаг(ов)", 1),
              rt(x) ? (Nt(), Dt("span", Tp, "режим кадрирования")) : Qe("", !0)
            ])
          ], 2)
        ], 6)
      ], 8, ["disabled"]);
    };
  }
});
function Ap(t, e) {
  const n = document.createElement("a");
  n.setAttribute("href", e), n.setAttribute("download", t), n.setAttribute("target", "_blank"), n.style.display = "none", document.body.appendChild(n), n.click(), document.body.removeChild(n);
}
function Rp() {
  const t = /* @__PURE__ */ Ot(null), e = /* @__PURE__ */ Ot(!1), n = /* @__PURE__ */ Ot();
  function r() {
    var o;
    (o = n.value) == null || o.click();
  }
  function i(o) {
    var c;
    const l = o.target, u = (c = l.files) == null ? void 0 : c[0];
    u && (e.value = !1, t.value = H0(u).value ?? null, l.value = "", e.value = !0);
  }
  function s() {
    t.value = null, e.value = !1;
  }
  function a(o) {
    Ap("photo-editor.jpg", o.src);
  }
  return {
    file: t,
    isLoad: e,
    filesRef: n,
    submitFile: r,
    handleFileUpload: i,
    onClose: s,
    saveImage: a
  };
}
const Dp = { class: "photo-editor-shell" }, Mp = { class: "pe-empty__card" }, kp = /* @__PURE__ */ cn({
  __name: "PhotoEditorShell",
  setup(t) {
    const { file: e, isLoad: n, filesRef: r, submitFile: i, handleFileUpload: s, onClose: a, saveImage: o } = Rp();
    return (l, u) => (Nt(), Dt("div", Dp, [
      rt(n) ? rt(e) ? (Nt(), _n(Pp, {
        key: 1,
        "def-img": rt(e),
        onSaveImage: rt(o),
        onClose: rt(a)
      }, null, 8, ["def-img", "onSaveImage", "onClose"])) : Qe("", !0) : (Nt(), Dt("div", {
        key: 0,
        class: "pe-empty",
        onClick: u[2] || (u[2] = //@ts-ignore
        (...c) => rt(i) && rt(i)(...c))
      }, [
        nt("div", Mp, [
          pt(te, {
            name: "image",
            class: "pe-empty__icon"
          }),
          u[3] || (u[3] = nt("h3", null, "Открыть изображение", -1)),
          u[4] || (u[4] = nt("p", null, "Нажмите, чтобы выбрать файл — JPEG, PNG, WebP", -1)),
          nt("button", {
            type: "button",
            class: "pe-btn pe-btn--primary",
            onClick: u[0] || (u[0] = As(
              //@ts-ignore
              (...c) => rt(i) && rt(i)(...c),
              ["stop"]
            ))
          }, " Выбрать файл ")
        ]),
        nt("input", {
          type: "file",
          ref_key: "filesRef",
          ref: r,
          accept: "image/*",
          style: { display: "none" },
          onChange: u[1] || (u[1] = //@ts-ignore
          (...c) => rt(s) && rt(s)(...c))
        }, null, 544)
      ]))
    ]));
  }
});
function n1(t) {
  const e = Kd(kp);
  return e.use(v0), e.mount(t), {
    app: e,
    unmount: () => e.unmount()
  };
}
export {
  n1 as mountPhotoEditor
};
