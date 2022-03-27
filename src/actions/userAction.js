import { fetchUserInfo, logout } from './ApiCall/userAPI'
import { GET_USER } from 'utils/constants'

export const actGetUserInfo = (token) => {
    return (dispatch) => {
        return fetchUserInfo(token).then(res => {
            dispatch(getUserInfo(res.data))
        })
    }
}
export const getUserInfo = (data) => {
    return {
        type: GET_USER,
        payload: data
    }
}

export const actLogOut = () => {
    return (dispatch) => {
        return logout().then(() => {
            dispatch(getUserInfo({_id: '', username: '', avatar: '', email: '', phone: ''}))
        })
    }
}