<template>
  <div class="user-not-found-page relative">
    <img
        class="absolute top-0 left-0 w-full  h-screen object-cover"
        src="../../assets/bg-intro-dark.svg"
        alt=""
    />
    <div class="p-5 bg-black/20 z-10 rounded-lg space-y-3">
      <h2 class="text-5xl">Opps</h2>
      <p>The user you are looking for does not exist in our universe.</p>
      <NuxtLink to="/" class="flex mx-auto w-fit items-center mt-2 justify-between group">
        <div class="flex items-center gap-2">
          <Icon name="uim:house-user" size="20px"
                class="dark:text-[var(--text-main)] group-hover:!text-[var(--text-sub)] "/>
          <span class="text-sm text-[var(--text-main)] group-hover:!text-[var(--text-sub)] ">Return Home</span>
        </div>
      </NuxtLink>
    </div>

  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.user-not-found-page {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
}


.content {
  z-index: 1;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

.metaverse-svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  opacity: 0.8;
}
</style>
