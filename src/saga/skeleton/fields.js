import {put, takeLatest, call} from "redux-saga/effects"
import * as actions from "../../action/actions"
import get from "../../request/get"
import * as api_urls from "../../api/api_urls"

import * as hint_action_finished from "../../hint/action_finished"

const request_data = (url, data = []) => {
    return get(url, data)
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
            (res) => {
                return res.data.filter(

                    item => !item.writable
                )
            }
        )
}

// api_urls.daily_reports.items

// data_get_items(items, table)
export function* saga(action) {
    const {id} = action
    let url = api_urls.get_skeleton("fields") + "/" + id

    let res = yield call(request_data, url)
    if (res.error) {
        res = res[0]
        hint_action_finished.error()
    } else {
        yield put({
            type: actions.SKELETON_FIELDS,
            id,
            res
        })
    }

}

export default function* watch_saga() {
    yield takeLatest(actions.SKELETON_FIELDS_ASYNC, saga)
}

