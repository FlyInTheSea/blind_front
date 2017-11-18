import React from "react"
import * as actions from "../../action"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import Table_content from "../../components/Table/Table_content"
import * as reducer from "../../reducer"
import * as front_urls from "../../front_url"

import * as api_urls from "../../api/api_urls"
// import id from "./id"

const id = "contract_payments"


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
                    name: "amount",
                    name_alias: "金额",
                },
                {
                    name: "created_at",
                    name_alias: "付款时间",
                },
            ]
            let items = reducer.get_data_ids_and_by_id(state, id)
            items = {
                ...items,
                ids: items.ids
                    .filter(
                        item => {
                            return items.by_id[item].house_id == own_props.match.params.house
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
                url: api_urls.template_urls(api_urls.contract_payment_list, [
                    [
                        "house",
                        own_props.match.params.house
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
