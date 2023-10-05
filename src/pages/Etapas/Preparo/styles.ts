import styled from 'styled-components';

export const Btn = styled.button`
  padding: 0.5em 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2em;
  height: 44px;
  background-color: #43db6d;
  border-radius: 5px;
  border: none;
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

export const Wrapper = styled.div`
  font-family: 'Rubik';
  background-color: #0a090e;
  width: 100vw;
  padding: 0 2em;
  margin-top: 8em;
  overflow: hidden;
  min-height: 550px;
`;
