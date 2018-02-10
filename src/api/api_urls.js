import {domain} from "../config/config"
import * as db from "./db"

const column_add_specify_table_structure = domain + "/column/index/table_structure"
export const get = (table, action) => {
    return db.db[table][action]
}

const sidebar = domain + "/table_structures"
const fields = domain + "/columns/table"

const skeleton = {
    sidebar,
    fields
}

export const get_skeleton = (protion) => {
    return skeleton[protion]
}

export const get_config = (id) => {
    return db.config[id]
}

export const login = domain + "/" + "login"


export const columns_by_table_id = domain + "/columns/table"


export const contract_payment_list = domain + "/house/:house/payment"


export const one_person_commission = domain + "/commission/user/:user"


export const user_commission_amount = domain + "/user/:user/commission/amount"

export const over_one_community = domain + "/overview/community/:community"


export const config_tranformation_retrieve = domain + "/config_transformation/:config_transformation"


export const overview_district = domain + "/overview/community/:community/district"
export const overview_sex = domain + "/overview/community/:community/sex"
export const overview_channel = domain + "/overview/community/:community/channel"
export const overview_family = domain + "/overview/community/:community/family"
export const overview_house_type = domain + "/overview/community/:community/house_type"
export const overview_motive = domain + "/overview/community/:community/motive"


export const overview_house_type_twelve = domain + "/twelve/community/:community/house_type"
export const overview_sex_twelve = domain + "/twelve/community/:community/sex"
export const overview_motive_twelve = domain + "/twelve/community/:community/motive"
export const overview_district_twelve = domain + "/twelve/community/:community/district"
export const overview_family_twelve = domain + "/twelve/community/:community/family"
export const overview_channel_twelve = domain + "/twelve/community/:community/channel"


export const overview_one_year_sell_station_by_month = domain + "/overview/community/:community/one_year_sell_station_by_month"
export const overview_one_year_sell_station_by_day = domain + "/overview/community/:community/one_year_sell_station_by_day"


export const template_urls = (template, replace = []) => {
    return replace.reduce(
        (carry, item) => {
            return carry.replace(":" + item[0], item[1])
        }, template
    )
}


export const upload_file_excel = domain + "/file/excel"


export const room_status_load_from_excel = domain + "/room_status/load_from_excel"

export const rich_text = domain + "/contract_template"

export const  contract_template_edit = domain + "/contract_template"

export const  print_img_fund = domain + "/print_img/fund"



