<script setup>
import { ref, defineProps, watch } from "vue";

const list = ref(["Javascript", "Html", "Css"]);

const props = defineProps({
  toDo: Number,
});

const todoData = ref(null);
const toDoRef = ref(props.toDo);

async function fetchData() {
  todoData.value = null;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${toDoRef.value}`,
  );
  todoData.value = await res.json();
}

fetchData();

watch(toDoRef, fetchData);
</script>

<template>
  <slot>
    <div class="space-y-5">
      <p>Завдання: {{ toDoRef }}</p>
      <!-- Використовуємо toDoRef замість props.toDo -->
      <button class="btn" @click="toDoRef++" :disabled="!todoData">
        Отримати наступне завдання
      </button>
      <p v-if="!todoData">Завантажується...</p>
      <pre v-else>{{ todoData || "Реквізити ще не передані" }}</pre>
    </div>
    <div>
      <ul>
        <li v-for="item in list" :key="item">{{ item }}</li>
      </ul>
    </div>
  </slot>
</template>
