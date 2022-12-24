import styled, { css } from 'styled-components';
import { FcNext, FcPrevious } from 'react-icons/fc';
import { useState } from 'react';

function Slider() {
  const [idx, setIdx] = useState(0);

  const handleIdx = (value) => {
    if (idx + value < 0) {
      setIdx(2);
      return;
    }
    if (idx + value > 2) {
      setIdx(0);
      return;
    }
    setIdx(idx + value);
  };

  return (
    <Container>
      <Wrapper idx={idx}>
        <Item bgColor='tomato'>1</Item>
        <Item bgColor='dodgerblue'>2</Item>
        <Item bgColor='yellowgreen'>3</Item>
      </Wrapper>
      <BtnList>
        <BtnSlide>
          <FcPrevious onClick={() => handleIdx(-1)} />
        </BtnSlide>
        <BtnSlide>
          <FcNext onClick={() => handleIdx(+1)} />
        </BtnSlide>
      </BtnList>
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
  border: 3px solid red;
`;

const Wrapper = styled.ul`
  display: flex;
  height: 300px;
  background-color: #eee;
  transition: transform 0.4s;
  ${({ idx }) => css`
    transform: translate(${idx * -100}%);
  `};
`;

const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-shrink: 0; // 공간이 부족할 때 줄어드는 비율을 0으로 변경(크기를 줄이지 않겠다)
  font-size: 5rem;
  color: #fff;
  ${({ bgColor }) => css`
    background-color: ${bgColor};
  `}
`;

const BtnSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  cursor: pointer;
`;

const BtnList = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Slider;
