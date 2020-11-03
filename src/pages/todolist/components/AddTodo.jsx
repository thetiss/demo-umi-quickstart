/*
 * @Author: hiyan 
 * @Date: 2020-11-03 13:01:11 
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-11-03 17:52:36
 */
import { useState } from 'react'
import { connect } from 'dva'
import { Input, Button } from 'antd'
import '../index.css'

/**
 * 处理文本输入和按钮提交
 */
const mapStateToProps = (state) => {
    return{
        newTodo: state.todolist.newTodo,
    }
}

const AddTodo = (props) => {
    const { dispatch } = props;
    const [todoContent,setTodoContent] = useState("");

    const handleInputValueChange = (e) => {
        setTodoContent(e.target.value);
        
    }
    const handleAddTodo = () => {
        dispatch({
            type: 'todolist/addTodo',
            payload: { val: 
                        { isFinished: false, content: todoContent} 
                     }
        });
        setTodoContent(""); // 当前提交后，文本框清空
    }
    return(
        <div>
            <Input 
                name="todoName" 
                value={todoContent} 
                onChange={handleInputValueChange}>                    
            </Input>
            <Button onClick={handleAddTodo}>添加Todo</Button>
        </div>
    )
}
export default connect( mapStateToProps )(AddTodo);