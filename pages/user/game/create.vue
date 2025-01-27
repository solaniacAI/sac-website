<script setup lang="ts">
import {ref} from 'vue';
import {z} from 'zod';

// Define Zod schema
const gameSchema = z.object({
  displayName: z.string().min(1, "Display Name is required"),
  platform: z.enum(['Steam', 'Xbox', 'Console'], {
    errorMap: () => ({message: "Please select a valid platform"})
  }),
  game: z.enum(['Pubg', 'CS-GO'], {
    errorMap: () => ({message: "Please select a valid game"})
  }),
  gameId: z.string().min(1, "Game ID is required"),
  totalPlayers: z.string().regex(/^\d+$/, "Total Players must be a number"),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/, "Price must be a valid number"),
  description: z.string().min(1, "Description is required")
});

const selectedPlatform = ref('Select a platform');
const isPlatformOpen = ref(false);
const platforms = [
  {value: 'steam', label: 'Steam'},
  {value: 'xbox', label: 'Xbox'},
  {value: 'console', label: 'Console'}
];

const selectedGame = ref('Select a game');
const isGameOpen = ref(false);
const games = [
  {value: 'pubg', label: 'Pubg'},
  {value: 'cs', label: 'CS-GO'}
];

const gameId = ref('');
const displayName = ref('');
const totalPlayers = ref('');
const price = ref('');
const description = ref('');

const errors = ref({
  displayName: '',
  platform: '',
  game: '',
  gameId: '',
  totalPlayers: '',
  price: '',
  description: ''
});

function selectPlatform(platform: any) {
  selectedPlatform.value = platform.label;
  isPlatformOpen.value = false;
  errors.value.platform = ''; // Clear the error when the platform is selected
}

function selectGame(game: any) {
  selectedGame.value = game.label;
  isGameOpen.value = false;
  errors.value.game = ''; // Clear the error when the game is selected
}

function validateForm(e: any) {
  e.preventDefault();
  const result = gameSchema.safeParse({
    displayName: displayName.value,
    platform: selectedPlatform.value !== 'Select a platform' ? selectedPlatform.value : '',
    game: selectedGame.value !== 'Select a game' ? selectedGame.value : '',
    gameId: gameId.value,
    totalPlayers: totalPlayers.value,
    price: price.value,
    description: description.value
  });

  if (!result.success) {
    result.error.errors.forEach((err) => {
      errors.value[err.path[0]] = err.message;
    });
  } else {
    Object.keys(errors.value).forEach((key) => {
      errors.value[key] = '';
    });
  }
}

definePageMeta({
  middleware: ["is-required-token"],
});
</script>


