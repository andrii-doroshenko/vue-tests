<script setup>
import { googleTokenLogin } from "vue3-google-login";

const emit = defineEmits(["googleUserRegistered"]);

const googleSignIn = async () => {
  try {
    const googleUserData = await googleTokenLogin();
    emit("googleUserRegistered", googleUserData);
  } catch (error) {
    console.error("Error signing in with Google:", error);
  }
};
</script>

<template>
  <button
    @click="googleSignIn"
    type="button"
    class="mx-auto mb-9 flex w-full items-center rounded-lg border-none bg-[#15CB76] p-2 text-center text-lg font-bold hover:bg-[#1abb70]"
  >
    <span class="mr-[54px]"><img src="/google-img.png" alt="img" /></span>
    Sign up with Google
  </button>
</template>
