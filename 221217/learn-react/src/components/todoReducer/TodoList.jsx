import React from 'react';
import TodoItem from './TodoItem';
import { useTodoState } from '../../contexts/todos';

function TodoList() {
  const todos = useTodoState();
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
}

export default TodoList;
