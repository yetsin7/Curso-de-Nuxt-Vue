<script setup>
import { ref } from 'vue'
const nombre = ref('')
const mensaje = ref('')
</script>
<template><form><input v-model="nombre" type="text" placeholder="Nombre" /><textarea v-model="mensaje" placeholder="Mensaje"></textarea></form></template>
