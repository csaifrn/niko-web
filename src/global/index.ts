import styled from "styled-components";


// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.a`
  font-family: 'Rubik';
  text-decoration: none;
  font-size: 1.5em;
  text-align: center;
  color: white;
`;



const Wrapper = styled.section`
  background-color: #0A090E;
  height: 100vh;
  width: 100vw;
`;

const Main = styled.section`
  margin: 2em 0;
  display: grid;
  grid-template-columns: auto auto;
  justify-items: center;
  justify-content: center;
  grid-gap: 1.25em;
`;

const Footer = styled.section`
  height: 4em;
  background: #191C24;
  position: absolute;
  bottom: 0;
  width: 100%;
  left:0;
`;

const spanLinear = styled.span`
  color: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));

`;

const Btn = styled.button`
  padding: 0.5em;
  width: 40%;
  background-color: #F3802D;
  border-radius: 0.5em;
  border: 1px solid #F3802D;
  color: white;
  font-weight: bold;
  :hover {
    border: 1px solid #B1B1B1;
  }
`;

export { Title, Wrapper, Main, Footer, spanLinear, Btn };
