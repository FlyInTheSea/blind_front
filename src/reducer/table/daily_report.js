import {combineReducers} from "redux"


const daily_reports = (state = [], action) => {

    switch (action.type) {
        case "fetch_daily_reports_start":
            return state
            break
        case "fetch_daily_reports_success":
            return action.response
        default:
            return state
            break

    }

}


const daily_report_item_edit = (state = {}, action) => {
    switch (action.type) {
        case "fetch_daily_report_edit_success":
            return action.response
            break
        default:
            return state
    }
}
const is_fetching_daily_reports = (state = false, action) => {
    switch (action.type) {
        case "fetch_daily_reports_start":

            return true
        case "fetch_daily_reports_fail":
        case "fetch_daily_reports_success":
            return false
        default:
            return state
    }
}

const is_fetching_daily_report_edit = (state = false, action) => {
    switch (action.type) {

        case "fetch_daily_report_item_edit_start":
            return true
        case "fetch_daily_report_edit_success":
        case "fetch_daily_report_edit_fail":
            return false
        default:
            return state
    }
}


const daily_report = combineReducers({
    is_fetching_daily_reports,
    daily_reports,
    daily_report_item_edit,
    is_fetching_daily_report_edit,
})


export default daily_report

