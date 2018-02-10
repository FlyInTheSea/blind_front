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
    try {
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
    } catch (e) {
        console.log(e.message)
        return {error: "saga with wrong "}
    }

}

//logic
export function* saga(action) {

    let wait_hint = prompt.index_info()

    const {page, id, url, query_params = {},refresh = false} = action

    let res = yield call(request_data, {
        page,
        query_params
    }, id, url)
    prompt.dismiss(wait_hint)
    if (res.error) {
        prompt.index_error(res.error.message)
    } else {
        let {current_page,last_page} = res
        res = res.data
        res = normalize(res, items)
        yield put({
            type: actions.INDEX,
            res,
            id,
            page: current_page + 1,
            refresh,
            last_page
        })
    }
}

export default function* watch_saga() {
    yield takeLatest(actions.INDEX_ASYNC, saga)
}

