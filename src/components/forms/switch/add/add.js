import React from 'react';
import {Route} from "react-router-dom"
import table_structure from "../../../../containers/table_structure/add"
import column from "../../../../containers/column/add"
import channel from "../../../../containers/channel/add"
import daily_report from "../../../../containers/daily_report/add"
import role from "../../../../containers/role/add"
import user from "../../../../containers/user/add"
import community from "../../../../containers/community/add"
import house from "../../../../containers/house/add"
import fund from "../../../../containers/fund/add"
import contract_payment_add from "../../../../containers/fund/contract_payment_add"
import config_transformation from "../../../../containers/config_transformation/add"
import upload_file from "../../../../containers/upload_file/add"
import customer_info from "../../../../containers/customer_info/add"
import customer_level from "../../../../containers/customer_level/add"
import contract from "../../../../containers/contract/add"
import customer_owner from "../../../../containers/customer_owner/add"
import commission from "../../../../containers/commission/add"
import community_role from "../../../../containers/community_role/add"
import permission from "../../../../containers/permission/add"
import permission_role from "../../../../containers/permission_role/add"
import community_seller from "../../../../containers/community_seller/add"
import house_owner from "../../../../containers/house_owner/add"
import customer from "../../../../containers/customer/add"
// import template from "../../../../containers/template/add"

const Add_form_switch = () => (
    <div>
        <Route path="/customer_info/add" component={customer_info}/>
        <Route path="/customer_level/add" component={customer_level}/>
        <Route path="/customer_owner/add" component={customer_owner}/>
        <Route path="/commission/add" component={commission}/>
        <Route path="/community_role/add" component={community_role}/>
        <Route path="/permission/add" component={permission}/>
        <Route path="/permission_role/add" component={permission_role}/>
        <Route path="/community_seller/add" component={community_seller}/>
        <Route path="/house_owner/add" component={house_owner}/>
        <Route path="/customer/add" component={customer}/>
        {/*<Route path="/template/add" component={template}/>*/}
        <Route path="/table_structure/add" component={table_structure}/>
        <Route path="/column/add/" component={column}/>
        <Route path="/channel/add/" component={channel}/>
        <Route path="/daily_report/add/" component={daily_report}/>
        <Route path="/role/add/" component={role}/>
        <Route path="/user/add" component={user}/>
        <Route path="/community/add" component={community}/>
        <Route path="/house/add" component={house}/>
        <Route path="/config_transformation/add" component={config_transformation}/>

        <Route path="/house/:house/subscribe" component={fund}/>
        <Route path="/contract/:house(\d+)" component={contract}/>
        <Route path="/house/:house(\d+)/payment" component={contract_payment_add}/>

        <Route path="/house_batch_upload/community/:community(\d+)" component={upload_file}/>
        <Route path="/upload_file/add" component={upload_file}/>
    </div>
)

export default Add_form_switch