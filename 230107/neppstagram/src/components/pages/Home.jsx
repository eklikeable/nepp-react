import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { getPosts } from '../../api/admin';
import Post from '../home/Post';

function Home() {
  const [postList, setPostList] = useState([]);
  const [page, setPage] = useState(1);
  const [isLast, setIsLast] = useState(false); // 마지막 목록인가?

  // const dispatch = useUserDispatch();

  // useEffect(() => {
  //   getCurrentUser().then((user) => dispatch(user.id));
  // }, [dispatch]);

  // useQuery
  const { data, isLoading } = useQuery('posts', () => getPosts(page), {
    onSuccess: (data) => {
      // console.log('데이터를 로딩을 성공하였습니다', data);
    },
    onError: (err) => alert(err.response.message),
  });

  useEffect(() => {
    getPosts(page).then((res) => {
      if (res.length < 10) setIsLast(true);
      setPostList((postList) => [...postList, ...res]);
    });
  }, [page]);

  if (isLoading) return <div>Loding....</div>;

  /*
  이렇게 따로 getViewMore 함수를 만들지 않고, useEffect의 디펜던시로 page를 추가함
  const getViewMore = () => {
    getPosts(page + 1).then((res) => setPostList([...postList, ...res]));
    setPage(page + 1);
  };
  */

  return (
    <Container>
      {data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      {!isLast && ( // 마지막목록인경우 view more 버튼 숨기기
        <BtnMore onClick={() => setPage(page + 1)}>view more...</BtnMore>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BtnMore = styled.div`
  width: 120px;
  height: 30px;
  line-height: 30px;
  margin-top: 30px;
  margin-bottom: 10px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  text-align: center;
  cursor: pointer;
`;
export default Home;
