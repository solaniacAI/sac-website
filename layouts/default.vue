<template>
  <NuxtLoadingIndicator/>
  <LayoutHeader/>
  <div :class="$style.main">
    <slot/>
    <Toast />
  </div>
  <LayoutFooter/>
</template>

<script setup lang="ts">
import Toast from "~/components/shared/Toast.vue";

definePageMeta({
  middleware: ["is-auth-route"],
  layout: "dashboard",
});
</script>

<style module>
.main {
  @apply relative w-full min-h-screen ;
}
</style>
