import { useSetRecoilState } from 'recoil';
import { todosState } from '../state/todos';

function TodoItem({ todo }) {
  const { id, done, text } = todo;
  const setTodos = useSetRecoilState(todosState);

  const handleDelete = (e) => {
    e.stopPropagation();
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = () => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <li
      style={{ textDecoration: done && 'line-through' }}
      onClick={handleToggle}
    >
      {text} <button onClick={handleDelete}>삭제</button>
    </li>
  );
}

export default TodoItem;
