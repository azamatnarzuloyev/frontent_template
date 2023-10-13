import axios from "axios";
import { getitem } from '../helpers/persestensStroege'

axios.defaults.baseURL = 'http://localhost:3000/api'


axios.interceptors.request.use(config => {
  const token = getitem('token')
  const authrotion = token ? `Token ${token}` : ''
  config.headers.Authorization = authrotion
  return config
})

export default axios