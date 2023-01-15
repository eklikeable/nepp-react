import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

export const INCREASE = 'counter/increase';
export const DECREASE = 'counter/decrease';

export function counterReducer(state = 0, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}

// action생성 : action을 실행하면 객체가 반환되고, type과 payload를 담은 객체 생성
// => createReducer의 case에 전달되고, payload에 필요한 값을 담아서 상태 업데이트
export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');

// redux에서는 reducer를 만드는 함수를 제공한다
export const counterReducer02 = createReducer({ value: 0 }, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.value += action.payload; // payload로 함수를 부를때 값 지정가능
    })
    .addCase(decrement, (state, action) => {
      state.value -= action.payload;
    });
});

// ✨ redux-toolkit의 createSlice를 쓰면 action과 reducer를 한번에 만들 수 있다
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    incre(state, action) {
      state.value += action.payload.amount;
    },
    decre(state, action) {
      state.value -= action.payload.amount;
    },
  },
});

export const { incre, decre } = counterSlice.actions;
export const counterSliceReducer = counterSlice.reducer;
