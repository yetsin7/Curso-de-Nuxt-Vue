<script setup>
import { ref } from 'vue'
const categoria = ref('todos')
</script>
<template><select v-model="categoria"><option value="todos">Todos</option><option value="cursos">Cursos</option><option value="plantillas">Plantillas</option></select></template>
