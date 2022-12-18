import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useTodoDispatch } from '../contexts/todos';
import useInputs from '../hooks/useInputs';
import { lighten, darken } from 'polished';

function TodoCreate() {
  const [inputs, onChange, reset] = useInputs({
    text: '',
  });

  const [edit, setEdit] = useState(false);

  const { text } = inputs;
  const dispatch = useTodoDispatch();
  const nextId = useRef(4); // 3개는 initialState로 미리 작성했기 때문에 4부터 넣어줌

  const handleSubmit = () => {
    if (!edit) {
      setEdit(true);
      return;
    }
    if (!text) return;
    dispatch({ type: 'CREATE_TODO', id: nextId.current, text: text });
    reset();
    nextId.current++;
    setEdit(false);
  };

  return (
    <CreateBlock>
      <InputBox edit={edit}>
        {edit && (
          <input
            type='text'
            name='text'
            onChange={onChange}
            value={text}
            autoFocus
          />
        )}
      </InputBox>
      <BtnSubmit onClick={handleSubmit} active={text.length > 0}>
        {edit ? '등록' : '할 일 작성하기'}
      </BtnSubmit>
    </CreateBlock>
  );
}

const CreateBlock = styled.div`
  padding: 20px 10px;
`;

const InputBox = styled.div`
  border: 1px solid #eee;
  border-width: 0;
  overflow: hidden;
  max-height: 0;

  ${({ edit }) =>
    edit &&
    css`
      padding: 5px;
      max-height: 40px;
      border-width: 1px;
      transition: max-height 0.5s;
    `}
  input {
    width: 100%;
    border: none;
    outline: none;
  }
`;

const BtnSubmit = styled.div`
  width: 100%;
  padding: 5px 0;
  margin-top: 5px;
  border: none;
  outline: none;

  text-align: center;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.disabled};
  // ✅ 글자길이가 0 이상일때만 버튼이 활성화 되는 것 처럼 보이게 해보자
  // background-color: ${({ active }) => (active ? 'dodgerblue' : '#bbb')};
  ${({ edit, theme }) =>
    !edit &&
    css`
      background-color: ${theme.colors.main};

      &:hover {
        background-color: ${theme.colors.hover};
      }
    `}

  ${({ active, theme }) =>
    active &&
    css`
      background-color: ${theme.colors.active};
      cursor: pointer;
      transition: 0.2s;
    `}
`;

export default TodoCreate;
