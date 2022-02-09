import React from "react";

const TodoWrapper: React.FC<{ text: string }> = (props) => {
  return <li>{props.text}</li>;
};

export default TodoWrapper;
