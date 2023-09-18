import styled from 'styled-components';
import media from 'styled-media-query';

// Create a Title component that'll render an <h1> tag with some styles

const LoteArea = styled.section`
  width: calc(100% -2em);
  height: 50vh;
  background-color: #191c24;
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 2em;
  grid-gap: 1em;
  border-radius: 5px;
  overflow-y: scroll;
  scroll-behavior: auto;
  scrollbar-width: thin;
  @media screen and (min-width: 500px) {
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1000px) {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  @media screen and (min-height: 650px) {
    max-height: 60vh;
  }
`;

const RemessasDiv = styled.section`
  
  ${media.greaterThan('large')`
  `}
`;

const Main = styled.section`
  background-color: #191c24;
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 2em;
  grid-gap: 1em;
  border-radius: 5px;
  overflow-y: scroll;
  scroll-behavior: auto;
  scrollbar-width: thin;
  height: 60vh;
  
  ${media.greaterThan('large')`
    justify-items: center;
    width: 80vh;
    height: 70vh;
  `}
`;

export const IconeRecepDivMobile = styled.div`
   
  display: flex;
  margin: 1em 3em 0em 3em; 
  justify-content: flex-start;
  gap: 0.5em ;
  ${media.greaterThan('large')`
    display: none;
  `}
`;

export const IconeRecepDivDesktop = styled.div`
   
  display: none;
  margin: 1em 3em 0em 2em; 
  justify-content: center;
  gap: 0.5em ;
  ${media.greaterThan('large')`
    display: flex;
  `}

`;

export const IconeRecepcao = styled.img`

`;

const FooterHome = styled.footer`
  height: 4em;
  background: #191c24;
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
`;

const spanLinear = styled.span`
  color: linear-gradient(to right, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1));
`;

const Btn = styled.button`
  padding: 0.5em;
  width: 100%;
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
  }
`;

export { LoteArea, FooterHome, spanLinear, Btn, Main };
