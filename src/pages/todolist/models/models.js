/*
 * @Author: hiyan 
 * @Date: 2020-11-03 11:19:43 
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-11-03 17:48:47
 */
 let nextTodoId=0;
 export default {
     namespace: 'todolist',
     state: {
        todos: [],
        newTodo: {},
        // allIds: [],
        // byId: {}
     },
     reducers: {
        save( state ){
            const todos = [ ...state.todos ];
            return{
                ...state,
                todos
            }
        },
        addTodo( state, action ){
            const newTodo = action.payload.val;
            newTodo.id=++nextTodoId;
            const todos = [ ...state.todos,newTodo ];
            return {
                ...state,
                todos
            }            
        },
        // filter todos by id and then return a new todos with finished is true for current id
        // finished 是取反，不是写死是true or false。
        // id->匹配到数组中的元素，且修改状态
        toggleFinishedTodo( state, action){
            const toggledTodoId= action.payload.val;
            const todos = [ ...state.todos ];
            const afterToggledTodos = todos.map((todo) =>  
                    todo.id === toggledTodoId 
                    ? {...todo,finished:!todo.finished} 
                    :{...todo}
                )

            return{
                ...state,
                todos: afterToggledTodos,
            }
        },

     },
     effects: {
        *fetch( action, { call, put } ){
            yield put({ type: 'save' });
        }
     },
     subscriptions: {
         setup({ dispatch, history }) {
             return history.listen(({pathname}) => {
                 if(pathname === '/todolist'){
                     dispatch({ type: 'fetch' });
                 }
             })
         }

     }
 }