import React from "react"
import {Field, FieldArray} from "redux-form"
import renderTextField from "./inputs/text_field"
import renderSelectField from "./inputs/select_field"
import MenuItem from 'material-ui/MenuItem'
import RenderDateField from "./inputs/date_picker_field"
import renderRadioGroup from "./inputs/radio_field"
import uploadField from "./inputs/upload_field"
import {RadioButton} from 'material-ui/RadioButton'
import moment from "moment"
import RenderCheckboxField from "./inputs/checkbox_field";


const get_extra_message = (extra_columns_info, id) => {

    if (extra_columns_info && extra_columns_info[id]) {
        return extra_columns_info[id]
    }
    else {
        return [];
    }
}

const get_extra_handler = (user_handle, id) => {
    if (user_handle && user_handle[id]) {
        return user_handle[id]
    }

    return null
}
const Switch_input = ({
                          user_handle,
                          extra_columns_info,
                          ...rest

                      }) => {
    let {
        type,
        id,
    } = rest

    let extra_message = get_extra_message(extra_columns_info, id)
    let extra_handler = get_extra_handler(user_handle, id)

    switch (type) {
        case "date":

            return <Field

                format={
                    (val) => {

                        if (!val) {
                            return val = new Date()
                        }
                        if (typeof val === "number" && val < 111111111) {
                            val = val + ""
                            val = val.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
                            return val = new Date(val)
                        }
                        return new Date(val)
                    }
                }

                parse={
                    (val) => {
                        if (!val) {
                            return Date.parse(Date.now())
                        }
                        return Date.parse(val)
                    }
                }
                extra_handler={extra_handler}
                component={RenderDateField} {...rest} />
            break
        case "text":
            return (
                <Field {...rest} component={renderTextField}/>
            )
            break
        case "number":
            return (
                <Field {...rest} component={renderTextField}/>
            )
            break

        case "select":

            return (
                <Field {...rest}
                       component={renderSelectField}
                       extra_handler={extra_handler}
                >
                    {
                        extra_message.map(
                            (item, key) => (
                                <MenuItem key={key} primaryText={item.display_name} value={item.value}/>
                            )
                        )
                    }
                </Field>
            )
            break

        case "checkbox":
            return (
                <RenderCheckboxField
                    extra_message={extra_message}
                    {...rest}
                />
            )
            break
        case "radio":
            return (
                <Field component={renderRadioGroup}>

                    {

                        extra_message.map(
                            (item, key) => (
                                <RadioButton value={item.value} label={item.display_name}/>
                            )
                        )
                    }
                </Field>
            )
            break

        /**        case "upload":
         return (
         <Field
         {...rest}
         component={uploadField}
         >

         </Field>
         )
         break
         **/
        default :
            return (
                <Field {...rest} component={renderTextField}/>
            )
            break
    }


}


export default Switch_input


