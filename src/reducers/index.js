import { combineReducers } from 'redux'
import globalState from './globalState'
import categoryReducer from './categoryReducer'
import cakeReducer from './cakeReducer'
import cartReducer from './cartReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    globalState, //globalState: globalState
    categoryReducer,
    cakeReducer,
    cartReducer,
    userReducer
})

export default rootReducer