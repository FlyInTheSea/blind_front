import React from "react"
import get_search_options from "../../components/Search_params";
import id from "./id"
import * as reducer from "../../reducer";
import * as actions from "../../action";
import {connect} from "react-redux";
import validate from "../../valid/channel";

const search_options = [
    {
        name: "community_id",
        name_alias: "项目",
        type: 2
    },

    {
        name: "floor",
        name_alias: "楼层",
        type: 1
    },
    {
        name: "entrance",
        name_alias: "单元",
        type: 1
    },
    {
        name: "unit",
        name_alias: "楼号",
        type: 1
    },
    {
        name: "number",
        name_alias: "房间号",
        type: 1
    },
]


const my_connect = connect(
    state => {
        return {
            extra_columns_info: {
                community_id: reducer.get_config(state, "communities"),
            },
        }
    },
    dispatch => {
        dispatch({
            type: actions.CONFIG_ASYNC,
            id: "communities"
        })
        return {}
    }
)

const Search = get_search_options(id, search_options, validate, my_connect)

export default Search

