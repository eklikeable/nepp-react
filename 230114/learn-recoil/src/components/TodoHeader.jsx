import { useRecoilValue } from 'recoil';
import { countState, undoneCountState } from '../state/todos';

function TodoHeader() {
  const count = useRecoilValue(countState);
  const undoneCount = useRecoilValue(undoneCountState);
  return (
    <div>
      <p>2023년 01월 14일</p>
      <p>
        할일 : {undoneCount} / {count}
      </p>
    </div>
  );
}

export default TodoHeader;
