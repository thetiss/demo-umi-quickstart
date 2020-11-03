/*
 * @Author: hiyan 
 * @Date: 2020-11-03 11:17:18 
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-11-03 15:32:56
 */
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

 export default () => {
     return(
         <div className="main">
            <div className="btn-container">
                <AddTodo />
            </div>
            <div className="list-container">
                <h3>To do List here</h3>
                <TodoList />
            </div>

         </div>
     )
 }