import {combineReducers} from "redux"

import * as actions from "../action/actions"


const upload_file = (state = {}, {id, url, type}) => {
    switch (type) {
        case actions.UPLOAD_FILE:
            return {
                [id]: url
            }
        default:
            return state
    }
}

export default upload_file

export const get_upload = (state, id) => {
    return state[id]
}

