<script setup>
import ProductCard from './01_ProductCard.vue'
const productos = [
  { id: 1, nombre: 'Curso HTML', precio: 19 },
  { id: 2, nombre: 'Curso CSS', precio: 24 },
]
</script>

<template>
  <section>
    <ProductCard v-for="item in productos" :key="item.id" :nombre="item.nombre" :precio="item.precio" />
  </section>
</template>
