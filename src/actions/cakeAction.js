import {
    GET_CATEGORY_CAKES,
} from 'utils/constants'

import { fetchCategoryCakes } from './ApiCall/cakeAPI'

export const actFetchCategoryCakes = (categoryID, page) => {
    return (dispatch) => {
        return fetchCategoryCakes(categoryID, page).then(res => {
            dispatch(getCategoryCakes(res.data))
        })
    }
}

export const getCategoryCakes = (data) => {
    return {
        type: GET_CATEGORY_CAKES,
        payload: data
    }
}