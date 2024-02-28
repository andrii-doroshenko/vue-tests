<script setup>
const props = defineProps(["element"]);

const onEdit = (user) => {
  alert(`Editing ${user.name}`);
};

const onDelete = (user) => {
  alert(`Deleting ${user.name}`);
};
</script>

<template>
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
        edit
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
</template>
