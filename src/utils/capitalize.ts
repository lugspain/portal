const capitalize = (
  [first, ...rest]: string,
  locale = navigator.language
): string =>
  first === undefined ? '' : first.toLocaleUpperCase(locale) + rest.join('')

export default capitalize
