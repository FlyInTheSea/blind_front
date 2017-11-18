import {connect} from "react-redux"
import validate from "../../valid/daily_report"
import get_add from "../../components/forms/add/get_add"
import React from "react"
import * as actions from "../../action/actions"
import * as reducer from "../../reducer"


import id from "./id"

const Add =
    connect(
        state => ({
                extra_columns_info: {
                    city_id: reducer.get_config(state, "cities"),
                    channel_id: reducer.get_config(state, "channels"),
                    table_structure_id: reducer.get_config(state, "table_structures"),
                },

            }
        ),
        dispatch => {

            dispatch({
                type: actions.CONFIG_ASYNC,
                id: "table_structures"
            })

            return {}
        }
    )(
        get_add(id, validate)
    )

export default Add
