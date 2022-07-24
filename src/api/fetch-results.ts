import http from './http'

const fetchResults = async ({ value }: { value?: string }) => {
  try {
    const { data } = await http.get(`/api/search`, {
      params: {
        query: value,
      },
    })
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default fetchResults
