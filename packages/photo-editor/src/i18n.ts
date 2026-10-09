import { inject, onUnmounted, ref, type InjectionKey, type Ref } from "vue";
import { getLocale, subscribeLocale, type HostLocale } from "./hostLocale";

export const PE_LOCALE_KEY: InjectionKey<Ref<HostLocale>> = Symbol("pe-locale");

const MESSAGES: Record<HostLocale, Record<string, string>> = {
  ru: {
    "pe.undo": "Отменить",
    "pe.redo": "Повторить",
    "pe.editor": "Редактор",
    "pe.expand": "На весь экран",
    "pe.collapse": "Свернуть",
    "pe.close": "Закрыть",
    "pe.save": "Сохранить",
    "pe.tools": "Инструменты",
    "pe.properties": "Свойства",
    "pe.history": "История",
    "pe.tab.color": "Цвет",
    "pe.tab.rotate": "Поворот",
    "pe.tab.crop": "Кадр",
    "pe.tab.flip": "Отражение",
    "pe.wb": "Баланс белого",
    "pe.temperature": "Температура",
    "pe.tint": "Оттенок",
    "pe.tone": "Тон",
    "pe.exposure": "Экспозиция",
    "pe.contrast": "Контраст",
    "pe.highlights": "Света",
    "pe.shadows": "Тени",
    "pe.whites": "Белые",
    "pe.blacks": "Чёрные",
    "pe.presence": "Присутствие",
    "pe.vibrance": "Красочность",
    "pe.saturation": "Насыщенность",
    "pe.beforeAfter": "До / После",
    "pe.reset": "Сбросить",
    "pe.apply": "Применить",
    "pe.rotateRight": "Вправо 90°",
    "pe.rotateLeft": "Влево 90°",
    "pe.selectCrop": "Выделить кадр",
    "pe.cropHint": "Потяните углы и стороны рамки, затем нажмите «Применить».",
    "pe.flipH": "По горизонтали",
    "pe.flipV": "По вертикали",
    "pe.steps": "{n} шаг(ов)",
    "pe.cropMode": "режим кадрирования",
    "pe.history.original": "Оригинал",
    "pe.history.correction": "Коррекция",
    "pe.history.crop": "Обрезка",
    "pe.openTitle": "Открыть изображение",
    "pe.openHint": "Нажмите, чтобы выбрать файл — JPEG, PNG, WebP",
    "pe.chooseFile": "Выбрать файл",
  },
  en: {
    "pe.undo": "Undo",
    "pe.redo": "Redo",
    "pe.editor": "Editor",
    "pe.expand": "Full screen",
    "pe.collapse": "Exit full screen",
    "pe.close": "Close",
    "pe.save": "Save",
    "pe.tools": "Tools",
    "pe.properties": "Properties",
    "pe.history": "History",
    "pe.tab.color": "Color",
    "pe.tab.rotate": "Rotate",
    "pe.tab.crop": "Crop",
    "pe.tab.flip": "Flip",
    "pe.wb": "White balance",
    "pe.temperature": "Temperature",
    "pe.tint": "Tint",
    "pe.tone": "Tone",
    "pe.exposure": "Exposure",
    "pe.contrast": "Contrast",
    "pe.highlights": "Highlights",
    "pe.shadows": "Shadows",
    "pe.whites": "Whites",
    "pe.blacks": "Blacks",
    "pe.presence": "Presence",
    "pe.vibrance": "Vibrance",
    "pe.saturation": "Saturation",
    "pe.beforeAfter": "Before / After",
    "pe.reset": "Reset",
    "pe.apply": "Apply",
    "pe.rotateRight": "Right 90°",
    "pe.rotateLeft": "Left 90°",
    "pe.selectCrop": "Select crop",
    "pe.cropHint": "Drag the corners and edges, then press Apply.",
    "pe.flipH": "Horizontal",
    "pe.flipV": "Vertical",
    "pe.steps": "{n} step(s)",
    "pe.cropMode": "crop mode",
    "pe.history.original": "Original",
    "pe.history.correction": "Adjust",
    "pe.history.crop": "Crop",
    "pe.openTitle": "Open image",
    "pe.openHint": "Click to choose a file — JPEG, PNG, WebP",
    "pe.chooseFile": "Choose file",
  },
};

export function translatePe(
  key: string,
  vars: Record<string, string | number> = {},
  lang: HostLocale = getLocale(),
) {
  const dict = MESSAGES[lang] || MESSAGES.ru;
  const str = dict[key] ?? MESSAGES.ru[key] ?? key;
  return str.replace(/\{(\w+)\}/g, (_, name) =>
    vars[name] !== undefined && vars[name] !== null ? String(vars[name]) : `{${name}}`,
  );
}

export function usePeI18n(passed?: Ref<HostLocale>) {
  const injected = inject(PE_LOCALE_KEY, null);
  const locale = passed ?? injected ?? ref(getLocale());

  function t(key: string, vars?: Record<string, string | number>) {
    return translatePe(key, vars, locale.value);
  }

  if (!passed && !injected) {
    const stop = subscribeLocale(() => {
      locale.value = getLocale();
    });
    onUnmounted(stop);
  }

  return { locale, t };
}
