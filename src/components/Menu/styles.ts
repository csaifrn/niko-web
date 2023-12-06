import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuImg = styled.img``;

export const MenuLupa = styled.img`
  @media screen and (min-width: 767px) {
    width: 24px;
  }
`;

export const LinkLogo = styled(Link)`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const MenuLupaMobile = styled.img`
  @media screen and (min-width: 767px) {
    display: none;
  }
`;

export const MenuWrapper = styled.div`
  background-color: #191c24;
  display: flex;
  top: 0;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 80px;
  z-index: 99;
  //padding: 0em 2em 0em 2em;
`;

const MenuArea = styled.nav`
  //position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1140px;
  margin: 0em 2em 0em 2em;
`;

export const MenuRight = styled.div`
  display: flex;
  gap: 1em;
  border-radius: 100%;
  border: solid 1px #393e4b;
`;

export const UserIcon = styled.div`
  display: flex;
  gap: 1em;
  border: solid 1px #393e4b;
  border-radius: 100%;
  padding: 8px;
  cursor: pointer;
  size: 120;
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
  @media screen and (min-width: 767px) {
    display: none;
  }
`;

export { MenuImg, MenuArea,  ButtonBurger, StyledMenu, ContainerA };

export const MenuDesk = styled.div`
  display: none;
  gap: 2em;
  @media screen and (min-width: 767px) {
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

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const TextLink = styled.p`
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(0.9);
  }
`;

