import {put, takeLatest, takeEvery, call} from "redux-saga/effects"
import * as actions from "../../action/actions"
import get from "../../request/get"
import * as api_urls from "../../api/api_urls"
import * as prompt from "../../prompt"

const request_data = (data, id) => {

    let url = api_urls.get_config(id)

    return get(url)
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
                return res.data.map(
                    item => {
                        if (item.name_alias) {
                            return {
                                value: item.id,
                                display_name: item.name_alias
                            }
                        } else {
                            return {
                                value: item.id,
                                display_name: item.name
                            }

                        }
                    }
                )
            }
        )
}


const request_data_with_url = (url) => {

    return get(url)
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
                return res.data.map(
                    item => {
                            return {
                                value: item.value,
                                display_name: item.name
                            }
                    }
                )
            }
        )
}


//logic
export function* saga(action) {
    const {id, sign} = action
    const data = {}
    // let add_info = prompt.add_info()

    let res
    if (sign && sign === "columns_id") {
        let url = api_urls.template_urls(api_urls.config_tranformation_retrieve, [
            ["config_transformation", id]
        ])
        res = yield call(request_data_with_url, url)
    } else {
        res = yield call(request_data, data, id)
    }

    if (res.error) {
        // prompt.add_error(res.error.message)
    } else {
        // prompt.add_success()
        yield put({
            type: actions.CONFIG,
            res,
            id,
        })
    }
}

export default function* watch_saga() {
    yield takeEvery(actions.CONFIG_ASYNC, saga)
}


