import React from "react"
import {Route} from "react-router-dom"

import table_structure from "../../../../containers/table_structure/index"
import column from "../../../../containers/column/index"
import channel from "../../../../containers/channel/index"
import daily_report from "../../../../containers/daily_report/index"
import house from "../../../../containers/house/index"
import upload_file from "../../../../containers/upload_file/index"
import customer_info from "../../../../containers/customer_info/index"
import customer_level from "../../../../containers/customer_level/index"
import contract from "../../../../containers/contract/index"
import customer_owner from "../../../../containers/customer_owner/index"
import commission from "../../../../containers/commission/index"
import community_role from "../../../../containers/community_role/index"
import community from "../../../../containers/community/index"
import role from "../../../../containers/role/index"
import permission from "../../../../containers/permission/index"
import user from "../../../../containers/user/index"
import permission_role from "../../../../containers/permission_role/index"
import community_seller from "../../../../containers/community_seller/index"
import house_owner from "../../../../containers/house_owner/index"
import customer from "../../../../containers/customer/index"
// import template from "../../../../containers/template/index"
import fund from "../../../../containers/fund/index"
import contract_payment from "../../../../containers/fund/contract_payment_list"

const Table_switch = () => {
    return (
        <div>
            <Route path="/customer_owner/:name(\d+)" component={customer_owner}/>
            <Route path="/customer_owner/items" component={customer_owner}/>

            <Route path="/upload_file/items" component={upload_file}/>
            <Route path="/user/items" component={user}/>
            <Route path="/customer_info/items" component={customer_info}/>
            <Route path="/customer_level/items" component={customer_level}/>
            <Route path="/contract/items" component={contract}/>
            <Route path="/commission/items" component={commission}/>
            <Route path="/role/items" component={role}/>
            <Route path="/permission/items" component={permission}/>
            <Route path="/permission_role/items" component={permission_role}/>
            <Route path="/community_role/items" component={community_role}/>
            <Route path="/community_seller/items" component={community_seller}/>
            <Route path="/house_owner/items" component={house_owner}/>
            <Route path="/customer/items" component={customer}/>
            {/*<Route path="/template/items" component={template}/>*/}
            <Route path="/table_structure/items" component={table_structure}/>
            <Route path="/column/items" component={column}/>
            <Route path="/channel/items" component={channel}/>
            <Route path="/daily_report/items" component={daily_report}/>
            <Route path="/house/items" component={house}/>
            <Route path="/fund/items" component={fund}/>
            <Route path="/community/items" component={community}/>
            <Route path="/house/:house(\d+)/payment" component={contract_payment}/>


            <Route path="/fund/house/:house" component={fund}/>
        </div>
    )
}


export default Table_switch
