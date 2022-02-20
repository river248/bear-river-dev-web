import { GET_ALL_CATEGORIES } from 'utils/constants'

const initialState = []

const categoryReducer = (state = initialState, action) => {
    if (action.type === GET_ALL_CATEGORIES)
        return [...action.payload]
    else
        return state
}

export default categoryReducer