import styled from 'styled-components';
import media from 'styled-media-query';

export const RecepcaoPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 1140px;
  margin: 8em 2em 2em 2em;
  font-family: 'Rubik';
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (min-width: 767px) {
    justify-content: center;
    margin: 10em 0em 2em 0em;
  }
`;

export const RecepçãoTitle = styled.h1`
  color: #ffffff;
  font-family: 'Rubik';
`;

// export const RemessasDiv = styled.div`
//   //margin: 2em 2em 2em 2em; 
//   display: flex; 
//   flex-direction: column; 
//   gap: 1em; 
//   justify-content: center ;
//   align-items: center;
//   &::-webkit-scrollbar {
//     width: 0.3em;
//     height: 2em;
//   }

//   &::-webkit-scrollbar-track {
//     background: #191c24;
//   }

//   &::-webkit-scrollbar-thumb {
//     background-color: #2a2e38;
//     border-radius: 20px;
//   }

//   &::-webkit-scrollbar-track {
//     background-color: transparent;
//     margin: 0em 2em;
//   }
// `;

const Main = styled.section`
  background-color: #191c24;
  display: flex;
  flex-direction: column;
  padding: 2em;
  gap: 1em;
  border-radius: 5px;
  height: 60vh;
  width: 100%;
  overflow-y: scroll;
  scroll-behavior: auto;
  scrollbar-width: thin;
  @media screen and (min-width: 767px) {
    height: 70vh; 
    width: 70vh;
  }
`;

export const IconeRecepDivMobile = styled.div`
   
  display: flex;
  //margin: 1em 0em 0em 2em; 
  justify-content: flex-start;
  gap: 16px ;
  /* ${media.greaterThan('large')`
    display: none;
  `} */
  @media screen and (min-width: 767px) {
    display: none; 
  }
`;

export const IconeRecepDivDesktop = styled.div`
   
  display: none;
  //margin: 1em 0em 0em 2em; 
  justify-content: center;
  gap: 16px ;
  /* ${media.greaterThan('large')`
    display: flex;
    align-items: center;
  `} */
  @media screen and (min-width: 767px) {
    display: flex;
    align-items: center;
  }
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
  @media screen and (min-width: 767px) {
    width: 20%;
  }
  p {
    font-family: 'Rubik';
  }
`;

export {FooterHome, spanLinear, Btn, Main };
