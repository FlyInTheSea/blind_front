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
export const upload_file_async = (file, id) => ({
    type: actions.UPLOAD_FILE_ASYNC,
    file,
    id
})

export const upload_file_success = (id, file, url) => ({
    type: actions.UPLOAD_FILE_SUCCESS,
    id,
    file,
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


//文件上传　后　或者本地的信息
export const upload_file_start = (id) => ({
    type: actions.UPLOAD_FILE_START,
    id
})


//文件上传　后　或者本地的信息
export const uploaded_file_url_submit_async = (uploaded_url, url, params) => ({
    params,
    type: actions.UPLOADED_FILE_URL_SUBMIT_ASYNC,
    uploaded_url,
    url,
})


//文件上传　后　或者本地的信息
export const rich_text_async = (data, params) => ({
    type: actions.RICH_TEXT_ASYNC,
    data,
    params
})

//文件上传　后　或者本地的信息
export const get_data_init_by_url_async = (url) => ({
    type: actions.GET_DATA_INIT_BY_URL_ASYNC,
    url
})

export const get_data_init_by_url = (url, res) => ({
    type: actions.GET_DATA_INIT_BY_URL_ASYNC,
    url,
    res
})


// export const get_data_init_by_url= (url,res) => ({
//     type: actions.GET_DATA_INIT_BY_URL_ASYNC,
//     url,
//     res
// })


export const entity = (id, key, val) => ({
    type: actions.ENTITY,
    id,
    key,
    val
})

export const load_content = (id, page, query_params = [], refresh = false) => ({
    type: actions.INDEX_ASYNC,
    id,
    page,
    query_params,
    refresh
})


export const summaries = (id,res) => ({
    type: actions.SUMMARIES,
    id,
    res
})
export const summaries_async = (id,house) => ({
    type: actions.SUMMARIES_ASYNC,
    id,
    house
})


