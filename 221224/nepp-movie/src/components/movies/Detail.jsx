import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { getDetail } from '../../api/movies';

function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState({
    data: null,
    error: null,
    loading: true,
  });

  const { data, error, loading } = detail;
  useEffect(() => {
    getDetail(id)
      .then((movie) =>
        setDetail({
          data: movie,
          error: null,
          loading: false,
        })
      )
      .catch((e) =>
        setDetail({
          data: null,
          loading: false,
          error: e.message,
        })
      );
  }, [id, error]);

  if (loading) return <div>loading.....</div>;
  if (error) return <div>{error}</div>;
  if (!data) return <div>영화 정보가 없습니다.</div>;

  const { title, overview, release_date, poster_path, backdrop_path } = data;
  const img_url = 'https://image.tmdb.org/t/p/w342/' + poster_path;
  const back_url = 'https://image.tmdb.org/t/p/original' + backdrop_path;

  return (
    <Container>
      <Wrapper backUrl={back_url}>
        <ImgBox>
          <img src={img_url} alt={title} />
        </ImgBox>
        <DescBox>
          <Title>
            {title}
            <span>{release_date}</span>
          </Title>
          <strong>개요</strong>
          <OverView>{overview}</OverView>
        </DescBox>
      </Wrapper>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  max-width: 960px;
  padding: 50px 0;
  color: #fff;

  ${({ backUrl }) => css`
    background: url(${backUrl}) center / cover no-repeat;
    background-color: rgba(0, 0, 0, 0.6);
    background-blend-mode: overlay;
  `}
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 450px;

  overflow: hidden;
  background-color: tomato;

  flex-shrink: 0; //자기 원래 크기에서 줄어들지 않음
  margin-right: 20px;
`;

const DescBox = styled.div``;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;

  span {
    font-size: 1.2rem;
  }
`;

const OverView = styled.p`
  margin-top: 10px;
`;
