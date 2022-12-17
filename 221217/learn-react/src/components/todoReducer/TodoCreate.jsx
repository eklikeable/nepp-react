import React, { useRef } from 'react';
import { useInputs02 } from '../../hooks/useInputs';
import { useTodoDispatch } from '../../contexts/todos';

function TodoCreate() {
  const nextId = useRef(4);

  const dispatch = useTodoDispatch();

  // const [inputs, inputsDispatch] = useInputs({
  //   text: '',
  // });

  const [inputs, onChange, reset] = useInputs02({ text: '' });

  const onCreate = () => {
    dispatch({ type: 'CREATE_TODO', text: inputs.text, id: nextId.current });
    nextId.current++;
    // inputs 상태를 빈문자열로 업데이트(input창 비우기)
    // dispatch({ type: 'CHANGE_INPUT', name: 'text', value: '' });
    reset();
  };

  // const handleInput = (e) => {
  //   const { name, value } = e.target;
  //   dispatch({ type: 'CHANGE_INPUT', name, value });
  // };

  return (
    <form
      onSubmit={(e) => {
        // form태그의 새로고침 방지
        e.preventDefault();
        onCreate();
      }}
    >
      <input type='text' name='text' value={inputs.text} onChange={onChange} />
      <button>등록</button>
    </form>
  );
}

export default TodoCreate;
