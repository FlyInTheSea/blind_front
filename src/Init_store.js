import {createStore, combineReducers, applyMiddleware} from "redux"
import {reducer as formReducer} from 'redux-form'
import reducer from "./reducer/index"

import createHistory from "history/createBrowserHistory"
import {routerMiddleware, routerReducer} from "react-router-redux"
import root_saga from "./root_saga"

import create_saga_middleware from "redux-saga"
export const history = createHistory();
const middleware = routerMiddleware(history)

const saga = create_saga_middleware()


export default createStore(
    combineReducers({
        reducer,
        form: formReducer,
        router: routerReducer,
    }),
    applyMiddleware(...[
        middleware,
        saga
    ])
)

saga.run(root_saga)

