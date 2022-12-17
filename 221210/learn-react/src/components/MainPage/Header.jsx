import React, { useContext } from 'react';
import { DarkModeContext } from './Main';

function Header() {
  const darkMode = useContext(DarkModeContext);

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
