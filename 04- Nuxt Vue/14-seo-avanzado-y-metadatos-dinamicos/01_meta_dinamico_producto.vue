<script setup>
const producto = { nombre: 'Curso Nuxt Vue', descripcion: 'Ruta completa de estudio' }
useSeoMeta({ title: producto.nombre, description: producto.descripcion })
</script>
<template><article><h1>{{ producto.nombre }}</h1><p>{{ producto.descripcion }}</p></article></template>
