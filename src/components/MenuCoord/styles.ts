import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuImg = styled.img`
`;

const MenuLeft = styled.div`
  display: flex;
  gap: 0.5em;

`;

// Create a Wrapper component that'll render a <section> tag with some styles
const MenuArea = styled.div`
  z-index: 99;
  position: fixed;
  display: flex;
  bottom: 0px;
  left: 0;
  padding: 2em;
  width: 100vw;
  height: 80px;
  background: ${({ theme }) => theme.colors['gray/700']};
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media screen and (min-width: 767px) {
    display: none;
  }
`;

const textIcon = styled.p`
  color: white;
  font-weight: bold;
`;

const link = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: center;
  text-decoration: none;
  font-family: 'Rubik';
  border-radius: 5px;
  padding: 5px;
  transition: all 500ms;
  &:hover {
    background-color: ${({ theme }) => theme.colors['gray/500']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['gray/500']};
    transform: translateY(-5%) translateX(2%);
  }
`;

export { MenuImg, MenuArea, MenuLeft, textIcon, link };
