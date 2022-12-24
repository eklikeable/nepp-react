import styled, { css } from 'styled-components';
import { useTodoState } from '../contexts/todos';

function TodoHeader() {
  // date를 TodoHeader안에 넣어 렌더링 될 때마다 날짜가 변경되도록 함
  const date = new Date();
  const dateStr = date.toLocaleDateString('ko-KR', {
    dateStyle: 'full',
  });

  //todos의 상태값을 불러옴
  const todos = useTodoState();

  //완료된 todo의 갯수
  const doneCount = todos.filter((todo) => todo.done).length;
  const percentage = doneCount && Math.round((doneCount / todos.length) * 100);
  return (
    <Header>
      <p>{dateStr}</p>
      <span>
        완료 : {doneCount}/{todos.length}
      </span>
      <StatusBar progress={percentage}>
        <span>{percentage}%</span>
      </StatusBar>
    </Header>
  );
}

const Header = styled.div`
  padding: 20px 10px;
  border-bottom: 1px solid #eee;

  p {
    font-size: 1.2rem;
    font-weight: bold;
  }
  span {
    font-size: 0.8rem;
  }
`;

const StatusBar = styled.div`
  background: #ddd;
  border-radius: 5px;
  margin-top: 5px;

  height: 13px;
  line-height: 13px;
  font-size: 0.7rem;
  text-align: center;

  position: relative;

  span {
    z-index: 100;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  &::before {
    content: '';
    display: block;
    transform-origin: left; // 왼쪽을 기준으로 transform이 시작되도록 하기

    /*
      reflow 와 repaint
      reflow가 일어나면 repaint도 일어나고, 레이아웃이 전부 바뀌어야 하기 때문에 성능저하가 생긴다
      예를들어, background color를 바꾸는것은 reflow가 일어나지 않지만
      width를 변경하는 것은 다른 요소가 옆으로 밀려나야 하는지 계산해야 하기 때문에 성능이 더 든다.

      width: ${({ progress }) => progress}%;
      이 코드를 성능개선을 위해 아래와 같이 transform : scaleX로 대체할 수 있다
    */
    ${({ progress }) => css`
      transform: scaleX(${progress}%);
    `}

    height: 100%;
    border-radius: 5px;
    background-color: dodgerblue;

    transition: 0.5s;
  }
`;

export default TodoHeader;
