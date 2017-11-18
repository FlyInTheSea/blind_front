import React from "react"
import * as actions from "../../action"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import Table_content from "../../components/Table/Table_content"
import * as reducer from "../../reducer"
import * as front_urls from "../../front_url"

import * as api_urls from "../../api/api_urls"
// import id from "./id"

const id = "one_person_commission"


const del_item = (item, id) => {
    return {
        type: actions.DEL_ASYNC,
        id,
        del_id: item.id
    }
}


const get_index = (id, addition_operation = []) => {
    return withRouter(connect(
        (state, own_props) => {
            let table_structures = [
                {
                    name: "community_id",
                    name_alias: "小区",
                },
                {
                    name: "amount",
                    name_alias: "金额",
                },
                {
                    name: "rate",
                    name_alias: "费率",
                },
                {
                    name: "commission",
                    name_alias: "佣金",
                },
                {
                    name: "role",
                    name_alias: "角色",
                },
            ]
            let items = reducer.get_data_ids_and_by_id(state, id)
            items = {
                ...items,
                ids: items.ids
                    .filter(
                        item => {
                            return items.by_id[item].user_id == own_props.match.params.user
                        }
                    )
            }
            return {
                id,
                addition_operation,
                items,
                // get_items(id, state, own_props),
                table_structures,
                is_fetching: false,
                edit_url(item) {
                    return front_urls.get_edit_url(id, item.id)
                }
            }
        },
        (dispatch, own_props) => {
            dispatch({
                type: actions.INDEX_ASYNC,
                id,
                page: 0,
                url: api_urls.template_urls(api_urls.one_person_commission, [
                    [
                        "user",
                        own_props.match.params.user
                    ]
                ])
            })
            return {
                del_item(item) {
                    dispatch(del_item(item, id))
                }
            }
        }
        )
        (Table_content)
    )
}

const Index = get_index(id)

export default Index
