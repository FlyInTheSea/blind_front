const post_data = (url, post_data = {}) => {
    let form_data = new FormData()

    Object.keys(post_data).map(
        item => {
            form_data.append([item], post_data[item])
        }
    )

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


export default post_data
