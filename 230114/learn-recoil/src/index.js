import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { RecoilRoot } from 'recoil';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './state/todos.redux';

function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      return state;
  }
}

// 여러개의 reducer를 사용할 때는 action값이 겹치면 안됨
const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <RecoilRoot>
  <Provider store={store}>
    <App />
  </Provider>
  // </RecoilRoot>
);
