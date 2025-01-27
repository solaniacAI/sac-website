<template>
  <div>
    <canvas ref="canvas" :width="size" :height="size" :style="canvasStyle"></canvas>
  </div>
</template>

<script setup>
import {onMounted, ref, computed} from 'vue';

// Props
const props = defineProps({
  walletAddress: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 100,
  },
});

// Refs
const canvas = ref(null);

// Computed style for canvas
const canvasStyle = computed(() => ({
  backgroundColor: '#f0f0f0',
  borderRadius: '30%',
  padding: '4px',
  display: 'block',
}));

// Function to generate a color from the wallet address
function getColorFromAddress(address) {
  const hash = address?.slice(2, 8);
  return `#${hash}`;
}

// Function to generate the identicon pattern
function generateIdenticon(ctx, address, size) {
  const color = getColorFromAddress(address);
  const squareSize = size / 5;
  const middleIndex = 2;

  // Loop to create the 5x5 grid
  for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
      // Mirroring the pattern on both sides of the grid
      if (x <= middleIndex) {
        const hashChar = parseInt(address[x * 5 + y], 16);
        if (hashChar % 2 === 0) {
          ctx.fillStyle = color;
          ctx.fillRect(x * squareSize, y * squareSize, squareSize, squareSize);
          ctx.fillRect((4 - x) * squareSize, y * squareSize, squareSize, squareSize); // Mirror
        }
      }
    }
  }
}

onMounted(() => {
  if (canvas.value) {
    const ctx = canvas.value.getContext('2d');
    ctx.clearRect(0, 0, props?.size, props?.size); // Clear canvas
    generateIdenticon(ctx, props?.walletAddress, props?.size);
  }
});
</script>

<style scoped>
/* No additional styles needed */
</style>
