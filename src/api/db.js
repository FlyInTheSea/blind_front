import {domain} from "../config/config"
import * as cities from "./database/cities"
import * as channels from "./database/channels"
import * as table_structures from "./database/table_structures"
import * as  communities from "./database/communities"
import * as  houses from "./database/houses"
import * as  columns from "./database/columns"
import * as  users from "./database/users"
import * as daily_reports from "./database/daily_reports"
import * as funds from "./database/funds"
import * as config_transformations from "./database/config_transformations"
import * as upload_files from "./database/upload_files"
import * as roles from "./database/roles"
import * as customer_info from "./database/customer_info"
import * as customers from "./database/customers"
import * as permissions from "./database/permissions"
import * as permission_roles from "./database/permission_roles"
import * as community_roles from "./database/community_roles"
import * as  community_sellers from "./database/community_sellers"
import * as  contracts from "./database/contract"
import * as  contract_payments from "./database/contract_payments"
import * as commission   from "./database/commission"
// import * as templates from "./database/templates"

export const db = {
    // templates,
    upload_files,
    cities,
    channels,
    daily_reports,
    table_structures,
    columns,
    users,
    communities,
    houses,
    funds,
    config_transformations,
    customer_info,
    roles,
    permissions,
    permission_roles,
    community_roles,
    community_sellers,
    contracts,
    commission,
    contract_payments,
    customers,
}

export const config = {
    cities: domain + "/" + "cities",
    roles: domain + "/" + "roles",
    channels: domain + "/" + "channels",
    table_structures: domain + "/" + "table_structures",
    table_structures_in_plural: domain + "/" + "table_structures" + "/plural",
    communities: domain + "/" + "communities",
    fields: domain + "/" + "columns/table",
    permissions: domain + "/" + "permissions",
    users: domain + "/" + "users",
}




