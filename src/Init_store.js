import {createStore , applyMiddleware} from "redux"
import createHistory from "history/createBrowserHistory"
import {routerMiddleware, } from "react-router-redux"
import root_saga from "./root_saga"
import create_saga_middleware from "redux-saga"
import reducer from "./root_reducer"

export const history = createHistory();

const middleware = routerMiddleware(history)

const saga = create_saga_middleware()


export default createStore(
    reducer,
    applyMiddleware(...[
        middleware,
        saga
    ])
)

saga.run(root_saga)

