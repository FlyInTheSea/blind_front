import {combineReducers} from "redux"


const citys = (state = [], action) => {

    switch (action.type) {
        case "fetch_citys_start":
            return state
            break
        case "fetch_citys_success":
            return action.response
        default:
            return state
            break

    }

}


const city_item_edit = (state = {}, action) => {
    switch (action.type) {
        case "fetch_city_edit_success":
            return action.response
            break
        default:
            return state
    }
}
const is_fetching_citys = (state = false, action) => {
    switch (action.type) {
        case "fetch_citys_start":

            return true
        case "fetch_citys_fail":
        case "fetch_citys_success":
            return false
        default:
            return state
    }
}

const is_fetching_city_edit = (state = false, action) => {
    switch (action.type) {

        case "fetch_city_item_edit_start":
            return true
        case "fetch_city_edit_success":
        case "fetch_city_edit_fail":
            return false
        default:
            return state
    }
}


const city = combineReducers({
    is_fetching_citys,
    citys,
    city_item_edit,
    is_fetching_city_edit,
})


export default city

