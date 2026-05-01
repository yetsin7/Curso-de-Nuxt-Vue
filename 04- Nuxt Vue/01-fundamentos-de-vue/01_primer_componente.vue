<script setup>
const titulo = 'Primer componente Vue'
const descripcion = 'Un componente junta estructura, logica y estilo de forma ordenada.'
</script>

<template>
  <section class="card">
    <h1>{{ titulo }}</h1>
    <p>{{ descripcion }}</p>
  </section>
</template>

<style scoped>
.card { padding: 24px; border: 1px solid #d7deea; border-radius: 16px; }
</style>
