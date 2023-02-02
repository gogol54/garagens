import axios from 'axios'

const URI = 'http://localhost:3030'

const publicRequest = axios.create({
  baseURL: URI,
  headers: {
    'Content-Type': 'application/json',
  }
})

export default publicRequest