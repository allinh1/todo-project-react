import React from 'react';
import { useState, useEffect, useRef } from 'react';

const TodoForm = (props) => {

    const [input, setInput] = useState("");

    const inputRef = useRef(null)

    useEffect{() => {
        inputRef.current.focus();
        // focus on whatever is in ref.
    }}

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
          ref={inputRef}
        />
  
        <button className="todo-button">Add</button>
      </form>
    )
}

export default TodoForm
