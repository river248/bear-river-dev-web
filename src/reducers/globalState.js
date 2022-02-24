import { IS_SHOW, MESSAGE } from 'utils/constants'

const initialState = {
    isVisible: false,
    message: { type: false, content: '', isVisible: false} 
}

const globalState = (state = initialState, action) => {
    switch (action.type) {
        case IS_SHOW:
            return { ...state, isVisible: action.payload }
        case MESSAGE:
            return {
                ...state,
                message: {...action.payload}
            }
        default:
            return {...state}
    }
}

export default globalState