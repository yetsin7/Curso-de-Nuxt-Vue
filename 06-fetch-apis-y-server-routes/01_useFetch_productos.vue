<script setup>
const { data, pending, error } = await useFetch('https://fakestoreapi.com/products?limit=4')
</script>

<template>
  <p v-if="pending">Cargando...</p>
  <p v-else-if="error">Error al cargar productos.</p>
  <ul v-else>
    <li v-for="item in data" :key="item.id">{{ item.title }}</li>
  </ul>
</template>
