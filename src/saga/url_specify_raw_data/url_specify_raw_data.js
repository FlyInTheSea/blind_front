import {put, takeLatest, takeEvery, call} from "redux-saga/effects"
import * as actions from "../../action/actions"
import get from "../../request/get"
import {url_specify_creator} from "../../actions_creator/creator";

const request_data = (url, id) => {

    return get(url)
        .then(
            (res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    return res.json()
                }
            },
            error => {
                return error.message
            }
        )
        .then(
            res => {
                return res.data
            }
        )
}


//logic
export function* saga(action) {
    const {url, id} = action
    // let add_info = prompt.add_info()
    let res = yield call(request_data, url, id)

    if (res.error) {
        // prompt.add_error(res.error.message)
    } else {
        // prompt.add_success()
        yield put(url_specify_creator(res, id))
    }
}

export default function* watch_saga() {
    yield takeEvery(actions.URL_SPECIFY_RAW_DATA_ASYNC, saga)
}


