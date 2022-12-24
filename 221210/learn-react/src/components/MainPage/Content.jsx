import React, { useContext } from 'react';
import { DarkModeContext, SetDarkModeContext } from './Main';

function Content() {
  const darkMode = useContext(DarkModeContext); // CreateContext로 생성한 Context객체를 useContext의 인자로 받아서 사용
  const onChangeMode = useContext(SetDarkModeContext);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: darkMode && '#000',
        color: darkMode && '#fff',
      }}
    >
      메인 컨텐츠 입니다.
      <button onClick={onChangeMode}>다크모드 변경</button>
    </div>
  );
}

export default Content;
