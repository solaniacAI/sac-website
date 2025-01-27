<script setup lang="ts">

import Footer from "~/components/layout/footer.vue";
</script>
<template>
  <DashboardHeader/>
  <div :class="$style.dashboard">
    <slot />
  </div>
</template>

<style module>
.dashboard {
  @apply relative ;
}
</style>
