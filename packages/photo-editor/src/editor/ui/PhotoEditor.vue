<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import Icon from "../../components/ui/icon/Icon.vue";
import Loader from "../../components/ui/loader/Loader.vue";
import Slider from "../../components/ui/slider/Slider.vue";
import type { EditorProps, SaveImagePayload } from "../../types";
import { useEditor } from "../useEditor";

const props = defineProps<EditorProps>();
const emit = defineEmits<{
  (event: "saveImage", data: SaveImagePayload): void;
  (event: "close"): void;
}>();

const {
  EDITOR_TABS,
  TAB,
  activeTab,
  historyImage,
  historyIndex,
  isLoading,
  stageWrapper,
  stageRef,
  layerRef,
  dimLayer,
  imageNode,
  rectRef,
  tranRef,
  configStage,
  imageConfig,
  rectCrop,
  tranConfig,
  dimShapeConfig,
  selected,
  colorParams,
  hasAdjustments,
  comparing,
  resetColor,
  setComparing,
  applyColorAdjustments,
  formatHistoryTime,
  navigateHistory,
  restoreHistory,
  changeTab,
  markDirtyAndRotate,
  markDirtyAndFlip,
  markDirtyAndCrop,
  applyCrop,
  onSaveExport,
} = useEditor(props, emit);

const isFullscreen = ref(false);
let prevBodyOverflow = "";
let prevHtmlOverflow = "";

function setFullscreen(next: boolean) {
  isFullscreen.value = next;
}

function toggleFullscreen() {
  setFullscreen(!isFullscreen.value);
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === "Escape" && isFullscreen.value) {
    e.preventDefault();
    setFullscreen(false);
  }
}

watch(isFullscreen, (on) => {
  if (typeof document === "undefined") return;
  if (on) {
    prevBodyOverflow = document.body.style.overflow;
    prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  } else {
    document.body.style.overflow = prevBodyOverflow;
    document.documentElement.style.overflow = prevHtmlOverflow;
  }
});

onMounted(() => {
  window.addEventListener("keydown", onKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeydown);
  if (isFullscreen.value) {
    document.body.style.overflow = prevBodyOverflow;
    document.documentElement.style.overflow = prevHtmlOverflow;
  }
});

const activeTool = () => EDITOR_TABS.find((t) => t.id === activeTab.value);
</script>

