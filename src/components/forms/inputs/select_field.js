import React from "react"
import SelectField from 'material-ui/SelectField'
import {connect} from "react-redux"

const renderSelectField = ({
                               input,
                               label,
                               meta: {touched, error},
                               children,
                               extra_handler,
                               ...custom
                           }) =>
    <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}

        onChange={
            (event, new_val, true_val) => {
                if (extra_handler && extra_handler.on_change) {
                    extra_handler.on_change(input, event, new_val, true_val)
                }
                input.onChange(true_val)
            }
        }
        children={children}
        {...custom}
    />


export default renderSelectField
