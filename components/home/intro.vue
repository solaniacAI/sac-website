<script setup lang="ts">
import { useDark } from "@vueuse/core";
const isDark = useDark();
const games = ref([
  {
    name: "Coming Soon",
    logo: "solaniac-transparent.png",
  },
  {
    name: "Coming Soon",
    logo: "solaniac-transparent.png",
  },
  {
    name: "Coming Soon",
    logo: "solaniac-transparent.png",
  },
  {
    name: "Coming Soon",
    logo: "solaniac-transparent.png",
  },
  {
    name: "Coming Soon",
    logo: "solaniac-transparent.png",
  },
  {
    name: "Coming Soon",
    logo: "solaniac-transparent.png",
  },
  {
    name: "Coming Soon",
    logo: "solaniac-transparent.png",
  },
  {
    name: "Coming Soon",
    logo: "solaniac-transparent.png",
  },
]);
</script>
<template>
  <div
    class="relative w-full h-[803px] overflow-y-hidden flex items-end justify-center"
  >
    <img
      v-if="!isDark"
      class="absolute top-0 left-0 w-full lg:h-auto h-screen object-cover"
      src="assets/bg-intro.svg"
      alt=""
    />
    <img
      v-if="isDark"
      class="absolute top-0 left-0 w-full lg:h-auto h-screen object-cover"
      src="assets/bg-intro-dark.svg"
      alt=""
    />
    <div class="flex flex-col items-center justify-center relative z-10 gap-7">
      <img
        class="w-[150px] h-[150px] object-cover"
        src="assets/solaniac-transparent.png"
        alt=""
      />

      <div class="flex flex-col space-y- text-center">
        <h1 class="text-5xl text-[var(--text-main)] leading-[50px] font-normal">
          Chat with Solaniac
        </h1>
        <span class="text-[var(--text-sub)] leading-7 font-normal"
          >Ready to Elevate Your Crypto Game with Solana's Smartest
          Chatbot?</span
        >
      </div>
      <SharedModal>
        <div
          class="mb-20 mt-10 flex relative items-center overflow-hidden gap-2 bg-[var(--alert-bg)] p-1 pl-4 border border-[var(--border-color)] rounded-full"
        >
          <span
            class="text-xs font-normal leading-[21px] text-[var(--text-head)]"
            >Join the waitlist Members</span
          >
          <button
            class="flex items-center bg-gradient-to-tr from-[var(--main-color)] to-[var(--light-color)] py-2 rounded-full px-2.5 gap-2"
          >
            <span class="text-xs font-semibold text-white leading-4"
              >Join Waitlist</span
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M2.40234 6.58359C2.20343 6.58359 2.01267 6.6626 1.87201 6.80326C1.73136 6.94391 1.65234 7.13467 1.65234 7.33359C1.65234 7.5325 1.73136 7.72326 1.87201 7.86392C2.01267 8.00457 2.20343 8.08359 2.40234 8.08359V6.58359ZM11.7353 7.33359L12.2653 7.86359C12.4058 7.72296 12.4847 7.53234 12.4847 7.33359C12.4847 7.13484 12.4058 6.94421 12.2653 6.80359L11.7353 7.33359ZM8.76634 3.30359C8.62417 3.17111 8.43612 3.09898 8.24182 3.10241C8.04752 3.10584 7.86214 3.18455 7.72472 3.32196C7.58731 3.45938 7.5086 3.64476 7.50517 3.83906C7.50174 4.03337 7.57386 4.22141 7.70634 4.36359L8.76634 3.30359ZM7.70634 10.3036C7.63266 10.3722 7.57355 10.455 7.53256 10.547C7.49157 10.639 7.46953 10.7384 7.46775 10.8391C7.46598 10.9398 7.4845 11.0398 7.52222 11.1332C7.55994 11.2266 7.61609 11.3114 7.6873 11.3826C7.75852 11.4538 7.84336 11.51 7.93675 11.5477C8.03013 11.5854 8.13016 11.604 8.23087 11.6022C8.33157 11.6004 8.43088 11.5784 8.52288 11.5374C8.61488 11.4964 8.69768 11.4373 8.76634 11.3636L7.70634 10.3036ZM2.40234 8.08359H11.7353V6.58359H2.40234V8.08359ZM12.2653 6.80359L8.76634 3.30359L7.70534 4.36359L11.2053 7.86359L12.2653 6.80359ZM11.2053 6.80359L7.70534 10.3036L8.76634 11.3636L12.2653 7.86359L11.2053 6.80359Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </SharedModal>
      <!-- <p
        class="max-w-[500px] mx-auto mb-20 text-center text-[var(--text-sub)] leading-7 font-normal"
      >
        Query our Solana-powered LLM and turn your crypto <br />
        curiosity into real value.
      </p> -->
      <div class="flex flex-col gap-3 text-center">
        <div
          class="relative m-auto w-[500px] overflow-hidden dark:bg-[#121212] bg-white"
        >
          <div
            class="before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] dark:before:bg-[linear-gradient(to_right,#121212_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] dark:after:bg-[linear-gradient(to_right,#121212_0%,rgba(255,255,255,0)_100%)] after:content-['']"
          >
            <div class="animate-infinite-slider flex w-[calc(280px*10)]">
              <div
                v-for="(item, index) in games"
                :key="index"
                class="slide flex w-[140px] items-center justify-center"
              >
                <div
                  class="flex items-center slide gap-1 bg-white dark:bg-[#121212] w-fit rounded-lg"
                >
                  <span class="text-m whitespace-nowrap dark:text-white">{{
                    item.name
                  }}</span>
                </div>
              </div>
              <div
                v-for="(item, index) in games"
                :key="'duplicate-' + index"
                class="slide flex w-[140px] items-center justify-center"
              >
                <div
                  class="flex items-center slide gap-1 dark:bg-[#121212] bg-white w-fit rounded-lg"
                >
                  <span class="text-m whitespace-nowrap dark:text-white">{{
                    item.name
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
