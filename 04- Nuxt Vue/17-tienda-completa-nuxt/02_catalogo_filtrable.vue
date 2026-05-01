<script setup>
const { data } = await useFetch('/api/productos')
</script>
<template><section><h1>Catalogo filtrable</h1><ul><li v-for="item in data" :key="item.id">{{ item.nombre }}</li></ul></section></template>
