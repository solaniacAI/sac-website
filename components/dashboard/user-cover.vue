<script setup lang="ts">
import { useAuth } from "~/store/auth";
import TonWalletImage from "~/components/shared/TonWalletImage.vue";

const user = useAuth().getUser;
const address = useAuth().getWallet;
</script>

<template>
  <div class="px-5 py-10 relative w-full overflow-hidden">
    <div class="container mx-auto">
      <div class="flex w-full items-center justify-between">
        <div class="flex items-center gap-3">
          <Icon
            name="solar:user-bold-duotone"
            class="text-[var(--text-paragraph)]"
            size="20px"
          />
          <span class="text-[var(--text-sub)]"
            >Welcome ,
            <strong class="text-white">
              {{ user?.firstName ? user?.firstName : "Noname" }}</strong
            ></span
          >
        </div>
        <button>
          <button
              v-if="isOwner"
            class="bg-[var(--footer-bg)] group hover:bg-[var(--alert-bg)] rounded border border-[var(--border-color)] w-9 h-9 relative"
          >
            <div
              class="relative transition-transform flex flex-col justify-center items-center ease-in-out duration-75 transform rotate-0 space-y-1 box-border mx-auto"
            >
              <Icon
                name="material-symbols:settings-outline"
                size="20px"
                class="text-white group-hover:rotate-180 duration-300"
              />
            </div>
          </button>
        </button>
      </div>
      <div class="p-10 rounded-2xl w-full mt-20 bg-[var(--footer-bg)] min-h-44">
        <div class="flex justify-between w-full">
          <div class="flex flex-col gap-3">
            <div>
              <TonWalletImage :wallet-address="address" />
            </div>
            <div class="block">
              <span class="text-[var(--text-sub)]"> Balance </span>
              <div class="text-lg text-white flex space-x-5 font-bold">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="fill-[var(--main-color)]"
                    d="M37.5603 15.6277H18.4386C14.9228 15.6277 12.6944 19.4202 14.4632 22.4861L26.2644 42.9409C27.0345 44.2765 28.9644 44.2765 29.7345 42.9409L41.5381 22.4861C43.3045 19.4251 41.0761 15.6277 37.5627 15.6277H37.5603ZM26.2548 36.8068L23.6847 31.8327L17.4833 20.7414C17.0742 20.0315 17.5795 19.1218 18.4362 19.1218H26.2524V36.8092L26.2548 36.8068ZM38.5108 20.739L32.3118 31.8351L29.7417 36.8068V19.1194H37.5579C38.4146 19.1194 38.9199 20.0291 38.5108 20.739Z"
                  />
                </svg>
                {{ 0 }}
              </div>
            </div>
          </div>
          <div
            class="h-[150px] w-0.5 ml-20 my-auto bg-[var(--main-color)]"
          ></div>
          <div class="flex justify-center items-center">
            <div
              class="text-white rounded-lg p-4 2xl:min-w-96 xl:min-w-64 w-full"
            >
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm">Current game</span>
                <span class="text-sm">0 / 100</span>
              </div>
              <div class="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                <div class="bg-yellow-400 h-full" style="width: 0%"></div>
              </div>
              <div class="mt-2 text-sm text-gray-400 flex justify-between">
                <span>Steam</span>
                <span>-</span>
              </div>
            </div>
          </div>
          <div class="flex gap-4">
            <div
              class="flex flex-col items-center border border-[var(--border-color)] justify-center bg-[var(--slide-bg)] py-4 px-10 gap-4 rounded-xl"
            >
              <Icon
                name="solar:gamepad-charge-bold-duotone"
                size="80px"
                class="text-white group-hover:rotate-180 duration-300"
              />
              <div class="flex flex-col items-center justify-center">
                <span class="text-[var(--text-item)] text-sm">Total games</span>
                <span class="text-white text-2xl font-bold">0</span>
              </div>
            </div>
            <div
              class="flex flex-col items-center border border-[var(--border-color)] justify-center bg-[var(--slide-bg)] py-4 px-10 gap-4 rounded-xl"
            >
              <Icon
                name="solar:target-bold-duotone"
                size="80px"
                class="text-white group-hover:rotate-180 duration-300"
              />
              <div class="flex flex-col items-center justify-center">
                <span class="text-[var(--text-item)] text-sm">Targets</span>
                <span class="text-white text-2xl font-bold">0</span>
              </div>
            </div>
            <div
              class="flex flex-col items-center border border-[var(--border-color)] justify-center bg-[var(--slide-bg)] py-4 px-10 gap-4 rounded-xl"
            >
              <Icon
                name="solar:graph-new-up-bold-duotone"
                size="80px"
                class="text-white group-hover:rotate-180 duration-300"
              />
              <div class="flex flex-col items-center justify-center">
                <span class="text-[var(--text-item)] text-sm">Win</span>
                <span class="text-white text-2xl font-bold">0</span>
              </div>
            </div>
            <div
              class="flex flex-col items-center border border-[var(--border-color)] justify-center bg-[var(--slide-bg)] py-4 px-10 gap-4 rounded-xl"
            >
              <Icon
                name="solar:graph-down-new-bold-duotone"
                size="80px"
                class="text-white group-hover:rotate-180 duration-300"
              />
              <div class="flex flex-col items-center justify-center">
                <span class="text-[var(--text-item)] text-sm">Lose</span>
                <span class="text-white text-2xl font-bold">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
