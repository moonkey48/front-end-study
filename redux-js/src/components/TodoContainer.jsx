import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo } from '../reducers/todos';
import Todo from './Todo';

const TodoContainer = () => {
    const todos = useSelector(state=>state.todos);
    const dispatch = useDispatch();
    const onCreate = text => {
        dispatch(addTodo(text));
    }
    const onToggle = id =>{
        dispatch(toggleTodo(id));
    }
    return(
        <Todo todos={todos} onCreate={onCreate} onToggle={onToggle} />
    )

}

export default TodoContainer;