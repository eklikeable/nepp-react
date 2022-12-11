import { useState, useRef } from "react";

function TodoInput() {
  const [todos, setTodos] = useState([
    { text: "투두리스트만들기", date: "2022/12/11", id: 0, done: true },
  ]);
  const [inputs, setInputs] = useState({
    text: "",
    date: "",
  });

  const inputRef = useRef();
  const nextId = useRef(1); // useRef로 관리되는 값은 변경되어도 리렌더링이 발생하지 않는다.=> 랜더링과 별개로 변수처럼 사용한다

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      // 객체의 프로퍼티 참조하는 방법 2가지 중 하나 객체['문자열'] => 동적 프로퍼티 업데이트
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // 객체나 배열을 업데이트 할 때는 불변성을 지켜야 한다. => 지키지 않으면 상태변화를 감지 할 수 없다.
    // => 새로운 객체를 생성하는 방식으로 작성한다. setTodos(todos.concat(input)) 도 가능
    setTodos([
      {
        ...inputs,
        id: nextId.current,
        done: false,
      },
      ...todos,
    ]);
    setInputs({
      text: "",
      date: "",
    });
    nextId.current++;
    inputRef.current.focus();
  };

  const onRemove = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const onToggle = (todo) => {
    todo.done = !todo.done;
    setTodos([...todos]);
  };

  return (
    <div>
      <input
        type="text"
        value={inputs.text}
        onChange={handleInput}
        name="text"
        ref={inputRef}
      />
      <br />
      <input
        type="text"
        value={inputs.date}
        onChange={handleInput}
        name="date"
      />
      <button onClick={handleSubmit}>등록</button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.done && "line-through" }}
          >
            {todo.text} - {todo.date}
            <button onClick={() => onToggle(todo)}>완료</button>
            <button onClick={() => onRemove(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoInput;
