import {combineReducers} from "redux"

import * as actions from "../action/actions"


const url_specify = (state = {}, action) => {
    switch (action.type) {
        case actions.URL_SPECIFY:
            let {id, res} = action
            return {
                ...state,
                [id]: res
            }
        default:
            return state
    }
}


// const config = combineReducers({
//     config
// })

export default url_specify

export const get_url_specify = (url_specify, id) => {
    return url_specify[id]
}
