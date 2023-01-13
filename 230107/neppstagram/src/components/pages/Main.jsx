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
        <strong>✨ Neppstagram ✨</strong>
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
      </Container>
      <NavBox>
        <NavBar />
      </NavBox>
    </>
  );
}

const UpperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 50px;
  line-height: 50px;
  background-color: lemonchiffon;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 87vh;
  position: relative;
`;

const BtnWrapper = styled.div`
  width: 90px;
`;

const OutletWrapper = styled.div`
  flex: 1;
  border-top: 1px solid #eee;
  overflow: auto;
`;

const NavBox = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 1000;
`;
export default Main;
