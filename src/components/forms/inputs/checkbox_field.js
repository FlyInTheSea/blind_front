import React from "react"
import Checkbox from 'material-ui/Checkbox'
import {connect} from "react-redux"
import {Field} from "redux-form"

const styles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 16,
    },
};


const SingleRenderCheckboxField = ({
                                       item,
                                       input,
                                       label,
                                   }) => {

    return (
        <Checkbox
            label={item.display_name}
            style={styles.checkbox}
            {...input}
            onClick={
                () => input.onChange(!input.checked)
            }
            type={"checkbox"}
        />
    )

}

const renderCheckboxField = ({
                                 extra_message,
                                 ...rest
                             }) => {
    return (
        <div>
            {
                extra_message.map(
                    (item, key) => (

                        <Field
                            key={key}
                            component={SingleRenderCheckboxField}
                            type={"checkbox"}
                            {...rest}
                            item={item}
                            name={`${rest.name}[${item.value}]`}
                        />

                    )
                )
            }

        </div>
    )
}


export default renderCheckboxField