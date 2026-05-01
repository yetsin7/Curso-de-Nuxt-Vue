<script setup>
import { computed, ref } from 'vue'
const email = ref('')
const valido = computed(() => email.value.includes('@'))
</script>
<template><section><input v-model="email" type="email" /><p>{{ valido ? 'Correo valido' : 'Correo invalido' }}</p></section></template>
