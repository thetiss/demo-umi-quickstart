import * as userService from '../services/users'

export default {
    namespace: 'users',
    state: {
        initUserList: [],
        allIds: [],
        byId: {},
    },
    effects: {
        *fetch( action, { call, put }){
            const { data } = yield call(userService.fetch);
            yield put({
                type: 'save',  
                payload: { val: data}              
            })
            
        },
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