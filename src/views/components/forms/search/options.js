import React, {Component} from 'react';
import Switch_input from "../../../../components/forms/Switch_input"
import {connect} from "react-redux"
import Switch_input_for_search_options from "../../../../components/forms/Switch_input_for_search_options"
import table_columns_type_map from "../../../../config/table_column_type_map"
import * as actions from "../../../../action/actions"
import {formValues, reduxForm} from "redux-form"
import underscore from "underscore"
import {reset, change} from "redux-form"
import {get_forms_by_form_id} from "../../../../root_reducer"
import * as actions_creator from "../../../../actions_creator"
import * as reducer from "../../../../reducer"
import validate from "../../../../valid/channel";
import {trans_form_id_to_form_search_id} from "../../../../tools/form_and_form_search_map"

const Options_view = ({
                          search_entity
                          , remove_option_click,
                          extra_columns_info,
                          user_handle,
                      }) => {

    let {search_options = [], options_hidden = []} = search_entity
    return (
        <form>
            <div
                className="card-block search-form ">
                {
                    search_options.map(
                        ({name, name_alias, type}, index) => {
                            return (
                                <div className={"search_items"} key={index}>
                                    <button className="btn btn-primary"
                                            onClick={
                                                (event) => {
                                                    remove_option_click(event, name, index, search_options, options_hidden)
                                                }
                                            }>
                                        移除选项
                                    </button>
                                    <Switch_input_for_search_options
                                        key={index} floatingLabelText={name_alias} type={table_columns_type_map[type]}
                                        id={name} name={name} extra_columns_info={extra_columns_info}
                                        user_handle={user_handle}
                                    />
                                </div>
                            )
                        }
                    )
                }
            </div>
        </form>
    )
}


const Options = connect(
    (state, {id, extra_columns_info, user_handle}) => {
        return {
            search_entity: reducer.get_entity(state, id),
            extra_columns_info,
            user_handle,
            form: trans_form_id_to_form_search_id(id),
            validate,
        }
    },
    (dispatch, {id}) => {
        return {
            remove_option_click(e, name, index, search_options, options_hidden) {
                e.preventDefault()
                let changed = search_options[index]
                options_hidden.push(changed)

                search_options = [
                    ...search_options.slice(0, index),
                    ...search_options.slice(index + 1)
                ]
                dispatch(actions_creator.entity(id, "search_options", search_options))
                dispatch(actions_creator.entity(id, "options_hidden", options_hidden))
                dispatch(actions_creator.entity(id, "open", false))
                dispatch(change(id, name, null))

            }
            ,
        }
    }
)(
    reduxForm({
            destroyed: false,
            onChange(val, dispatch, {id}) {
                try {
                    dispatch(actions_creator.load_content("houses", 0, {where: val}, true))

                } catch (e) {

                }
            }
        }
    )(Options_view)
)


export default Options
