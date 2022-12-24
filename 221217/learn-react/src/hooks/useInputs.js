// 이름의 앞에 use를 붙여서, 커스텀 훅 이라는것을 인지
// 컴포넌트가 아니기 때문에 .js 파일로 생성

import { useReducer, useState } from 'react';

// Reducer 함수 : 액션의 값에 따라 상태를 관리하는 함수
// 최신상태값과 액션 객체가 매개변수로 전달 됨
// Reducer의 장점 : 상태관리 로직을 컴포넌트 밖으로 뺄 수 있다.

/*
function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case 'INCREASE_COUNTER':
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
}
 */

// action : dispatch에 전달되는 객체
// dispatch 함수의 type, name, value등이 action 객체로 전달된다
// 이걸 가지고 reducer함수에서 분기처리도하고, 상태관리도 한다
function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state.inputs,
        [action.name]: action.value,
      };
    default:
      return state;
  }
}
function useInputs(initialState) {
  const [state, dispatch] = useReducer(reducer, initialState); // 두번째 인자로 초기값 지정
  return [state, dispatch];
}

export default useInputs;

// useInput을 호출 할 때 초기값을 입력해주고,
// input 함수에서 name만 잘 넣어준다면, 얼마든지 재사용이 가능한 커스텀 훅이 된다

export function useInputs02(initialState) {
  const [inputs, setInputs] = useState(initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const reset = () => {
    setInputs(initialState); // 초기화
  };

  return [inputs, onChange, reset];
}
