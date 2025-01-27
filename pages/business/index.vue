<script setup lang="ts">

const features = ref([
  {
    title: "Innovative Gaming Ecosystem: ",
    content: "Listra offers a diverse range of games that cater to all types of players—from casual gamers to competitive pros. But what sets us apart is that your time and skills are rewarded with real value, thanks to our integration with Ton."
  },
  {
    title: "Secure and Decentralized:",
    content: " With Ton’s blockchain technology, all your transactions on Listra are fast, secure, and transparent. Enjoy peace of mind knowing that your earnings are protected by the latest in decentralized finance technology."
  },
  {
    title: "Rewarding Loyalty:",
    content: "At Listra, loyalty pays off. The more you play, trade, and engage with the platform, the more you earn. Participate in special events, promotions, and challenges to boost your rewards and climb the leaderboard."
  }
])

</script>
<!-- 
<template>
  <NuxtLayout name="default">
    <section class="h-screen w-full flex items-end justify-center overflow-hidden relative after:absolute after:w-full after:h-20 after:bg-gradient-to-t from-[var(--background)] after:bottom-0 to-transparent">

      <img src="assets/background.jpg"  class="w-full absolute object-cover h-full" alt=""/>
      <img
          class="absolute top-0 left-0 w-full object-cover h-full"
          src="assets/bg-intro-dark.svg"
          alt="background"
      />
      <div class="flex text-white flex-col mb-20 gap-2 relative z-20 items-center">
        <h3 class="text-5xl">Business</h3>
        <p class="text-lg">Unleash the Power of Chat with Solaniac</p>
      </div>
    </section>
    <div class="lg:container max-w-[87.5%] text-white mt-10 mx-auto">
      <p class="max-w-2xl font-thin text-lg mx-auto text-center">At Listra, we’re redefining the gaming landscape. Gone
        are the
        days when play was just about entertainment.
        With Listra, every action, every strategy, every victory becomes an opportunity to earn and grow. <br> Our
        platform,
        powered by Ton, ensures that your gaming is not just a pastime but a pathway to real-world benefits.</p>

      <div class="flex flex-col space-y-5 mt-20 max-w-4xl mx-auto">
        <h3>Key Features of Listra:</h3>
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div
              v-for="item in features"
              class="p-4 bg-[var(--footer-bg)] hover:bg-[var(--alert-bg)] rounded-2xl cursor-default border border-[var(--border-color)] relative space-y-2">
            <h2 class="text-lg font-bold">{{ item.title }}</h2>
            <p class="text-[var(--text-item)]">{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template> -->

<style scoped>

</style>