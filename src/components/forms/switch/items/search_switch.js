import React from "react"
import {Route} from "react-router-dom"

import house from "../../../../containers/house/search"

const Search_switch = () => {
    return (
        <div>
            <Route path="/house/items" component={house}/>
        </div>
    )
}


export default Search_switch
