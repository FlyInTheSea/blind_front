import React from "react"
import {Route} from "react-router-dom"

import Add from "../../components/forms/view/add"
import Items from "../../components/forms/items"
import Single_item from "../../components/forms/single_item"
import Edit from "../../components/forms/edit"
import Statistics from "../../components/statistics/index"

import show from "../../containers/commission/show"
import community_show from "../../containers/community/show"

import Rich_text from "../../components/rich_text/quill"

const Content = () => {

    return (
        <div>
            <Route path="/customer_owner/:name(\d+)" component={Items}/>
            <Route path="/community/:community(\d+)/contract_template/add" component={Rich_text}/>
            {/*<Route path="/baidu" table_structure component={A}/>*/}
            <Route path="/:table/add" component={Add}/>
            <Route path="/:table/items" component={Items}/>
            <Route path="/:table/edit/:name" component={Edit}/>
            <Route path="/statistics" component={Statistics}/>
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
