<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './views/NavbarView.vue'
import LoginNav from './views/LoginNavView.vue'
</script>

<template>
  <Navbar />
  <!-- <LoginNav></LoginNav> -->
  <RouterView />
</template>

<style scoped>

</style>
