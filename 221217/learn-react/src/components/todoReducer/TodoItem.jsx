import React from 'react';
import { useTodoDispatch } from '../../contexts/todos';

function TodoItem({ todo }) {
  const { id, text, done } = todo;

  const dispatch = useTodoDispatch();

  return (
    <li>
      <span
        style={{ textDecoration: done && 'line-through' }}
        onClick={() => dispatch({ type: 'TOGGLE_TODO', id })}
      >
        {text}
      </span>
      <button onClick={() => dispatch({ type: 'REMOVE_TODO', id })}>
        삭제
      </button>
    </li>
  );
}

export default TodoItem;
