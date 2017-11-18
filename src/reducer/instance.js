import * as actions from "../action/actions"

const instance = (state = {
    daily_reports: {}
}, action) => {
    switch (action.type) {
        case actions.INSTANCE_CHANGE:
            return {
                ...state,
                daily_reports:action.response
            }
            break
        case actions.DELETE_ITEM_FROM_ITEMS_ALL_IN_SINGLE_TABLE:
            break
        default:
            return state
    }

}


export default instance
