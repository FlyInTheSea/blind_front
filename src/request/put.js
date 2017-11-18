const put = (url, data = {}) => {
    let form_data = new FormData()

    Object.keys(data).forEach(key => {
        form_data.append(key, data[key])
    })
    form_data.append("_method", "PUT")

    let auth_code = window.localStorage.getItem("token")
    let headers = new Headers({
        'Accept': 'application/json',
        'Authorization': auth_code,
    })

    let options = {
        method: "POST",
        mode: "cors",
        body: form_data,
        headers
    }
    return fetch(
        url, options
    )
}


export default put


