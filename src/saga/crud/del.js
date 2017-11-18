import {put, takeLatest, call} from "redux-saga/effects"
import * as actions from "../../action/actions"
import del from "../../request/del"
import * as api_urls from "../../api/api_urls"
import * as prompt from "../../prompt"

const request_data = (data, id, del_id) => {
    return del(api_urls.get(id,"del") + "/" + del_id, data)
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
            (items) => {
                return items.data
            }
        )
}

//logic
export function* saga(action) {
    const {id, del_id} = action
    let del_info = prompt.del_info()
    let res = yield call(request_data, [], id, del_id)
    if (res.error) {
        prompt.del_error(res.error.message)
    } else {
        prompt.del_success()
        yield put({
            type: actions.DEL,
            id,
            del_id
        })
    }
    prompt.dismiss(del_info)
}

export default function* watch_saga() {
    yield takeLatest(actions.DEL_ASYNC, saga)
}
