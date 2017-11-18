/**
 * Created by zhu on 7/17/17.
 */

import React, {Component} from 'react';
// import Table from "../../components/Table/Table"
import Pager from "../../components/Pager/Pager"
import NavLink from "react-router-dom/es/NavLink";
import view_urls from "../../view_urls";
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"

let Items = (props)=> {


    return (
        <div className="animated fadeIn">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <i className="fa fa-align-justify"></i> Striped Table
                            <NavLink to={
                                view_urls.column_add_specify_table_structure_name + "/" + props.match.params.id
                            } className="text-right" style={{
                                float: "right"
                            }}>
                                添加字段
                            </NavLink>
                        </div>
                        <div className="card-block">
                            <Table/>
                            <Pager/>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )

}

Items = withRouter(connect()(Items))

export default Items