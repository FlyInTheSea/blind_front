import {put, takeLatest, call} from "redux-saga/effects"
import {toast} from "react-toastify"
import * as actions from "../../action/actions"
import get from "../../request/get"
import * as api_urls from "../../api/api_urls"
import {schema, normalize} from "normalizr"
import * as prompt from "../../prompt"
import * as actions_creator from "../../actions_creator"

const item = new schema.Entity("item")
const items = [item]

const request_data = (action) => {
    let {id, house} = action
    try {
        let url = api_urls.get(id, "summaries");
        url = api_urls.template_urls(url, [["house", house]])
        return get(
            url
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
        return {error: "saga with wrong "}
    }

}

//logic
export function* saga(action) {

    let wait_hint = prompt.index_info()
    const {id} = action
    let res = yield call(request_data, action)
    prompt.dismiss(wait_hint)
    if (res.error) {
        prompt.index_error(res.error.message)
    } else {
        yield put(actions_creator.summaries(id, res))
    }
}

export default function* watch_saga() {
    yield takeLatest(actions.SUMMARIES_ASYNC, saga)
}

