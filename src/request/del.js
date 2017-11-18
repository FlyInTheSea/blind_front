const del = (url)=> {

    let auth_code = window.localStorage.getItem("token")
    let headers = new Headers({
        'Accept': 'application/json',
        'Authorization': auth_code,
    })
    let options = {
        method: "DELETE",
        mode: "cors",
        headers
    }
    return fetch(
        url, options
    )
}


export default del
