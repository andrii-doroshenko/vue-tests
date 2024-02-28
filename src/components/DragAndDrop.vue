<script setup>
import { ref } from "vue";

import { useUsersStore } from "@/store/usersStor";
import { storeToRefs } from "pinia";
import draggable from "vuedraggable";
import UserCard from "@/components/UserCard.vue";

const store = useUsersStore();

const { users, newUsers } = storeToRefs(store);

const onDelete = (user) => {
  const confirmDelete = confirm(
    `Are you sure you want to delete ${user.name}?`,
  );
  if (confirmDelete) {
    store.deleteUser(user.id);
  }
};

const dragging = ref(false);
</script>

<template>
  <div class="section rounded-lg bg-gray-200 p-10">
    <div
      class="container mx-auto flex flex-col justify-center sm:flex-row sm:space-x-3"
    >
      <div class="w-full max-w-md text-center">
        <p class="mb-2 font-sans font-semibold tracking-wide text-gray-700">
          List 1
        </p>

        <draggable
          :list="users"
          group="people"
          @start="dragging = true"
          @end="dragging = false"
          item-key="id"
          tag="ul"
          filter=".button-default"
          class="w-full max-w-md space-y-3"
          ghost-class="moving-card"
          :animation="200"
        >
          <template #item="{ element, index }">
            <UserCard :element="element" :onDelete="onDelete" />
          </template>
        </draggable>
      </div>

      <div class="w-full max-w-md text-center">
        <p class="mb-2 font-sans font-semibold tracking-wide text-gray-700">
          List 2
        </p>

        <draggable
          :list="newUsers"
          group="people"
          @start="dragging = true"
          @end="dragging = false"
          item-key="id"
          tag="ul"
          filter=".button-default"
          class="w-full max-w-md space-y-3"
          ghost-class="moving-card"
          :animation="200"
        >
          <template #item="{ element, index }">
            <UserCard :element="element" :onDelete="onDelete" />
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>
