import React from 'react';

const Items = ({
                   data,
               }) => (
    <div className="animated fadeIn">



        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header">
                        <i className="fa fa-align-justify"></i>汇总
                    </div>
                    <div className="card-block">
                        <table className="table table-striped">
                            <thead>
                            </thead>
                            <tbody>
                            {
                                data.map(
                                    (item, key) => {
                                        return (
                                            <tr key={key}>
                                                <td>
                                                    {
                                                        item.display_name
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        item.value
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    }
                                )
                            }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Items