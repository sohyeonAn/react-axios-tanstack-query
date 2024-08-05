import axios, { AxiosRequestConfig } from 'axios'

const options: AxiosRequestConfig = {
  baseURL: 'https://dummyjson.com', // dummy api
  headers: {
    'Content-Type': 'application/json',
  },
}

const client = axios.create(options)

export default client
