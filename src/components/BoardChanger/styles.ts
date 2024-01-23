import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ChangeContainer = styled.nav`
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  padding: 0 2em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  //margin-bottom: 1em;
`;

export const Change = styled.nav`
  border-radius: 20px;
  justify-content: center;
  padding: 0 2em;
  display: flex;
  gap: 1em;
  //margin-bottom: 1em;
`;

export const IconBarra = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(0.9);
  }
`;

export const LinkImgEscura = styled.img`
  filter: brightness(0.6);
  transition: all 500ms;
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(0.9);
  }
`;

export const LinkImg = styled.img`
  transition: all 500ms;
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(0.9);
  }
`;

interface BarraL {
  color: string;
}

export const Barra = styled.div<BarraL>`
  background-color: ${(props) => props.color};
  width: 100%;
  height: 0.5em;
  border-radius: 10px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors['white']};
`;
