<script setup>
const emit = defineEmits(['agregar'])
defineProps({ nombre: String })
</script>

<template>
  <button @click="emit('agregar')">Agregar {{ nombre }}</button>
</template>
