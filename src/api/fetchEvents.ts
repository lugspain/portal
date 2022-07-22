import http from './http'
import { DEFAULT_PAGINATION_DELTA } from './config'

const fetchEvents = async ({ start }: { start: number }) => {
  const { data } = await http.get(`api/events`, {
    params: {
      pagination: {
        start,
        delta: DEFAULT_PAGINATION_DELTA,
      },
    },
  })
  return data
}

export default fetchEvents
