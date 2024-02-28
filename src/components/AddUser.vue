<script setup>
import { useUsersStore } from "@/store/usersStor";
import { ref } from "vue";

const store = useUsersStore();
const newItem = ref("");

const handleAddUser = () => {
  if (!newItem.value) return;
  store.addUser(newItem.value);
  newItem.value = "";
};
</script>

<template>
  <div class="container border p-4">
    <form @submit.prevent="handleAddUser" class="add-item-form space-y-3">
      <input
        class="input-default"
        v-model.trim="newItem"
        type="text"
        placeholder="Add yor name"
      />
      <button type="submit" class="btn btn-primary">Add Item</button>
    </form>
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
</style>
