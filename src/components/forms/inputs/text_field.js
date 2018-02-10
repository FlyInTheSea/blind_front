import React from "react"
import TextField from "material-ui/TextField"

const renderTextField = ({
                             input,
                             floatingLabelText,
                             hintText,
                             label,
                             meta: {touched, error},

                             ...custom,
                             placeholder
                         }) => (

    <TextField
        hintText={hintText}
        floatingLabelText={floatingLabelText}
        errorText={touched && error}
        {...input}
        {...custom}
        placeholder={placeholder}
    />
)

export default renderTextField
