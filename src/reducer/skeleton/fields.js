import * as actions from "../../action"


const fields = (state = {}, action) => {
    switch (action.type) {

        case actions.SKELETON_FIELDS:
            let {id, res} = action
            return {
                ...state,
                [id]: res
            }
        default:
            return state
    }
}

export default fields
