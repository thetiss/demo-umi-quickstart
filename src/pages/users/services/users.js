/*
 * @Author: hiyan 
 * @Date: 2020-11-10 14:28:47 
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-11-10 16:06:17
 */
import request from "../../../utils/request"

export function fetch(){
    //console.log("users service:fetch");
    //console.log(request('/use/users'));
    return request('/use/users');
}