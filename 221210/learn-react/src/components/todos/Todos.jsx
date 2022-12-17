import React, { useState, useRef, useCallback, createContext } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export const deliverOnRemove = createContext(null);

//초기값
const initialState = [
  {
    id: 1,
    text: 'useState 배우기',
    done: true,
  },
  {
    id: 2,
    text: 'todo App 만들기',
    done: false,
  },
];

function Todos() {
  // 상태관리용 상위 컴포넌트
  const [todos, setTodos] = useState(initialState);

  const nextId = useRef(3); // 2개의 초기값이 있으니까 3부터 ID가 생성되도록

  // useCallback을 사용하여 등록버튼 누를때를 제외하고는 재생성 방지해 준다

  const onCreate = useCallback((text) => {
    // 함수형 업데이트를 사용하면 deps를 비울 수 있다.
    setTodos((todos) => [...todos, { id: nextId.current, text, done: false }]);
    nextId.current++;
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }, []);

  return (
    <deliverOnRemove.Provider value={onRemove}>
      <div>
        <TodoInput onCreate={onCreate} />
        <TodoList todos={todos} onToggle={onToggle} />
      </div>
    </deliverOnRemove.Provider>
  );
}

export default Todos;

// TodoInput의 재생성을 방지하고자 Props인 onCreate를 useCallback으로 감싸 주고,
// deps 에 todos 를 넣어줘도 재생성을 막지 못했다.=> todos가 변한다는건 onCreate가 다시 생성된다는 의미라서.
// ✨deps를 비우는 방법(todos를 참조하지 않고 업데이트 하는 방법)
// : 함수형 업데이트를 사용한다
// 함수형 업데이트를 사용하면, 함수 내에서 state변수를 직접 참조하지 않으므로, deps를 비워줄 수 있다.
// => todos 목록에 변화가 있어도, 랜더링이 일어나지 않는다.(새로운 Input이 있을 때만 랜더링)
