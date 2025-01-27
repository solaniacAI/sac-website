<script setup lang="ts">
import { useTonAddress, useTonConnectUI, useTonWallet } from "ton-ui-vue";
import Popover from "~/components/shared/Popover.vue";
import { useAuth } from "~/store/auth";
import { useToast } from "~/composables/useToast";
import TonConnectWallet from "~/components/shared/TonConnectWallet.vue";
import TonWalletImage from "~/components/shared/TonWalletImage.vue";

const { addToast } = useToast();

const config = useRuntimeConfig();

// ton integration
const address = useTonAddress();
const wallet = useTonWallet();
const tonConnectUI = useTonConnectUI();

// disconnect wallet button
// const disconnectWallet = () => {
//   tonConnectUI?.tonConnectUI?.value?.disconnect();
//   useAuth().setToken("");
//   useAuth().setUser({});
//   useAuth().setWallet("");
// };

// watchEffect(() => {
//   tonConnectUI?.tonConnectUI?.value?.onStatusChange((walletInfo: any) => {
//     if (walletInfo) {
//       useFetch("/user/ton", {
//         baseURL: "https://listra.xyz/api/v1",
//         method: "post",
//         body: {
//           wallet: walletInfo?.account?.address,
//         },
//       })
//         .then((res: any) => {
//           if (res?.status?.value == "success") {
//             console.log(res?.data?.value?.user?.wallet);
//             useAuth().setToken(res?.data?.value?.token);
//             useAuth().setWallet(res?.data?.value?.user?.wallet);
//             useAuth().setUser(res?.data?.value?.user);
//           }
//         })
//         .catch((err: any) => {
//           addToast("Error with login!, please contact support", "warning");
//           disconnectWallet();
//         });
//     } else {
//       useAuth().setToken("");
//       useAuth().setUser({});
//     }
//   });
// });
</script>

