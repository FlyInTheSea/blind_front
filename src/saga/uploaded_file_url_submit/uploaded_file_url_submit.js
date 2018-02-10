import {put, takeLatest, call} from "redux-saga/effects"
import * as actions from "../../action/actions"
import post from "../../request/post"
import * as api_urls from "../../api/api_urls"
import * as prompt from "../../prompt"

const request_data = (url, uploaded_url, params) => {
    return post(url, {
        url: uploaded_url,
        ...params
    })
        .then(
            (res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    return [
                        res
                    ]
                }
            },
            error => {
                return error.message
            }
        )
        .then(
            (items) => {
                return items.data
            }
        )
}

//logic
export function* saga(action) {
    const {url, uploaded_url, id, params} = action
    let add_info = prompt.add_info()
    console.log(url)
    let res = yield call(request_data, url, uploaded_url, params)

    if (res.error) {
        prompt.add_error(res.error.message)
    } else {
        prompt.add_success()
        yield put({
            type: actions.UPLOADED_FILE_URL_SUBMIT,
            uploaded_url,
            id
        })
    }
    prompt.dismiss(add_info)
}

export default function* watch_saga() {
    yield takeLatest(actions.UPLOADED_FILE_URL_SUBMIT_ASYNC, saga)
}

