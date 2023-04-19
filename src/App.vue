<script setup lang="ts">
  /* 
defineProps<{
  msg: string;
}>();
*/
</script>

<template>
  <div id="app">
    <header class="p-5 flex gap-5 bg-gray-200 text-gray-600 font-bold">
      <router-link to="/">🎈地图显示</router-link>
      <router-link to="/mc">🎇地图配置</router-link>
      <router-link to="/am">🧨告警管理</router-link>
      <router-link to="/mm">🎉模型管理</router-link>
      <router-link to="/lf">🎃管线潮流</router-link>
    </header>

    <div class="app-content">
      <router-view />
    </div>
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
