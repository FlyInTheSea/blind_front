import React, {Component} from 'react';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Content from "../content"
import {ToastContainer} from 'react-toastify';


import ReactEcharts from 'echarts-for-react';  // or let ReactEcharts = require('echarts-for-react');


class Full extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <div className="app-body">
                    <Sidebar {...this.props}/>
                    <main className="main">
                        <Breadcrumb/>
                        <div className="container-fluid">
                            <Content/>
                        </div>
                    </main>
                    <Aside/>
                </div>
                {/*<Footer/>*/}
                <ToastContainer
                    position="bottom-center"
                    type="default"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    pauseOnHover
                />
            </div>
        );
    }
}

export default Full;
