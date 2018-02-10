import {put, takeLatest, call} from "redux-saga/effects"
import * as actions from "../../action/actions"
import post from "../../request/post"
import * as api_urls from "../../api/api_urls"
import * as prompt from "../../prompt"

const request_data = (data) => {
    const url = api_urls.rich_text
    return post(url, data)
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
    let {data, params} = action
    data = {
        ...data,
        ...params
    }
    let add_info = prompt.add_info()
    let res = yield call(request_data, data)

    if (res.error) {
        prompt.add_error(res.error.message)
    } else {
        prompt.add_success()
        // yield put({
        //     type: actions.RICH_TEXT,
        //     res: data, //不使用res  res 中包含返回的ｉｄ等唯一字段
        //     id,
        // })
    }
    prompt.dismiss(add_info)
}

export default function* watch_saga() {
    yield takeLatest(actions.RICH_TEXT_ASYNC, saga)
}

