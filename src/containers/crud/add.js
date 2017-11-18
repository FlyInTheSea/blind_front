import {reduxForm} from "redux-form"
import {connect} from "react-redux"


import {withRouter} from "react-router-dom"
import validate from "../../valid/daily_report"
import Sub_form from "../../views/components/forms/add"

import React from "react"

import * as actions from "../../action/actions"
import * as reducer from "../../reducer"

let id = "daily_reports"

const Add = withRouter(
    connect(
        state => ({
                id,
                initialValues: reducer.get_data_add_instance(state, id),
                table_structures: state.reducer.skeleton.fields[id],
                extra_columns_info: {
                    city_id: reducer.get_config(state, "cities"),
                    channel_id: reducer.get_config(state, "channels"),
                },
            }
        ),
        dispatch => {
            dispatch({
                type: actions.CONFIG_ASYNC,
                id: "cities"
            })

            dispatch({
                type: actions.CONFIG_ASYNC,
                id: "channels"
            })

            return {
                onSubmit(data) {
                    dispatch({
                        type: actions.ADD_ASYNC,
                        id,
                        data
                    })

                },
            }

        }
    )(
        reduxForm({
            form: id,
            validate,
            destroyed: false
        })(
            Sub_form
        )
    )
)

export default Add

