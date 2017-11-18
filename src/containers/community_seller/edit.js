import React from 'react';
import {connect} from "react-redux"
import validate from "../../valid/daily_report"
import * as actions from "../../action/actions"
import 'react-toastify/dist/ReactToastify.min.css'
import * as reducer from "../../reducer"
import get_edit from "../../components/forms/edit/get_edit";
import id from "./id"

const Edit_form = connect(
    state => {
        return {
            extra_columns_info: {
                parent_id: reducer.get_config(state, "channels"),
            }
        }
    },
    null
)(get_edit(id, validate,))

export default Edit_form