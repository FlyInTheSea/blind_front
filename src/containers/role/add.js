import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
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
                },
            }
        ),
        dispatch => {


            return {}
        }
    )(
        get_add(id, validate)
    )

export default Add

