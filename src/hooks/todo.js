import { useState, useEffect } from 'react';
import remove from 'lodash/remove';

let id = 0;

export default function() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    document.title = `todos: ${todos.length}`
  })

  const deleteTodo = todo => {
    setTodos(remove(todos, t => t.id === todo.id));
  }

  const addTodo = todo => {
    return [...todos, { ...todo, id: id++ }];
  }

  return {
    deleteTodo,
    addTodo,
    todos,
  }
}