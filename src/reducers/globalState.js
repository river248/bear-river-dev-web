import { IS_SHOW } from 'utils/constants'

const initialState = {
    isVisible: false
}

const globalState = (state = initialState, action) => {
    if (action.type === IS_SHOW)
        return { isVisible: action.payload }
    return { ...state }
}

export default globalState