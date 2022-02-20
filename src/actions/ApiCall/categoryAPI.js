
import axios from 'axios'
import { API_ROOT } from 'utils/constants'

axios.defaults.withCredentials = true

export const fetchAllCategoies = async () => await axios.get(`${API_ROOT}/v1/category`)