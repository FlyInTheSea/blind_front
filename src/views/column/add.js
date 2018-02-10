import React, {Component} from 'react';


import {Field} from "redux-form"


import Sub_form from "../../components/forms/Submit_form"

let Table_structure_add = () => {
    return (
        <div className="animated fadeIn">

            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            {/*<strong>Basic Form</strong> Elements*/}
                            添加
                        </div>
                        <Sub_form/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Table_structure_add
