<script setup>
const cart = useCartStore()
</script>

<template>
  <aside>
    <h2>Carrito</h2>
    <ul>
      <li v-for="item in cart.items" :key="item.id">{{ item.nombre }} x {{ item.cantidad }}</li>
    </ul>
    <p>Total: {{ cart.total }}</p>
  </aside>
</template>
