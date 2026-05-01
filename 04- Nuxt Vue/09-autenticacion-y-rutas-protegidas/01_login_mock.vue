<script setup>
import { ref } from 'vue'
const email = ref('')
const autenticado = ref(false)
function login() { if (email.value) autenticado.value = true }
</script>
<template><section><input v-model="email" type="email" placeholder="Correo" /><button @click="login">Entrar</button><p v-if="autenticado">Sesion iniciada</p></section></template>
