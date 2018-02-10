/**
 * Created by zhu on 7/17/17.
 */

import React from 'react'
import Item_view from "../../views/components/content/items"
import Load_more_switch from "./switch/items/load_more_switch"
import Table_switch from "./switch/items/table_switch"
import Search_switch from "./switch/items/search_switch"


const Items = () => {
    return (
        <Item_view Table={Table_switch} Load_more={Load_more_switch} Search={Search_switch } />
    )
}


export default Items