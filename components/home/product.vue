<script setup lang="ts">
const iList = ref([
  "TON Coin Challenges",
  "Skill-Based Competitions",
  "Instant Rewards",
  "Secure Transactions",
]);

const infoRef = ref([
  {
    t: "TON Coin Challenges:",
    d: "Engage in exciting challenges where you deposit TON coins to compete against other players for cash prizes.",
    i: "/prod/1.svg.svg",
  },
  {
    t: "Skill-Based Competitions: ",
    d: "Showcase your abilities in a variety of games, where winning is determined by skill, not luck.",
    i: "/prod/2.svg",
  },
  {
    t: "Instant Rewards: ",
    d: "Winners are rewarded instantly in TON coins, allowing you to enjoy your winnings immediately.",
    i: "/prod/3.svg",
  },
]);
</script>

<template>
  <div class="relative lg:container max-w-[87.5%] mx-auto lg:py-24 py-10">
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
      <div class="relative lg:min-h-[506px] w-full">
        <img src="assets/product.svg" class="w-auto h-auto" alt=""/>
      </div>
      <div class="flex flex-col">
        <div
            class="flex items-center gap-1 bg-[#F8F9FA] py-1.5 px-2.5 border border-[var(--border-color)] rounded-full w-fit"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
          >
            <g clip-path="url(#clip0_2007_1564)">
              <mask
                  id="mask0_2007_1564"
                  style="mask-type: luminance"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="19"
                  height="19"
              >
                <path
                    d="M0.410156 0.5H18.4102V18.5H0.410156V0.5Z"
                    fill="white"
                />
              </mask>
              <g mask="url(#mask0_2007_1564)">
                <path
                    d="M13.9762 14.02L16.9762 17.007M9.76716 16.385L11.8172 11.888L16.5752 10.494L12.9122 7.16403L13.0502 2.22803L8.73716 4.66603L4.06416 3.01003L5.06116 7.84703L2.03516 11.76L6.96516 12.311L9.76716 16.385Z"
                    stroke="#333333"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_2007_1564">
                <rect
                    width="18"
                    height="18"
                    fill="white"
                    transform="translate(0.410156 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <span class="text-sm font-normal leading-5">Product Highlights</span>
        </div>
        <h3
            class="lg:text-4xl text-xl leading-[120%] mt-3 text-[var(--text-main)] max-w-xl"
        >
          Challenge, Compete, and Win with TON Coins
        </h3>
        <p class="text-[var(--text-paragraph)] leading-[120%] font-normal mt-4">
          Listra is an innovative gaming platform where players can challenge
          others, deposit TON coins, and compete to win real money. <br/>
          Designed for competitive spirits, Listra offers a thrilling
          environment where skill meets opportunity.
        </p>
        <div class="mt-10 flex flex-col gap-3">
          <div
              v-for="item in iList"
              class="flex items-center gap-2 rounded-full border border-[var(--border-color)] p-1.5 pr-4 w-fit"
          >
            <div
                class="p-1 w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-tr from-[var(--main-color)] to-[var(--light-color)]"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
              >
                <g clip-path="url(#clip0_2007_1585)">
                  <path
                      d="M11.1602 3.25L4.62916 9.75L1.66016 6.795"
                      stroke="#1A1A1A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2007_1585">
                    <rect
                        width="12"
                        height="13"
                        fill="white"
                        transform="translate(0.410156)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span
                class="text-[var(--text-item)] lg:text-base text-xs leading-6 font-normal"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-5">
      <div
          v-for="item in infoRef"
          class="p-5 rounded-xl border border-[var(--border-color)] flex flex-col gap-3"
      >
        <div class="flex items-center gap-2">
          <img :src="item.i"/>
          <span class="font-semibold text-[var(--text-main)] leading-[24px]">{{ item.t }}</span>
        </div>
        <p class="text-[var(--text-sub)]">
          {{ item.d }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
