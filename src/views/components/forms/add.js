import React, {Component} from 'react';
import Switch_input from "../../../components/forms/Switch_input"
import table_columns_type_map from "../../../config/table_column_type_map"
import * as actions from "../../../action/actions"


class Sub_form extends Component {

    componentWillMount() {
        const {id, dispatch} = this.props
        dispatch({
            type: actions.SKELETON_FIELDS_ASYNC,
            id
        })
    }

    render() {

        const {
            handleSubmit,
            table_structures,
            pristine,
            extra_columns_info,
            user_handle,
        } = this.props


        return (
            <form onSubmit={

                value => {
                    handleSubmit(value)
                }
            }>
                <div className="card-block">

                    {
                        table_structures.map(
                            (item, index) => {

                                return (
                                    <div key={index} className="form-group row">
                                        <div className="col-md-9">
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

                                        </div>
                                    </div>

                                )

                            }
                        )
                    }
                </div>
                <div className="card-footer">
                    <button type="submit" className="btn btn-sm btn-primary" disabled={pristine}>
                        <i className="fa fa-dot-circle-o"></i>
                        提交
                    </button>
                </div>
            </form>
        )
    }
}


export default Sub_form;



