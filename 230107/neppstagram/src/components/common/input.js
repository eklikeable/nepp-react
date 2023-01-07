import styled from 'styled-components';

export const Input = styled.input`
  padding: 5px;
  width: 100%;
  border: 1px solid #ddd;
  outline: none;

  & + & {
    margin-top: 10px;
  }
`;
