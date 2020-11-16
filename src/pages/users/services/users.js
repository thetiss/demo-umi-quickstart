/*
 * @Author: hiyan 
 * @Date: 2020-11-10 14:28:47 
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-11-16 18:24:38
 */
import request from "../../../utils/request"

export function fetch(){
    //console.log("users service:fetch");
    //console.log(request('/use/users'));
    return request('/use/users');
}
export function addRecord(newUser){
    console.log("4 Received newUser from model",newUser);
    console.log("4 Received newUser from model,stringfy",JSON.stringify(newUser));
    console.log("4 Received newUser from model,parse & stringfy",JSON.parse(JSON.stringify(newUser)));
    return request('/use/users/',{
        method: 'POST',
       // body: JSON.parse(JSON.stringify(newUser)),// JSON.parse(JSON.stringify(newUser)) // JSON.parse(newUser)
       // body: { data: newUser},
        body:  JSON.stringify(newUser),
    });
}
export function editRecord({id, values}){
    return request(`/use/users/${id}`,{
        method: 'PATCH',
        body: JSON.parse(values)
    })
}
export function deleteRecord(userId){
    console.log("4 Received userId from model",userId);
    return request(`/use/users/${userId}`,{
        method: 'DELETE'
    })
}
