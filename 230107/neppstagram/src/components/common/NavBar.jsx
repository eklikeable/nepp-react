import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BiHomeHeart, BiSearchAlt2, BiEdit } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
function NavBar() {
  return (
    <Container>
      <NavItem>
        <Link to='/'>
          <BiHomeHeart />
        </Link>
      </NavItem>
      <NavItem>
        <Link to='search'>
          <BiSearchAlt2 />
        </Link>
      </NavItem>
      <NavItem>
        <Link to='edit'>
          <BiEdit />
        </Link>
      </NavItem>
      <NavItem>
        <Link to='profile'>
          <BsFillPersonFill />
        </Link>
      </NavItem>
    </Container>
  );
}

const Container = styled.div`
  height: 53px;
  border-top: 1px solid #ddd;
  display: flex;
  background-color: lemonchiffon;
`;

const NavItem = styled.li`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  flex: 1;
  font-size: 1.5rem;
  width: 87.5px;

  // & + & : 첫번째 형제 빼고 두번째부터 적용
  & + & {
    border-left: 1px solid #ddd;
  }
`;

export default NavBar;
