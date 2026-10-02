<script setup lang="ts">
import PhotoEditor from "../../editor/ui/PhotoEditor.vue";
import Icon from "../../components/ui/icon/Icon.vue";
import { useShell } from "../useShell";

const { file, isLoad, filesRef, submitFile, handleFileUpload, onClose, saveImage } = useShell();
</script>

<template>
  <div class="photo-editor-shell">
    <div v-if="!isLoad" class="pe-empty" @click="submitFile">
      <div class="pe-empty__card">
        <Icon name="image" class="pe-empty__icon" />
        <h3>Открыть изображение</h3>
        <p>Нажмите, чтобы выбрать файл — JPEG, PNG, WebP</p>
        <button type="button" class="pe-btn pe-btn--primary" @click.stop="submitFile">
          Выбрать файл
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
