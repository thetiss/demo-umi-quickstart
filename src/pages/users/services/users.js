/*
 * @Author: hiyan 
 * @Date: 2020-11-10 14:28:47 
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-11-18 14:28:25
 */
import request from "../../../utils/request"
// 用umi-request 处理用户请求
import umiRequest, { extend } from 'umi-request';
import { message } from 'antd';

const errorHandler = function(error) {
    if (error.response) {
      if (error.response.status > 400) {
          if(error.response.status !== 409){
            message.error(error.data.message ? error.data.message : error.data);
          }else{
            message.error(error.data.msg ? error.data.msg : error.data);
          }        
      }
    } else {
      message.error('Network Error.');
    }  
    throw error; 
  };
  
const extendRequest = extend({ errorHandler });

// 用umi-request处理用户ADD,UPDATE操作
export const addUser = async ({values}) => {
    console.log("extendRequest 收到",values);
    return extendRequest('/use/users',{
        method: 'post',
        data: values,
    })
}
export const editUser = async ({id,values}) => {
    return extendRequest(`/use/users/${id}`,{
        method: 'put',
        data: values,
    })
}

export function fetch(){
    const fetchRequest = request('/use/users',{
        method: 'GET',
    });
    console.log("4 the fetch Request is: ",fetchRequest);
    return fetchRequest;
}
export function addRecord(newUser){
    console.log("****addRecord****");
    console.log("4 Received newUser from model",newUser);
    console.log("4 Received newUser from model",JSON.stringify(newUser));
    // console.log("4 Received newUser from model,stringfy",JSON.stringify(newUser));
    // console.log("4 Received newUser from model,parse & stringfy",JSON.parse(JSON.stringify(newUser)));
    return request('/use/users',{
        method: 'POST',        
        body:  JSON.stringify(newUser),
    });
}
export function editRecord({id, values}){
    console.log("****editRecord****");
    console.log(id);
    console.log(values);
    console.log(JSON.stringify(values));
    return request(`/use/users/${id}`,{
        method: 'PATCH',
        body: JSON.stringify(values),
        //body: JSON.parse(values)
        //body: JSON.stringify(values)
        //body: JSON.stringify(values),
    })
}
export function deleteRecord(userId){
    console.log("4 Received userId from model",userId);
    return request(`/use/users/${userId}`,{
        method: 'DELETE',
    })
}
