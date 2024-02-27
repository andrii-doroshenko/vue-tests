<script setup>
import ShoppingForm from "./components/ShoppingForm.vue";
import Counter from "./components/Counter.vue";
import InputBinding from "./components/InputBinding.vue";
import DragAndDrop from "./components/DragAndDrop.vue";
</script>

<template>
  <header>
    <nav>
      <a href="/">Home</a>
      <a href="/draganddrop">Drag</a>
    </nav>
  </header>

  <main>
    <div class="wrapper space-y-10">
      <InputBinding />
      <Counter />
      <ShoppingForm />
      <DragAndDrop />
    </div>
  </main>
</template>
