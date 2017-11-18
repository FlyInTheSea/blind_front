import {put, takeLatest, call} from "redux-saga/effects"
import * as actions from "../../action/actions"
import * as api_urls from "../../api/api_urls"
import * as prompt from "../../prompt"
import put_request from "../../request/put"

const request_data = (data, id) => {
    let update_id = data.id
    return put_request(api_urls.get(id, "update") + "/" + update_id, data)
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
    const {id} = action
    let del_info = prompt.update_info()
    let res = yield call(request_data, action.res, id)
    if (res.error) {
        prompt.update_error(res.error.message)
    } else {
        prompt.update_success()
        yield put({
            type: actions.EDIT,
            res: action.res,
            id,
        })
    }
    prompt.dismiss(del_info)
}

export default function* watch_saga() {
    yield takeLatest(actions.UPDATE_ASYNC, saga)
}
