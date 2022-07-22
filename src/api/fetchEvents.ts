import axios from 'axios'

const fetchEvents = async (): Promise<any> => {
  const response = await axios.get(`api/events`)
  return response.data
}

export default fetchEvents
