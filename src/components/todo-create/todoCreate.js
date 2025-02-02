import "./todoCreate.css";
import { useState } from "react";

const TodoCreate = (props) => {
  const [getInputToDo, setInputToDo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 100) + 1,
      title: getInputToDo,
    };

    props.onCreateTodo(newTodo);
    setInputToDo("");
  };

  const handleInputToDo = (event) => {
    setInputToDo(event.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" value={getInputToDo} onChange={handleInputToDo} />
      <button type="submit"> Add </button>
    </form>
  );
};

export default TodoCreate;
