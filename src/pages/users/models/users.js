import * as userService from '../services/users'

export default {
    namespace: 'users',
    state: {
        initUserList: [],
        allIds: [],
        byId: {},
    },
    effects: {
        *fetch(action, { call, put }){
            const { data } = yield call(userService.fetch);
            console.log("fetch the data ",data);
            yield put({
                type: 'save',  
                payload: { val: data }              
            })            
        },
        *addUser(action, { call, put }){
            console.log("3-1 Received value from action",action.payload);
            const  newUser  = action.payload.val;
            console.log("3-1 Received value from action",newUser);
            const { data } = yield call(userService.addRecord,newUser);
            console.log("3-2 Received data from call service",data);
            yield put({
                type: 'save',
                payload: { val: data }
            })
        },
        *editUser(action, { call, put }){
            console.log("*editUser");
            const userId = action.payload.val.id;
            const values = action.payload.val.values;
            console.log("payload id",userId);
            console.log("payload values",values);
            yield call(userService.editRecord,userId,values);
            yield put({
                type: 'fetch',
            })
        },
        *deleteUser(action, { call, put }){
            console.log("3-1 Received value from page action",action.payload);
            const userId = action.payload.val;
            yield call(userService.deleteRecord,userId);            
            yield put({
                type: 'fetch',
            })
        }
    },
    reducers: {
        save(state, action){
            const initUserList = [...state.initUserList];
            const newUser = action.payload.val.data;
            //const newUserList = initUserList.concat(newUser);
            console.log("in save function,the newUser",newUser);        
           // console.log("in save function,the newUserList",newUserList);        
            return{
                ...state,
                initUserList: newUser,
            }

        }
    },
}