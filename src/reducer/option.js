
import * as actions from "../action/actions"


const config = (state = {}, {id,option,type}) => {
    switch (type) {
        case actions.OPTION:
            return {
                ...state,
                [id]: {
                    ...state[id],
                    ...option
                }
            }
        default:
            return state
    }
}


// const config = combineReducers({
//     config
// })

export default config

export const get_option = (config,id) => {
    return config[id]
}