import React, {Component} from "react"
import Load from "../../../components/load/load"
import Switch_input from "../../../components/forms/Switch_input"
import table_columns_type_map from "../../../config/table_column_type_map"
import * as actions from "../../../action"

const normalize_date = value => {

    let date, date_str
    if (typeof value === "number") {
        date_str = value + ""
        date_str = date_str.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
        date = new Date(date_str)
    } else if (!value) {
        date = new Date()
    }
    return date
}

class Edit_form extends Component {
    componentWillMount() {

        const {dispatch,id,edit_id} = this.props
        dispatch({
            type: actions.SKELETON_FIELDS_ASYNC,
            id
        })
        dispatch({
            type: actions.EDIT_ASYNC,
            id,
            edit_id
        })
    }

    render() {
        const {
            handleSubmit,
            match,
            is_fetching,
            item,
            table_structures,
            extra_columns_info,
            save_url,
            pristine,
            submitting,
            id,

        } = this.props


        if (is_fetching) {
            return <Load/>
        }

        return (
            <form onSubmit={
                handleSubmit
            }>

                <div className="card-block">

                    {
                        table_structures.map((item, index) => {

                            return (
                                <div className="form-group row" key={index}>

                                    <div className="col-md-12">

                                        <Switch_input
                                            key={index}
                                            floatingLabelText={item.name_alias}
                                            type={table_columns_type_map[item.type]}
                                            id={item.name}
                                            name={item.name}
                                            extra_columns_info={
                                                extra_columns_info
                                            }
                                        />

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="card-footer">
                    <button type="submit" className="btn btn-sm btn-primary" disabled={pristine || submitting}>
                        <i className="fa fa-dot-circle-o"></i>
                        提交
                    </button>
                </div>
            </form>
        )
    }
}


export default Edit_form