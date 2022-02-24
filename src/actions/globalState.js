import { IS_SHOW, MESSAGE } from 'utils/constants'

export const toggleNav = (state) => {
    return {
        type: IS_SHOW,
        payload: state
    }
}

export const actMessage = (type, content, isVisible) => {
    return {
        type: MESSAGE,
        payload: {type, content, isVisible}
    }
}