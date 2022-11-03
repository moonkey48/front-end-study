import React, { useState } from 'react';

const TodoItem = React.memo(function TodoItem({todo,onToggle}){
    return <li>{todo.text}</li>
})

const TodoList = React.memo(function TodoList({todos,onToggle}){
    return(
        <ul>{
            todos.map(todo=><TodoItem key={todo.id} todo={todo} onToggle={onToggle} />)
        }</ul>
    )
})

const Todo = ({todos,onCreate,onToggle}) => {
    const [text, setText] = useState('');
    const onChange = e => {
        setText(e.target.value);
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        onCreate(text);
        setText('');
    }
    return(
        <div>
            <form>
                <input type="text" value={text} onChange={onChange} />
                <button onClick={onSubmit}>on add</button>
            </form>
            <TodoList todos={todos} onToggle={onToggle} />
        </div>
    )
}

export default Todo;