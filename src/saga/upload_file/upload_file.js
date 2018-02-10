import {put, takeLatest, takeEvery, call} from "redux-saga/effects"
import * as actions from "../../action/actions"
import * as actions_creator from "../../actions_creator/creator"
import upload from "../../request/upload"
import * as api_urls from "../../api/api_urls"
import * as prompt from "../../prompt"

const request_data = (file) => {

    const url = api_urls.upload_file_excel
    return upload(url, file)
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
    // let add_info = prompt.add_info()
    let {file, id} = action

    yield put(actions_creator.upload_file_start(id))

    let res = yield call(request_data, file)

    if (res.error) {
        // prompt.add_error(res.error.message)
    } else {
        // prompt.add_success()
        yield put(
            actions_creator.upload_file_success(id, file, res)
        )
        yield put(
            actions_creator.upload_file_success(id, file, res)
        )
        put({
            type: actions.ADD,
            res: {
                "url": res
            }, //不使用res  res 中包含返回的ｉｄ等唯一字段
            id,
        })

    }
}

export default function* watch_saga() {
    yield takeEvery(actions.UPLOAD_FILE_ASYNC, saga)
}


