import {combineReducers} from "redux"

import * as actions from "../action/actions"


const upload_url = (state = {}, {id, url, type}) => {
    switch (type) {
        case actions.UPLOAD_FILE_SUCCESS:
            return {
                ...state,
                [id]: url
            }
        default:
            return state
    }
}


const upload_status = (state = null, {type, id}) => {
    switch (type) {
        case actions.UPLOAD_FILE_START:
            return {
                ...state,
                [id]: 1
            }
            break
        case actions.UPLOAD_FILE_SUCCESS:
            return {
                ...state,
                [id]: 0
            }
            break
        default:
            return state
    }
}

const file = (state = null, {type, id, file}) => {
    switch (type) {
        case actions.UPLOAD_FILE_SUCCESS:
            return {
                ...state,
                [id]: file
            }
            break
        default:
            return state
    }
}


const last_uploaded_url = (state = null, {type, id, uploaded_url}) => {
    switch (type) {
        case actions.UPLOADED_FILE_URL_SUBMIT:
            return {
                ...state,
                [id]: uploaded_url
            }
            break
        default:
            return state
    }
}

const upload_file = combineReducers({
    upload_status,
    upload_url,
    file,
    last_uploaded_url

})


export default upload_file

export const get_upload_status = (state, id) => {
    try {
        return state.upload_status[id]
    } catch (e) {
        return null
    }
}

export const get_uploaded_url = (state, id) => {
    try {
        return state.upload_url[id]
    } catch (e) {
        return ""
    }
}

export const get_uploaded_file = (state, id) => {
    try {
        return state.file[id]
    } catch (e) {
        return ""
    }
}


export const get_last_uploaded_url = (state, id) => {
    try {
        return state.last_uploaded_url[id]
    } catch (e) {
        return ""
    }
}
