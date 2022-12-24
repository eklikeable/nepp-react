import React, { useState, createContext } from 'react';
import Content from './Content';
import Header from './Header';

// createContext : 전역적으로 관리 할 context를 만들어 준다
// Context생성 => 값을 사용하는 컴포넌트에서 useContext의 인자로 받아줘야 함
// createContext의 인자로 전달할 값은 기본값 => Provider로 감싸지 않은 컴포넌트에서 사용할 때 반환되는 값
export const DarkModeContext = createContext(null);
export const SetDarkModeContext = createContext(null);

function Main() {
  const [darkMode, setDarkMode] = useState(true);

  const onChangeMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    // DarkModeContext가 제공하는 context를 사용하고자 하는 children들을 모두 감싸준다
    // 아래와같이 Context Provider를 중첩해서 사용 가능
    // context의 현재 값은 트리 안에서 이 Hook을 호출하는 컴포넌트에 가장 가까이에 있는 Provider의 value prop에 의해 결정된다.
    <DarkModeContext.Provider value={darkMode}>
      <SetDarkModeContext.Provider value={onChangeMode}>
        <div
          style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
        >
          <Header /> {/* 개별 컴포넌트에 props를 직접 넘겨줄 필요가 없다.*/}
          <Content />
        </div>
      </SetDarkModeContext.Provider>
    </DarkModeContext.Provider>
  );
}

export default Main;
