import { combineReducers } from 'redux'
import globalState from './globalState'
import categoryReducer from './categoryReducer'
import cakeReducer from './cakeReducer'

const rootReducer = combineReducers({
    globalState, //globalState: globalState
    categoryReducer,
    cakeReducer,
})

export default rootReducer