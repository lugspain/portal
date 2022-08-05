import http from './http'

const fetchEvent = async ({ id }: { id: string | undefined }) => {
  try {
    const { data } = await http.get(`/api/event`, {
      params: {
        id,
      },
    })
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default fetchEvent
