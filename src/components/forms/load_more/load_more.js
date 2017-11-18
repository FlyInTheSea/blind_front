import * as api_urls from "../../../api/api_urls"
import {sprintf} from "sprintf-js"
import {connect} from "react-redux"
import * as actions from "../../../action"
import load_more_view from "../../../views/components/load_more"

import * as reducer from "../../../reducer"

const get_load_more = (id) => {
    return connect(
        state => {
            return {
                page: reducer.get_data_start(state, id),
            }
        },
        (dispatch) => {
            return {
                load_more(page) {
                    let url = sprintf(api_urls.get(id, "index"))
                    dispatch({
                        type: actions.INDEX_ASYNC,
                        id,
                        page
                    })
                }
            }
        }
    )(
        load_more_view
    )
}

export default get_load_more
