import React from "react"

import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'

const renderRadioGroup = ({ input, ...rest }) =>
    <RadioButtonGroup
        {...input}
        {...rest}
        valueSelected={input.value}
        onChange={(event, value) => input.onChange(value)}
    />

export default renderRadioGroup
