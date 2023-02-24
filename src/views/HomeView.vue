<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import {  onMounted } from 'vue'
import {useRoute} from "vue-router";
const route = useRoute();
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