<template>
  <!-- Teleport to body: host page has max-width + transform, which traps position:fixed -->
  <Teleport to="body" :disabled="!isFullscreen">
    <div
      class="photo-editor-shell"
      :class="{ 'is-fullscreen': isFullscreen }"
      :style="isFullscreen ? undefined : { display: 'contents' }"
    >
      <div class="pe-app" :class="{ 'is-fullscreen': isFullscreen }">
        <!-- Top bar -->
        <header class="pe-menubar">
          <div class="pe-menubar__left">
            <span class="pe-doc-badge">
              <Icon name="image" />
              <span>photo</span>
            </span>
            <div class="pe-menubar__sep" />
            <button
              type="button"
              class="pe-icon-btn"
              title="Отменить"
              :disabled="historyImage.length <= 1 || historyIndex === 0"
              @click="navigateHistory(-1)"
            >
              <Icon name="undo" />
            </button>
            <button
              type="button"
              class="pe-icon-btn"
              title="Повторить"
              :disabled="historyImage.length <= 1 || historyIndex === historyImage.length - 1"
              @click="navigateHistory(1)"
            >
              <Icon name="redo" />
            </button>
          </div>

          <div class="pe-menubar__center">
            <span class="pe-menubar__title">{{ activeTool()?.label ?? "Редактор" }}</span>
          </div>

          <div class="pe-menubar__right">
            <button
              type="button"
              class="pe-icon-btn"
              :title="isFullscreen ? 'Свернуть' : 'На весь экран'"
              :aria-pressed="isFullscreen"
              @click="toggleFullscreen"
            >
              <Icon :name="isFullscreen ? 'compress' : 'expand'" />
            </button>
            <button type="button" class="pe-btn pe-btn--ghost" @click="emit('close')">Закрыть</button>
            <button type="button" class="pe-btn pe-btn--primary" @click="onSaveExport">Сохранить</button>
          </div>
        </header>

    <div class="pe-body">
      <!-- Left tool rail -->
      <aside class="pe-toolbox" aria-label="Инструменты">
        <button
          v-for="tab in EDITOR_TABS"
          :key="tab.id"
          type="button"
          class="pe-tool"
          :class="{ 'is-active': activeTab === tab.id }"
          :aria-label="tab.label"
          @click="changeTab(tab.id, tab.label)"
        >
          <Icon :name="tab.icon" />
          <span class="pe-tooltip" role="tooltip">{{ tab.label }}</span>
        </button>
      </aside>

      <!-- Canvas workspace -->
      <main class="pe-workspace">
        <div ref="stageWrapper" class="pe-stage" :class="{ 'is-comparing': comparing }">
          <Loader v-if="isLoading" />
          <v-stage v-show="!isLoading" ref="stageRef" :config="configStage">
            <v-layer ref="layerRef">
              <v-image ref="imageNode" :config="imageConfig" />
            </v-layer>
            <v-layer v-if="selected" ref="dimLayer">
              <v-shape :config="dimShapeConfig" />
              <v-rect ref="rectRef" :config="rectCrop" />
            </v-layer>
            <v-layer v-if="selected">
              <v-transformer ref="tranRef" :config="tranConfig" />
            </v-layer>
          </v-stage>
        </div>
      </main>

      <!-- Right panels -->
      <aside class="pe-panels">
        <section class="pe-panel-block">
          <header class="pe-panel-head">Свойства</header>
          <div class="pe-panel-body">
            <template v-if="activeTab === TAB.COLOR">
              <div class="pe-section">
                <div class="pe-section__title">Баланс белого</div>
                <Slider v-model="colorParams.temperature" label="Температура" />
                <Slider v-model="colorParams.tint" label="Оттенок" />
              </div>
              <div class="pe-section">
                <div class="pe-section__title">Тон</div>
                <Slider v-model="colorParams.exposure" label="Экспозиция" />
                <Slider v-model="colorParams.contrast" label="Контраст" />
                <Slider v-model="colorParams.highlights" label="Света" />
                <Slider v-model="colorParams.shadows" label="Тени" />
                <Slider v-model="colorParams.whites" label="Белые" />
                <Slider v-model="colorParams.blacks" label="Чёрные" />
              </div>
              <div class="pe-section">
                <div class="pe-section__title">Присутствие</div>
                <Slider v-model="colorParams.vibrance" label="Красочность" />
                <Slider v-model="colorParams.saturation" label="Насыщенность" />
              </div>
              <div class="pe-color-actions">
                <button
                  type="button"
                  class="pe-action"
                  :disabled="!hasAdjustments"
                  @mousedown="setComparing(true)"
                  @mouseup="setComparing(false)"
                  @mouseleave="setComparing(false)"
                  @touchstart.prevent="setComparing(true)"
                  @touchend.prevent="setComparing(false)"
                >
                  До / После
                </button>
                <button
                  type="button"
                  class="pe-action"
                  :disabled="!hasAdjustments"
                  @click="resetColor"
                >
                  Сбросить
                </button>
                <button
                  type="button"
                  class="pe-action pe-action--accent"
                  :disabled="!hasAdjustments || comparing"
                  @click="applyColorAdjustments"
                >
                  <Icon name="success" />
                  Применить
                </button>
              </div>
            </template>

            <template v-else-if="activeTab === TAB.ROTATE">
              <button type="button" class="pe-action" @click="markDirtyAndRotate(90)">
                <Icon name="reload" />
                Вправо 90°
              </button>
              <button type="button" class="pe-action" @click="markDirtyAndRotate(-90)">
                <Icon name="reload" style="transform: scale(-1, 1)" />
                Влево 90°
              </button>
            </template>

            <template v-else-if="activeTab === TAB.CROP">
              <button type="button" class="pe-action" @click="markDirtyAndCrop">
                <Icon name="minimize" />
                Выделить кадр
              </button>
              <button type="button" class="pe-action pe-action--accent" @click="applyCrop">
                <Icon name="success" />
                Применить
              </button>
              <p class="pe-hint">Потяните углы и стороны рамки, затем нажмите «Применить».</p>
            </template>

            <template v-else-if="activeTab === TAB.FLIP">
              <button type="button" class="pe-action" @click="markDirtyAndFlip('x')">
                <Icon name="flip" class="rotate-90" />
                По горизонтали
              </button>
              <button type="button" class="pe-action" @click="markDirtyAndFlip('y')">
                <Icon name="flip" />
                По вертикали
              </button>
            </template>
          </div>
        </section>

        <section class="pe-panel-block pe-panel-block--grow">
          <header class="pe-panel-head">История</header>
          <div class="pe-panel-body pe-history">
            <button
              v-for="(item, index) in historyImage"
              :key="item.date"
              type="button"
              class="pe-history-row"
              :class="{ 'is-current': index === historyIndex }"
              @click="restoreHistory(index)"
            >
              <Icon name="clock" />
              <span class="pe-history-row__text">
                <strong>{{ item.title }}</strong>
                <small>{{ formatHistoryTime(item.date) }}</small>
              </span>
            </button>
          </div>
        </section>
      </aside>
    </div>

    <footer class="pe-statusbar">
      <span>{{ historyImage.length }} шаг(ов)</span>
      <span v-if="selected">режим кадрирования</span>
    </footer>
      </div>
    </div>
  </Teleport>
</template>
