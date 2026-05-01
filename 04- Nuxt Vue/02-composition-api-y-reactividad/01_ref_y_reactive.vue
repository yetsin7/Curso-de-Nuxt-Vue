<script setup>
import { reactive, ref } from 'vue'
const contador = ref(1)
const producto = reactive({ nombre: 'Curso Nuxt', precio: 29 })
</script>

<template>
  <section>
    <p>Contador: {{ contador }}</p>
    <button @click="contador++">Sumar</button>
    <h2>{{ producto.nombre }}</h2>
    <p>{{ producto.precio }} USD</p>
  </section>
</template>
