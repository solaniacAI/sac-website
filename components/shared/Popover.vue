<template>
  <div class="relative inline-block" ref="popoverRef">
    <div @click="togglePopover">
      <slot name="trigger"></slot>
    </div>
    <div
        v-if="isOpen"
        :class="props.class"
        class="absolute right-0 z-10 mt-2 flex flex-col gap-2 overflow-y-auto  bg-[#262629] p-4 shadow-2xl rounded-3xl bg-[var(--alert-bg)] ring-1 ring-black ring-opacity-5 transition ease-in-out duration-300"
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {onClickOutside} from "@vueuse/core";

const props = defineProps({
  class: {
    type: String,
    default: 'w-48'
  }
})
const isOpen = ref(false)
const popoverRef = ref(null)

const togglePopover = () => {
  isOpen.value = !isOpen.value
}

onClickOutside(popoverRef, () => {
  isOpen.value = false
});
</script>
