import { Link } from 'react-router-dom';
/*
a href 태그 대신, react-router-dom에서 제공하는 Link to를 이용하면
페이지 새로고침이 일어나지 않고, 페이지를 변경 할 수 있다.
*/
function Header() {
  return (
    <ul>
      <li>
        <Link to='/'>Main</Link>
      </li>
      <li>
        <Link to='/hello'>Hello</Link>
      </li>
    </ul>
  );
}

export default Header;
