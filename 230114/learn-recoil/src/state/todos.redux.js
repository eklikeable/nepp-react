import { createAction, createReducer, createSelector } from '@reduxjs/toolkit';

// action의 type을 정의
const CREATE_TODO = 'todos/create';
const REMOVE_TODO = 'todos/remove';
const TOGGLE_TODO = 'todos/toggle';

// action을 return 하는 함수 : type값을 외우지 않아도 됨
export const createTodo = (id, text) => {
  return { type: CREATE_TODO, text, id };
};

export const toggleTodo = (id) => {
  return { type: TOGGLE_TODO, id };
};

export const removeTodo = (id) => {
  return { type: REMOVE_TODO, id };
};

// selector => 상태값들 중 특정 값을 고르거나 연산해서 리턴
// 순수함수 형태여야 한다
export const getTotalCount = (state) => {
  return state.todos.length;
};

export const getUndoneCount = (state) => {
  return state.todos.filter((todo) => !todo.done).length;
};

// redux-toolkit 에서 제공하는 createSelector를 사용하면,
// 같은 값이 들어왔을 때 연산하지 않는다 => 성능향상에 도움이 된다
export const getUndoneCount02 = createSelector(
  (state) => state.todos, // 아래의 콜백함수에서 사용할 상태값을 지정
  (todos) => {
    return todos.filter((todo) => !todo.done).length;
  }
);

export const getPercentage = createSelector(
  (state) => state.todos.length,
  getUndoneCount,
  (totalCount, undoneCount) => {
    return Math.round(100 - (undoneCount / totalCount) * 100) + '%';
  }
);

const initialState = [
  { id: 1, text: 'redux 배우기', done: false },
  { id: 2, text: 'todoList 만들기', done: false },
];
/*  
export function todosReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_TODO:
      return state.concat({ id: action.id, text: action.text, done: false });
    case REMOVE_TODO:
      return state.filter((todo) => action.id !== todo.id);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}
*/

// action생성
export const createTodoAction = createAction('todos/create');
export const removeTodoAction = createAction('todos/remove');
export const toggleTodoAction = createAction('todos/toggle');

// redux에서는 reducer를 만드는 함수를 제공한다
export const todosReducer02 = createReducer(initialState, (builder) => {
  builder
    .addCase(createTodoAction, (state, action) => {
      const { id, text } = action.payload;
      // 기존 상태값이 직접 변경되는 경우 return 하지 않음 => mutable
      state.push({ id: id, text: text, done: false });
      // 목록의 앞쪽에 추가 하고 싶다면 state.unshift
    })
    .addCase(removeTodoAction, (state, action) => {
      return state.filter((todo) => action.payload !== todo.id);
      // 기존 상태값이 유지되는 경우 return을 해줘야 상태값이 변경된다 => immutable
      // return 없이 filter를 하면 filter만 실행되고 원본배열을 변경하지 않음
    })
    .addCase(toggleTodoAction, (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    });
});
