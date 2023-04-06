<script setup lang="ts">
    /* 
defineProps<{
  msg: string;
}>();
*/
</script>

<template>
    <div id="app" class="">
        <header class="p-5 flex gap-5">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </header>
        
        <div class="app-content">     
          <router-view />
        </div>
    </div>
</template>

<style scoped></style>
