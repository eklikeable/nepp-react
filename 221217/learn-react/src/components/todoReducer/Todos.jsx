// useReducer 로 투두리스트 상태관리 해보기

import { TodoProvider } from '../../contexts/todos';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';

function Todos() {
  return (
    <TodoProvider>
      <div>
        <h1>할일 목록</h1>
        <TodoCreate />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default Todos;
