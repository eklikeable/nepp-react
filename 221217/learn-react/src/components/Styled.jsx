/*
✨ Styled component 의 장점 :
  1. CSS 파일을 따로 관리 할 필요가 없다.
  2. 역할을 직관적으로 알 수 있다.
  3. 동적인 스타일링이 편하다.
  4. ClassName을 알아서 난독화 해주기 때문에, 중복 될 일이 없다.
*/

import styled, { createGlobalStyle, css, keyframes } from 'styled-components';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function Styled() {
  const [input, setInput] = useState('');
  const [color, setColor] = useState('tomato');

  return (
    <div>
      <Block>
        {/** GlobalStyle은 감쌀 필요없이 최상위에 올려두면 공통스타일이 적용된다 */}
        <GlobalStyle />
        <Title active={false} color={color}>
          Hello Styled Component
        </Title>
        {/** input에 색깔을 입력받아서 버튼을 누를때마다 글자색을 변경해보자 */}
        <input type='text' onChange={(e) => setInput(e.target.value)} />
        <BlueButton onClick={() => setColor(input)}>변경</BlueButton>
      </Block>
      <Title>Block밖의 Title</Title>
    </div>
  );
}

const Title = styled.h3`
  font-size: 1.6rem;
  /* color: ${(props) => props.color}; */
  color: ${({ color }) => color};
  /* active가 true라면 배경을 tomato로  */
  /* background-color: ${({ active }) => active && 'tomato'}; */
  ${({ active }) =>
    active &&
    css`
      // css : 한번에 여러개의 스타일을 덮어 씌울 때
      color: red;
      background-color: yellow;
      border: 3px solid red;
    `}
`;

const Block = styled.div`
  input {
    border: none;
    background-color: #ececec;
    height: 30px;
  }

  /* ${Title} : Block 안에 있는 Title에만 한정하여 적용 가능 */
  ${Title} {
    border: 3px solid black;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  outline: none;
  color: #fff;
  background-color: red;
  border-radius: 10px;
`;

// keyframes : CSS 애니메이션 효과
const slideUp = keyframes`
  to {
    transform: translateY(-20px);
  }
`;

// styled(Button) : Button태그에 특정 스타일만 덮어씌울 수 있다.
const BlueButton = styled(Button)`
  padding: 20px 30px;
  background-color: blue;

  animation: ${slideUp} 0.4s 5 alternate;

  // 미디어 쿼리도 styled 안에 중첩 작성 가능
  @media screen and (max-width: 900px) {
    padding: 5px 10px;
  } ;
`;

// ✨ CSS는 순서가 중요하다

export default Styled;
