<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import ShoppingForm from "./components/ShoppingForm.vue";
import Counter from "./components/Counter.vue";

import { ref } from "vue";
</script>

<template>
  <header>
    <p>Header</p>
  </header>

  <main>
    <Counter />
    <ShoppingForm />
  </main>
</template>

<style>
.titleClass {
  color: red;
}

.btn {
  cursor: pointer;
  color: red;
}
</style>
