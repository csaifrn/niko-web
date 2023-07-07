import styled from 'styled-components';

const MenuImg = styled.img``;

const MenuLeft = styled.div`
  display: flex;
  gap: 1em;
`;

const MenuArea = styled.nav`
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  padding: 2em;
  background: #191c24;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  height: 80px;
  z-index: 9999;
`;

interface BurgerProps {
  open: boolean;
}

const ButtonBurger = styled.a<BurgerProps>`
  cursor: pointer;
  z-index: 0;

  &:focus {
    outline: none;
  }

  img {
    transition: 2s;
  }
`;

const StyledMenu = styled.nav<BurgerProps>`
  display: flex;
  width: 40%;
  padding-left: 1em;
  padding-top: 4em;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index: 99;
  flex-direction: column;
  justify-content: right;
  background: #191c24;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  text-align: left;
  position: absolute;
  gap: 1em;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  height: calc(100% - 4em);
  @media (max-width: 576px) {
    width: 70%;
  }
`;

const ContainerA = styled.div`
  width: 74px;
`;

export { MenuImg, MenuArea, MenuLeft, ButtonBurger, StyledMenu, ContainerA };
