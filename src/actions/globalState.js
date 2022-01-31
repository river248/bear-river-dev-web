import { IS_SHOW } from 'utils/constants'

export const toggleNav = (state) => {
    return {
        type: IS_SHOW,
        payload: state
    }
}