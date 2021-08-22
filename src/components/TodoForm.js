import React from 'react';
import { useState } from 'react';

const TodoForm = (props) => {

    const [input, setInput] = useState("");

    const handleChange = e => {
        setInput(e.target.value);
    }
    
    const handleSumbit = e => {
        e.preventDefault();

        // props to add components
        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        })
        // clear field
        setInput('')
    };

    return (
        <form className="todo-form" onSubmit={handleSumbit}>
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
        />
  
        <button className="todo-button">Add</button>
      </form>
    )
}

export default TodoForm
