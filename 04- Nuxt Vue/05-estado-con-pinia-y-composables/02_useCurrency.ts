export function useCurrency(valor: number) {
  return new Intl.NumberFormat('es-NI', {
    style: 'currency',
    currency: 'USD',
  }).format(valor)
}
