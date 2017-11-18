import React from 'react';

const Items = ({
                   Table,
               }) => (

    <div className="animated fadeIn">
        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header">
                        <i className="fa fa-align-justify"></i> Striped Table
                    </div>
                    <div className="card-block">
                        <Table/>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Items