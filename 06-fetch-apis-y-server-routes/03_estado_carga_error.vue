<script setup>
const { data, pending, error } = await useFetch('/api/productos')
</script>

<template>
  <p v-if="pending">Cargando productos locales...</p>
  <p v-else-if="error">Algo salio mal.</p>
  <pre v-else>{{ data }}</pre>
</template>
