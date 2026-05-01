<script setup>
const cart = useCartStore()
const producto = { id: 1, nombre: 'Curso Nuxt Vue', precio: 39 }
</script>
<template><article><h1>{{ producto.nombre }}</h1><button @click="cart.agregar(producto)">Agregar</button></article></template>
