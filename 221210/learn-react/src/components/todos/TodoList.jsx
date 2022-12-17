import { useContext } from 'react';
import { deliverOnRemove } from './Todos';

function TodoList({ todos, onToggle }) {
  // Todo List 출력용 컴포넌트(삭제, 토글)

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
}

function TodoItem({ todo, onToggle }) {
  // onRemove함수를 TodoList를 거쳐 Props로 받을 필요 없이 전역으로 바로 받아옴
  const onRemove = useContext(deliverOnRemove);

  const { text, id, done } = todo;

  const handleRemove = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) onRemove(id);
  };

  const handleToggle = () => {
    onToggle(id);
  };

  return (
    <li>
      {/* 이벤트 버블링을 방지하기위해 li대신 span으로 감싸서 onClick을 넣어줌 */}
      <span
        onClick={handleToggle}
        style={{ textDecoration: done && 'line-through' }} // done이 truthy일 때만 취소선 적용
      >
        {text}
      </span>
      ({id})<button onClick={handleRemove}>삭제</button>
    </li>
  );
}
export default TodoList;
