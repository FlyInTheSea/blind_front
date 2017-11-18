import React, {Component} from 'react';
import {connect} from "react-redux"
import ReactEcharts from 'echarts-for-react';  // or let ReactEcharts = require('echarts-for-react');


const District = ({
                      title
                      , data
                  }) => {


    let {date, number, area, withdraw, sales_amount} = data
    let color = ['#5793f3', '#d14a61', '#675bba', 'green'];


    if (Array.isArray(data)) {
        return (<div>加载中</div>)
    }

    return (
        <ReactEcharts
            option={
                {
                    color,
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    grid: {
                        right: '20%'
                    },
                    toolbox: {
                        feature: {
                            dataView: {show: true, readOnly: false},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    legend: {
                        data:
                            [
                                withdraw.name, sales_amount.name, area.name, number.name
                            ]
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisTick: {
                                alignWithLabel: true
                            },
                            data: date.data
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: number.name,
                            // min: 0,
                            // max: 250,
                            position: 'right',
                            axisLine: {
                                lineStyle: {
                                    color: color[0]
                                }
                            },
                            axisLabel: {
                                formatter: '{value} 套'
                            }
                        },
                        {
                            type: 'value',
                            name: area.name,
                            // min: 0,
                            // max: 250,
                            position: 'right',
                            offset: 80,
                            axisLine: {
                                lineStyle: {
                                    color: color[1]
                                }
                            },
                            axisLabel: {
                                formatter: '{value} ㎡'
                            }
                        },
                        {
                            type: 'value',
                            name: withdraw.name,
                            // min: 0,
                            // max: 25,
                            position: 'left',
                            axisLine: {
                                lineStyle: {
                                    color: color[2]
                                }
                            },
                            axisLabel: {
                                formatter: '{value} 元'
                            }
                        },

                    ],
                    series: [
                        {
                            name: number.name,
                            type: 'bar',
                            yAxisIndex: 0,
                            data: number.data
                        },
                        {
                            name: area.name,
                            type: 'bar',
                            yAxisIndex: 1,
                            data: area.data
                        },
                        {
                            name: withdraw.name,
                            type: 'line',
                            yAxisIndex: 2,
                            data: withdraw.data
                        },
                        {
                            name: sales_amount.name,
                            type: 'line',
                            yAxisIndex: 2,
                            data: sales_amount.data,
                        }
                    ]
                }

            }
            notMerge={true}
            lazyUpdate={true}
            // theme={"dark"}
        />
    )
}

export default District