<template>
  <NuxtLayout name="dashboard">
    <div class="min-h-screen flex items-center justify-center">
      <form @submit="validateForm" class="p-8 rounded-lg  w-full container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex flex-col items-center justify-center">
            <Icon name="grommet-icons:gamepad" size="150px" class="text-white"/>
          </div>
          <div>
            <div class="mb-4">
              <label class="block text-gray-400 text-sm font-bold mb-2">Display Name</label>
              <input
                  v-model="displayName"
                  type="text"
                  placeholder="Name your game"
                  class="w-full bg-[var(--bg-game)] text-white py-2 px-4 rounded-lg focus:outline-none border border-[var(--border-color)]"
              />
              <p v-if="errors.displayName" class="text-red-500 text-sm mt-1">{{ errors.displayName }}</p>
            </div>

            <!-- Platform Dropdown -->
            <div class="mb-4 relative">
              <label class="block text-gray-400 text-sm font-bold mb-2">Platform</label>
              <button @click="isPlatformOpen = !isPlatformOpen"
                      class="w-full bg-[var(--bg-game)] text-white py-2 px-4 rounded-lg focus:outline-none border border-[var(--border-color)] flex justify-between items-center">
                {{ selectedPlatform }}
                <Icon :name="isPlatformOpen ? 'mdi:chevron-up' : 'mdi:chevron-down'" size="20px" class="ml-2"/>
              </button>
              <ul v-if="isPlatformOpen"
                  class="absolute w-full bg-[var(--bg-game)] text-white mt-1 overflow-hidden rounded-lg shadow-lg z-10">
                <li v-for="platform in platforms" :key="platform.value" @click="selectPlatform(platform)"
                    class="py-2 px-4 hover:bg-gray-700 cursor-pointer">
                  {{ platform.label }}
                </li>
              </ul>
              <p v-if="errors.platform" class="text-red-500 text-sm mt-1">{{ errors.platform }}</p>
            </div>

            <!-- Game Dropdown -->
            <div class="mb-4 relative">
              <label class="block text-gray-400 text-sm font-bold mb-2">Game</label>
              <button @click="isGameOpen = !isGameOpen"
                      class="w-full bg-[var(--bg-game)] text-white py-2 px-4 rounded-lg focus:outline-none border border-[var(--border-color)] flex justify-between items-center">
                {{ selectedGame }}
                <Icon :name="isGameOpen ? 'mdi:chevron-up' : 'mdi:chevron-down'" size="20px" class="ml-2"/>
              </button>
              <ul v-if="isGameOpen"
                  class="absolute w-full bg-[var(--bg-game)] text-white mt-1 overflow-hidden rounded-lg shadow-lg z-10">
                <li v-for="game in games" :key="game.value" @click="selectGame(game)"
                    class="py-2 px-4 hover:bg-gray-700 cursor-pointer">
                  {{ game.label }}
                </li>
              </ul>
              <p v-if="errors.game" class="text-red-500 text-sm mt-1">{{ errors.game }}</p>
            </div>

            <!-- Game ID Input -->
            <div class="mb-4">
              <label class="block text-gray-400 text-sm font-bold mb-2">Game ID</label>
              <input
                  v-model="gameId"
                  type="text"
                  data-maska="Z-z" data-maska-tokens="Z:[A-Z]|z:[a-z]:multiple"
                  placeholder="Enter game ID"
                  class="w-full bg-[var(--bg-game)] text-white py-2 px-4 rounded-lg focus:outline-none border border-[var(--border-color)]"
              />
              <p v-if="errors.gameId" class="text-red-500 text-sm mt-1">{{ errors.gameId }}</p>
            </div>

            <div class="mb-4">
              <label class="block text-gray-400 text-sm font-bold mb-2">Total Players</label>
              <input
                  v-model="totalPlayers"
                  v-maska
                  data-maska="###########"
                  placeholder="10 player"
                  class="w-full bg-[var(--bg-game)] text-white py-2 px-4 rounded-lg focus:outline-none border border-[var(--border-color)]"
              />
              <p v-if="errors.totalPlayers" class="text-red-500 text-sm mt-1">{{ errors.totalPlayers }}</p>
            </div>

            <div class="mb-4">
              <label class="block text-gray-400 text-sm font-bold mb-2">Price</label>
              <input
                  v-model="price"
                  type="text"
                  v-maska
                  data-maska="###########"
                  placeholder="10 TON"
                  class="w-full bg-[var(--bg-game)] text-white py-2 px-4 rounded-lg focus:outline-none border border-[var(--border-color)]"
              />
              <p v-if="errors.price" class="text-red-500 text-sm mt-1">{{ errors.price }}</p>
            </div>

            <div class="mb-4">
              <label class="block text-gray-400 text-sm font-bold mb-2">Description</label>
              <textarea
                  v-model="description"
                  placeholder="Describe the idea behind your NFT and explain how it stands out from the rest."
                  class="w-full bg-[var(--bg-game)] text-white py-2 px-4 rounded-lg focus:outline-none border border-[var(--border-color)] h-24"
              ></textarea>
              <p v-if="errors.description" class="text-red-500 text-sm mt-1">{{ errors.description }}</p>
            </div>
            <hr class="mb-4 border-[var(--border-color)]">
            <div class="text-gray-400 text-sm">
              <p>Be sure to review all the details carefully before proceeding, as the data will be permanently recorded
                and cannot be modified later.</p>
              <p>Remember, creating a game through this platform offers players a unique experience and allows them to
                engage with your game in innovative ways.</p>
            </div>
            <button type="submit"
                    class="bg-[var(--bg-game)] hover:bg-[var(--main-color)] text-white font-bold h-10 py-2 px-4 rounded-md w-full mt-4">
              Create game
            </button>
          </div>
        </div>
      </form>
    </div>
  </NuxtLayout>
</template>
