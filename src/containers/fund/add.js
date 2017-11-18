import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import validate from "../../valid/daily_report"
import get_add from "../../components/forms/add/get_add"
import React from "react"
import * as actions from "../../action/actions"
import * as actions_creator from "../../actions_creator"
import * as reducer from "../../reducer"
import id from "./id"

const Add =
    withRouter(
        connect(
            state => ({

                }
            ),
            (dispatch, own_props) => {



                dispatch({
                    type: actions.ADD,
                    res: {
                        "house_id": own_props.match.params.house,
                        "reason_id": 1
                    }, //不使用res  res 中包含返回的ｉｄ等唯一字段
                    id,
                })


                return {}
            }
        )(
            get_add(id, validate, ["house_id", "reason_id"])
        )
    )
export default Add

