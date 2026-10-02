<template>
  <div class="pe-slider">
    <div class="pe-slider__meta">
      <span class="pe-slider__label">{{ label }}</span>
      <span class="pe-slider__value">{{ displayValue }}</span>
    </div>
    <div class="pe-slider__row">
      <div class="pe-slider__rail" aria-hidden="true">
        <i class="pe-slider__zero" />
        <i class="pe-slider__fill" :style="fillStyle" />
      </div>
      <input
        class="pe-slider__input"
        type="range"
        :min="min"
        :max="max"
        :step="step"
        :value="modelValue"
        :aria-label="label"
        @input="onInput"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue: number;
    label: string;
    min?: number;
    max?: number;
    step?: number;
    unit?: "signed" | "raw";
  }>(),
  {
    min: -100,
    max: 100,
    step: 1,
    unit: "signed",
  },
);

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

const displayValue = computed(() => {
  const v = props.modelValue;
  if (props.unit === "raw") return String(v);
  if (v > 0) return `+${v}`;
  return String(v);
});

/** Fill grows from the zero mark to the thumb (bipolar). */
const fillStyle = computed(() => {
  const span = props.max - props.min || 1;
  const zeroPct = ((0 - props.min) / span) * 100;
  const curPct = ((props.modelValue - props.min) / span) * 100;
  if (props.modelValue >= 0) {
    return {
      left: `${zeroPct}%`,
      width: `${Math.max(0, curPct - zeroPct)}%`,
    };
  }
  return {
    left: `${curPct}%`,
    width: `${Math.max(0, zeroPct - curPct)}%`,
  };
});

function onInput(e: Event) {
  emit("update:modelValue", Number((e.target as HTMLInputElement).value));
}
</script>

<style scoped>
.pe-slider {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
}

.pe-slider__meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.pe-slider__label {
  color: var(--pe-muted, #9a9a9a);
  font-size: 12px;
  line-height: 1;
}

.pe-slider__value {
  font-variant-numeric: tabular-nums;
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  color: var(--pe-text, #e8e8e8);
  min-width: 2.75rem;
  text-align: right;
}

/* Hit area — rail + thumb share this vertical center */
.pe-slider__row {
  --pe-slider-h: 20px;
  --pe-thumb: 12px;
  --pe-rail: 2px;
  position: relative;
  height: var(--pe-slider-h);
  width: 100%;
}

.pe-slider__rail {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: var(--pe-rail);
  margin-top: calc(var(--pe-rail) / -2);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  pointer-events: none;
  overflow: visible;
}

.pe-slider__zero {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 1px;
  height: 8px;
  margin: -4px 0 0 -0.5px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 1px;
}

.pe-slider__fill {
  position: absolute;
  top: 0;
  height: 100%;
  background: var(--pe-accent, #42b883);
  border-radius: inherit;
  overflow: hidden;
}

.pe-slider__input {
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
  inset: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  color: transparent;
  accent-color: transparent;
  cursor: pointer;
}

.pe-slider__input:focus,
.pe-slider__input:focus-visible {
  outline: none;
  box-shadow: none;
}

/* WebKit: track must match control height so thumb margin is predictable */
.pe-slider__input::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  appearance: none;
  height: var(--pe-slider-h);
  background: transparent;
  border: none;
  color: transparent;
}

.pe-slider__input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: var(--pe-thumb);
  height: var(--pe-thumb);
  margin-top: calc((var(--pe-slider-h) - var(--pe-thumb)) / 2);
  border-radius: 50%;
  background: #f5f5f5;
  border: none;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.35),
    0 1px 3px rgba(0, 0, 0, 0.55);
}

.pe-slider__input:focus-visible::-webkit-slider-thumb {
  box-shadow:
    0 0 0 2px color-mix(in srgb, var(--pe-accent, #42b883) 55%, transparent),
    0 1px 3px rgba(0, 0, 0, 0.55);
}

.pe-slider__input::-moz-range-track {
  height: var(--pe-rail);
  background: transparent;
  border: none;
  color: transparent;
}

.pe-slider__input::-moz-range-progress {
  background: transparent;
  border: none;
  height: var(--pe-rail);
}

.pe-slider__input::-moz-range-thumb {
  width: var(--pe-thumb);
  height: var(--pe-thumb);
  border-radius: 50%;
  background: #f5f5f5;
  border: none;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.35),
    0 1px 3px rgba(0, 0, 0, 0.55);
}

.pe-slider__input:focus-visible::-moz-range-thumb {
  box-shadow:
    0 0 0 2px color-mix(in srgb, var(--pe-accent, #42b883) 55%, transparent),
    0 1px 3px rgba(0, 0, 0, 0.55);
}

.pe-slider__input::-moz-focus-outer {
  border: 0;
}
</style>
