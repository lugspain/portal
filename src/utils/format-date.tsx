const formatDate = (dateString: string): string => {
  const date: Date = new Date(dateString)

  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default formatDate
