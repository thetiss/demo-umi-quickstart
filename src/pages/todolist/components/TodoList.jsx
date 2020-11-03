/*
 * @Author: hiyan 
 * @Date: 2020-11-03 11:29:13 
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-11-03 17:41:36
 */
import { connect } from 'dva'
import  Todo from './Todo'

// 约定todoList initial []
// 本TodoList只使用state.todos数据，不处理逻辑，因此mapStateToProps是要写在里面的。
// 
const mapStateToProps = ( state ) => {
    return {
        todos: state.todolist.todos,
    }
}
const TodoList = ( props ) => {
    const { todos } = props; //connect后，将全局store的属性解构到当前对象
    return(
        <div className="main">
                <ul>
                { 
                    todos && todos.length !== 0 
                    ? todos.map((todo)=>(
                        <Todo key={todo.id} todo={todo} />
                        ))
                    : "No todos, yay!"
                }
                </ul>           
        </div>
    )
}

export default connect( mapStateToProps )(TodoList);

