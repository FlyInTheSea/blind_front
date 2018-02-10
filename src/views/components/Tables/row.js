import React from "react"
import NavLink from "react-router-dom/es/NavLink";
import Link from "react-router-dom/es/Link";
import {FlatButton, RaisedButton} from "material-ui"

import uuid from "uuid"


const Row = ({
                 item,
                 table_structures,
                 edit_url,
                 del_item,
                 addition_operation
             }) => {

    if (!Array.isArray(addition_operation)) {
        addition_operation = addition_operation(item)
    }


    return (
        <tr>
            {
                table_structures.map(
                    (row, index) => {
                        return (
                            <td key={index}>
                                {item[row.name]}
                            </td>
                        )
                    }
                )
            }

            <td key={uuid.v4()}>
                {
                    addition_operation.map(
                        ({url, name, style, user_handle}) => {
                            if (!url) {
                                return (
                                    <FlatButton key={uuid.v4()} style={style} {...user_handle} >
                                        {name}
                                    </FlatButton>
                                )
                            }
                            return (
                                <FlatButton key={url}>
                                    <Link to={url} style={style}>
                                        {name}
                                    </Link>
                                </FlatButton>
                            )
                        }
                    )
                }
                {"  "}
                <FlatButton primary={true} key={uuid.v4()}>
                    <Link to={edit_url(item)}>
                        修改
                    </Link>
                </FlatButton>
                {"  "}
            </td>
        </tr>
    )


}


export default Row
