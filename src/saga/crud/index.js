import {put, takeLatest, call} from "redux-saga/effects"
import {toast} from "react-toastify"
import * as actions from "../../action/actions"
import get from "../../request/get"
import * as api_urls from "../../api/api_urls"
import {schema, normalize} from "normalizr"
import * as prompt from "../../prompt"

const item = new schema.Entity("item")
const items = [item]

const request_data = (data, id, url) => {

    if (!url) {
        url = api_urls.get(id, "index");
    }

    return get(
        url, data
    )
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
    let wait_hint = prompt.index_info()
    const {page, id, url} = action


    let res = yield call(request_data, {
        page
    }, id, url)
    prompt.dismiss(wait_hint)
    if (res.error) {
        prompt.index_error(res.error.message)
    } else {
        let {current_page} = res
        res = res.data
        res = normalize(res, items)
        yield put({
            type: actions.INDEX,
            res,
            id,
            page: current_page + 1
        })
    }
}

export default function* watch_saga() {
    yield takeLatest(actions.INDEX_ASYNC, saga)
}

