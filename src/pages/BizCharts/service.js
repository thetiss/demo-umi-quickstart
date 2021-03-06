/*
 * @Author: hiyan 
 * @Date: 2020-11-19 11:30:17 
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-11-20 10:15:38
 */
import { extend } from 'umi-request'
import { message } from 'antd'
const errorHandler = (error) => {
    if(error.response){
        if(error.response.status > 400){
            message.error(error.data.message)
        }
    }else{
        message.error("Network Error")
    }
    throw error;
}
const extendRequest = extend({errorHandler});
export const get7daysOnlineHistory = () => {
    return extendRequest('http://125.62.27.152/ebbs-ck-api/EBTOnlineForSevenDaysViaNum',{
        method: 'get'
    })
      .then((response) => {
        console.log("get7daysOnlineHistory res",response);  
        return response;
      })
      .catch((error) => {
          console.log("get7daysOnlineHistory failed",error);
          return false;
      })
}
export const get7daysOnlineHistoryByPercent = () => {
    return extendRequest('http://125.62.27.152/ebbs-ck-api/EBTOnlineForSevenDaysViaPercent',{
        method: 'get'
    })
      .then((response) => {
        console.log("get7daysOnlineHistory res",response);  
        return response;
      })
      .catch((error) => {
          console.log("get7daysOnlineHistory failed",error);
          return false;
      })
}
// api接口列表
const apiRecords = [
    {name: 'EBTOnlineForSevenDaysViaNum', url: 'http://125.62.27.152/ebbs-ck-api/EBTOnlineForSevenDaysViaNum'},
    {name: 'EBTOnlineForSevenDaysViaPercent', url: 'http://125.62.27.152/ebbs-ck-api/EBTOnlineForSevenDaysViaPercent'},
]
// 城口大屏数据接口，返回JSON
const ckApiRecords = [
    // 终端部分
    { name: '', url: 'http://125.62.27.152/ebbs-ck-api/EBTInTransformViaNum'},
    { name: '', url: 'http://125.62.27.152/ebbs-ck-api/EBTOnlineForCurrentMonthViaNum'},
    { name: '', url: 'http://125.62.27.152/ebbs-ck-api/EBTTodayOnlineByRegionViaNum'},
    { name: '', url: 'http://125.62.27.152/ebbs-ck-api/EBTOnlineForSevenDaysViaNum'},
    { name: '', url: 'http://125.62.27.152/ebbs-ck-api/EBTOnlineForSevenDaysViaPercent'},
    // 广播消息
    { name: '', url: 'http://125.62.27.152/ebbs-ck-api/EBMNormalVSEmergence'},
    { name: '', url: 'http://125.62.27.152/ebbs-ck-api/EBMGradeTotal'},
    { name: '', url: 'http://125.62.27.152/ebbs-ck-api/EBMTypeTotal'},
    { name: '', url: 'http://125.62.27.152/ebbs-ck-api/EBMTinyTypeTotal'},
    { name: '', url: 'http://125.62.27.152/ebbs-ck-api/EBMSevenDaysTotal'}
]