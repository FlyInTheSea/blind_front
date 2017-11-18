import React from "react"
import {Route} from "react-router-dom"

import user_commission from "../../../../containers/commission/one_person_commission"

const Table_switch = () => {
    return (
        <div>
            <Route path="/commission/user/:user(\d+)" component={user_commission}/>
        </div>
    )
}


export default Table_switch
