<script setup lang="ts">
import { inject, provide, ref, watch } from "vue";
import PhotoEditor from "../../editor/ui/PhotoEditor.vue";
import Icon from "../../components/ui/icon/Icon.vue";
import { getLocale, type HostLocale } from "../../hostLocale";
import { PE_LOCALE_KEY, usePeI18n } from "../../i18n";
import { useShell } from "../useShell";

const props = defineProps<{ locale?: HostLocale }>();
const parentLocale = inject(PE_LOCALE_KEY, null);
const localeRef =
  parentLocale ??
  ref<HostLocale>(props.locale === "en" || props.locale === "ru" ? props.locale : getLocale());
if (!parentLocale) provide(PE_LOCALE_KEY, localeRef);

watch(
  () => props.locale,
  (value) => {
    if (value === "en" || value === "ru") localeRef.value = value;
  },
);

const { file, isLoad, filesRef, submitFile, handleFileUpload, onClose, saveImage } = useShell();
const { t } = usePeI18n(localeRef);
</script>

<template>
  <div class="photo-editor-shell">
    <div v-if="!isLoad" class="pe-empty" @click="submitFile">
      <div class="pe-empty__card">
        <Icon name="image" class="pe-empty__icon" />
        <h3>{{ t("pe.openTitle") }}</h3>
        <p>{{ t("pe.openHint") }}</p>
        <button type="button" class="pe-btn pe-btn--primary" @click.stop="submitFile">
          {{ t("pe.chooseFile") }}
        </button>
      </div>
      <input
        type="file"
        ref="filesRef"
        accept="image/*"
        style="display: none"
        @change="handleFileUpload"
      />
    </div>
    <PhotoEditor
      v-else-if="file"
      :def-img="file"
      @save-image="saveImage"
      @close="onClose"
    />
  </div>
</template>
