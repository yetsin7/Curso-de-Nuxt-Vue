<script setup>
const route = useRoute()
</script>

<template>
  <section>
    <h1>Producto: {{ route.params.slug }}</h1>
    <p>Una ruta dinamica permite mostrar detalles segun el slug.</p>
  </section>
</template>
