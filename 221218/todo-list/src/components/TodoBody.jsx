import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../contexts/todos';

function TodoBody() {
  const todos = useTodoState();
  return (
    <BodyBlock>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </BodyBlock>
  );
}

const BodyBlock = styled.ul`
  flex: 1; // body가 TodosBlock의 빈공간을 모두 차지하도록 함
  overflow-y: auto; // todo목록이 넘치는 경우 스크롤 생성
  overflow-x: hidden;
  border-bottom: 1px solid #eee;
`;
export default TodoBody;
