<script setup>
const nombre = 'Curso de Nuxt Vue'
const visible = true
const modulos = ['Vue', 'Nuxt', 'Pinia']
</script>

<template>
  <section>
    <h1>{{ nombre }}</h1>
    <p v-if="visible">Este texto usa renderizado condicional.</p>
    <ul>
      <li v-for="modulo in modulos" :key="modulo">{{ modulo }}</li>
    </ul>
  </section>
</template>
