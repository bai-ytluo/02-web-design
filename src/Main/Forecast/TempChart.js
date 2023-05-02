import React from 'react'; 
import ReactECharts from 'echarts-for-react'; 

const TempChart = (props) => {
    const weather = props.weather; 
    const options = {
        xAxis: {
            type: 'category',
            data: props.time, 
            name: 'Time', 
            axisLabel: {
                formatter: '{value}', 
                align: 'center'
            }
        },
        yAxis: { 
            type: 'value', 
            name: 'Temperature (°C)',
            nameTextStyle: {
                fontSize: 12,
                padding: [0, 0, 0, 20],
            },
            axisLabel: {
                formatter: '{value} °C',
                fontSize: 10,
            },
        },
        series: [
            { data: props.temp, type: 'line', smooth: 'true', 
                label: {
                    show: true,
                    formatter: (params) => {
                        const i = params.dataIndex; 
                        return `{i${weather[i]}|}`; 
                    }, 
                    rich: {
                        normal: {
                            color: '#999',
                            fontSize: 12
                        }, 
                        ...weather.reduce((acc, cur) => {
                            acc[`i${cur}`] = {
                            height: 24,
                            align: 'left',
                            backgroundColor: {
                                image: `http://openweathermap.org/img/w/${cur}.png`
                            }
                            };
                            return acc;
                        }, {})
                        /* i10d: {
                            height: 24, 
                            align: 'left',
                            backgroundColor: {
                                image: 'http://openweathermap.org/img/w/10d.png'
                            }
                        } */
                    }
                }
            }
        ],
    }; 
    return <ReactECharts option={options} />
}

export default TempChart; 