<script setup>
import { ref, watch } from 'vue'
const termino = ref('')
watch(termino, (nuevo) => {
  console.log('Nuevo termino:', nuevo)
})
</script>

<template>
  <input v-model="termino" type="text" placeholder="Escribe para probar watch" />
</template>
