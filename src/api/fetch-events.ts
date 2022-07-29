import http from './http'

const fetchEvents = async ({
  pageParam = 1,
  upcomingEvents = false,
}: {
  pageParam?: number
  upcomingEvents?: boolean
}) => {
  try {
    const { data } = await http.get(`/api/events`, {
      params: {
        page: pageParam,
        upcomingEvents,
      },
    })
    return data
  } catch (error: unknown) {
    console.error(error)
    throw error
  }
}

export default fetchEvents
