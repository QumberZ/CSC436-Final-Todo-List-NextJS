import React from "react";

const TodoList = ({ todos }) => {
  return (
    <div>
      <h2>TODO List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
