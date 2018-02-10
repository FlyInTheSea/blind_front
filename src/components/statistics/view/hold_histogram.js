import React, {Component} from 'react';
import {connect} from "react-redux"
import ReactEcharts from 'echarts-for-react';  // or let ReactEcharts = require('echarts-for-react');

import moment from "moment"


const get_last_year_month_array = () => {
    let month_array = []
    for (let i = 12; i; i--) {
        month_array.push(moment().subtract(i, "month").format("YYYYMM"))
    }
    return month_array
}

const District = ({
                      title
                      , data
                  }) => {
    get_last_year_month_array()
    return (
        <ReactEcharts
            option={
                {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: Object.keys(data).map(
                            key => key
                        )
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: get_last_year_month_array()
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: Object.keys(data).map(
                        key => {
                            return {
                                name: key,
                                type: 'bar',
                                stack: '广告',
                                data: data[key]
                            }
                        }
                    ) || []
                }


            }
            notMerge={true}
            lazyUpdate={true}
            // theme={"dark"}
        />
    )
}

export default District
