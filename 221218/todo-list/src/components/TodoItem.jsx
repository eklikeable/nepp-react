import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { useTodoDispatch } from '../contexts/todos';

function TodoItem({ todo }) {
  const { id, text, done } = todo;
  /*
  아이콘 빈체크/채워진체크 두가지를 사용할 경우 삼항연산자로 화면에 나타내줌
const checkIcon = done ? (
  <AiFillCheckCircle size={20} color={done && 'dodgerblue'} />
) : (
  <AiOutlineCheckCircle size={20} />
);
*/

  const dispatch = useTodoDispatch();

  // 삭제하면 애니메이션 효과가 나타나도록 해보자
  const [disappear, setDisappear] = useState(false);
  const handleRemove = () => {
    setDisappear(true);
    dispatch({ type: 'REMOVE_TODO', id });
  };

  return (
    <ItemBlock disappear={disappear}>
      <CheckCircle
        onClick={() => dispatch({ type: 'TOGGLE_TODO', id })}
        done={done}
      >
        <AiOutlineCheck />
      </CheckCircle>
      <p>{text}</p>
      <TrashIcon onClick={handleRemove} />
    </ItemBlock>
  );
}

const ItemBlock = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 10px;
  border-bottom: 1px solid #eee;
  font-size: 0.9rem;

  user-select: none; // 글씨 드래그 금지

  p {
    flex: 1;
  }

  transition: transform 0.4s;
  ${({ disappear }) =>
    disappear &&
    css`
      transform: translate(100%);
    `}
`;

const TrashIcon = styled(BsFillTrashFill)`
  &:hover {
    color: #da0707;
    cursor: pointer;
  }
`;

const CheckCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 1px solid black;
  color: black;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 5px;

  ${({ done }) =>
    done &&
    css`
      color: white;
      background-color: dodgerblue;
    `}
`;

export default TodoItem;
