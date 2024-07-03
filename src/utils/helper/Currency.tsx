const formatCurrency = (value: number | undefined) => {
  if (value === undefined) return ''
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value)
}

export default formatCurrency
