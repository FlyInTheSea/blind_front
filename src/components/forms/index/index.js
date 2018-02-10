/**
 * Created by zhu on 7/17/17.
 */

import * as actions from "../../../action"
import {connect} from "react-redux"
import Table_content from "../../../components/Table/Table_content"
import * as reducer from "../../../reducer"
import * as front_urls from "../../../front_url"


const del_item = (item, id) => {
    return {
        type: actions.DEL_ASYNC,
        id,
        del_id: item.id
    }
}


const get_index = (id, addition_operation = [], query_params) => {
    return connect(
        (state, own_props) => {
            let table_structures
                = reducer.get_skeleton_fields(state, id)
            return {
                ...own_props,
                id,
                items: reducer.get_data_ids_and_by_id(state, id),
                // get_items(id, state, own_props),
                table_structures: [
                    {
                        name: "id",
                        name_alias: "id"
                    },
                    ...table_structures
                ],
                is_fetching: false,
                edit_url(item) {
                    return front_urls.get_edit_url(id, item.id)
                },
                addition_operation
            }
        },
        dispatch => {
            dispatch({
                type: actions.INDEX_ASYNC,
                query_params,
                page: 0,
                id,
            })

            dispatch({
                type: actions.SKELETON_FIELDS_ASYNC,
                id
            })

            return {
                del_item(item) {
                    dispatch(del_item(item, id))
                }
            }
        }
    )(Table_content)
}

export default get_index

