import * as actions from "../../action"
let initState = []

const sidebar = (state = initState, action) => {
    switch (action.type) {
        case actions.SKELETON_SIDEBAR:
            return action.res
            break
        default:
            return state
    }
}
export default sidebar


