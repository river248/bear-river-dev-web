import { GET_CAKES, GET_CATEGORY_CAKES, GET_DETAILED_CAKE, SEARCH_CAKE } from 'utils/constants'

const initialState = {
    cakes: [],
    newCakes: [],
    relatedCakes: [],
    cake: {},
    quantityPages: 0
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CAKES:
            const clone = [...action.payload.cakes]
            return {
                ...state,
                newCakes: [...clone.slice(0, 8)],
                cakes: [...action.payload.cakes],
                quantityPages: action.payload.quantityPages
            }
        case GET_CATEGORY_CAKES:
            const relatedCakes = [...action.payload.cakes]
           return {
               ...state,
               cakes: [...action.payload.cakes],
               relatedCakes: [...relatedCakes.slice(0, 8)],
               quantityPages: action.payload.quantityPages
            }
        case GET_DETAILED_CAKE:
            return {
                ...state,
                cake: {...action.payload}
            }
        case SEARCH_CAKE:
            return {
                ...state,
                cakes: [...action.payload.cakes],
                quantityPages: action.payload.quantityPages
            }
        default:
            return {...state}
    }
}

export default cakeReducer