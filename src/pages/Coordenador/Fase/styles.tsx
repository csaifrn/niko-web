import styled from 'styled-components';
import media from 'styled-media-query';

const Title = styled.a`
  font-family: 'Rubik';
  text-decoration: none;
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

export const FasePage = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  display: grid;
  //justify-items: center;
  //justify-content: center;
  margin: 8.5em 2em 0em 2em;
  grid-gap: 1.25em;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  max-width: 1140px;
  @media screen and (min-width: 767px) {
    //margin: 40em;
    margin: 10em 0em 0em 0em;
    grid-gap: 2.5em;
    grid-template-columns: 1fr 1fr 1fr;
  }
  /* ${media.lessThan('small')`
    //só do mobile
    margin: 2em 8em;
    margin-top: 8.5em;
    grid-gap: 1.25em;
    grid-template-columns: auto auto;
  `} */
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
  width: 40%;
  background-color: #f3802d;
  border-radius: 5px;
  border: 1px solid #f3802d;
  color: white;
  font-weight: bold;
  :hover {
    border: 1px solid #b1b1b1;
  }
`;

export { Title, Main, FooterHome, spanLinear, Btn };
