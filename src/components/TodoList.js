import React, { useState } from "react";
import TodoForm from "./TodoForm";

function TodoList() {
  const [Todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/gi.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...Todos];
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Plan for Today</h1>
      <TodoForm onSubmit={addTodo} />
    </div>
  );
}

export default TodoList;
