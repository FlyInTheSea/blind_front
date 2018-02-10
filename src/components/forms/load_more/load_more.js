import * as api_urls from "../../../api/api_urls"
import {sprintf} from "sprintf-js"
import {connect} from "react-redux"
import * as actions from "../../../action"
import * as actions_creator from "../../../actions_creator"
import load_more_view from "../../../views/components/load_more"
import * as reducer from "../../../reducer"
import {getFormValues} from "redux-form"
import {trans_form_id_to_form_search_id} from "../../../tools/form_and_form_search_map"

const get_load_more = (id) => {
    return connect(
        (state, props) => {
            return {
                page: reducer.get_data_start(state, id),
                if_ended_page: reducer.get_data_ended_page(state, id),
                query_params: getFormValues(
                    trans_form_id_to_form_search_id(id)
                )(state)
            }
        },
        (dispatch) => {
            return {
                load_more(page, query_params) {
                    dispatch(actions_creator.load_content(id, page, {where: query_params}, false))
                }
            }
        }
    )(
        load_more_view
    )
}

export default get_load_more
