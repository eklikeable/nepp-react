import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <div>
      <h1>Main</h1>
      <p>메인 페이지 입니다</p>
      {/* Outlet : 자식 Route의 위치를 잡아준다 */}
      <Outlet />
    </div>
  );
}

export default Main;
