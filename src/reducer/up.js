import * as actions from "../action/actions"
import {v4} from "uuid"

const up = (state = {}, {id, url, type}) => {
    switch (type) {
        case actions.UP:
            console.log(state)
            console.log(id)

            return {
                [v4()]: v4(),
                ...state,
                [id]: url
            }
        default:
            return state
    }
}


// const config = combineReducers({
//     config
// })

export default up

export const get_up = (state, id) => {
    return state[id]
}