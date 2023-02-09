import styled from "styled-components";

const MenuImg = styled.img`

`;

const MenuLeft = styled.div`
  display: flex;
  gap: 0.5em;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const MenuArea = styled.nav`
  display: flex;
  padding: 1em;
  height: 2em;
  background: #191C24;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export { MenuImg, MenuArea, MenuLeft }