import { useRecoilValue, useSetRecoilState } from 'recoil';
import { filterdTodosState, filterState } from '../state/todos';
import TodoItem from './TodoItem';

function TodoBody() {
  const todos = useRecoilValue(filterdTodosState);
  const setFilterState = useSetRecoilState(filterState);

  return (
    <div>
      <label htmlFor='done'>
        <input
          type='radio'
          name='done'
          id='done'
          value='done'
          onChange={(e) => setFilterState(e.target.value)}
          defaultChecked
        />
        완료 한 일
      </label>
      <label htmlFor='undone'>
        <input
          type='radio'
          name='done'
          id='undone'
          value='undone'
          onChange={(e) => setFilterState(e.target.value)}
        />
        해야 할 일
      </label>

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoBody;
