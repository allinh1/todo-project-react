import React from "react";

function Todo() {
  const [input, setInput] = useState("");

  return (
    <form className="todo-form">
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
      />

      <button className="todo-button"></button>
    </form>
  );
}

export default Todo;
