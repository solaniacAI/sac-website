<script setup lang="ts">
const activeIndex = ref(null);
const faqs = ref([
  {
    question: " Why is Listra safe?",
    answer:
      "Listra is built with security in mind. We do not create or store any wallets in our database. All transactions and storage are handled on the blockchain, ensuring that your assets are secure and protected at all times.",
  },
  {
    question: "Can I invite my friends to my game?",
    answer:
      "Yes, you can invite your friends to join your game on Listra. Simply share your game details with them, and they can participate in the challenge for a chance to win TON coins.",
  },
  {
    question: "Can I withdraw the coins directly?",
    answer:
      "Absolutely! You can withdraw your TON coins directly from the platform to your wallet whenever you wish, with no delays.",
  },
  {
    question: "What coins can I use on Listra?",
    answer: " You can use TON coins exclusively on the Listra platform.",
  },
  {
    question: "How much will I win for each game?",
    answer:
      "For each game you win, you’ll receive 80% of the total prize pool, making your victories even more rewarding.",
  },
]);

const toggleFaq = (index: any) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <div class="lg:container max-w-[87.5%] pb-[100px] mx-auto">
    <div class="text-center flex items-center flex-col justify-center">
      <div
        class="flex items-center gap-1 bg-[#F8F9FA] py-1.5 px-2.5 border border-[var(--border-color)] rounded-full w-fit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
        >
          <path
            d="M8.9998 16.6041C10.9618 16.6041 12.7381 15.8083 14.0237 14.5227C14.6843 13.8638 15.2083 13.0809 15.5655 12.2189C15.9227 11.3569 16.1061 10.4328 16.1051 9.49977C16.1051 7.53777 15.3093 5.76145 14.0237 4.47587C13.3648 3.81494 12.5817 3.29073 11.7195 2.93337C10.8574 2.57602 9.93309 2.39257 8.9998 2.39356C7.0378 2.39356 5.26148 3.18935 3.9759 4.47493C3.31514 5.13394 2.7911 5.91702 2.43391 6.77919C2.07673 7.64135 1.89342 8.5656 1.89454 9.49882C1.89454 11.4608 2.69033 13.2371 3.9759 14.5227C4.63484 15.1837 5.41789 15.7079 6.28005 16.0652C7.14222 16.4226 8.06651 16.6051 8.9998 16.6041Z"
            stroke="#333333"
            stroke-width="1.42105"
            stroke-linejoin="round"
          />
          <path
            d="M9.00072 11.1417V9.72068C9.42231 9.72068 9.83443 9.59566 10.185 9.36144C10.5355 9.12722 10.8087 8.79431 10.97 8.40482C11.1314 8.01532 11.1736 7.58673 11.0913 7.17325C11.0091 6.75976 10.8061 6.37995 10.508 6.08185C10.2099 5.78374 9.83006 5.58073 9.41657 5.49848C9.00308 5.41623 8.5745 5.45844 8.185 5.61978C7.7955 5.78111 7.4626 6.05432 7.22838 6.40486C6.99416 6.75539 6.86914 7.16751 6.86914 7.5891"
            stroke="#333333"
            stroke-width="1.42105"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.00025 14.3412C9.23593 14.3412 9.46195 14.2476 9.6286 14.081C9.79525 13.9143 9.88888 13.6883 9.88888 13.4526C9.88888 13.2169 9.79525 12.9909 9.6286 12.8242C9.46195 12.6576 9.23593 12.564 9.00025 12.564C8.76971 12.5715 8.55114 12.6684 8.39072 12.8341C8.23031 12.9998 8.14063 13.2215 8.14062 13.4521C8.14063 13.6828 8.23031 13.9044 8.39072 14.0701C8.55114 14.2359 8.76971 14.3337 9.00025 14.3412Z"
            fill="#333333"
          />
        </svg>
        <span class="text-sm font-normal leading-5">FAQ's</span>
      </div>
      <h3
        class="mt-4 max-w-sm text-[var(--text-main)] lg:text-4xl text-xl leading-[120%] font-normal"
      >
        Frequently Asked Questions
      </h3>
      <p class="mt-4 text-[var(--text-sub)] font-normal leading-[140%]">
        The Listra platform is designed with our users in mind, providing a
        seamless and rewarding gaming experience <br />
        To help you get the most out of Listra.
      </p>
    </div>
    <div class="mt-10 max-w-2xl mx-auto grid grid-cols-1 gap-3">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="flex flex-col bg-[var(--alert-bg)] p-3 rounded-md"
      >
        <div
          class="flex items-center justify-between cursor-pointer"
          @click="toggleFaq(index)"
        >
          <span class="text-[var(--text-head)]">{{ faq.question }}</span>
          <span class="text-[var(--text-sub)]">{{ activeIndex === index ? "-" : "+" }}</span>
        </div>
        <div
          v-show="activeIndex === index"
          class="pt-2 text-sm text-[var(--text-sub)]"
        >
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
