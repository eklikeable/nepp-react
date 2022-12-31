import React, { useState } from 'react';
import { useEffect } from 'react';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // 등록버튼을 누르면 바로 화면에 반영되도록 하기위해
  // fetchTodos 함수를 따로 만들어서 재사용
  const fetchTodos = async () => {
    // fetch로 get 하는 방법
    let result = await fetch('http://localhost:4000/todos');
    let json = await result.json();
    setTodos(json);
  };

  // 처음 화면 렌더링 될 때 한번 실행
  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = async () => {
    // fetch로 post 하는 방법
    try {
      await fetch('http://localhost:4000/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // json-server가 id를 자동으로 1씩 늘려줌
          text: input,
          done: false,
        }),
      });
      fetchTodos(); // 등록버튼을 누르면 바로 화면에 반영되도록
      setInput('');
    } catch (e) {
      console.log(e);
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleToggle = (id, done) => {
    fetch('http://localhost:4000/todos/' + id, {
      method: 'PATCH',
      headers: {
        // headers : 요청하는데 필요한 정보(옵션)을 작성
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        done: !done,
      }),
    })
      .then(() => {
        fetchTodos();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleRemove = async (id) => {
    fetch('http://localhost:4000/todos/' + id, {
      method: 'DELETE',
    })
      .then(() => {
        fetchTodos();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <input type='text' onChange={handleInput} value={input} />
      <button onClick={handleSubmit}>등록</button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.done && 'line-through' }}
          >
            {/* 이벤트 버블링을 막기위해, onClick을 li대신 span태그로 text를 감싼뒤에 span에다가 줌 */}
            <span onClick={() => handleToggle(todo.id, todo.done)}>
              {todo.text}
            </span>
            <button onClick={() => handleRemove(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Todos;
