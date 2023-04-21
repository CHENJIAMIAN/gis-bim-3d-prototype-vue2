<script setup lang="ts"></script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: black;
  font-weight: bold;
  text-decoration: none;
  border-bottom: 2px solid black;
}
</style>
