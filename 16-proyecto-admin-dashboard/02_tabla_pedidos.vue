<script setup>
const pedidos = [{ id: 101, estado: 'pagado' }, { id: 102, estado: 'pendiente' }]
</script>
<template><table><tr><th>Pedido</th><th>Estado</th></tr><tr v-for="item in pedidos" :key="item.id"><td>{{ item.id }}</td><td>{{ item.estado }}</td></tr></table></template>
