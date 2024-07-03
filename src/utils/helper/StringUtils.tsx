export const capitalizeNames = (name: string) => {
  if (!name) {
    return name
  }

  const names = name?.toLowerCase().split(' ')
  const newCapName = []

  for (const n of names) {
    newCapName.push(n.replace(n[0], n[0].toUpperCase()))
  }

  return newCapName.join(' ')
}
