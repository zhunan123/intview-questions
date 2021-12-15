import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ReactSandbox = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get(`https://gorest.co.in/public/v1/todos`).then(res => {
            const todos = res.data.data;
            setTodos(todos);
        })
    }, []);

    return (
        <ul>
            {todos && todos.map(todo => (
                //todo 里面一定要放.map(() => ()) 而不是{}
                <li key={todo.id}>
                    {todo.status}
                </li>
            ))}
        </ul>
    )
}

export default ReactSandbox;
