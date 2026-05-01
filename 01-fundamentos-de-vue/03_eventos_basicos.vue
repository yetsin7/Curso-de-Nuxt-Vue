<script setup>
import { ref } from 'vue'
const clicks = ref(0)
</script>

<template>
  <section>
    <h1>Eventos basicos</h1>
    <p>Clicks: {{ clicks }}</p>
    <button @click="clicks++">Haz clic</button>
  </section>
</template>
