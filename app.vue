<script setup lang="ts">
import { useDark } from "@vueuse/core";

const isDark = useDark();
useHead({
  title:
    "Chat with Solaniac - Ready to Take Your Crypto Insights to the Next Level?",
  meta: [
    {
      name: "description",
      content:
        "Chat with Solaniac - Ready to Take Your Crypto Insights to the Next Level?",
    },
  ],
});
const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>

<template>
  <div
    v-if="loading"
    class="fixed left-0 top-0 h-0.5 w-full z-50 bg-[#38b1f2]"
  ></div>

  <div>
    <NuxtRouteAnnouncer />
  </div>
  <NuxtPage />
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --text-main: #0c0c0c;
    --text-paragraph: #606060;
    --text-head: #262626;
    --text-sub: #666666;
    --text-item: #333333;
    --background: #121212;
    --border-color: #e6e9ee;
    --footer-bg: #191919;
    --footer-text: #b3b3b3;
    --main-color: #3533cd;
    --light-color: #3533cd;
    --alert-bg: #f8f9fa;
    --slide-bg: #edeff3;
  }

  .dark {
    --text-main: #f5f5f5;
    --text-paragraph: #c0c0c0;
    --text-head: #e0e0e0;
    --text-sub: #aaaaaa;
    --text-item: #cccccc;
    --background: #121212;
    --border-color: #444444;
    --bg-sconder: #1a2024;
    --bg-third: #192025;
    --bg-game: #343438;
    --footer-bg: #191919;
    --footer-text: #666666;
    --main-color: #3533cd; /* Can remain the same if it works for both themes */
    --light-color: #3533cd; /* Can remain the same if it works for both themes */
    --light-color-s: rgba(
      3,
      63,
      108,
      0.58
    ); /* Can remain the same if it works for both themes */
    --alert-bg: #2a2a2a;
    --slide-bg: #1a1a1a;
  }
}

html {
  @apply bg-[var(--background)] !text-[var(--text)];
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body a:hover {
  @apply !text-[var(--color-foreground-hover)];
}
</style>
