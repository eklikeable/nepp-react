import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieItem from './MovieItem';
import { getPopular } from '../../api/movies';

function MovieList({ title }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getPopular().then((res) => setMovieList(res));
  }, []);

  return (
    <Container>
      <CategoryTitle>{title}</CategoryTitle>
      <ItemWrapper>
        {movieList.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ItemWrapper>
    </Container>
  );
}

const Container = styled.div``;

const CategoryTitle = styled.h2`
  font-size: 1.2rem;
`;

const ItemWrapper = styled.ul`
  display: flex;
  margin-top: 20px;
  overflow: auto;
`;

export default MovieList;
