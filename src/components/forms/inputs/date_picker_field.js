import React from "react"
import DatePicker from "material-ui/DatePicker"
import areIntlLocalesSupported from 'intl-locales-supported';

let DateTimeFormat;

/**
 * Use the native Intl.DateTimeFormat if available, or a polyfill if not.
 */
if (areIntlLocalesSupported(['zh', 'zh-Hans-CN'])) {
    DateTimeFormat = global.Intl.DateTimeFormat;
} else {
    const IntlPolyfill = require('intl');
    DateTimeFormat = IntlPolyfill.DateTimeFormat;
    require('intl/locale-data/jsonp/zh');
    require('intl/locale-data/jsonp/zh-Hans-CN');
}

const Date = ({
                  hintText,
                  floatingLabelText,
                  input,
                  type,
                  ...custom,
                  onChange,
                  extra_handler
              }) => {

    return (

        <DatePicker
            hintText={floatingLabelText}
            floatingLabelText={floatingLabelText}
            okLabel="确定"
            cancelLabel="取消"
            container="inline"
            mode="landscape"
            DateTimeFormat={DateTimeFormat}
            locale="zh"
            {...custom}
            {...input}
            onChange={

                (event, value) => {

                    if (extra_handler && extra_handler.on_change) {
                        extra_handler.on_change(input, event, value)
                    }

                    input.onChange(value)
                }
            }


        />
    )
}

export default Date
