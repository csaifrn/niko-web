import styled from 'styled-components';
import media from 'styled-media-query';

export const TitleFase = styled.h1`
  font-family: 'Rubik';
  color: white;
`;

export const FasePage = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  margin: 8em 2em 0em 2em;
  display: grid;
  grid-gap: 1.25em;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  max-width: 1140px;
  @media screen and (min-width: 767px) {
    margin: 10em 2em 0em 2em;
    grid-gap: 2.5em;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 1140px) {
    margin: 10em 0em 0em 0em;
  }
`;

export const CardFaseMaisTooltip = styled.div`
`;


const FooterHome = styled.footer`
  height: 4em;
  background: ${({ theme }) => theme.colors['gray/700']};
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
  width: 40%;
  background-color: ${({ theme }) => theme.colors['orange/400']};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors['orange/400']};
  color: white;
  font-weight: bold;
  :hover {
    border: 1px solid ${({ theme }) => theme.colors['gray/300']} !important;
  }
`;

export { Main, FooterHome, spanLinear, Btn };