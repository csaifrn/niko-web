import styled from "styled-components";

interface BurgerProps {
  open: boolean;
}

const StyledMenu = styled.nav<BurgerProps>`
  display: flex;
  padding-top: 2em;
  padding-left: 1em;
  z-index: 99;
  flex-direction: column;
  justify-content: right;
  background: #191C24;
  text-align: left;
  gap: 1em;
  transition: transform 0.3s ease-in-out;
`;


const areaClick = styled.div<BurgerProps>`
  width: 40%;
  height: 100%;
  padding-left: 1em;
  padding-top: 1.1em;
  position: absolute;
  top: 0;
  left: 0;
  background: #191C24;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: calc(100% - 1.1em);
  transition: transform 0.3s ease-in-out;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  @media (max-width: 576px) {
    width: 70vw;
  }
`

const MenuImg = styled.img`

`;

const FecharMenu = styled.button`
  background-color: transparent;
  border:none;
`

export {StyledMenu, MenuImg, areaClick, FecharMenu}