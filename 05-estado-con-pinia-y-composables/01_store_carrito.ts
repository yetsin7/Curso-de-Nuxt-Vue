export const useCartStore = defineStore('cart', {
  state: () => ({ items: [] as Array<{ id: number; nombre: string; precio: number; cantidad: number }> }),
  getters: {
    total: (state) => state.items.reduce((sum, item) => sum + item.precio * item.cantidad, 0),
  },
  actions: {
    agregar(producto: { id: number; nombre: string; precio: number }) {
      const existente = this.items.find((item) => item.id === producto.id)
      if (existente) existente.cantidad++
      else this.items.push({ ...producto, cantidad: 1 })
    },
  },
})
