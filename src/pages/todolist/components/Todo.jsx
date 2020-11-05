/*
 * @Author: hiyan 
 * @Date: 2020-11-03 12:59:44 
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-11-05 15:12:17
 */

 import { connect } from 'dva'
 
 const Todo = (props) => {
     const { todo, dispatch } = props;
     
     const handleToggleFinishedTodo = (id) => {
         dispatch({
             type: 'todolist/toggleFinishedTodo',
             payload: { val: id}
         })
     }
     return(
        <li key={todo.id}
            onClick={()=>handleToggleFinishedTodo(todo.id)}            
        >
           #{todo.id} { todo && todo.finished ? "👌" : "👋"}{" "}{" "}
            <span className={todo.finished ? "todo-item__text--completed":"todo-item" }>
                {todo.content}
            </span>
        </li>
     )
 }
 export default connect()(Todo);