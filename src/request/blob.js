const logout = () => {
    window.localStorage.removeItem("token")
    window.location.reload();
}


const get_url = (url, data = {}) => {
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
    Object.keys(data).forEach(key => url.searchParams.append(key, data[key]))
    let response = fetch(
        url, options
    )

    response.then(
        res => {
            if (!res.ok && res.status === 401 && res.statusText === "Unauthorized") {
                logout();
            }
            return res
        }
    ).then(function (res) {
        return res.blob();
    })
    .then(function (myBlob) {
        const objectURL = URL.createObjectURL(myBlob);
        window.open(objectURL);
    });

    return response
}
export default get_url

