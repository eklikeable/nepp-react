import styled from 'styled-components';
import { Link } from 'react-router-dom';

const gnbList = [
  { id: 1, text: 'Movie', url: '/movies' },
  { id: 2, text: 'TV Show', url: '/shows' },
  { id: 3, text: 'Person', url: '/persons' },
];

function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Link to='/'>Nepp Movie</Link>
        </Logo>
        <GnbList>
          {gnbList.map((item) => (
            <li key={item.id}>
              <Link to={item.url}>{item.text}</Link>
            </li>
          ))}
        </GnbList>
      </Wrapper>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 960px;
  flex: 1;
`;

const Logo = styled.h1`
  margin-right: 30px;
  font-size: 1.5rem;
`;

const GnbList = styled.ul`
  display: flex;

  li + li {
    margin-left: 20px;
  }

  li {
    a {
      &:hover {
        font-weight: 700;
      }
    }
  }
`;

export default Header;
