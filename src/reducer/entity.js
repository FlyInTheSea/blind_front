import * as actions from "../action/actions"


const Entity = (state = {}, action) => {
    switch (action.type) {
        case actions.ENTITY:
            const {id, key, val} = action
            return {
                ...state,
                [id]: {
                    ...state[id],
                    [key]: val
                },
            }
        default:
            return state
    }
}


// const config = combineReducers({
//     config
// })

export default Entity

export const get_entity = (Entity, id) => {
    return Entity[id] || {}
}