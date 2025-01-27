<template>
  <div class="cursor-pointer" @click="setOpenModal">
    <slot />
  </div>
  <div
    v-if="isOpen"
    class="fixed top-0 left-0 z-50 w-full h-screen backdrop-blur-sm bg-black/20 flex items-center justify-center"
  >
    <form
      v-if="!response.active"
      @submit="onSubmit"
      ref="target"
      class="flex flex-col justify-center items-center max-w-96 min-h-20 bg-white rounded-xl py-7 px-4 text-center space-y-3"
    >
      <h2 class="font-semibold">Join the Waitlist! 🎉</h2>
      <p class="text-sm px-2">
        Get exclusive early access to Solaniac and special offers. Don’t miss
        out—secure your spot now!
      </p>
      <div class="flex flex-col items-start w-full gap-1">
        <input
          v-model="value"
          type="text"
          class="w-full border p-1.5 rounded-md text-sm placeholder:font-light"
          placeholder="info@solaniac.xyz"
        />
        <span v-if="errors" class="text-red-500 text-xs text-left">{{
          errors
        }}</span>
      </div>
      <button
        :disabled="isLoading"
        class="text-sm bg-black w-full py-1.5 flex items-center justify-center gap-2 text-white rounded-md"
      >
        Join
        <Icon
          v-if="!isLoading"
          color="#fff"
          size="20px"
          name="material-symbols-light:rocket-launch-outline"
        />
        <Icon
          v-else
          color="#fff"
          size="20px"
          name="material-symbols-light:clock-loader-20"
        />
      </button>
    </form>
    <div
      v-else
      class="flex flex-col justify-center items-center max-w-96 min-h-20 bg-white rounded-xl py-7 px-4 text-center space-y-3"
    >
      <div>
        <h2 class="font-semibold">Congrats!</h2>
        <p class="px-3">{{ response?.msg?.message }}</p>
        <div class="mb-3 text-sm">
          join our channel on
          <nuxt-link
            class="underline text-blue-600 font-bold"
            to="https://t.me/solaniacAI"
            >Telegram</nuxt-link
          >
        </div>
      </div>
      <button
        @click="resetAll"
        class="text-sm bg-black w-full py-1.5 text-white rounded-md"
      >
        close
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useField, useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const config = useRuntimeConfig();

const response = ref<any>({
  active: false,
  msg: "",
});
const isOpen = ref(false);
const target = ref(null);
const isLoading = ref(false);

const formSchema = toTypedSchema(
  z.object({
    email: z.string().email({ message: "Invalid email address" }),
  })
);

const { handleSubmit } = useForm({
  validationSchema: formSchema,
});

const { value, errorMessage: errors } = useField("email");

const onSubmit = handleSubmit((values) => {
  isLoading.value = true;
  useFetch("/waitlist/join", {
    baseURL: "https://solaniac.xyz/api/v1",
    body: values,
    method: "post",
  })
    .then((res) => {
      if (res.status.value == "success") {
        response.value.active = true;
        response.value.msg = res.data.value;
      }
    })
    .finally(() => {
      isLoading.value = false;
    });
});

const resetAll = () => {
  value.value = "";
  response.value.active = false;
  response.value.msg = "";
  isOpen.value = false;
};

// open modal
const setOpenModal = () => {
  isOpen.value = !isOpen.value;
};

onClickOutside(target, () => {
  if (isOpen.value) setOpenModal();
});
</script>
