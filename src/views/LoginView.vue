<script setup>
import { reactive } from "vue";
import axios from "axios";
import GoogleAuthVue from "@/components/GoogleAuth.vue";

const formData = reactive({
  fullName: "",
  email: "",
  password: "",
});

const resetForm = () => {
  formData.fullName = "";
  formData.email = "";
  formData.password = "";
};

const register = async () => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/v1/users/register",
      formData,
    );
    console.log("Registration successful:", response.data);
    resetForm();
  } catch (error) {
    console.error("Error registering user:", error);
  }
};

const registerWithGoogle = async (googleUserData) => {
  try {
    // Отримайте дані користувача з об'єкту googleUserData, переданого з компонента GoogleAuthVue
    const { access_token } = googleUserData;

    const response = await axios.post(
      "http://localhost:3000/api/v1/auth/google",
      { access_token },
    );
    console.log("Registration successful with Google:", response.data);
    // Очистити форму після успішної реєстрації
    resetForm();
  } catch (error) {
    console.error("Error registering user with Google:", error);
  }
};
</script>

<template>
  <div class="section flex h-screen items-center justify-center">
    <div class="flex w-full">
      <div class="hidden basis-1/2 items-end bg-[#15CB76] xl:flex">
        <img
          src="/landing_img.png"
          class="w-full object-cover"
          alt="Women with note"
        />
      </div>
      <form
        @submit.prevent="register"
        class="mx-auto flex w-[400px] flex-col items-center space-y-9 border-gray-300 p-5 text-gray-900 caret-[#15CB76]"
      >
        <h1 class="text-center text-4xl font-semibold">Let's join us</h1>

        <GoogleAuthVue @googleUserRegistered="registerWithGoogle" />

        <p
          class="flex w-full items-center whitespace-nowrap text-center font-bold"
        >
          <span
            class="mr-4 inline-block h-[2px] w-full rounded-sm bg-[#E5EAF4]"
          ></span>
          Or, sign up with your email
          <span class="ml-4 inline-block h-[2px] w-full bg-[#E5EAF4]"></span>
        </p>

        <div class="w-full font-bold">
          <label
            for="fullName"
            class="mb-4 flex items-center justify-between text-gray-700"
            >Your name*</label
          >
          <input
            id="fullName"
            type="text"
            v-model.trim="formData.fullName"
            class="mb-6 w-full rounded-lg border border-gray-400 bg-gray-50 p-5"
          />

          <label
            for="email"
            class="mb-4 flex items-center justify-between text-gray-700"
            >Email address*</label
          >
          <input
            id="email"
            type="email"
            v-model.trim="formData.email"
            class="mb-6 w-full rounded-lg border border-gray-400 bg-gray-50 p-5"
          />

          <label
            for="psw"
            class="mb-4 flex items-center justify-between text-gray-700"
            >Password*</label
          >
          <input
            id="psw"
            type="password"
            v-model.trim="formData.password"
            class="mb-6 w-full rounded-lg border border-gray-400 bg-gray-50 p-5"
          />

          <div class="space-x-3">
            <input type="checkbox" name="terms" id="terms" />
            <label for="terms">Agree to terms & conditions</label>
          </div>
        </div>

        <button
          class="mx-auto mb-6 w-full rounded-lg border-none bg-[#15CB76] p-4 text-center text-lg font-bold hover:bg-[#1abb70]"
          type="submit"
        >
          Sign In
        </button>

        <div class="self-start">
          <p>
            Already have an account?<span
              ><router-link class="font-bold" to="/"
                >Sign in now</router-link
              ></span
            >
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
