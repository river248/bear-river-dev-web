import {
    GET_ALL_CATEGORIES,
} from 'utils/constants'

import { fetchAllCategoies } from './ApiCall/categoryAPI'

export const actFetchAllCategories = () => {
    return (dispatch) => {
        return fetchAllCategoies().then(res => {
            dispatch(getAllCategories(res.data))
        })
    }
}

export const getAllCategories = (categories) => {
    return {
        type: GET_ALL_CATEGORIES,
        payload: categories
    }
}