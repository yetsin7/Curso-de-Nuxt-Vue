<script setup>
import { computed, ref } from 'vue'
const termino = ref('')
const productos = ref(['Curso HTML', 'Curso CSS', 'Curso JavaScript', 'Curso Nuxt'])
const filtrados = computed(() => productos.value.filter((item) => item.toLowerCase().includes(termino.value.toLowerCase())))
</script>

<template>
  <section>
    <input v-model="termino" type="text" placeholder="Buscar curso" />
    <ul><li v-for="item in filtrados" :key="item">{{ item }}</li></ul>
  </section>
</template>
