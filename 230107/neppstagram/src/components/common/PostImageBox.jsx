import styled, { css } from 'styled-components';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useState } from 'react';

function PostImageBox({ img_list }) {
  const [idx, setIdx] = useState(0);

  const handleIdx = (operand) => {
    if (
      (operand === -1 && idx + operand < 0) ||
      (operand === 1 && idx + operand > img_list.length - 1)
    )
      return;
    setIdx(idx + operand);
  };

  return (
    <Container>
      <BtnSlide onClick={() => handleIdx(-1)}>
        <FaAngleLeft />
      </BtnSlide>
      <Wrapper idx={idx}>
        {img_list.map((img) => (
          <PostImg key={img.id} url={img.url} />
        ))}
      </Wrapper>
      <BtnSlide onClick={() => handleIdx(1)}>
        <FaAngleRight />
      </BtnSlide>
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
  position: relative;
`;

const Wrapper = styled.ul`
  display: flex;
  height: 250px;
  background-color: #ddd;

  transition: transform 0.25s;

  ${({ idx }) => css`
    transform: translate(${idx * -100}%);
  `};
`;

const PostImg = styled.li`
  width: 100%;

  flex-shrink: 0;

  ${({ url }) => css`
    background: url(${url}) center / cover no-repeat;
  `}
`;

const BtnSlide = styled.div`
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;

  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.1);
  color: white;
  cursor: pointer;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &:nth-of-type(1) {
    left: 10px;
  }

  &:nth-of-type(2) {
    right: 10px;
  }
`;

export default PostImageBox;
