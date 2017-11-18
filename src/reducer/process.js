import * as actions from "../action/actions"

const process = (state = {
                     "daily_reports": {
                         is_fetching: false
                     }
                 }
    , action) => {

    switch (action.type) {
        case actions.FETCH_START:
            if (state[action.table]) {

                return {
                    ...state,
                    [action.table]:
                        [
                            ...state[action.table],
                            ...action.res
                        ]

                }
            } else {
                return {

                    [action.table]:
                        [
                            ...action.res
                        ]
                }
            }
            break
        case actions.RECEIVE_SUCCESS:

            let items = state[action.table]

            let items_after_del = items.filter(
                item => {
                    return action.id === item.id
                }
            )
            return {
                ...state,
                [action.table]: items_after_del
            }

            break
        default:
            return state
    }

}


export default process
