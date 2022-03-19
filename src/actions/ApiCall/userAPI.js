import axios from 'axios'
import { API_ROOT } from 'utils/constants'

axios.defaults.withCredentials = true

export const signUp = async (data) => {
    const request = await axios.post(`${API_ROOT}/v1/user/register`, data)
    return request.data
}

export const signIn = async (data) => {
    const request = await axios.post(`${API_ROOT}/v1/user/login`, data)
    return request.data
}

export const signInWithSocial = async (social, data) => {
    const request = await axios.post(`${API_ROOT}/v1/user/social-login/${social}`, data)
    return request.data
}

export const logout = async () => await axios.get(`${API_ROOT}/v1/user/logout`)
