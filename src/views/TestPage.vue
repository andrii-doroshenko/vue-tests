<script setup>
import axios from "axios";
import { onMounted, ref, reactive } from "vue";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZUlkIjoxLCJpYXQiOjE3MTA4MzQ0NDcsImV4cCI6MTcxMzQyNjQ0N30.FPavhCMoSvfRXnEnIFdNpu9G9patyYSbqLhRVlkGbes";

const state = reactive({
  content: "",
  loading: false,
  cvId: null,
});

const fetchData = async () => {
  state.loading = true;
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/cvs/${state.cvId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    state.content = data.data.html;
  } catch (error) {
    console.error(error.message);
  } finally {
    state.loading = false;
    state.cvId = null;
  }
};
</script>

<template>
  <h1>Test Page</h1>

  <div class="mx-auto text-center">
    <h3 v-if="state.loading">Loading...</h3>
    <form
      v-else
      @submit.prevent="fetchData"
      class="mx-auto flex w-[350px] flex-col items-center justify-center space-y-5"
    >
      <label>Download cv by id</label>
      <input
        v-model="state.cvId"
        class="h-[38px] w-80 rounded-md border border-gray-400 bg-gray-50 p-2"
        type="number"
        name="cvId"
        placeholder="Put cv id here"
      />
      <button class="btn" :disabled="!state.cvId">DownloadCv</button>
    </form>
  </div>
  <div v-html="state.content" />
</template>
