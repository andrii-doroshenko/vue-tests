<script setup>
import { data } from "../../data/data";
import { ref } from "vue";
import draggable from "vuedraggable";
import UserCard from "@/components/UserCard.vue";

const users = ref(data.users);
const dragging = ref(false);
</script>

<template>
  <h2 class="text-orange-900">Drag and Drop Page</h2>
  <div
    id="app"
    class="min-height-screen flex items-center justify-center bg-gray-200"
  >
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
        <UserCard :element="element" />
      </template>
      <!-- <template #item="{ element, index }">
        <li
          :key="element.id"
          class="flex cursor-move items-center justify-between rounded-lg bg-white p-4 shadow"
        >
          <div class="flex items-center">
            <img
              class="h-10 w-10 rounded-full"
              :src="element.avatar"
              :alt="element.name"
            />
            <p class="ml-2 font-sans font-semibold tracking-wide text-gray-700">
              {{ element.name }}
            </p>
          </div>

          <div class="flex">
            <button
              aria-label="Edit user"
              @click="onEdit(element)"
              class="button-default"
            >
              edite
            </button>
            <button
              aria-label="Delete user"
              @click="onDelete(element)"
              class="button-default"
            >
              delete
            </button>
          </div>
        </li>
      </template> -->
    </draggable>
  </div>
</template>
