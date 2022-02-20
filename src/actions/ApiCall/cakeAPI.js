
import axios from 'axios'
import { API_ROOT } from 'utils/constants'

axios.defaults.withCredentials = true

export const fetchCategoryCakes = async (categoryID, page) => await axios.get(
    `${API_ROOT}/v1/cake/get-category-cake?categoryID=${categoryID}&&page=${page}`
)