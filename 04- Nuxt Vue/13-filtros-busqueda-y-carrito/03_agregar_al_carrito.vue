<script setup>
const cart = useCartStore()
const producto = { id: 1, nombre: 'Curso Nuxt', precio: 39 }
</script>
<template><button @click="cart.agregar(producto)">Agregar al carrito</button></template>
