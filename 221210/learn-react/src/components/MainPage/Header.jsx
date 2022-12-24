import React, { useContext } from 'react';
import { DarkModeContext } from './Main'; // CreateContext로 생성한 Context객체를 import한다

function Header() {
  const darkMode = useContext(DarkModeContext); // Context객체(DarkModeContext)의 현재 값을 반환한다
  // useContext로 전달한 인자는 Context 객체 그 자체 여야 한다.(DarkModeContext.Consumer❌, DarkModeContext.Provider❌)

  return (
    <header
      style={{
        textAlign: 'center',
        borderBottom: '1px solid',
        borderColor: darkMode ? 'white' : 'black',
        backgroundColor: darkMode ? '#000' : '#ddd',
        color: darkMode ? '#fff' : '#000',
        padding: 20,
      }}
    >
      <h1 style={{ margin: 0 }}>Hello, React!</h1>
    </header>
  );
}

export default Header;
