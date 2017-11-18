import * as actions from "../action"

export const add_async_creator = (id, data) => ({
    type: actions.ADD_ASYNC,
    id,
    data
})


export const login = (email) => ({
    type: actions.LOGIN_ASYNC,
    email
})


export const url_specify_async_creator = (url, id) => ({
    type: actions.URL_SPECIFY_ASYNC,
    url,
    id
})

export const config_creator = (id) => ({
    type: actions.CONFIG_ASYNC,
    id
})


export const url_specify_creator = (res, id) => ({
    type: actions.URL_SPECIFY,
    res,
    id
})

//文件上传　后　或者本地的信息
export const upload_file_async = (file,id) => ({
    type: actions.UPLOAD_FILE_ASYNC,
    file,
    id
})

export const upload_file = (id,url) => ({
    type: actions.UPLOAD_FILE,
    id,
    url
})


export const get_config_by_columns_id_async = (id) => ({
    type: actions.CONFIG_ASYNC,
    id: id,
    sign: "columns_id"
})

export const url_specify_raw_data_async_creator = (url, id) => ({
    type: actions.URL_SPECIFY_RAW_DATA_ASYNC,
    url,
    id
})

export const option_async = (id, option) => ({
    type: actions.OPTION_ASYNC,
    id,
    option
})

export const option = (id, option) => ({
    type: actions.OPTION,
    id,
    option
})


