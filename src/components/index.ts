import styled from "styled-components";
import Card from "./Card";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.a`
  font-family: 'Rubik';
  text-decoration: none;
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

const MenuImg = styled.img`
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Menu = styled.nav`
  display: flex;
  padding: 1em;
  height: 2em;
  background: #191C24;
  align-items: center;
  gap: 20px;
`;

const Wrapper = styled.section`
  background-color: #0A090E;
  height: 100vh;
`;

const Main = styled.section`
  margin: 2em 0;
  display: grid;
  grid-template-columns: auto auto;
  justify-items: center;
  justify-content: center;
  grid-gap: 1.25em;
`;

const spanLinear = styled.span`
  color: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));

`;

export { Card, Title, Wrapper, MenuImg, Menu, Main, spanLinear };
