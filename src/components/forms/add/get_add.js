import React from 'react';
import {reduxForm} from "redux-form"
import Sub_form from "../../../views/components/forms/add";
import * as creator from "../../../actions_creator"
import * as reducer from "../../../reducer"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"


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
                id,
                initialValues:
                    reducer.get_data_add_instance(state, id),
                table_structures:
                        reducer.get_skeleton_fields(state, id).filter(
                            item=> !(filter.indexOf(item.name) + 1)
                        ),
            }
        },
        dispatch => {
            return {
                onSubmit(data) {
                    dispatch(
                        creator.add_async_creator(id, data)
                    )
                }
            }
        }
        )
        (form(id, validate))
    )

}

export default get_add