<template>
  <NuxtLink
      :to="to"
      :class="computedClasses"
      :target="target"
      :rel="rel"
  >
    <slot></slot>
  </NuxtLink>
</template>

<script setup lang="ts">
import {computed} from 'vue'

interface LinkProps {
  to: string;
  external?: boolean;
  target?: string;
  rel?: string;
  className?: string;
}

const props = defineProps<LinkProps>()

const computedClasses = computed(() => {
  return `${props.className || ''} inline-flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-300`
})


</script>

<style scoped>
/* Add any additional styles here */
</style>
