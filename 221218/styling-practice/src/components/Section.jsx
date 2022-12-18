import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Section() {
  const [idx, setIdx] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: idx * window.innerHeight, behavior: 'smooth' });

    const handleIdx = (e) => {
      e.preventDefault();
      if (isScrolling) return;
      if (e.deltaY < 0 && idx === 0) return;
      if (e.deltaY > 0 && idx === 3) return;

      setIsScrolling(true);
      setTimeout(() => {
        setIsScrolling(false);
      }, 2000);

      // deltaY는 wheel을 굴릴때 움직이는 이동량(위: 100, 아래: -100)
      if (e.deltaY > 0) setIdx(idx + 1);
      else setIdx(idx - 1);
    };
    window.addEventListener('wheel', handleIdx, { passive: false });

    // 이벤트 뒷정리 : 리턴은 함수 형태여야 함
    return () =>
      window.removeEventListener('wheel', handleIdx, { passive: false });
  }, [idx, isScrolling]);

  return (
    <div>
      <SectionBlock bgColor='tomato'>1</SectionBlock>
      <SectionBlock bgColor='dodgerblue'>2</SectionBlock>
      <SectionBlock bgColor='yellowgreen'>3</SectionBlock>
      <SectionBlock bgColor='pink'>4</SectionBlock>
    </div>
  );
}

const SectionBlock = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 50px;
  background-color: ${({ bgColor }) => bgColor};
`;
export default Section;
