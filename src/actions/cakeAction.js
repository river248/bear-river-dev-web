import {
    GET_CATEGORY_CAKES,
    GET_DETAILED_CAKE,
    GET_CAKES
} from 'utils/constants'

import { fetchCakes, fetchCategoryCakes, fetchDetailedCake } from './ApiCall/cakeAPI'
import { actLoading } from './globalState'

export const actFetchCakes = (sortBy, value, page) => {
    return (dispatch) => {
        dispatch(actLoading(true))
        return fetchCakes(sortBy, value, page).then(res => {
            dispatch(getCakes(res.data))
            dispatch(actLoading(false))
        })
    }
}

export const getCakes = (data) => {
    return {
        type: GET_CAKES,
        payload: data
    }
}

export const actFetchCategoryCakes = (categoryID, sortBy, value, page) => {
    return (dispatch) => {
        dispatch(actLoading(true))
        return fetchCategoryCakes(categoryID, sortBy, value, page).then(res => {
            dispatch(getCategoryCakes(res.data))
            dispatch(actLoading(false))
        })
    }
}

export const getCategoryCakes = (data) => {
    return {
        type: GET_CATEGORY_CAKES,
        payload: data
    }
}

export const actFetchDetailedCake = (id) => {
    return (dispatch) => {
        return fetchDetailedCake(id).then(res => {
            dispatch(getDetailedCake(res.data))
        })
    }
}

export const getDetailedCake = (data) => {
    return {
        type: GET_DETAILED_CAKE,
        payload: data
    }
}