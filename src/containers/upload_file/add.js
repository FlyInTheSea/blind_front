import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import React from "react"
import id from "./id"
import validate from "../../valid/daily_report"
import * as creator from "../../actions_creator"
import DropZone from "react-dropzone"
import * as reducer from "../../reducer/index";
import {reduxForm} from "redux-form"

let Upload = ({
                  onSubmit,
                  onDrop,
                  imgs
              }) => {
    return (
        <form onSubmit={
            onSubmit
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
                            <p>
                                拖拽或者点击上传
                            </p>
                        </DropZone>
                        <h3>
                            {imgs}
                        </h3>
                        {

                            [].map(
                                item => {
                                    let imgtype = item.name.toLowerCase().split('.').pop();
                                    if (imgtype === "png" || imgtype === "jpeg" || imgtype === "bmp" || imgtype === "jpg") {
                                        return (
                                            <img
                                                width={"100px"}
                                                height={"100px"}
                                                key={item.preview} src={
                                                item.preview
                                            }/>
                                        )

                                    } else {
                                        return (
                                            <h3 key={item.preview}>
                                                {
                                                    item.name
                                                }
                                            </h3>
                                        )
                                    }

                                }
                            )
                        }
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


// Upload = (id, validate) => {

// return reduxForm({
//     form: id,
//     validate,
//     destroyed: false
// })(
//     Upload
// )
// }


Upload = withRouter(connect(
    state => ({
        imgs: reducer.get_upload(state, id)
    }),
    dispatch => {

        return {
            onSubmit(e) {
                console.log(e)
                e.preventDefault();
                let upload_file = document.getElementById("shit");
                // dispatch(
                //     creator.add_async_creator(id, data)
                // )

            },
            onDrop(acceptedFiles, rejectedFiles) {
                dispatch(
                    creator.upload_file_async(acceptedFiles[0], id)
                )
            }
        }
    }
    )(Upload)
)


const Up = reduxForm({
    form: id,
    validate,
    destroyed: false
})(
    Upload
)


export default Up

