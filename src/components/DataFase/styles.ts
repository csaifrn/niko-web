import styled from 'styled-components';
import media from 'styled-media-query';

const DataUser = styled.div`
  display: flex;
  color: white;
  font-family: 'Rubik';
  justify-content: space-between;
  gap: 3em;
  width: 100%;
  @media screen and (min-width: 767px) {
    justify-content: flex-start;
    gap: 2em;
    width: auto;
  }
`;

export const ClassesData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2em;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 16px;
  }
`;

export const StatusDiv = styled.div`
  font-family: 'Rubik';
  display: flex;
  gap: 2em;
  align-items: flex-end;
  flex-wrap: wrap;
  @media screen and (max-width: 767px) {
  }
`;

export const IconDiv = styled.div`
  @media screen and (max-width: 767px) {
  }
`;

export const StatusEspecificDiv = styled.div`
  display: flex;
  gap: 8px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StatusText = styled.h2`
  color: ${({ theme }) => theme.colors['yellow/300']};
  @media screen and (min-width: 767px) {
  }
`;

const SideUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  @media screen and (min-width: 767px) {
    flex-direction: row;
    gap: 2em;
  }
`;

const Fase = styled.div`
  display: flex;
  gap: 1em;
  @media screen and (min-width: 767px) {
    flex-direction: column;
    gap: 1em;
    width: 70px;
  }
`;

const Icon = styled.img`
  height: 36px;
  width: 36px;
  cursor: pointer;
  transition: all 500ms;
  &:hover {
    filter: brightness(0.8);
  }
  @media screen and (min-width: 767px) {
    height: 46px;
    width: 46px;
  }
`;

const TotalFase = styled.p`
  color: white;
  font-size: 14px;
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;

const PerecentageFase = styled.p`
  color: ${({ theme }) => theme.colors['gray/50']};
  font-size: 12px;
  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`;

export { Fase, SideUser, Icon, TotalFase, PerecentageFase, DataUser };
