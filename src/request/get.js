const logout = () => {
    window.localStorage.removeItem("token")
    window.location.reload();
}

const get = (url, data = {}) => {

    // let form_data = new FormData()
    //
    // Object.keys(data).map(
    //     item => {
    //         form_data.append([item], data[item])
    //     })

    let auth_code = window.localStorage.getItem("token")
    let headers = new Headers({
        'Accept': 'application/json',
        'Authorization': auth_code,
    })
    let options =
        {
            method: "GET",
            mode: "cors",
            headers
        }
    url = new URL(url)
    Object.keys(data).forEach(key => {
        if (key === "query_params") {
            url.searchParams.append(key, JSON.stringify(data[key]))
        }else {
            url.searchParams.append(key, data[key])
        }
    })
    let response = fetch(
        url, options
    )

    response.then(
        res => {
            if (!res.ok && res.status === 401 && res.statusText === "Unauthorized") {
                logout();
            }
        }
    )

    return response
}
export default get

/**

 const get = (url, data = {}) => {

    let form_data = new FormData()

    Object.keys(data).map(
        item => {
            form_data.append([item], data[item])
        })

    let auth_code = window.localStorage.getItem("token")
    let header = new Headers()
    header.append(
        {
            'Accept': 'application/json',

            'Authorization': auth_code,
        }
    )

    form_data.append("_method", "GET")
    let options =
        {
            header,
            method: "POST",
            mode: "cors",
            body: form_data,
        }
    return fetch(
        url, options
    )
}
 export default get
 **/



const status = [
    "可售",
    //认购中
    // 认购 面积 单价 总价
    //每个小区 认购书
    //找
    //财务交钱
    //可以撤销


    // 全款 流程 结束

    // 贷款 首付

    // 回款

    // 已经还清

    "认购",//定金
    "定金",
    "签约",//
]

const customer_info = [
    "机会用户",
    "意向用户",
    "明确客户",
]
// 定金 首付 回款




