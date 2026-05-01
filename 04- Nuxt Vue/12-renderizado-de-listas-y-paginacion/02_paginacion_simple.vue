<script setup>
import { ref } from 'vue'
const pagina = ref(1)
</script>
<template><section><p>Pagina actual: {{ pagina }}</p><button @click="pagina++">Siguiente</button></section></template>
