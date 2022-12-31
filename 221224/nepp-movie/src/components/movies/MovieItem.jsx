import styled from 'styled-components';
import { Link } from 'react-router-dom';

function MovieItem({ movie }) {
  const { id, title, release_date, poster_path } = movie;
  const img_url = 'https://image.tmdb.org/t/p/w342/' + poster_path;

  return (
    <Container>
      <Link to={'/movies/' + id}>
        <ImgBox>
          <img src={img_url} alt={title} />
        </ImgBox>
      </Link>
      <MovieTitle>{title}</MovieTitle>
      <ReleaseDate>{release_date}</ReleaseDate>
    </Container>
  );
}

const Container = styled.li`
  & + & {
    margin-left: 10px;
  }
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 150px;
  height: 225px;
  background-color: tomato;

  overflow: hidden;
  img {
    width: 120%;
  }
`;

const MovieTitle = styled.h3`
  font-size: 1rem;
  margin-top: 8px;
`;

const ReleaseDate = styled.span`
  font-size: 0.8rem;
  color: #bbb;
`;

export default MovieItem;
