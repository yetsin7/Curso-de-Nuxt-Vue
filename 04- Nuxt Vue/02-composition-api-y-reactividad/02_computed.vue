<script setup>
import { computed, ref } from 'vue'
const precio = ref(29)
const cantidad = ref(2)
const total = computed(() => precio.value * cantidad.value)
</script>

<template>
  <section>
    <p>Total: {{ total }} USD</p>
    <button @click="cantidad++">Agregar unidad</button>
  </section>
</template>
