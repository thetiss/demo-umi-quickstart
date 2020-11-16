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
        *deleteUser(action, { call, put }){
            console.log("3-1 Received value from page action",action.payload);
            const userId = action.payload.val;
            //const { data } = yield call(userService.deleteRecord(userId));
            const  data  = yield call(userService.deleteRecord,userId);
            console.log("3-2 Received data from call service",data);
            yield put({
                type: 'save',
                payload:  { val: data}
            })
        }
    },
    reducers: {
        save(state, action){
            const initUserList = [...state.initUserList];
            const newUser = action.payload.val.data;   
            const newUserList = initUserList.concat(newUser);    
            console.log(newUserList);        
            return{
                ...state,
                initUserList: newUserList,
            }
        }
    },
}