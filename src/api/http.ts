import axios from 'axios'

const http = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
  timeout: 10000,
})

export default http
