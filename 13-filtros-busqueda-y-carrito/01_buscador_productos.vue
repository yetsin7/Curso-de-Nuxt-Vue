<script setup>
import { computed, ref } from 'vue'
const termino = ref('')
const productos = ['Curso HTML', 'Curso CSS', 'Curso Nuxt']
const filtrados = computed(() => productos.filter((item) => item.toLowerCase().includes(termino.value.toLowerCase())))
</script>
<template><section><input v-model="termino" type="text" /><ul><li v-for="item in filtrados" :key="item">{{ item }}</li></ul></section></template>
