import {put, takeLatest, call} from "redux-saga/effects"
import * as actions from "../../action/actions"
import post from "../../request/post"
import * as api_urls from "../../api/api_urls"
import * as prompt from "../../prompt"

const request_data = (data) => {
    return post(api_urls.login, data)
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
    const {email} = action
    let add_info = prompt.add_info()
    let res = yield call(request_data, {email})
    if (res.error) {
        prompt.login_error(res.error.message)
    } else {
        prompt.login_success("邮件发送成功 请登录邮箱查看登录链接")

        yield put({
            type: actions.LOGIN,
        })
    }
    prompt.dismiss(add_info)
}

export default function* watch_saga() {
    yield takeLatest(actions.LOGIN_ASYNC, saga)
}

