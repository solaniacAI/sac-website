<template>
  <div class="fixed bottom-5 right-5 z-50 space-y-4">
    <div
        v-for="toast in toasts"
        :key="toast.id"
        :class="`${toastTypeClass(toast.type)} p-4 rounded-lg shadow-lg text-white flex items-center space-x-3`"
        class="transform transition duration-500 ease-in-out hover:scale-105"
    >
      <div :class="`${iconClass(toast.type)} flex items-center justify-center`">
        <Icon :name="iconName(toast.type)" class="w-6 h-6" />
      </div>
      <div class="flex-1">
        <p class="text-sm font-medium">{{ toast.message }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '~/composables/useToast';
// Assuming you're using an SVG icon set, make sure your icon library is properly set up

const { toasts } = useToast();

const toastTypeClass = (type: 'success' | 'error' | 'info' | 'warning') => {
  switch (type) {
    case 'success':
      return 'bg-green-500/60 border-l-4 border-green-700';
    case 'error':
      return 'bg-red-500/60 border-l-4 border-red-700';
    case 'warning':
      return 'bg-yellow-500/60 border-l-4 border-yellow-700';
    case 'info':
    default:
      return 'bg-gray-500/60 border-l-4 border-gray-700';
  }
};

const iconClass = (type: 'success' | 'error' | 'info' | 'warning') => {
  switch (type) {
    case 'success':
      return 'text-green-700';
    case 'error':
      return 'text-red-700';
    case 'warning':
      return 'text-yellow-700';
    case 'info':
    default:
      return 'text-gray-700';
  }
};

const iconName = (type: 'success' | 'error' | 'info' | 'warning') => {
  switch (type) {
    case 'success':
      return 'ph:checks-bold'; // Replace with your actual icon name
    case 'error':
      return 'ph:checks-bold'; // Replace with your actual icon name
    case 'warning':
      return 'ph:circle-wavy-warning-bold'; // Replace with your actual icon name
    case 'info':
    default:
      return 'ph:bell-duotone'; // Replace with your actual icon name
  }
};
</script>

<style scoped>
/* Add additional styling here if needed */
</style>
