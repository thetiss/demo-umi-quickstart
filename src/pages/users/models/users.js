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
            const  newUser  = action.payload.val;
            const { data } = yield call(userService.addRecord,newUser);
            yield put({
                type: 'save',
                payload: { val: data }
            })
        },
        *editUser(action, { call, put }){
            const userId = action.payload.val.id;
            const values = action.payload.val.values;
            yield call(userService.editRecord,userId,values);
            yield put({
                type: 'fetch',
            })
        },
        *deleteUser(action, { call, put }){
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