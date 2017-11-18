import {combineReducers} from "redux"
import config from "./config"
import process from "./process"

import skeleton from "./skeleton"
import instance from "./instance"
import url_specify from "./url_specify"
import upload_file from "./upload_file"
import option from "./option"
import up from "./up"



import data from "./data"
import * as data_get from "./data"
import * as config_get from "./config"
import * as skeleton_get from "./skeleton"
import * as  url_specify_get from "./url_specify"
import * as  upload_get from "./upload_file"
import * as  option_get from "./option"
import * as  up_get from "./up"

let reducer = combineReducers({
    data,
    instance,
    process,
    skeleton,
    config,
    url_specify,
    upload_file,
    option,
    up
})


export default reducer


export const get_up = (state,id) => {
    return up_get.get_up(state.reducer.up ,id) || {}
}

export const get_upload = (state,id) => {
    return upload_get.get_upload(state.reducer.upload_file,id) || ""
}

export const get_data_start = (state, id) => {
    return data_get.get_start(state.reducer.data, id)
}

export const get_data_ids_and_by_id = (state, id) => {
    return data_get.get_ids_and_by_id(state.reducer.data, id) || []
}

export const get_data_edit_instance = (state, id) => {
    return data_get.get_edit_instance(state.reducer.data, id)
}
export const get_data_add_instance = (state, id) => {
    return data_get.get_add_instance(state.reducer.data, id)
}


export const get_skeleton_fields = (state, id) => {
    return skeleton_get.get_fields(state.reducer.skeleton, id) || []
}


export const get_config = (state, id) => {
    return config_get.get_config(state.reducer.config, id) || []
}

export const get_url_specify = (state, id) => {
    return url_specify_get.get_url_specify(state.reducer.url_specify, id)
}

export const get_option = (state, id) => {
    return option_get.get_option(state.reducer.option, id) || {}
}
