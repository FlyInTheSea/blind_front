import {put, takeLatest, call} from "redux-saga/effects"
import * as actions from "../../action/actions"
import get from "../../request/get"
import * as api_urls from "../../api/api_urls"

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
            (items) => {
                return items.data
            }
        )
}

export function* saga(action) {

    let url = api_urls.get_skeleton("sidebar")
    let res = yield call(request_data, url)


    if (res.error) {

    } else {


        res = res.filter(
            item=>item.name !== "city"
        )

        yield put({
            type: actions.SKELETON_SIDEBAR,
            res
        })
    }

}

export default function* watch_saga() {
    yield takeLatest(actions.SKELETON_SIDEBAR_ASYNC, saga)
}

