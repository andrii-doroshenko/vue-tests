<script setup></script>

<template>
  <header>
    <nav class="bg-orange-300">
      <router-link to="/">Home</router-link>
      <router-link to="/draggpage">Drag Page</router-link>
      <router-link to="/test">Testing</router-link>
      <router-link to="/login">Login</router-link>
    </nav>
  </header>

  <main>
    <div class="wrapper space-y-10 px-4">
      <router-view />
    </div>
  </main>
</template>

<style scoped>
a {
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
</style>
