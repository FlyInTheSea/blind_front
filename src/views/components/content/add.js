import React from "react"

const Add = ({Add_form_switch}) => {
    return (
        <div className="animated fadeIn">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            {/*<strong>Basic Form</strong> Elements*/}
                            <strong>
                                添加
                            </strong>
                        </div>
                        <Add_form_switch/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Add