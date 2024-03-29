import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {
  todoSliceReducer,
  todosReducer,
  todosReducer02,
} from './state/todos.redux';
import {
  counterReducer,
  counterReducer02,
  counterSliceReducer,
} from './state/counter';
import './utils/lang';

// 여러개의 reducer를 사용할 때는 action값이 겹치면 안됨
const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    todos: todoSliceReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RecoilRoot>
    <Provider store={store}>
      <App />
    </Provider>
  </RecoilRoot>
);
