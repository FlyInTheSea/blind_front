import {put, takeLatest, call} from "redux-saga/effects"
import * as actions from "../../action/actions"
import get from "../../request/get"
import * as api_urls from "../../api/api_urls"
import * as prompt from "../../prompt"


const request_data = (url) => {
    return get(url)
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
    const {url} = action
    // let add_info = prompt.add_info()
    let res = yield call(request_data, url)
    if (res.error) {
        prompt.login_error(res.error.message)
    } else {
        // prompt.login_success("")
        yield put({
            type: actions.GET_DATA_INIT_BY_URL,
            url,
            res
        })
    }
    // prompt.dismiss(add_info)
}

export default function* watch_saga() {
    yield takeLatest(actions.GET_DATA_INIT_BY_URL_ASYNC, saga)
}

