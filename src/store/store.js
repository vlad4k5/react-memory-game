import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import gameReducer from "./gameReducer"


const rootReducer = combineReducers({gameReducer})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store