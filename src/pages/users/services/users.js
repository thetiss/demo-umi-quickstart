/*
 * @Author: hiyan 
 * @Date: 2020-11-10 14:28:47 
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-11-17 18:58:33
 */
import request from "../../../utils/request"

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
    return request('/use/users/',{
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
