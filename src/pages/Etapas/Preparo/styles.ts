import styled from 'styled-components';

export const Btn = styled.button`
  padding: 0.5em 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 44px;
  background-color: #43db6d;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  :hover {
  }
  p{
    font-family: 'Rubik';
    color: ${({ theme }) => theme.colors['gray/700']};
  }
  @media screen and (min-width: 767px) {
    width: 20%;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 767px) {   
    margin: 10em 0em 0em 0em;
  }
  margin: 8em 2em 0em 2em;
  width: 100%;
  overflow: hidden;
  min-height: 550px;
  max-width: 1140px;
  font-family: 'Rubik';
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3em
`;
