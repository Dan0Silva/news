import axios, { Axios, AxiosResponse } from 'axios'

const api = axios.create({
  baseURL: 'https://www.tabnews.com.br/api/v1',
})

export const getPosts = async () => {
  const res: AxiosResponse = await api.get(
    '/contents?page=1&per_page=10&strategy=relevant',
  )
  return res.data
}

export default api
