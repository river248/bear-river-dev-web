import { IS_SHOW, MESSAGE, LOADING } from 'utils/constants'

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

export const actLoading = (status) => {
    return {
        type: LOADING,
        payload: status
    }
}