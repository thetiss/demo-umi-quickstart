/*
 * @Author: hiyan 
 * @Date: 2020-11-02 18:09:14 
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-11-02 19:17:05
 */
export default {
    namespace: 'counter', // 默认与文件名相同
    state: {
        count: 27,
        history: []
    },
    reducers: { // 同步，唯一可更改state值的地方
        save(state) {
            console.log("*********excuting reducers-save*********");
            console.log(state.count);
            return {
                ...state,
            }
        },
        add(state) {
            const newCount = state.count+1;
            return {
                ...state,
                count: newCount,
            }
        },
    },
    effects: { // 异步
        *fetch(action,{ put, call }){
            // yield call(delay,3000);
            console.log("*********excuting effects*********");
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