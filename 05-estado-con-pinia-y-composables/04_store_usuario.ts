export const useUserStore = defineStore('user', {
  state: () => ({ nombre: '', autenticado: false }),
  actions: {
    login(nombre: string) {
      this.nombre = nombre
      this.autenticado = true
    },
    logout() {
      this.nombre = ''
      this.autenticado = false
    },
  },
})
