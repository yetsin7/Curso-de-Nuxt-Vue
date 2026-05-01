<script setup>
const route = useRoute()
</script>

<template>
  <article>
    <h1>Producto dinamico</h1>
    <p>Slug actual: {{ route.params.slug }}</p>
  </article>
</template>
