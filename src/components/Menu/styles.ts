import styled from 'styled-components';

const MenuImg = styled.img``;
export const MenuLupa = styled.img`
  @media screen and (min-width: 1008px) {
    width: 24px;
  }
`;

export const LinkLogo = styled.a`
  @media screen and (max-width: 1008px) {
    display: none;
  }
`;

export const MenuLupaMobile = styled.img`
  @media screen and (min-width: 1008px) {
    display: none;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  background: #191c24;
`;

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
  //padding: 2em 175px 2em 175px;
  //background: #191c24;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  height: 80px;
  z-index: 99;
  background-color: red;
`;

interface BurgerProps {
  open: boolean;
}

const ButtonBurger = styled.a<BurgerProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 5px;
  z-index: 0;
  border: 1px solid ${({ theme }) => theme.colors['gray/500']};
  padding: 8px;
  background-color: ${({ theme }) => theme.colors['gray/700']};

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #12141a;
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
  display: flex;
  gap: 4em;
  align-items: center;
  
`;

export const ContainerLogo = styled.div`
  width: 74px;
  display: flex;
  gap: 2em;
  align-items: center;
  @media screen and (min-width: 1008px) {
    display: none;
  }
`;

export { MenuImg, MenuArea, MenuLeft, ButtonBurger, StyledMenu, ContainerA };

export const MenuDesk = styled.div`
  display: none;
  gap: 2em;
  @media screen and (min-width: 1008px) {
    display: flex;
  }
`;

export const InputSearch = styled.button`
  font-family: 'Rubik';
  display: flex;
  min-width: 200px;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors['white']};
  border-radius: 5px;
  align-items: center;
  padding: 0 16px;
  border: 1px solid ${({ theme }) => theme.colors['gray/500']};
  background-color: ${({ theme }) => theme.colors['gray/700']};
  transition: all 0.3s;

  &:hover {
    background-color: #12141a;
  }

  @media screen and (max-width: 1008px) {
    display: none;
  }
`;
