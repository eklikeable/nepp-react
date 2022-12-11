import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  // 상태값 : 컴포넌트가 가지는 상태값 => 상태가 변하면 렌더링이 다시 일어난다.
  // useState(초기값) : [상태값, 업데이트함수]
  //  => useState는 비동기적으로 동작한다

  const handleCount = (opNum) => {
    if (opNum < 0 && count <= 0) return;
    setCount(count + opNum);
    setCount(count + opNum);
    setCount(count + opNum);
  };
  return (
    <div>
      <h3>{count}</h3>
      {/* 
이벤트 바인딩시 함수를 전달한다 => 함수 호출 결과를 전달하는것 ❌ 
  => 전달할 인자가 필요할 경우 익명함수 안에서 호출하는 형태로 작성한다.      
  => 전달할 인자가 없는경우 함수명만 써도 됨
*/}
      <button onClick={() => handleCount(1)}>+1</button>
      <button onClick={() => handleCount(-1)}>-1</button>
    </div>
  );
}

export default Counter;
