import {combineReducers} from "redux"


const table_structures = (state = [], action) => {

    switch (action.type) {
        case "fetch_table_structures_start":
            return state
            break
        case "fetch_table_structures_success":
            return action.response
        default:
            return state
            break

    }

}


const table_structure_item_edit = (state = {}, action) => {
    switch (action.type) {
        case "fetch_table_structure_edit_success":
            return action.response
            break
        default:
            return state
    }
}
const is_fetching_table_structures = (state = false, action) => {
    switch (action.type) {
        case "fetch_table_structures_start":

            return true
        case "fetch_table_structures_fail":
        case "fetch_table_structures_success":
            return false
        default:
            return state
    }
}

const is_fetching_table_structure_edit = (state = false, action) => {
    switch (action.type) {

        case "fetch_table_structure_item_edit_start":
            return true
        case "fetch_table_structure_edit_success":
        case "fetch_table_structure_edit_fail":
            return false
        default:
            return state
    }
}


const table_structure = combineReducers({
    is_fetching_table_structures,
    table_structures,
    table_structure_item_edit,
    is_fetching_table_structure_edit,
})



export default table_structure

