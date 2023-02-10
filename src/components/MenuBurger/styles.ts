import styled from "styled-components";

interface BurgerProps {
  open: boolean;
}

const StyledMenu = styled.nav<BurgerProps>`
  display: flex;
  width: 30%;
  padding-left: 1em;
  padding-top: 4em;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index: 99;
  flex-direction: column;
  justify-content: right;
  background: #191C24;
  display: ${({ open }) => open ? 'flex' : 'none'};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  text-align: left;
  position: absolute;
  gap: 1em;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  height: calc(100% - 4em);
  @media (max-width: 576px) {
      width: 70vw;
    }

  
`;


export {StyledMenu}