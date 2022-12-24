// 이름의 앞에 use를 붙여서, 커스텀 훅 이라는것을 인지

import { useReducer } from 'react';

// Reducer 함수 : 액션의 값에 따라 상태를 관리하는 함수
// 최신상태값과 액션 객체가 매개변수로 전달 됨
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
// ✨ 리듀서 함수의 return값이 곧 최신 상태값이 된다.
function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      // 초기값이 객체이기 때문에 return값도 똑같이 객체로
      return {
        ...state, // 먼저 기존의 상태값을 그대로 복사
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
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
