import { useEffect, useState } from 'react';
import axios from 'axios';

function TodosAxios() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // ✨ fetch보다 기능이 많은 axios를 사용해 보자
  const fetchTodos = async () => {
    const { data } = await axios.get('http://localhost:4000/todos');
    setTodos(data);
  };

  // 처음 화면 렌더링 될 때 한번 실행
  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = () => {
    axios
      .post('http://localhost:4000/todos', {
        // axios는 JSON.stringify를 해 줄 필요가 없다
        text: input,
        done: false,
      })
      .then(() => {
        fetchTodos();
        setInput('');
      })
      .catch((e) => console.log(e));
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleToggle = (id, done) => {
    axios
      .patch(`http://localhost:4000/todos/${id}`, {
        done: !done,
      })
      .then(() => {
        fetchTodos();
      })
      .catch((e) => console.log(e));
  };

  const handleRemove = (id) => {
    axios
      .delete('http://localhost:4000/todos/' + id)
      .then(() => {
        fetchTodos();
      })
      .catch((e) => console.log(e));
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
export default TodosAxios;