<template>
  <header :class="$style._header">
    <nav :class="$style.nav">
      <NuxtLink to="/">
        <!-- logohere -->
        <img
          class="w-[64px] h-[64px] object-cover"
          src="assets/solaniac-transparent.png"
          alt=""
        />
      </NuxtLink>
      <!-- <div
        class="flex items-center text-[var(--text-head)] hover:text-[var(--text-sub)]"
      >
        <NuxtLink to="/business"> Business </NuxtLink>
      </div> -->

      <div :class="$style.links">
        <!-- <button v-if="!address" @click="tonConnectUI.tonConnectUI.value.openModal()"
                class="bg-[#0098EA] lg:block hidden hover:bg-[#0098EA]/70 h-9 px-2 py-1.5 text-sm text-white rounded leading-[120%]">
          Connect wallet
        </button> -->
        <Popover class="w-[300px]">
          <template #trigger>
            <button
              class="bg-[var(--footer-bg)] hover:bg-[var(--alert-bg)] rounded border border-[var(--border-color)] w-9 h-9 relative"
            >
              <div
                class="relative transition-transform flex flex-col justify-center items-center ease-in-out duration-75 transform rotate-0 space-y-1 box-border mx-auto"
              >
                <span
                  class="bg-white block w-3 h-0.5 transition ease-in-out duration-200 transform rotate-0"
                ></span>
                <span
                  class="bg-white block w-3 h-0.5 transition ease-in-out duration-200 transform rotate-0"
                ></span>
              </div>
            </button>
          </template>
          <template #content>
            <div class="flex flex-col gap-2 p-2">
              <div v-if="!address" class="space-y-2">
                <!-- <span class="text-[var(--text-main)] text-sm text-center w-full">Connect your wallet</span> -->
                <!-- <button v-if="!address" @click="tonConnectUI.tonConnectUI.value.openModal()"
                        class="bg-[#0098EA] lg:hidden block hover:bg-[#0098EA]/70 h-9 px-2 py-1.5 text-sm text-white rounded leading-[120%]">
                  Connect wallet
                </button> -->
                <div
                  class="p-4 rounded-lg w-full bg-[var(--slide-bg)] flex flex-col gap-2"
                >
                  <!-- <h3 class="text-sm text-[var(--text-main)]">We Only Take TON!</h3> -->
                  <!-- <p class="text-xs font-light text-[var(--text-main)]">
                    Our platform is built for the Solana ecosystem, ensuring
                    seamless and secure interactions. To access our Solana-based
                    LLM model, users need to stake or hold our platform's native
                    tokens. Your tokens unlock the ability to query the model
                    and explore the future of crypto with us. Embrace the power
                    of decentralized knowledge—powered by Solana!
                  </p> -->
                  <!-- <NuxtLink
                    to="https://solana.com/"
                    class="text-white bg-[var(--main-color)] w-fit text-xs px-2 py-1 rounded-lg"
                  >
                    solana.com
                  </NuxtLink> -->
                </div>
              </div>
              <div v-else class="flex flex-col gap-2">
                <NuxtLink
                  :to="`/user/${wallet?.account?.address}`"
                  class="flex items-center gap-2 p-2 hover:bg-[var(--footer-text)] rounded-lg"
                >
                  <TonWalletImage
                    :walletAddress="wallet?.account?.address"
                    :size="30"
                  />
                  <div class="flex text-[var(--text-main)] flex-col gap-0.5">
                    <span class="text-sm">
                      {{
                        address?.slice(0, 4) +
                        "..." +
                        address?.slice(address?.length - 4, address?.length)
                      }}
                    </span>
                  </div>
                </NuxtLink>
                <div
                  class="p-4 rounded-lg w-full bg-[var(--footer-bg)] flex flex-col gap-2"
                >
                  <!-- <h3 class="text-sm text-[var(--text-main)]">We Only Take TON!</h3> -->
                  <!-- <p class="text-xs font-light text-[var(--text-main)]">
                    Our platform is built for the Solana ecosystem, ensuring
                    seamless and secure interactions. To access our Solana-based
                    LLM model, users need to stake or hold our platform's native
                    tokens. Your tokens unlock the ability to query the model
                    and explore the future of crypto with us. Embrace the power
                    of decentralized knowledge—powered by Solana!
                  </p> -->
                  <!-- <NuxtLink
                    to="https://solana.com/"
                    class="text-white bg-[var(--main-color)] w-fit text-xs px-2 py-1 rounded-lg"
                  >
                    solana.com
                  </NuxtLink> -->
                </div>
                <div
                  class="bg-[var(--footer-bg)] p-4 rounded-2xl shadow-lg w-full mx-auto"
                >
                  <div class="flex items-center justify-between">
                    <div class="text-[var(--text-sub)] text-xs uppercase">
                      Balance
                    </div>
                  </div>
                  <div class="mt-2 flex items-center">
                    <div
                      class="flex items-center text-[var(--text-main)] text-xl font-semibold"
                    >
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

                      0
                    </div>
                    <div class="ml-2 text-[var(--text-sub)]">· $0</div>
                  </div>
                </div>

                <NuxtLink
                  to=""
                  class="flex cursor-not-allowed items-center mt-2 justify-between group"
                >
                  <div class="flex items-center gap-2">
                    <Icon
                      name="heroicons-solid:squares-plus"
                      size="17px"
                      class="dark:text-[var(--text-main)] group-hover:!text-[var(--text-sub)]"
                    />
                    <span
                      class="text-sm text-[var(--text-main)] group-hover:!text-[var(--text-sub)]"
                      >Games</span
                    >
                  </div>
                </NuxtLink>
                <NuxtLink
                  to=""
                  class="flex items-center cursor-not-allowed mt-2 justify-between group"
                >
                  <div class="flex items-center gap-2">
                    <Icon
                      name="hugeicons:user-question-02"
                      size="17px"
                      class="dark:text-[var(--text-main)] group-hover:!text-[var(--text-sub)]"
                    />
                    <span
                      class="text-sm text-[var(--text-main)] group-hover:!text-[var(--text-sub)]"
                      >FAQs</span
                    >
                  </div>
                </NuxtLink>
                <!-- <button
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
                </button> -->
              </div>
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
            </div>
          </template>
        </Popover>
      </div>
    </nav>
  </header>
</template>

<style module>
:root {
  --bg: rgba(26, 26, 26, 0.2);
}

._header {
  @apply container mx-auto fixed top-5 z-[100] w-full left-1/2 bg-[var(--bg)] backdrop-blur-md -translate-x-1/2 rounded-xl max-w-[87.5%];
}

.nav {
  @apply h-[64px] pr-2 pl-7 mx-auto flex items-center text-[var(--text)]  gap-10;
}

.nav .link {
  @apply text-black text-xs leading-4 font-bold tracking-[2px] uppercase;
}

.nav .links {
  @apply md:flex items-center gap-5 mr-5 ml-auto;
}
</style>
