import styled from 'styled-components';

interface BurgerProps {
  open: boolean;
}

const StyledMenu = styled.nav<BurgerProps>`
  display: flex;
  padding-top: 2em;
  flex-direction: column;
  justify-content: right;
  background: #191c24;
  text-align: left;
  z-index: 99;
  gap: 1em;
  transition: transform 0.3s ease-in-out;
`;

const areaClick = styled.div<BurgerProps>`
  position: fixed;
  top: 0;
  left: -100%;
  width: 500px; /* ou o tamanho desejado */
  height: 100%;
  background-color: white;
  transition: all 0.3s ease; /* Adiciona uma transição suave */
  z-index: 99;
  padding-left: 2em;
  padding-top: 2em;
  background: #191c24;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  @media (max-width: 576px) {
    width: 300px;
  }
`;

const MenuImg = styled.img``;

const FecharMenu = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 100%;
`;

export { StyledMenu, MenuImg, areaClick, FecharMenu };
