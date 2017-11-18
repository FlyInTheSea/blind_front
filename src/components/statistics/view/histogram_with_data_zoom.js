import React, {Component} from 'react';
import {connect} from "react-redux"
import ReactEcharts from 'echarts-for-react';  // or let ReactEcharts = require('echarts-for-react');
import Show_with_data from "../../../views/components/content/show_with_date"
import * as reducer from "../../../reducer"


function get_interval_day(day_begin, day_end) {
    day_begin += ""
    let day = day_begin.substr(6, 2)
    let month = day_begin.substr(4, 2) - 1
    if (month < 10) {
        month = "0" + month
    }
    let year = day_begin.substr(0, 4)
    day_begin = new Date(year, month, day)

    day_end += ""
    day = day_end.substr(6, 2)
    month = day_end.substr(4, 2) - 1
    if (month < 10) {
        month = "0" + month
    }
    year = day_end.substr(0, 4)
    day_end = new Date(year, month, day)

    return (Date.parse(day_end) - Date.parse(day_begin)) / (60 * 60 * 24 * 1000)
}

function format_date_to_ymd(give_time) {
    let day
    if (give_time.getDate < 10) {
        day = 0 + "" + give_time.getDate()
    } else {

        day = "" + give_time.getDate()
    }
    let month = give_time.getMonth() + 1
    if (month < 10) {
        month = "0" + month
    }
    return give_time.getFullYear() + "" + month + day
}

const District_template = ({
                               title
                               , data
                               , option
                           }) => {

    if (Array.isArray(data)) {
        return (<div>加载中</div>)
    }

    let {date, number, area, withdraw, sales_amount} = data


    let number_total = ""
    let area_total = ""
    let withdraw_total = ""
    let sales_amount_total = ""
    let time_internal;

    if (option.from && option.end && ( time_internal = Date.parse(option.from) - Date.parse(option.end)) <= 0) {
        let day_internal = time_internal / 60 / 60 / 24 / 1000;

        let one_year_ago = new Date(Date.parse(new Date()) - 365 * 24 * 60 * 60 * 1000)

        one_year_ago = format_date_to_ymd(one_year_ago)
        let index = get_interval_day(one_year_ago, format_date_to_ymd(option.from))
        number_total = 0;
        area_total = 0;
        withdraw_total = 0;
        sales_amount_total = 0;
        for (; day_internal < 1; index++, ++day_internal) {
            if (index > 365) {
                break
            }
            if (number.data[index] === undefined) {
                break
            }
            number_total += parseFloat(number.data[index])
            area_total += parseFloat(area.data[index])
            withdraw_total += parseFloat(withdraw.data[index])
            sales_amount_total += parseFloat(sales_amount.data[index])
        }

    }


    let color = ['#5793f3', '#d14a61', '#675bba', 'green'];
    return (
        <div>
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

                        dataZoom: [
                            {
                                show: true,
                                start: 0,
                                left: 30,
                                right: 30,
                                end: 5,
                            },
                            {
                                type: 'inside',
                                start: 0,
                                end: 5
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

            <Show_with_data data={
                [
                    {
                        display_name: "套数",
                        value: number_total
                    },
                    {
                        display_name: "销售总额",
                        value: sales_amount_total
                    },
                    {
                        display_name: "回款总额",
                        value: withdraw_total
                    },
                    {
                        display_name: "面积",
                        value: area_total
                    }
                ]
            }/>
        </div>
    )
}

let id = "option_sell_station"

const District = connect(
    state => {
        return {
            option: reducer.get_option(state, id)
        }
    },
)(District_template)


export default District
