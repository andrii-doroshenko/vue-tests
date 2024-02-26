<script setup>
import { ref } from "vue";

const count = ref(0);

const increment = () => {
  count.value++;
};

const reset = () => {
  count.value = 0;
};
</script>

<template>
  <div class="section">
    <div class="counter">
      <button class="btn" @click="increment">increment</button>
      <button class="btn" @click="reset">reset</button>
      <p>Count: {{ count }}</p>
    </div>
  </div>
</template>
