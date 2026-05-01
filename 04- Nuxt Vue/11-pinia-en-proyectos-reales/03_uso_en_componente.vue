<script setup>
const filtros = useFiltersStore()
</script>
<template><input v-model="filtros.termino" type="text" placeholder="Buscar" /></template>
