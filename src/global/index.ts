import styled from 'styled-components';

interface paDiv {
  children?: JSX.Element | JSX.Element[];
}

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.a`
  font-family: 'Rubik';
  text-decoration: none;
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

const Wrapper = styled.div`
  font-family: 'Rubik';
  display: flex;
  flex-direction: column;
  gap: 32px;
  //background-color: #0a090e;
  //height: 170vh;
  //min-height: 550px;
  //width: 100vw;
  //overflow: hidden;
  margin: 9em 2em 0em 2em;
  @media screen and (min-width: 767px) {
    margin: 10em 0em 0em 0em;
  }
`;

const AlignCenter = styled.div`
  font-family: 'Rubik';
  background-color: ${({ theme }) => theme.colors['gray/900']};
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2em;
`;

const pasDiv = styled.div<paDiv>`
  font-family: 'Rubik';
`;

const Main = styled.section`
  margin: 2em 0;
  display: grid;
  grid-template-columns: auto auto;
  justify-items: center;
  justify-content: center;
  grid-gap: 1.25em;
  min-height: 360px;
  min-height: 640px;
`;

const Footer = styled.footer`
  display: none;
  background: ${({ theme }) => theme.colors['gray/700']};
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
`;

const spanLinear = styled.span`
  color: linear-gradient(to right, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1));
`;

const Btn = styled.button`
  padding: 0.5em;
  width: 40%;
  background-color:  ${({ theme }) => theme.colors['orange/400']};
  border-radius: 0.5em;
  border: 1px solid  ${({ theme }) => theme.colors['orange/400']};
  color: white;
  font-weight: bold;
  :hover {
    border: 1px solid ${({ theme }) => theme.colors['gray/300']} !important;
  }
`;

export { Title, AlignCenter, Wrapper, Main, Footer, spanLinear, Btn, pasDiv };
