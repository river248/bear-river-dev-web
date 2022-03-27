import { GET_USER } from 'utils/constants'

const initialState = {
    user: {_id: '', username: '', avatar: '', email: '', phone: ''},
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: {...action.payload}
            }
        default:
            return {...state}
    }
}

export default userReducer