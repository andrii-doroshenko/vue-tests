<script setup>
import { ref } from "vue";

const header = ref("Shopping List Form");

const items = ref([
  { id: 1, label: "Hats" },
  { id: 2, label: "Shoes" },
  { id: 3, label: "Tshirts" },
]);

const newItem = ref("");

const addItem = () => {
  if (!newItem.value) return;

  items.value.push({ id: items.value.length + 1, label: newItem.value.trim() });
  newItem.value = "";
};

const deleteItem = (index) => {
  items.value.splice(index, 1);
};
</script>

<template>
  <div class="container border p-4">
    <h1>{{ header }}</h1>
    <form @submit.prevent="addItem" class="add-item-form space-y-3">
      <input
        class="input-default"
        v-model.trim="newItem"
        type="text"
        placeholder="Add an Item"
      />
      <button type="submit" class="btn btn-primary">Add Item</button>
    </form>

    <ul class="list">
      <li class="item" v-for="({ id, label }, index) in items" :key="id">
        {{ label }}
        <span @click="deleteItem(index)" class="deleteIcon">&#128128;</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.item {
  font-weight: 600;
  position: relative;
  margin-top: 1rem;
  padding: 10px;
  border: 1px solid;
  border-radius: 10px;
  box-shadow: 0px 5px 3px 0px rgba(0, 0, 0, 0.2);
}
.deleteIcon {
  position: absolute;
  right: 10px;
  cursor: pointer;
  font-size: 1rem;

  transition: transform 200ms ease;
}

.deleteIcon:hover {
  transform: scale(1.3);
}
</style>
