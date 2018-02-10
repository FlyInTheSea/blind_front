import React from 'react';

const Items = ({
                   Table,
                   Load_more,
                   Search
               }) => (
    <div>
        <Search/>

        <div className="animated fadeIn">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <i className="fa fa-align-justify"></i>
                            {/*Striped Table*/}
                        </div>
                        <div className="card-block">
                            <Table/>
                            <Load_more/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

)

export default Items