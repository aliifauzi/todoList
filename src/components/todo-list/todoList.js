import "./todoList.css";

const todoList = (props) => {
  return (
    <ul>
      {props.dataTodos.map((todo) => {
        return <li key={todo.id}> {todo.title} </li>;
      })}
    </ul>
  );
};

export default todoList;
