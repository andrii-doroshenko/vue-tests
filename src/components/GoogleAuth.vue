<script setup>
import { inject } from "vue";

const Vue3GoogleOauth = inject("Vue3GoogleOauth");

const login = () => {
  console.log("clicked");
};
</script>

<template>
  <h1 class="text-white">Is Initialized: {{ Vue3GoogleOauth.isInit }}</h1>

  <button
    type="button"
    @click="login"
    class="mx-auto flex w-[335px] items-center rounded-lg border-none bg-[#15CB76] p-2 text-center text-[19px] font-bold hover:bg-[#1abb70]"
  >
    <span class="mr-[54px]"><img src="/google-img.png" alt="img" /></span>
    Sign in with Google
  </button>
</template>
