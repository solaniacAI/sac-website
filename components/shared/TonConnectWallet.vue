<template>
  <button @click="openModal">
    {{ props.title }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTonConnectModal, useTonAddress } from "ton-ui-vue";
export default defineComponent({
  name: "TonConnectWallet",
  props: {
    title: {
      type: String,
      default: 'Connect'
    }
  },
  setup(props) {
    const { open, close, state } = useTonConnectModal();
    const address = useTonAddress()
    const openModal = () => {
      open();
    };
    onMounted(() => {
      console.log(state.value,'is state')
    })
    return {
      openModal,
      props
    };
  },
});
</script>

<style scoped></style>
