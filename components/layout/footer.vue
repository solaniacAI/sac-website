<script setup lang="ts"></script>

<template>
  <footer class="relative p-5">
    <div
      class="bg-[var(--footer-bg)] lg:pt-[110px] pt-10 lg:px-[105px] px-10 rounded-[30px]"
    >
      <div class="flex flex-col items-center justify-center gap-2">
        <!-- logohere -->

        <img
          class="w-[200px] h-[200px] object-cover"
          src="assets/solaniac-transparent.png"
          alt=""
        />
        <h3 class="text-[var(--footer-text)] lg:text-3xl text-xl font-thin">
          solaniac.xyz
        </h3>
        <!-- <p class="text-white text-sm">
          Ready to Elevate Your Crypto Game with Solana's Smartest Chatbot?
        </p> -->
        <p class="text-white text-m">info@solaniac.xyz</p>
        <div class="flex items-center justify-center mt-5 gap-3">
          <NuxtLink
            to="https://t.me/solaniacAI"
            target="_blank"
            class="w-10 h-10 bg-[#262626] flex items-center justify-center rounded-md"
          >
            <img class="" src="assets/social/tg.svg" alt="" />
          </NuxtLink>
          <NuxtLink
            to="https://x.com/solaniacAI"
            class="w-10 h-10 bg-[#262626] flex items-center justify-center rounded-md"
          >
            <img class="" src="assets/social/x.svg" alt="" />
          </NuxtLink>
          <NuxtLink
            to="https://github.com/solaniacAI"
            target="_blank"
            class="w-10 h-10 bg-[#262626] flex items-center justify-center rounded-md"
          >
            <img class="" src="assets/social/git.svg" alt="" />
          </NuxtLink>
        </div>
      </div>
      <hr class="mt-5 border-[#7F7F7F]" />
      <div class="flex items-center justify-center pb-10 pt-5">
        <span class="text-white text-s"
          >© 2025 Solaniac . All rights reserved.</span
        >
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
