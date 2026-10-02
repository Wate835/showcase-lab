<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    :style="{ color: color || 'currentColor' }"
    class="pe-icon"
    v-bind="$attrs"
  >
    <path v-if="name === 'close'" d="M18 6 6 18M6 6l12 12" />
    <template v-else-if="name === 'reload'">
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
      <path d="M3 21v-5h5" />
    </template>
    <template v-else-if="name === 'minimize'">
      <path d="M4 14h6v6" />
      <path d="M20 10h-6V4" />
      <path d="M14 10l7-7" />
      <path d="M3 21l7-7" />
    </template>
    <path v-else-if="name === 'success'" d="M20 6 9 17l-5-5" />
    <template v-else-if="name === 'flip'">
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M16 3h3a2 2 0 0 1 2 2v3" />
      <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
      <path d="M12 3v18" />
    </template>
    <template v-else-if="name === 'clock'">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </template>
    <template v-else-if="name === 'sliders'">
      <path d="M4 21v-7" />
      <path d="M4 10V3" />
      <path d="M12 21v-9" />
      <path d="M12 8V3" />
      <path d="M20 21v-5" />
      <path d="M20 12V3" />
      <path d="M1 14h6" />
      <path d="M9 8h6" />
      <path d="M17 16h6" />
    </template>
    <template v-else-if="name === 'undo'">
      <path d="M3 7v6h6" />
      <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6.7 2.9L3 13" />
    </template>
    <template v-else-if="name === 'redo'">
      <path d="M21 7v6h-6" />
      <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6.7 2.9L21 13" />
    </template>
    <template v-else-if="name === 'image'">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" />
    </template>
    <template v-else-if="name === 'expand'">
      <path d="M15 3h6v6" />
      <path d="M9 21H3v-6" />
      <path d="M21 3l-7 7" />
      <path d="M3 21l7-7" />
    </template>
    <template v-else-if="name === 'compress'">
      <path d="M4 14h6v6" />
      <path d="M20 10h-6V4" />
      <path d="M14 10l7-7" />
      <path d="M3 21l7-7" />
    </template>
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  name:
    | "close"
    | "reload"
    | "minimize"
    | "success"
    | "flip"
    | "clock"
    | "sliders"
    | "undo"
    | "redo"
    | "image"
    | "expand"
    | "compress";
  color?: string;
}>();
</script>

<style scoped>
.pe-icon {
  display: inline-block;
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  vertical-align: middle;
}
</style>
