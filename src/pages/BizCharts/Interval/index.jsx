/*
 * @Author: hiyan 
 * @Date: 2020-11-19 11:08:15 
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-11-19 14:53:17
 */
import { useState, useEffect } from 'react'
import { Chart, Interval }  from 'bizcharts'
import * as chartDataService from '../service'

const index = () => {
    const [ chartData, setChartData ] = useState([]);       
    // 加载后端数据
    useEffect(() => {
        async function fetchData() {
          const result = await chartDataService.get7daysOnlineHistoryByPercent();
          Array.isArray(result) ? setChartData(result) :[];
        }
        fetchData();
      },[]); 
    // 自定义Y轴tick range
    const scale = { // 用于<Chart>基础组件，而非图表组件
        value: { // value 是y轴对应chartData中value
            min: 0, 
            max: 100
        }
    }  
    return (
        <div>
            <Chart height={300} autoFit data={chartData} scale={scale}>        
                <Interval position="name*value" size={30}  label="value" />
            </Chart>            
        </div>
    )
}
export default index;