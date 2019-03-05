import { useState } from 'react';
import remove from 'lodash/remove';

let id = 0;

export default function() {
  const [todos, setTodos] = useState([]);

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