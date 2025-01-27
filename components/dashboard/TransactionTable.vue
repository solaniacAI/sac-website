<script lang="ts" setup>
import {useAuth} from "~/store/auth";

const isOwner = useAuth().getOwner;

interface Transaction {
  id: number;
  dateTime: string;
  game: string;
  total: string;
  receive: string;
  status: "Winner" | "Loser";
}

const props = defineProps<{
  transactions: Transaction[];
  perPage?: number;
}>();

const currentPage = ref(1);
const perPage = computed(() => props.perPage || 3);

const totalPages = computed(() =>
    Math.ceil(props.transactions.length / perPage.value),
);

const paginatedTransactions = computed(() => {
  const start = (currentPage.value - 1) * perPage.value;
  const end = currentPage.value * perPage.value;
  return props.transactions.slice(start, end);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};
</script>


<template>
  <div
      class="bg-[var(--footer-bg)] text-white rounded-2xl p-4 w-full container mx-auto"
  >
    <div
        v-if="props.transactions.length === 0"
        class="flex flex-col gap-3 justify-center items-center h-48"
    >
      <span class="text-lg text-gray-400">
        What are you waiting for? Start your challenge now!
      </span>
      <NuxtLink
          to="game/create"
          v-if="isOwner"
          class="flex  items-center mt-2 justify-between group bg-[var(--footer-bg)] hover:bg-[var(--alert-bg)] rounded border border-[var(--border-color)] px-3 py-1.5"
      >
        <div class="flex items-center gap-2">
          <Icon
              name="heroicons-solid:squares-plus"
              size="17px"
              class="dark:text-[var(--text-main)] group-hover:!text-[var(--text-sub)]"
          />
          <span
              class="text-[var(--text-main)] group-hover:!text-[var(--text-sub)]"
          >Create game</span
          >
        </div>
      </NuxtLink>
    </div>
    <div v-else>
      <table class="table-auto w-full text-left">
        <thead>
        <tr class="text-sm text-gray-400">
          <th class="px-4 py-2">Date & Time</th>
          <th class="px-4 py-2">Game</th>
          <th class="px-4 py-2">Total</th>
          <th class="px-4 py-2">You Receive</th>
          <th class="px-4 py-2">Status</th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="transaction in paginatedTransactions"
            :key="transaction.id"
            class="border-t border-gray-800"
        >
          <td class="px-4 py-2">{{ transaction.dateTime }}</td>
          <td class="px-4 py-2">{{ transaction.game }}</td>
          <td
              class="px-4 py-2 flex items-center w-fit gap-1 text-white font-bold"
          >
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
            {{ transaction.total }}
          </td>
          <td class="px-4 py-2">{{ transaction.receive }}</td>
          <td class="px-4 py-2">
              <span
                  :class="{
                  'text-green-500': transaction.status === 'Winner',
                  'text-red-500': transaction.status === 'Loser',
                }"
              >
                {{ transaction.status }}
              </span>
          </td>
        </tr>
        </tbody>
      </table>

      <div class="flex justify-between items-center mt-4">
        <button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="bg-gray-800 px-4 py-2 rounded-lg text-gray-400 hover:bg-gray-700"
        >
          Previous
        </button>
        <span class="text-gray-400"
        >Page {{ currentPage }} of {{ totalPages }}</span
        >
        <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="bg-gray-800 px-4 py-2 rounded-lg text-gray-400 hover:bg-gray-700"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>
