import React from "react"
import {Route} from "react-router-dom"

import Add from "../../components/forms/view/add"
import Items from "../../components/forms/items"
import Single_item from "../../components/forms/single_item"
import Edit from "../../components/forms/edit"
import Statistics from "../../components/statistics/index"

import show from "../../containers/commission/show"
import community_show from "../../containers/community/show"


const Content = () => {
    return (
        <div>
            <Route path="/:table/add" table_structure component={Add}/>
            <Route path="/:table/items" table_structure component={Items}/>
            <Route path="/:table/edit/:name" table_structure component={Edit}/>
            <Route path="/statistics" table_structure component={Statistics}/>

            <Route path="/house/:house/subscribe" component={Add}/>
            <Route path="/house/:house(\d+)/payment" component={Add}/>
            <Route path="/house/:house(\d+)/payment" component={Items}/>
            <Route path="/contract/:house(\d+)" component={Add}/>


            <Route path="/overview/community/:community(\d+)" component={community_show}/>

            <Route path="/commission/user/:user(\d+)" component={show}/>
            <Route path="/commission/user/:user(\d+)" component={Single_item}/>

            <Route path="/fund/house/:house" component={Items}/>


            <Route path="/house_batch_upload/community/:community(\d+)" component={Add}/>

            <Route path="/overview/community/:community(\d+)" component={Statistics}/>

        </div>
    )
}

export default Content
