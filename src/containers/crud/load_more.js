import React from "react"
import * as api_urls from "../../api/api_urls"
import {sprintf} from "sprintf-js"
import {connect} from "react-redux"
import * as actions from "../../action/actions"
import load_more_view from "../../views/components/load_more"

import * as reducer from "../../reducer"

let id = "daily_reports"

const Load_more = connect(
    state => {
        return {
            page: reducer.get_data_start(state, id),
        }
    },
    (dispatch) => {
        return {
            load_more(page) {
                let url = sprintf(api_urls.get(id,"index"))
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

export default Load_more
