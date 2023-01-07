import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../common/button';
import NavBar from '../common/NavBar';

function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('access-token');
    if (!token) {
      // 메인화면 접속시, localStorage에 저장된 token이 없다면 signin페이지로 이동
      navigate('/signin');
    }
  }, [navigate]);

  return (
    <>
      <UpperContainer>
        ✨ 로그인 성공 ✨
        <BtnWrapper>
          <Button
            bgColor='black'
            onClick={() => {
              navigate('/signin');
              localStorage.removeItem('access-token');
            }}
          >
            로그아웃
          </Button>
        </BtnWrapper>
      </UpperContainer>
      <Container>
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
        <NavBar />
      </Container>
    </>
  );
}

const UpperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  height: 15%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 85%;
`;

const BtnWrapper = styled.div`
  margin-top: 20px;
  width: 100px;
`;

const OutletWrapper = styled.div`
  flex: 1;
  border-top: 1px solid #eee;
`;

export default Main;
