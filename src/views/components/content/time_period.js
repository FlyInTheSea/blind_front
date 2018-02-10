import React, {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {reduxForm} from "redux-form"
import * as reducer from "../../../reducer"
import * as creator from "../../../actions_creator"
import Switch_input from "../../../components/forms/Switch_input"
import Filter_button from "../../../components/forms/filter/filter_button"
import {Col} from "reactstrap"

import table_columns_type_map from "../../../config/table_column_type_map"
import * as actions from "../../../action"
import validate from "../../../valid/daily_report"


class Sub_form extends Component {

    render() {

        let {
            handleSubmit,
            table_structures,
            extra_columns_info,
            user_handle,
            option
        } = this.props

        return (
            <form onSubmit={
                value => {
                    handleSubmit(value)
                }
            }>
                <div className="card-header">
                    <button className="btn-outline-success" onClick={
                        e=>{
                            console.log("shit")
                            e.preventDefault()
                        }
                    } >
                        <strong >
                            excel下载
                        </strong>
                    </button>
                </div>
                <div className="card-block">
                    <div className="form-group row">
                        {
                            table_structures.map(
                                (item, index) => {

                                    return (
                                        <Col key={index} xs="12" sm="6" lg="4">
                                            <Switch_input
                                                floatingLabelText={item.name_alias}
                                                type={table_columns_type_map[item.type]}
                                                id={item.name}
                                                name={item.name}
                                                extra_columns_info={
                                                    extra_columns_info
                                                }
                                                user_handle={
                                                    user_handle
                                                }
                                            />
                                        </Col>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
            </form>
        )
    }
}

const form = (id, validate) => {

    return reduxForm({
        form: id,
        validate,
        destroyed: false
    })(
        Sub_form
    )
}


const get_add = (id, validate, filter = []) => {

    return withRouter(connect(
        state => {
            let init = reducer.get_data_add_instance(state, id)
            return {
                initialValues: {},
                table_structures: [
                    {
                        name: "from",
                        type: 4,
                        name_alias: "开始",
                    },
                    {
                        name: "end",
                        type: 4,
                        name_alias: "结束"
                    }
                ],
                option: reducer.get_option(state, id)

            }
        },
        dispatch => {
            return {
                onSubmit(data) {
                    dispatch(
                        creator.add_async_creator(id, data)
                    )
                },
                user_handle: {
                    end: {
                        on_change(input, event, true_val) {
                            // dispatch()
                            dispatch(creator.option(id, {
                                end: true_val
                            }))
                            input.onChange(true_val)
                        }
                    },
                    from: {
                        on_change(input, event, val) {
                            // dispatch()
                            dispatch(creator.option(id, {
                                from: val
                            }))
                            input.onChange(val)
                        }
                    }
                }
            }
        }
        )
        (form(id, validate))
    )

}
const id = "option_sell_station"
const A = get_add(id, validate)

const Time_period = () => {

    return (
        <div className="animated fadeIn">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">

                        <A/>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Time_period