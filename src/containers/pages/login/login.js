import React, {Component} from 'react';

import {connect} from "react-redux"

import {withRouter} from "react-router"

import login_view from "../../../views/pages/login/login"
import validate from "../../../valid/daily_report"
import {reduxForm} from "redux-form"


import * as action_creator from "../../../actions_creator"

let id = "login"


const form = (id, validate) => {

    return reduxForm({
        form: id,
        validate,
        destroyed: false
    })(
        login_view
    )
}


const login = withRouter(connect(null,
    dispatch => ({
        onSubmit: function (data) {
            dispatch(action_creator.login(data.email))
        }
    }))(form(id, validate)))

export default login
