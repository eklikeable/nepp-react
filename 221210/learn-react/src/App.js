import './App.css'; // webpack을 통해서 javaScript가 아닌 파일도 import가 가능
import React, { useState, useEffect } from 'react';

import Todo from './components/Todo';

function App() {
  /* 
  🚫 JSX 문법 주의사항 🚫
    1. 무조건 하나의 태그로 감싸서 반환해야 한다 
        => Fragment( <></> )를 이용하면 불필요한 태그 낭비 없이 하나로 묶을 수 있다.
    2. 닫는 태그를 생략할 때는 셀프 클로징 태그로 닫아줘야 함.
    3. JSX안에 자바스크립트 값을 포함시킬 때는 {}안에 작성한다.
    4. 스타일 속성에 객체 형태로 전달한다 => 여러 단어인 속성은 Camel Case를 사용한다.
    5. class는 className속성으로 할당한다.
    6. 컴포넌트는 무조건 대괄호로 시작한다.
  */

  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // 렌더링이 일어날 때마다 실행되는 코드
    console.log('렌더링');
  });

  useEffect(() => {
    // []안의 값에 변화가 있을 때에만 실행된다.
    console.log('count : ', count);
  }, [count]);

  useEffect(() => {
    console.log('input : ', input);
  }, [input]);

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Todo />
    </>
  );
}

export default App;
