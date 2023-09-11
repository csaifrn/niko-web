import styled from 'styled-components';

export const Btn = styled.button`
  padding: 0.5em 2em;
  flex: 1;
  margin: 0.5em 2em;
  height: 44px;
  background-color: #43db6d;
  border-radius: 5px;
  border: none;
  color: white;
  font-weight: bold;
  :hover {
  }
  @media screen and (min-width: 700px) {
    width: 20%;
  }
  p {
    font-family: 'Rubik';
    color: ${({ theme }) => theme.colors['gray/700']};
  }
`;
