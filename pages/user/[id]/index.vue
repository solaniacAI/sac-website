<script setup lang="ts">
import UserCover from "~/components/dashboard/user-cover.vue";
import TransactionTable from "~/components/dashboard/TransactionTable.vue";

definePageMeta({
  middleware: ["is-required-token"],
});

interface Transaction {
  id: number;
  dateTime: string;
  game: string;
  total: string;
  receive: string;
  status: 'Winner' | 'Loser';
}

const transactions: Transaction[] = [];

</script>

<template>
  <NuxtLayout name="dashboard">
    <UserCover/>
    <TransactionTable :transactions="transactions" per-page="4"/>
  </NuxtLayout>
</template>

<style scoped>

</style>