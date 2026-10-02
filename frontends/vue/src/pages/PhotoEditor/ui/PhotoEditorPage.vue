<script setup lang="ts">
import { PhotoEditorShell } from "@showcase-lab/photo-editor";
import "@showcase-lab/photo-editor/style.css";
import { useI18n } from "../../../utils/usePrefs";

const { t } = useI18n();
</script>

<template>
  <section>
    <h1>{{ t("photoEditor.title") }}</h1>
    <p class="lead">{{ t("photoEditor.lead") }}</p>
    <PhotoEditorShell />
  </section>
</template>
