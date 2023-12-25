import React, { useState } from "react";

const TodoForm = ({addtodo}) => {
  const [value, setValue] = useState("");
  const eventhandler = (e) => {
    e.preventDefault();
    addtodo(value);
    setValue('');
  };
  return (
    <form className="TodoForm" onSubmit={eventhandler}>
      <input
        value={value}
        type="text"
        placeholder="What is the task today?"
        className="todo-input"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add task{" "}
      </button>
    </form>
  );
};
export default TodoForm;
