import {reduxForm} from "redux-form"
import {withRouter} from "react-router-dom"
import * as reducer from "../../../reducer"
import {connect} from "react-redux"
import * as actions from "../../../action/actions"

import edit_form from "../../../views/components/forms/edit_form"

const get_form = (id, validate) => {
    return reduxForm({
            form: id,
            validate,
            enableReinitialize: true
        }
    )(
        edit_form
    )
}


const onSubmit_param = (id) => {
    return (res) => {
        return {
            type: actions.UPDATE_ASYNC,
            res,
            id,
        }
    }
}

const
    get_edit = (id, validate) => {

        return withRouter(
            connect(
                (state, own_props) => {
                    return {
                        id,
                        edit_id: own_props.match.params.id,
                        table_structures: reducer.get_skeleton_fields(state, id),
                        initialValues: reducer.get_data_edit_instance(state, id),
                    }
                },
                {
                    onSubmit: onSubmit_param(id)
                }
            )(get_form(id, validate))
        )
    }

export default get_edit
