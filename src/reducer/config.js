
import * as actions from "../action/actions"


const config = (state = {}, action) => {
    switch (action.type) {
        case actions.CONFIG:
            return {
                ...state,
                [action.id]: action.res
            }
        default:
            return state
    }
}


// const config = combineReducers({
//     config
// })

export default config

export const get_config = (config,id) => {
    return config[id]
}