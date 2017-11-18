import React, {Component} from 'react';
import {connect} from "react-redux"
import ReactEcharts from 'echarts-for-react';  // or let ReactEcharts = require('echarts-for-react');


const District = ({
                               title
                               , data
                           }) => {
    return (
        <ReactEcharts
            option={
                {
                    title: {
                        text: title,
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data:
                            data.map(item => item.name)
                    },
                    series: [
                        {
                            name: title,
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: data,
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
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
