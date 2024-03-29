<script setup>
import { onMounted, reactive, ref } from "vue";
import apiClient from "@/services/api.js";

const token = import.meta.env.VITE_API_TOKEN;

const state = reactive({
  cvs: [],
});

onMounted(async () => {
  try {
    const { data } = await apiClient.get("cvs/all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!data?.status) {
      throw new Error("Status is not defined in API response");
    }

    state.cvs.push(...data.data.cvs);
  } catch (error) {
    console.log(error);
  }
});

const dateFormate = (dateStr) => {
  const dateObject = new Date(dateStr);
  const formattedDate = dateObject.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  return formattedDate;
};
</script>

<template>
  <ul class="grid grid-cols-2 justify-center gap-4 text-black">
    <li
      class="grid h-[417px] grid-cols-2 place-content-center gap-4 rounded-xl bg-[#F5F5F5]"
      v-for="cv in state.cvs"
      :key="cv.id"
    >
      <!-- <div class="max-w-[230px]" v-html="cv.html"></div> -->
      <div
        class="h-[328px] w-[230px] justify-self-center bg-slate-400 text-center"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas
        voluptatibus quibusdam autem molestias exercitationem ea asperiores
        facere ipsa repellendus fugiat quod laudantium maiores minima aspernatur
        nisi, quia nesciunt sunt!
      </div>
      <div class="space-y-4">
        <p class="text-2xl font-bold">UI UX Design CV</p>
        <p class="text-2xl font-bold text-[#9B9EB9]">
          {{ dateFormate(cv.updatedAt) }}
        </p>
        <div class="space-y-5 text-xl">
          <a class="block" href="#">Edit</a>
          <a class="block" href="#">Download PDF</a>
          <a class="block" href="#">Delete</a>
        </div>
      </div>
    </li>
  </ul>
</template>
