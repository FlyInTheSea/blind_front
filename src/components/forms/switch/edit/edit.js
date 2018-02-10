import React from 'react';
import {Route} from "react-router-dom"

import table_structure from "../../../../containers/table_structure/edit"
import channel from "../../../../containers/channel/edit"
import daily_report from "../../../../containers/daily_report/edit"
import column from "../../../../containers/column/edit"
import house from "../../../../containers/house/edit"
import upload_file from "../../../../containers/upload_file/edit"
import customer_info from "../../../../containers/customer_info/edit"
import customer_level from "../../../../containers/customer_level/edit"
import contract from "../../../../containers/contract/edit"
import customer_owner from "../../../../containers/customer_owner/edit"
import commission from "../../../../containers/commission/edit"
import community from "../../../../containers/community/edit"
import role from "../../../../containers/role/edit"
import permission from "../../../../containers/permission/edit"
import permission_role from "../../../../containers/permission_role/edit"
import community_role from "../../../../containers/community_role/edit"
import community_seller from "../../../../containers/community_seller/edit"
import house_owner from "../../../../containers/house_owner/edit"
import customer from "../../../../containers/customer/edit"
// import template from "../../../../containers/template/edit"

const Edit_form = () => (
    <div>
        <Route path="/upload_file/edit/:id" component={upload_file}/>
        <Route path="/customer_info/edit/:id" component={customer_info}/>
        <Route path="/customer_level/edit/:id" component={customer_level}/>
        <Route path="/contract/edit/:id" component={contract}/>
        <Route path="/customer_owner/edit/:id" component={customer_owner}/>
        <Route path="/commission/edit/:id" component={commission}/>
        <Route path="/community_role/edit/:id" component={community_role}/>
        <Route path="/role/edit/:id" component={role}/>
        <Route path="/permission/edit/:id" component={permission}/>
        <Route path="/permission_role/edit/:id" component={permission_role}/>
        <Route path="/community_seller/edit/:id" component={community_seller}/>
        <Route path="/house_owner/edit/:id" component={house_owner}/>
        <Route path="/customer/edit/:id" component={customer}/>
        {/*<Route path="/template/edit/:id" component={template}/>*/}
        <Route path="/table_structure/edit/:id" component={table_structure}/>
        <Route path="/column/edit/:id" component={column}/>
        <Route path="/channel/edit/:id" component={channel}/>
        <Route path="/daily_report/edit/:id" component={daily_report}/>
        <Route path="/community/edit/:id" component={community}/>
        <Route path="/house/edit/:id" component={house}/>
    </div>
)
export default Edit_form
