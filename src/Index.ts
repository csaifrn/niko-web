import styled from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.a`
  text-decoration: none;
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

export const MenuImg = styled.img`
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Menu = styled.nav`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  display: flex;
  padding: 2em;
  height: 5vh;
  background: #191C24;
  align-items: center;
  gap: 20px;
`;

export const Wrapper = styled.section`
  background-color: #0A090E;
  height: 100vh;
`;

