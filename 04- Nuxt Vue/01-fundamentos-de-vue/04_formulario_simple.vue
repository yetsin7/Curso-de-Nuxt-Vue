<script setup>
import { ref } from 'vue'
const email = ref('')
</script>

<template>
  <form>
    <label for="email">Correo</label>
    <input id="email" v-model="email" type="email" />
    <p>Valor actual: {{ email }}</p>
  </form>
</template>
