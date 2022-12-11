import "./App.css"; // webpack을 통해서 javaScript가 아닌 파일도 import가 가능
import TodoInput from "./components/TodoInput";

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

  return (
    <div>
      {/* <Hello text="seok" active={true} />
      <p style={wordStyle} className="content">
        안녕하세요, {myName}!
      </p> */}
      <TodoInput />
    </div>
  );
}

export default App;
