import React from 'react';
import {connect} from "react-redux"
import validate from "../../valid/daily_report"
import * as actions from "../../action/actions"
import 'react-toastify/dist/ReactToastify.min.css'
import * as reducer from "../../reducer"
import get_edit from "../../components/forms/edit/get_edit";
import id from "./id"
// value: item.id,
//display_name: item.name_alias

const Edit_form =
    connect(state => {
        return {
            extra_columns_info: {
                table_structure_id: reducer.get_config(state, "table_structures"),
            }
        }
    },
    (dispatch, own_props) => {
        dispatch({
            type: actions.CONFIG_ASYNC,
            id: "table_structures"
        })
        return {}
    }
)(get_edit(id, validate,))

export default Edit_form