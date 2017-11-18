import React from "react"


const Input_single = ({
                          type, name, hint, choices, value
                      }) => {

    let input;
    switch (type) {
        case "text":
        case "telephone":
        case "email":
        case "password":
            input = (
                <div>

                    <input type="text" id={name} name={name}
                           className="form-control"
                           placeholder={hint}/>
                    <span className="help-block">
                        {hint}
                    </span>
                </div>
            )
            break
        case "select":

            input = (
                <select id={name} name={name}
                        className="form-control">
                    <option>
                        {hint}
                    </option>
                    {
                        choices.map(
                            (item) => {
                                return (
                                    <option value={value}>
                                        {name}
                                    </option>
                                )
                            }
                        )
                    }


                </select>
            )

            break
        case "static":
            input = (
                <p className="form-control-static">
                    {value}
                </p>
            )

            break
        case "file":
            return (
                <input type="file"
                       id={name} name="file-input"/>

            )


    }

    return input
}


const Input_wrap = ({
                        item
                    }) => {

    return (
        <div className="form-group row">
            <label className="col-md-3 form-control-label"
                   htmlFor={item.name}>
                {item.name_alias}
            </label>
            <div className="col-md-9">
                <Input_single {...item}  />
            </div>
        </div>
    )
}


export default Input_wrap
