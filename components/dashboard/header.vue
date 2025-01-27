<script setup lang="ts">
import { useTonAddress, useTonConnectUI, useTonWallet } from "ton-ui-vue";
import Popover from "~/components/shared/Popover.vue";
import TonWalletImage from "~/components/shared/TonWalletImage.vue";
import { useAuth } from "~/store/auth";

// Ton
const wallet = useTonWallet();
const address = useTonAddress();
const tonConnectUI = useTonConnectUI();
const disconnectWallet = () => {
  tonConnectUI?.tonConnectUI?.value?.disconnect();
  useAuth().setToken("");
  useAuth().setUser({});
  useAuth().setWallet("");
  navigateTo("/");
};
</script>

<template>
  <header
    class="relative w-full py-4 px-10 border-b border-b-[var(--border-color)]"
  >
    <nav class="flex items-center justify-between">
      <NuxtLink to="/">
        <img
          class="w-[64px] h-[64px] object-cover"
          src="assets/solaniac-transparent.png"
          alt=""
        />
      </NuxtLink>
      <div class="flex items-center bg-[var(--alert-bg)] rounded-lg shadow-lg">
        <div class="flex items-center space-x-2 ml-2">
          <svg
            width="30"
            height="30"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.5603 15.6277H18.4386C14.9228 15.6277 12.6944 19.4202 14.4632 22.4861L26.2644 42.9409C27.0345 44.2765 28.9644 44.2765 29.7345 42.9409L41.5381 22.4861C43.3045 19.4251 41.0761 15.6277 37.5627 15.6277H37.5603ZM26.2548 36.8068L23.6847 31.8327L17.4833 20.7414C17.0742 20.0315 17.5795 19.1218 18.4362 19.1218H26.2524V36.8092L26.2548 36.8068ZM38.5108 20.739L32.3118 31.8351L29.7417 36.8068V19.1194H37.5579C38.4146 19.1194 38.9199 20.0291 38.5108 20.739Z"
              fill="white"
            />
          </svg>
          <span class="text-white text-sm">0 TON</span>
        </div>
        <button
          class="ml-4 px-6 py-2 text-white bg-[#0098EA] hover:bg-[#0098EA]/70 rounded-lg"
        >
          Balance
        </button>
      </div>
      <div>
        <Popover class="w-[300px]">
          <template #trigger>
            <button
              class="py-1 px-2 gap-2 hover:bg-[var(--alert-bg)] rounded relative flex items-center"
            >
              <TonWalletImage
                :wallet-address="wallet?.account?.address"
                :size="20"
              />
              <span class="text-white text-sm">
                {{
                  address?.slice(0, 2) +
                  "..." +
                  address?.slice(address?.length - 2, address?.length)
                }}
              </span>
              <Icon
                name="ri:arrow-down-wide-fill"
                class="text-white"
                size="20px"
              />
            </button>
          </template>
          <template #content>
            <div class="flex flex-col gap-2">
              <NuxtLink
                to=""
                class="flex items-center cursor-pointer mt-2 justify-between group"
              >
                <div class="flex items-center gap-2">
                  <Icon
                    name="material-symbols:settings-input-component-outline-sharp"
                    size="17px"
                    class="dark:text-[var(--text-main)] group-hover:!text-[var(--text-sub)]"
                  />
                  <span
                    class="text-sm text-[var(--text-main)] group-hover:!text-[var(--text-sub)]"
                    >Settings</span
                  >
                </div>
              </NuxtLink>
              <hr class="my-2 border-[var(--border-color)]" />
              <div class="flex flex-col gap-0.5">
                <span class="text-[var(--text-main)] text-sm">Follow us ⌘</span>
                <div class="flex items-center mt-2 gap-2 justify-between">
                  <NuxtLink
                    class="px-4 text-sm h-8 gap-3 w-full flex items-center justify-center border border-[var(--border-color)] text-[var(--text-main)] hover:!text-[var(--text-sub)] rounded-md capitalize"
                    to="https://t.me/solaniacAI"
                  >
                    <Icon
                      name="hugeicons:telegram"
                      size="17px"
                      class="dark:text-[var(--text-main)] group-hover:!text-[var(--text-sub)]"
                    />

                    TG
                  </NuxtLink>
                  <NuxtLink
                    class="px-4 text-sm h-8 gap-3 text-center justify-center flex w-full items-center border border-[var(--border-color)] text-[var(--text-main)] hover:!text-[var(--text-sub)] rounded-md capitalize"
                    to="https://github.com/solaniacAI"
                  >
                    <Icon
                      name="hugeicons:github"
                      size="17px"
                      class="dark:text-[var(--text-main)] group-hover:!text-[var(--text-sub)]"
                    />
                    GIT
                  </NuxtLink>
                </div>
              </div>
              <hr class="my-2 border-[var(--border-color)]" />
              <button
                @click="disconnectWallet"
                class="flex items-center mt-2 justify-between group"
              >
                <div class="flex items-center gap-2">
                  <Icon
                    name="hugeicons:logout-03"
                    size="17px"
                    class="dark:text-[var(--text-main)] group-hover:!text-[var(--text-sub)]"
                  />
                  <span
                    class="text-sm text-[var(--text-main)] group-hover:!text-[var(--text-sub)]"
                    >Logout</span
                  >
                </div>
              </button>
            </div>
          </template>
        </Popover>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
