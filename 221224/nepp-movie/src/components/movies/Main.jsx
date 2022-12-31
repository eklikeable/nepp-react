import styled from 'styled-components';
import MovieList from './MovieList';

function Main() {
  return (
    <BodyBlock>
      <Wrapper>
        <MovieList title="What's popular" />
        <MovieList title='Free to watch' />
      </Wrapper>
    </BodyBlock>
  );
}

const BodyBlock = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 960px;
`;
export default Main;
