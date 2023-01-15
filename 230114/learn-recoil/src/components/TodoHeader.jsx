import { useSelector } from 'react-redux';
import { useRecoilValue } from 'recoil';
import { countState, undoneCountState } from '../state/todos';
import {
  getTotalCount,
  getPercentage,
  getUndoneCount,
  getUndoneCount02,
} from '../state/todos.redux';

function TodoHeader() {
  const count = useSelector(getTotalCount);
  // const undoneCount = useSelector(getUndoneCount);
  const undoneCount = useSelector(getUndoneCount02);
  const percent = useSelector(getPercentage);

  return (
    <div>
      <p>2023년 01월 14일</p>
      <p>
        남은 할 일 : {undoneCount} / {count}
      </p>
      {percent} 완료
    </div>
  );
}

export default TodoHeader;
