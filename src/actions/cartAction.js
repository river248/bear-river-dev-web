import { ADD_TO_CART, UPDATE_CART, REMOVE_PRODUCT } from 'utils/constants'

export const addToCart = (product, quantity) => {
    return {
        type: ADD_TO_CART,
        payload: {product, quantity}
    }
}

export const updateCart = (product, quantity) => {
    return {
        type: UPDATE_CART,
        payload: {product, quantity}
    }
}

export const removeProduct = (product) => {
    return {
        type: REMOVE_PRODUCT,
        payload: product
    }
}