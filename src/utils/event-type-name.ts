const getEventTypeName = (eventType: keyof IOptions): string => {
  const options: IOptions = {
    online: 'Online',
    physical: 'Presencial',
    default: '',
  }
  return options[eventType]
}

export interface IOptions {
  online: string
  physical: string
  default: string
}

export default getEventTypeName
