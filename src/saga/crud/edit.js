import {put, takeLatest, call} from "redux-saga/effects"
import * as actions from "../../action/actions"
import get from "../../request/get"
import * as api_urls from "../../api/api_urls"
import {toast} from "react-toastify"


const request_data = (data, id) => {
    const {edit_id} = data
    let url = api_urls.get(id, "edit") + "/" + edit_id + "/edit"
    return get(url, data)
        .then(
            (res) => {
                if (res.ok) {
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
    const {id, edit_id} = action
    let res = yield call(request_data, {edit_id}, id)
    if (res.error) {
    } else {
        yield put({
            type: actions.EDIT,
            res,
            id,
        })
    }
}

export default function* watch_saga() {
    yield takeLatest(actions.EDIT_ASYNC, saga)
}
