<script setup>
import { ref } from "vue";

const checkedNames = ref([]);
</script>

<template>
  <div class="container">
    <div>Вибрані імена: {{ checkedNames }}</div>

    <div class="wrapper">
      <input
        type="checkbox"
        id="olha"
        value="Ольга"
        v-model.lazy="checkedNames"
      />
      <label for="olha">Ольга</label>

      <input type="checkbox" id="dariia" value="Дарія" v-model="checkedNames" />
      <label for="dariia">Дарія</label>

      <input
        type="checkbox"
        id="victoria"
        value="Вікторія"
        v-model="checkedNames"
      />
      <label for="victoria">Вікторія</label>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  gap: 10px;
}
</style>
