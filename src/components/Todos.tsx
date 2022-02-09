import React from "react";
import Todo from "../models/todo";
import TodoWrapper from "./TodoWrapper";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoWrapper key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
