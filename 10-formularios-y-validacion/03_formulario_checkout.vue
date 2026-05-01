<script setup>
import { reactive } from 'vue'
const form = reactive({ nombre: '', correo: '', ciudad: '' })
</script>
<template><form><input v-model="form.nombre" placeholder="Nombre" /><input v-model="form.correo" placeholder="Correo" /><input v-model="form.ciudad" placeholder="Ciudad" /></form></template>
