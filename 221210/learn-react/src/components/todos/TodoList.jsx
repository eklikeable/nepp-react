function TodoList({ todos, onRemove, onToggle }) {
  // Todo List 출력용 컴포넌트(삭제, 토글)

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}

function TodoItem({ todo, onRemove, onToggle }) {
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
