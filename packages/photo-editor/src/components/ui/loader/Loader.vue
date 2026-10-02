<template>
  <div class="lds-ring">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

interface IProps {
  widthProp?: string;
  heightProp?: string;
  borderProp?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  widthProp: '24px',
  heightProp: '24px',
  borderProp: '2px',
});

const width = ref(props.widthProp);
const height = ref(props.heightProp);
const border = ref(props.borderProp);
</script>
<style scoped lang="scss">
$width: v-bind(width);
$height: v-bind(height);
$border: v-bind(border);
.lds-ring {
  display: inline-block;
  position: relative;
  width: $width;
  height: $height;
  box-sizing: border-box;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border: $border solid #3b82f6;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #3b82f6 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
