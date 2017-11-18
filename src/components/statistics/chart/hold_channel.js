import React, {Component} from 'react';
import {connect} from "react-redux"
import ReactEcharts from 'echarts-for-react';  // or let ReactEcharts = require('echarts-for-react');
import District_template from "../view/hold_histogram"
import * as creator from "../../../actions_creator/creator"
import * as urls from "../../../api/api_urls"
import * as reducer from "../../../reducer/index"

const url_template = urls.overview_channel_twelve
const District = connect(
    state => {
        return {
            title: "动机",
            data: reducer.get_url_specify(state, url_template) || [],
        }
    },
    (dispatch, own_props) => {

        dispatch(creator.url_specify_raw_data_async_creator(
            urls.template_urls(url_template,
                [
                    ["community", own_props.match.params.community]
                ]
            ),
            url_template
            )
        )

        return {}
    }
)(
    District_template
)

export default District
