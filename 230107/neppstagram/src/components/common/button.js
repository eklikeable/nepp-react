import styled, { css } from 'styled-components';

export const Button = styled.button`
  background-color: dodgerblue;
  border: 0px;
  border-radius: 5px;
  width: 100%;
  height: 30px;
  color: #fff;

  margin-top: 5px;

  &:hover {
    cursor: pointer;
    font-weight: bold;
  }

  ${({ bgColor }) =>
    bgColor &&
    css`
      background-color: ${bgColor};
    `}
`;
