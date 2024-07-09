import "./todo.css";
import { useState } from "react";
import TodoList from "../todo-list/todoList";
import TodoCreate from "../todo-create/todoCreate";

const Todo = () => {
  const [getTodos, setTodos] = useState([
    { id: 1, title: "Eat" },
    { id: 2, title: "Sleep" },
    { id: 3, title: "Code" },
  ]);

  const eventCreateTodo = (todo) => {
    setTodos(getTodos.concat(todo));
  };

  return (
    <div>
      <h3>ToDo List</h3>
      <TodoCreate onCreateTodo={eventCreateTodo} />
      <TodoList dataTodos={getTodos} />
    </div>
  );
};

export default Todo;
