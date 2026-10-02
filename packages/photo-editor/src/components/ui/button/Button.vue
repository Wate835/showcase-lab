<template>
  <button
    v-bind:style="{ color: activeColor }"
    :class="[
      'button',
      'button__content',
      colorClass,
      fullWidthClass,
      roundedClass,
      iconClass,
      loadClass,
      disabledClass,
    ]"
  >
    <slot />
    <div class="loader" v-if="loading">
      <div class="lds-dual-ring" />
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { VARIANTS } from "./constants";

interface IButtonProps {
  disabled?: boolean;
  onlyIcon?: boolean;
  rounded?: boolean;
  full?: boolean;
  loading?: boolean;
  variant?: (typeof VARIANTS)[number];
  nameDisableClass?: string;
}

const props = withDefaults(defineProps<IButtonProps>(), {
  disabled: false,
  onlyIcon: false,
  full: false,
  rounded: false,
  loading: false,
  variant: 'primary',
});

const activeColor = computed(() => (props.loading ? `transparent` : ''));
const loadClass = computed(() => ({ loading: props.loading }));
const disabledClass = computed(() =>
  props.disabled
    ? props.nameDisableClass
      ? `${props.nameDisableClass} disabled`
      : 'disabled'
    : '',
);
const iconClass = computed(() => ({ button__content_icon: props.onlyIcon }));
const roundedClass = computed(() => ({ button__content_circle: props.rounded }));
const fullWidthClass = computed(() => ({ button__content_full: props.full }));
const colorClass = computed(() => `button__content_${props.variant}`);
</script>

<style lang="scss" scoped>
@import 'button';
</style>
