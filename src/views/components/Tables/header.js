import React from "react"

const Header = ({
                          table_structures
                      }) => {
    return (
        <tr>
            {
                table_structures.map(
                    (item, index) => {
                        return (
                            <th key={index}>
                                {item.name_alias}
                            </th>
                        )
                    }
                )
            }
            <th>
                操作
            </th>
        </tr>
    )
}


export default Header