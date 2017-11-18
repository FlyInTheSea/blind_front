import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import validate from "../../valid/daily_report"
import get_add from "../../components/forms/add/get_add"
import React from "react"
import * as actions from "../../action/actions"
import * as  actions_creator from "../../actions_creator"
import id from "./id"
import * as reducer from "../../reducer"

const Add =
    withRouter(
        connect(
            state => ({
                    extra_columns_info: {
                        pay_method: reducer.get_config(state, "10_62"),

                    },
                }
            ),
            (dispatch, own_props) => {

                dispatch(
                    actions_creator.get_config_by_columns_id_async("10_62")
                )

                dispatch({
                    type: actions.ADD,
                    res: {
                        "house_id": own_props.match.params.house
                    }, //不使用res  res 中包含返回的ｉｄ等唯一字段
                    id,
                })
                return {}
            }
        )(
            get_add(id, validate, ["house_id", "customer_id"])
        )
    )
export default Add

