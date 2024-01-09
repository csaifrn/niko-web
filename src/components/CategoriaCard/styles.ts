import { PencilSimple } from '@phosphor-icons/react';
import styled from 'styled-components';

const totalArea = styled.div`
  background-color: ${({ theme }) => theme.colors['gray/500']};
  align-items: center;
  color: white;
  font-family: 'Rubik';
  border-radius: 5px;
`;

const CardArea = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  align-items: center;
  justify-content: space-between;
  color: white;
  font-family: 'Rubik';
  border-radius: 5px;
  overflow: hidden;
`;
const CardA = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5em 2em;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  gap: 2em;
  font-family: 'Rubik';
  border-radius: 5px;
`;

const dataUser = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;
const dataLote = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;
const textLote = styled.p`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0em 1em;
  color: white;
  background-color: ${({ theme }) => theme.colors['gray/700']};
  border-radius: 5px;
`;
interface IFooter {
  setHeight: number;
}

const Footer = styled.div<IFooter>`
  border-top: 1px solid transparent;
  width: 100%;
  height: 0px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  span {
    padding: 12px 0;
  }

  .accodion {
    padding: 2em;
  }
  .padding {
    padding: 0em 2em 2em 2em;
  }

  &.show {
    border-top: 1px solid ${({ theme }) => theme.colors['gray/400']};
    height: ${({ setHeight }) => setHeight}px;
  }
`;

const DataUser = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3em;
`;

const SideUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Fase = styled.div`
  display: flex;
  gap: 1em;
`;

const CategoriaClick = styled.div`
  background-color: ${({ theme }) => theme.colors['gray/500']};
  font-family: 'Rubik';
  color: ${({ theme }) => theme.colors.white};
  display: grid;
  gap: 1em;
  border-radius: 5px;
`;

const CabecarioCategoria = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24px;
`;

const Icon = styled.img`
  height: 18px;
  width: 18px;
`;

export const ClassTitle = styled.p`
  font-size: 16px;
  @media screen and (max-width: 767px){
    font-size: 12px;
  }
`;

export const ButtonArea = styled.button`
  background-color: transparent;
  cursor: pointer;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms;
  border-radius: 3px;
  border: none;
  :hover {
    background-color: ${({ theme }) => theme.colors['gray/400']};
  }
`;

export const ClasseCardButtons = styled.div`
  display: flex;
  gap: 8px;

`;

const TotalFase = styled.p`
  color: white;
`;

const PerecentageFase = styled.p`
  color: ${({ theme }) => theme.colors['green/50']};
  font-size: 10px;
`;

const Prioridade = styled.div`
  height: 24px;
  background-color: ${({ theme }) => theme.colors['red/700']};
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: white;
    margin-bottom: 0;
    padding: 0 0.5em;
  }
`;

const ButtonAtribuir = styled.button`
  height: 44px;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors['gray/700']};
  color: white;
  display: flex;
  align-items: center;
  padding: 0em 1em;
  gap: 1em;
  font-family: 'Rubik';
`;

export const ButtonDelete = styled.button`
  height: 44px;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors['red/500']};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0em 1em;
  gap: 1em;
  font-family: 'Rubik';
  background-color: ${({ theme }) => theme.colors['red/700']};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors['red/500']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['red/600']};
    transform: translateY(-5%) translateX(2%);
  }
`;

export const ButtonPrioridade = styled.button`
  height: 44px;
  width: 100%;
  border: none;
  border-radius: 5px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0em 1em;
  gap: 1em;
  font-family: 'Rubik';
  background-color: ${({ theme }) => theme.colors['gray/700']};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors['gray/900']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['gray/600']};
    transform: translateY(-5%) translateX(2%);
  }
`;

const BarOut = styled.div`
  background-color: ${({ theme }) => theme.colors['gray/700']};
  width: 100%;
  height: 1.5em;
  border-radius: 5px;
  overflow: hidden;
`;

interface IBar {
  percentage: number;
}

const BarInner = styled.div<IBar>`
  background-color: ${({ theme }) => theme.colors['green/400']};
  width: ${({ percentage }) => percentage}%;
  height: 1.5em;
`;

const BtnsDiv = styled.div`
  padding: 2em 2em 2em 2em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
`;

export {
  CardArea,
  dataUser,
  dataLote,
  textLote,
  Footer,
  totalArea,
  SideUser,
  DataUser,
  Icon,
  TotalFase,
  PerecentageFase,
  Fase,
  ButtonAtribuir,
  CardA,
  CategoriaClick,
  CabecarioCategoria,
  Prioridade,
  BarOut,
  BarInner,
  BtnsDiv,
};
