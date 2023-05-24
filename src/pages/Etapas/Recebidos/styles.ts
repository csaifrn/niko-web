import styled from "styled-components";


// Create a Title component that'll render an <h1> tag with some styles

const LoteArea = styled.section`
  width: calc(100% -2em);
  background-color: #191C24;
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 2em;
  grid-gap: 1em;
  border-radius: 5px;
  overflow-y: scroll;
  scroll-behavior: auto;
  scrollbar-width: thin;
`;

const FooterHome = styled.footer`
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
  width: 100%;
  height: 44px;
  background-color: #43DB6D;
  border-radius: 5px;
  border: none;
  color: white;
  font-weight: bold;
  :hover {
  }
  p {
    font-family: "Rubik";
    color: #191C24;
  }
`;

export { LoteArea, FooterHome, spanLinear, Btn };