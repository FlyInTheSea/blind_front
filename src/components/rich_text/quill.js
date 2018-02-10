import React from "react"

import {connect} from "react-redux"
import * as actions_creator from "../../actions_creator"
import * as apis from "../../api"
import {withRouter} from "react-router-dom"


import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'
import 'react-quill/dist/quill.core.css'

import * as reducer from "../../reducer"

const {Toolbar} = ReactQuill
const id = "contract_template"

class Simple extends React.Component {
    constructor(props) {
        super(props)
        this.state = {text: this.props.initialValues}// You can also pass a Quill Delta here
        console.log(this.props.initialValues);
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    componentWillReceiveProps(next){

        console.log(next);
        this.setState({
            text:next.initialValues
        })
    }

    handleChange(value) {
        this.setState({text: value})
    }

    handleClick() {
        console.log(this.state.text)
        this.props.handle_submit({data: this.state.text})
    }

    render() {
        return (
            <div>
                <ReactQuill value={this.state.text}
                            modules={
                                {
                                    toolbar: [
                                        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                                        ['blockquote', 'code-block'],
                                        [{'header': 1}, {'header': 2}],               // custom button values
                                        [{'list': 'ordered'}, {'list': 'bullet'}],
                                        [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
                                        [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
                                        [{'direction': 'rtl'}],                         // text direction
                                        [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
                                        [{'header': [1, 2, 3, 4, 5, 6, false]}],

                                        [{'color': []}, {'background': []}],          // dropdown with defaults from theme
                                        [{'font': []}],
                                        [{'align': []}],

                                        ['clean'],// remove formatting button,
                                        ['link', 'image']
                                    ]
                                }
                            }
                            theme="snow"
                            onChange={this.handleChange}

                />
                <button onClick={this.handleClick}>提交</button>
            </div>
        )
    }
}


Simple = withRouter(connect(
    (state, own_props) => {
        return {
            initialValues:
                reducer.get_data_init_by_url(state, apis.contract_template_edit + "/" + own_props.match.params.community),
        }
    },
    (dispatch, own_props) => {

        let community_id = own_props.match.params.community

        dispatch(actions_creator.get_data_init_by_url_async(apis.contract_template_edit + "/" + community_id))

        let params = {
            community_id
        }

        return {
            handle_submit(data) {
                dispatch(actions_creator.rich_text_async(data, params))
            }
        }
    }
    )(Simple)
)

export default Simple
