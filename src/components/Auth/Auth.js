export const getToken = () => {
    return localStorage.getItem('accessToken') || null
}

export const setUserSession = (accessToken) => {
    localStorage.setItem('accessToken', JSON.stringify(accessToken))
}

export const removeUserSession = () => {
    localStorage.removeItem('accessToken')
}