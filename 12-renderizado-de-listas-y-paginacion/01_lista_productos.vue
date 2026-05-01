<script setup>
const productos = ['Curso HTML', 'Curso CSS', 'Curso JS']
</script>
<template><ul><li v-for="item in productos" :key="item">{{ item }}</li></ul></template>
