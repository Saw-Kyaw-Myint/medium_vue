<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './views/NavbarView.vue'
import LoginNav from './views/LoginNavView.vue'
import { ref, onMounted,watchEffect } from 'vue';
import axios from "axios";

let Authuser=ref();
let Auth=ref(false);


watchEffect(() => {
  if (localStorage.hasOwnProperty('auth')) {
   Auth.value=true;
   console.log(Auth.value);
  }
});

</script>

<template>
  <LoginNav v-if="Auth"></LoginNav>
  <Navbar v-else />
  <RouterView />
</template>

<style scoped></style>
