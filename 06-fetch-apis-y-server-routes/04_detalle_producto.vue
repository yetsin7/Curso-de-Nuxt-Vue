<script setup>
const route = useRoute()
const { data } = await useFetch(`/api/productos`)
const producto = computed(() => data.value?.find((item: any) => String(item.id) === String(route.params.id)))
</script>

<template>
  <section>
    <h1>{{ producto?.nombre }}</h1>
    <p>{{ producto?.precio }} USD</p>
  </section>
</template>
