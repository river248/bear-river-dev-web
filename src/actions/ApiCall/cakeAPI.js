
import axios from 'axios'
import { API_ROOT } from 'utils/constants'

axios.defaults.withCredentials = true

export const fetchCakes = async (sortBy, value, page) => {
    if (sortBy && value)
        return await axios.get(
            `${API_ROOT}/v1/cake?sortBy=${sortBy}&value=${value}&page=${page}`
        )
    else
        return await axios.get(
            `${API_ROOT}/v1/cake?page=${page}`
        )
}

export const fetchCategoryCakes = async (categoryID, sortBy, value, page) => {
    if (sortBy && value)
        return await axios.get(
            `${API_ROOT}/v1/cake/get-category-cake?categoryID=${categoryID}&sortBy=${sortBy}&value=${value}&page=${page}`
        )
    else
        return await axios.get(
            `${API_ROOT}/v1/cake/get-category-cake?categoryID=${categoryID}&page=${page}`
        )
}

export const fetchDetailedCake = async (id) => await axios.get(
    `${API_ROOT}/v1/cake/${id}`
)

export const fetchSearchCakes = async (key, page) => await axios.get(
    `${API_ROOT}/v1/cake/search?key=${key}&page=${page}`
)