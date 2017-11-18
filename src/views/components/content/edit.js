import React from "react"


const Edit = ({
                  Edit_form
              }) => {
    return (
        <div className="animated fadeIn">

            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <strong>Basic Form</strong> Elements
                        </div>
                        <Edit_form/>
                    </div>
                </div>
            </div>
        </div>
    )


}


export default Edit
