import React from "react"
import {Field} from "redux-form"


const Error_info = ({error, warning, touched}) => {
    if (touched && ( error || warning)) {
        return (
            <span className="help-block alert-danger">{error}</span>
        )
    }
    return <span></span>

}


const Render_select =
    ({
         name_lost,
         input,
         label,
         type,
         placeholder,
         extra_columns_info,
         meta: {touched, error, warning}
     }) => (
        <div>
            <select {...input} type={type} placeholder={placeholder} className="form-control">


                <option></option>
                {


                    extra_columns_info[name_lost].map(
                        (item, key) => {
                            return (
                                <option key={key} value={item.value}>
                                    {
                                        item.display_name
                                    }
                                </option>
                            )
                        }
                    )


                }


            </select>
            <Error_info error={error} warning={warning} touched={touched}/>
        </div>
    )


export default Render_select