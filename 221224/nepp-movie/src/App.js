import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Hello from './components/Hello';
import Header from './components/Header';
import Detail from './components/Detail';

function App() {
  return (
    <>
      {/* Routes에 포함되지 않은 Header컴포넌트는 공통적으로 화면에 출력된다 */}
      <Header />
      <Routes>
        {/*
        중첩라우팅 : Routes를 중첩해서 사용하기 위해 base URL '/' 뒤에 뭐가 오든
        main을 보여주라는 의미로 '*'을 붙여준다. 조건부 렌더링과 비슷한 개념이라고 볼 수 있다 */}
        <Route path='/*' element={<Main />}>
          <Route path='1' element={<button>1</button>} />
          <Route path='2' element={<button>2</button>} />
        </Route>
        {/* /hello/:id 로 하면, 그냥 /hello 는 페이지가 안뜬다 => 중첩으로 갈라줌 */}
        <Route path='/hello/*' element={<Hello />}></Route>
        <Route path='/hello/:userId' element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
