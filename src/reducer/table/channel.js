import {combineReducers} from "redux"


const channels = (state = [], action) => {

    switch (action.type) {
        case "fetch_channels_start":
            return state
            break
        case "fetch_channels_success":
            return action.response
        default:
            return state
            break

    }

}


const channel_item_edit = (state = {}, action) => {
    switch (action.type) {
        case "fetch_channel_edit_success":
            return action.response
            break
        default:
            return state
    }
}
const is_fetching_channels = (state = false, action) => {
    switch (action.type) {
        case "fetch_channels_start":

            return true
        case "fetch_channels_fail":
        case "fetch_channels_success":
            return false
        default:
            return state
    }
}

const is_fetching_channel_edit = (state = false, action) => {
    switch (action.type) {

        case "fetch_channel_item_edit_start":
            return true
        case "fetch_channel_edit_success":
        case "fetch_channel_edit_fail":
            return false
        default:
            return state
    }
}


const channel = combineReducers({
    is_fetching_channels,
    channels,
    channel_item_edit,
    is_fetching_channel_edit,
})


export default channel

