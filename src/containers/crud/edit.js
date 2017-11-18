import React, {Component} from 'react';
import {reduxForm, formValues} from "redux-form"
import {connect} from "react-redux"
import edit_form from "../../views/components/forms/edit_form"
import * as api_urls from "../../api/api_urls"

import {withRouter} from "react-router-dom"

import validate from "../../valid/daily_report"
import post from "../../request/post"
import * as actions from "../../action/actions"

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'

import * as reducer from "../../reducer"

let id = "daily_reports"

let Edit_form =
    withRouter(
        connect(
            (state, ownProps) => {
                return {
                    id,
                    initialValues: reducer.get_data_edit_instance(state, id),
                    table_structures: state.reducer.skeleton.fields[id],
                    extra_columns_info: {
                        city_id: reducer.get_config(state, "cities"),
                        channel_id: reducer.get_config(state, "channels"),
                    }
                }
            },
            dispatch => {
                return {
                    onSubmit(res) {
                        dispatch({
                            type: actions.UPDATE_ASYNC,
                            res,
                            id,
                        })
                    }
                }
            }
        )
        (
            reduxForm({
                    form: id,
                    validate,
                    enableReinitialize: true
                }
            )(
                edit_form
            )
        )
    )


Edit_form = connect(null,

    (dispatch, own_props) => {

        let edit_id = own_props.match.params.id

        dispatch({
            type:actions.CONFIG_ASYNC,
            id:"cities"
        })

        dispatch({
            type: actions.CONFIG_ASYNC,
            id:"channels"
        })
        dispatch({
            type: actions.EDIT_ASYNC,
            id,
            edit_id
        })
        return {}
    }
)(Edit_form)

export default Edit_form