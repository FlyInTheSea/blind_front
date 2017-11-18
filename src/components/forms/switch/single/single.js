import React from "react"
import {Route} from "react-router-dom"

// import template from "../../../../containers/template/index"
import  community from "../../../../containers/overview/community"

const Table_switch = () => {
    return (
        <div>
            <Route path="overview/community/:community(\d+)" component={community}/>
        </div>
    )
}


export default Table_switch
