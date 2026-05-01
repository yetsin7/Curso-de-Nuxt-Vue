<script setup>
defineProps({ nombre: String, precio: Number })
</script>

<template>
  <article class="card">
    <h2>{{ nombre }}</h2>
    <p>{{ precio }} USD</p>
  </article>
</template>

<style scoped>
.card { padding: 20px; border: 1px solid #d7deea; border-radius: 16px; }
</style>
