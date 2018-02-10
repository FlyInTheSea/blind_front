import React from "react"
import {Route} from "react-router-dom"

import table_structure from "../../../../containers/table_structure/load_more"
import channel from "../../../../containers/channel/load_more"
import daily_report from "../../../../containers/daily_report/load_more"
import column from "../../../../containers/column/load_more"
import house from "../../../../containers/house/load_more"
import upload_file from "../../../../containers/upload_file/load_more"
import fund from "../../../../containers/fund/load_more"
import customer_info from "../../../../containers/customer_info/load_more"
import customer_level from "../../../../containers/customer_level/load_more"
import contract from "../../../../containers/contract/load_more"
import customer_owner from "../../../../containers/customer_owner/load_more"
import commission from "../../../../containers/commission/load_more"
import role from "../../../../containers/role/load_more"
import permission from "../../../../containers/permission/load_more"
import permission_role from "../../../../containers/permission_role/load_more"
import community_role from "../../../../containers/community_role/load_more"
import community_seller from "../../../../containers/community_seller/load_more"
import house_owner from "../../../../containers/house_owner/load_more"
// import template from "../../../../containers/template/load_more"

const Load_more_switch = () => {
    return (
        <div>
            <Route path="/upload_file/items" component={upload_file}/>
            <Route path="/customer_info/items" component={customer_info}/>
            <Route path="/customer_level/items" component={customer_level}/>
            <Route path="/contract/items" component={contract}/>
            <Route path="/customer_owner/items" component={customer_owner}/>
            <Route path="/commission/items" component={commission}/>
            <Route path="/role/items" component={role}/>
            <Route path="/permission/items" component={permission}/>
            <Route path="/permission_role/items" component={permission_role}/>
            <Route path="/community_role/items" component={community_role}/>
            <Route path="/community_seller/items" component={community_seller}/>
            <Route path="/house_owner/items" component={house_owner}/>
            {/*<Route path="/template/items" component={template}/>*/}
            <Route path="/table_structure/items" component={table_structure}/>
            <Route path="/column/items" component={column}/>
            <Route path="/channel/items" component={channel}/>
            <Route path="/daily_report/items" component={daily_report}/>
            <Route path="/house/items" component={house}/>
            <Route path="/fund/items" component={fund}/>
        </div>
    )
}


export default Load_more_switch
