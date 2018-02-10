import React from "react"
import {connect} from "react-redux"
import Search_params from "../../views/components/forms/search/search_params"
import * as actions_creator from "../../actions_creator"


const get_search_options = (id, search_options = [], validate, my_connect = undefined) => {
    const search_options_name = search_options.map(
        item => {
            return item.name
        }
    )
    if (my_connect === undefined) {
        my_connect = connect()
    }

    return connect(state => {
            return {
                id,
                validate
            }
        },
        dispatch => {
            dispatch(actions_creator.entity(id, "search_options", search_options))
            return {}
        }
    )(my_connect(Search_params))

}

export default get_search_options
