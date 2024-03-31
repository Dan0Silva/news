import axios, { Axios, AxiosResponse } from 'axios'

const api = axios.create({
  baseURL: 'https://www.tabnews.com.br/api/v1',
})

export default api
