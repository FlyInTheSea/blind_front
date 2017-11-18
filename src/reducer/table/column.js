import {combineReducers} from "redux"


const columns = (state = [], action) => {

    switch (action.type) {
        case "fetch_columns_start":
            return state
            break
        case "fetch_columns_success":
            return action.response
        default:
            return state
            break

    }

}


const column_item_edit = (state = {}, action) => {
    switch (action.type) {
        case "fetch_column_edit_success":
            return action.response
            break
        default:
            return state
    }
}
const is_fetching_columns = (state = false, action) => {
    switch (action.type) {
        case "fetch_columns_start":

            return true
        case "fetch_columns_fail":
        case "fetch_columns_success":
            return false
        default:
            return state
    }
}

const is_fetching_column_edit = (state = false, action) => {
    switch (action.type) {

        case "fetch_column_item_edit_start":
            return true
        case "fetch_column_edit_success":
        case "fetch_column_edit_fail":
            return false
        default:
            return state
    }
}


const column = combineReducers({
    is_fetching_columns,
    columns,
    column_item_edit,
    is_fetching_column_edit,
})


export default column

