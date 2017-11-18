const upload = (url, file) => {
    let form_data = new FormData()

    // data is file
    form_data.append("file", file)

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


export default upload
