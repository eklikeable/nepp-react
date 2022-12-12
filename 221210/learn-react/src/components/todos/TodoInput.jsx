import React, { useEffect, useRef, useState } from 'react';

function TodoInput({ onCreate }) {
  // 투두 생성 => 입력값 관리

  useEffect(() => {
    console.log('sd');
  });
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const inputRef = useRef();

  const handleSubmit = () => {
    onCreate(input);
    inputRef.current.focus();
    setInput('');
  };

  return (
    <div>
      <input type='text' onChange={handleInput} value={input} ref={inputRef} />
      <button onClick={handleSubmit}>등록</button>
    </div>
  );
}

// React.memo로 감싸면 전달받는 프로퍼티에 변경 사항이 있을 때만 렌더링이 일어난다.
export default React.memo(TodoInput);
