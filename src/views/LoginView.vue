<script setup>
import { reactive } from "vue";
import GoogleAuthVue from "@/components/GoogleAuth.vue";

const formData = reactive({
  username: "",
  password: "",
});

const login = () => {
  formData.username = "";
  formData.password = "";
};
</script>

<template>
  <div class="section flex h-screen items-center justify-center">
    <div class="space-y-[35px]">
      <form
        @submit.prevent="login"
        class="flex max-w-[536px] flex-col space-y-[52px] rounded-md border-gray-300 bg-gray-100 p-[24px] pe-[60px] text-gray-900"
      >
        <h1 class="text-[50px] font-semibold">Sign In</h1>
        <div class="space-y-2">
          <label
            for="email"
            class="flex items-center justify-between text-gray-700"
            >Email</label
          >
          <input
            id="email"
            type="email"
            v-model.trim="formData.password"
            class="h-[38px] w-80 rounded-md border border-gray-400 bg-gray-50 p-2"
          />

          <label
            for="email"
            class="flex items-center justify-between text-gray-700"
            >Password</label
          >
          <input
            id="psw"
            type="password"
            v-model.trim="formData.username"
            class="h-[38px] w-80 rounded-md border border-gray-400 bg-gray-50 p-2"
          />
        </div>

        <div class="form__buttons space-x-[16px]">
          <button class="btn" type="submit">Sign In</button>
          <button class="btn" type="button">Register</button>
        </div>

        <div class="form__loginwith">
          <p>or</p>
          <div>login with Facebook</div>
          <div>login with Google</div>
          <div>login with Apple</div>
        </div>
      </form>

      <GoogleAuthVue />
    </div>
  </div>
</template>
