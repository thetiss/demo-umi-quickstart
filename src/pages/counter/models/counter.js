/*
 * @Author: hiyan 
 * @Date: 2020-11-02 18:09:14 
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-11-03 11:13:49
 */
export default {
    namespace: 'counter', // 默认与文件名相同
    state: {
        count: 27,
        history: []
    },
    reducers: { // 同步，唯一可更改state值的地方
        save( state ) {
            return {
                ...state,
            }
        },
        increase( state, action ) {
            // 若action.payload为空，则保持initial state count
            const newCount = action.payload === null ? state.count : state.count+action.payload.val;
            return {
                ...state,
                count: newCount,
            }
        },
        decrease( state, action ){
            const newCount = action.payload === null ? state.count : state.count-action.payload.val;
            return {
                ...state,
                count: newCount
            }
        },
    },
    effects: { // 异步
        *fetch( action, { put, call }){
            // yield call(delay,3000);
            yield put({ type: 'save'});
        }
    },
    subscriptions: { // 监听页面路由变化
        setup({ dispatch, history }){
            return history.listen(({ pathname }) => {
                if(pathname === '/counter') {
                    console.log("*********excuting subscriptions*********");
                    console.log(pathname);
                    dispatch({ type: 'fetch'})
                }
            })
            
        }
    }
}