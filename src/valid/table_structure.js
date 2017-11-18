let validate = (values) => {
    const errors = {}
    if (!values.name_alias) {
        errors.name_alias = '必须填写'
    } else if (values.name_alias.length > 8) {
        errors.name_alias = '8个字以内'
    }

    if (!values.name) {
        errors.name = "必须填写"
    } else if (
        !values.name.match(/^[a-z_]+$/)
    ) {
        errors.name = "只能是纯字母与下划线的组合"
    }
    return errors
}


export default validate