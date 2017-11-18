import React from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import validate from "../../valid/daily_report"
import get_show from "../../components/forms/show/get_show"
import * as actions from "../../action/actions"
import * as reducer from "../../reducer"
import id from "./id"
import * as urls from "../../api/api_urls"


const Add =
    withRouter(
        connect(
            (state, own) => {

                return {
                    url: urls.template_urls(urls.user_commission_amount, [["user", own.match.params.user]])
                }
            },
            dispatch => {
                return {}
            }
        )(
            get_show(
                urls.user_commission_amount, validate
            )
        )
    )
export default Add


