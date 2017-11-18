import React from "react"
import {connect} from "react-redux"
import Table_content from "../../components/Table/Table_content"
import * as actions from "../../action"



const del_item = (item) => {
    return {
        type: actions.DEL_ASYNC,
        id,
        del_id: item.id
    }
}

const get_data = (state, id) => {
    return {
        ids: state.reducer.data.ids[id],
        by_id : state.reducer.data.by_id[id]
    }
}

const get_strucutres = (state, id) => {
    return state.reducer.skeleton.fields[id]
}

const map_state_to_props = (state) => {
    return {
        id,
        index: get_data(state, id),
        table_structures: get_strucutres(state, id),
        is_fetching: false,
    }

}

let Table = connect(
    map_state_to_props,
    dispatch => {
        dispatch({
            type: actions.INDEX_ASYNC,
            id,
            page:0
        })

        return {
            dispatch,
            del_item(item) {
                dispatch(del_item(item))
            }
        }
    }
)(Table_content)


export default Table