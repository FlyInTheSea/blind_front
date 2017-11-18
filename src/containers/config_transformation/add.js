import {connect} from "react-redux"
import validate from "../../valid/daily_report"
import get_add from "../../components/forms/add/get_add"
import React from "react"
import {config_creator} from "../../actions_creator"
import * as reducer from "../../reducer"
import id from "./id"
import {url_specify_async_creator} from "../../actions_creator/creator";

import * as api_urls from "../../api/api_urls"

let url_group = api_urls.columns_by_table_id

const Add =
    connect(
        state => ({
            extra_columns_info: {
                table_structure_id: reducer.get_config(state, "table_structures_in_plural"),
                column_id: reducer.get_url_specify(state, url_group) || [],
            },
        }),

        dispatch => {
            dispatch(config_creator("table_structures_in_plural"))
            return {
                user_handle: {
                    table_structure_id: {
                        on_change(input, event, new_val, true_val) {
                            let url = api_urls.columns_by_table_id + "/" + true_val
                            dispatch(url_specify_async_creator(url, url_group))
                        }
                    }
                }
            }
        }
    )(
        get_add(id, validate)
    )

// const onChange = (event, newValue, previousValue) => {
//     dispatch({})
// }
export default Add

