import { GET_CATEGORY_CAKES } from 'utils/constants'

const initialState = {
    cakes: [],
    quantityPages: 0
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORY_CAKES:
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