import React from 'react';
import Show_form from "../../../views/components/content/show";
import * as creator from "../../../actions_creator"
import * as reducer from "../../../reducer"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"


const get_show = (url_pattern,  filter = []) => {

    return withRouter(
        connect(
            state => {
                let data = reducer.get_url_specify(state, url_pattern) || []
                return {
                    data,
                }
            },
            (dispatch, own_props) => {
                dispatch(creator.url_specify_async_creator(own_props.url, url_pattern))
                return {}
            }
        )(Show_form)
    )

}

export default get_show