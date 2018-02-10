import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import React from "react"
import id from "./id"
import validate from "../../valid/daily_report"
import * as creator from "../../actions_creator"
import DropZone from "react-dropzone"
import * as reducer from "../../reducer/index";
import {reduxForm} from "redux-form"

import * as actions_creator from "../../actions_creator"
import * as  api from "../../api"


const Upload_prompt = ({status, uploaded_file}) => {
    if (status === null) {
        return (
            <p>拖拽或者点击上传</p>
        )
    } else if (status === 1) {

        return (
            <p>
                加载中
            </p>
        )
    } else {
        let imgtype = uploaded_file.name.toLowerCase().split('.').pop();
        if (imgtype === "png" || imgtype === "jpeg" || imgtype === "bmp" || imgtype === "jpg") {
            return (
                <img
                    width={"100%"}
                    height={"100%"}
                    key={uploaded_file.preview} src={
                    uploaded_file.preview
                }/>
            )

        } else {
            return (
                <h3 key={uploaded_file.preview}>
                    {
                        uploaded_file.name
                    }
                </h3>
            )
        }

    }
}


class Upload_template extends React.Component {
    render() {

        const {
            handleSubmit,
            onDrop,
            upload_status,
            uploaded_file,
            uploaded_url,
        } = this.props
        return (
            <form onSubmit={
                e => {
                    e.preventDefault()
                    handleSubmit(uploaded_url)
                }
            }>
                <div className="card-block">

                    <div className="form-group row">
                        <div className="col-md-9">
                            <DropZone
                                name={"file"}
                                multiple={false}
                                onDrop={
                                    onDrop
                                }>
                                <Upload_prompt status={upload_status} url={uploaded_file}
                                               uploaded_file={uploaded_file}/>
                            </DropZone>
                            <input type="hidden" name={"jian"} value={"223"}/>

                        </div>
                    </div>

                </div>
                <div className="card-footer">
                    <button type="submit" className="btn btn-sm btn-primary">
                        <i className="fa fa-dot-circle-o"></i>
                        提交
                    </button>
                </div>
            </form>
        )

    }
}


const Up = reduxForm({
    form: id,
    validate,
    destroyed: false
})(
    Upload_template
)

const Upload = withRouter(connect(
    state => {
        return {
            upload_status: reducer.get_upload_status(state, id),
            uploaded_url: reducer.get_uploaded_url(state, id),
            uploaded_file: reducer.get_uploaded_file(state, id),
            last_uploaded_file_url: reducer.get_last_uploaded_url(state, id)
        }
    },
    (dispatch, own_props) => {

        let params = {
            community_id: own_props.match.params.community
        }
        return {
            handleSubmit(url) {
                dispatch(
                    actions_creator.uploaded_file_url_submit_async(url, api.room_status_load_from_excel, params)
                )
            },
            onDrop(acceptedFiles, rejectedFiles) {
                dispatch(
                    creator.upload_file_async(acceptedFiles[0], id)
                )
            }
        }
    }
    )(Upload_template)
)


export default Upload

