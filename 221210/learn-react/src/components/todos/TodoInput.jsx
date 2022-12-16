import React, { useRef, useState } from 'react';

function TodoInput({ onCreate }) {
  // Todo 생성 => 그에 따른 입력값(input) 관리
  console.log('TodoInput 렌더링!');
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const inputRef = useRef(); // cursor focus를 하기 위해 생성

  const handleSubmit = () => {
    // 버튼의 onClick에 인라인으로 넣을 수 있지만, 코드를 깔끔하게 하기위해 handleSubmit으로 따로 빼줌
    onCreate(input);
    inputRef.current.focus(); // cursor focus
    setInput(''); // Input창 비우기
  };

  return (
    <div>
      <input type='text' value={input} onChange={handleInput} ref={inputRef} />
      <button onClick={handleSubmit}>등록</button>
    </div>
  );
}

export default React.memo(TodoInput);
// React.memo로 감싸면
// 전달받는 property의 값이 변했을 때만 렌더링이 되도록 제한

// TodoInput 컴포넌트가 불필요한 경우에도 재렌더링 되는 경우를 막기 위해
// React.memo로 감싸주었으나, 해결되지 않음 => onCreate를 props로 받고있기 때문
