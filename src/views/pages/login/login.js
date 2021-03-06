import React from 'react';
import Switch_input from "../../../components/forms/Switch_input"
import table_columns_type_map from "../../../config/table_column_type_map"

import {ToastContainer} from 'react-toastify';

const Login = ({
                   history, pristine,
                   handleSubmit,
               }) => {
    let item = {
        name_alias: "email",
        type: 1,
        name: "email"
    }
    return (
        <form onSubmit={

            value => {
                handleSubmit(value)
            }
        }>
            <div className="app flex-row align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4K">
                            <div className="card-group mb-0">
                                <div className="card-block login_form_container">
                                    <div className={"login_head"}>
                                    </div>
                                    {/*<p className="text-muted">*/}
                                    {/*您的账户*/}
                                    {/*</p>*/}

                                    <div className="input-group mb-3">
                                        <Switch_input
                                            floatingLabelText={"输入登录邮箱"}
                                            type={table_columns_type_map[item.type]}
                                            id={item.name}
                                            name={item.name}
                                        />
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-block btn-primary  px-4"
                                            // disabled={pristine}
                                        >
                                            登陆
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="bottom-center"
                type="default"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
            />
        </form>
    );
}

export default Login;
