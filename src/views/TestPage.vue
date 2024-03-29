<script setup>
import { ref, reactive } from "vue";
import apiClient from "@/services/api.js";
import AccPreviewVue from "@/components/AccPreviews.vue";
import { storeToRefs } from "pinia";

const token = import.meta.env.VITE_API_TOKEN;

const state = reactive({
  loading: false,
  cvId: null,
  pdfBlob: null,
});

const fetchData = async () => {
  state.loading = true;
  try {
    const response = await apiClient.get(`/cvs/generate/${state.cvId}`, {
      responseType: "blob",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    state.pdfBlob = response.data;
  } catch (error) {
    console.error(error.message);
  } finally {
    state.loading = false;
    state.cvId = null;
  }
};

const handleDownloadPdf = () => {
  if (state.pdfBlob) {
    const url = URL.createObjectURL(state.pdfBlob);
    window.open(url, "_blank");
  }
};
</script>

<template>
  <h1>Test Page</h1>

  <ul>
    <AccPreviewVue />
  </ul>

  <div class="mx-auto text-center">
    <h3 v-if="state.loading">Loading...</h3>
    <form
      v-else
      @submit.prevent="fetchData"
      class="mx-auto mb-9 flex w-[350px] flex-col items-center justify-center space-y-5"
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

    <button v-if="state.pdfBlob" @click="handleDownloadPdf" class="btn">
      Download PDF
    </button>
  </div>
</template>
