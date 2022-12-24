// 2022.12.17 전역상태관리 useContext, useReducer

import React from 'react';
import useInputs from './hooks/useInputs';

// 리듀서를 쓰는 가장 큰 이유!
// ✨ 여러가지 상태를 한꺼번에 관리 할 수 있다(키값 추가가 용이함)
// ✨ 상태관리 관련 함수들을 컴포넌트 밖으로 뺄 수 있다.

function Inputs() {
  // useReducer(리듀서함수) : [상태값, 디스패치함수] 반환
  // dispatch : 액션을 발생시키는 함수
  const [state, dispatch] = useInputs({
    email: '',
    name: '',
  }); // 초기값 전달

  const { inputs } = state;
  const { name, email } = inputs; // 변수 껍질 벗기기..

  const handleInputs = (e) => {
    const { name, value } = e.target;
    // dispatch 함수의 type, name, value등이 action 객체로 전달된다
    // 이걸 가지고 reducer함수에서 분기처리도하고, 상태관리도 한다
    dispatch({ type: 'CHANGE_INPUT', name, value });
  };

  const handleCounter = () => {
    //이렇게 함수를 별도로 만들지 않고, onClick에 인라인으로 dispatch 전달해도 됨
    dispatch({ type: 'INCREASE_COUNTER' });
  };

  return (
    // useState 대신 useReducer를 사용하여 입력값 출력해보기
    <div>
      <p>
        {/** 원래 state.inputs.name 이렇게 써야하는데, 비구조화 할당을 통하여 벗겨 줬으므로 name으로 사용 가능 */}
        입력값 : {name} ({email})
      </p>
      <input type='text' onChange={handleInputs} name='name' />
      <input type='text' onChange={handleInputs} name='email' />
      <div>
        <button onClick={handleCounter}>+1</button>
      </div>
    </div>
  );
}

export default Inputs;
