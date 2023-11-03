import styled from 'styled-components';
import media from 'styled-media-query';

export const AtividadesPage = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
  max-width: 1140px;
  width: 100%;
  padding: 2em 2em 10em 2em;

  @media screen and (min-width: 1140px) {
    padding: 3em 0em 2em 0em;
  }
  /* ${media.greaterThan('large')`
    padding: 3em 0em 2em 0em;
  `} */
`;

export const TituloAtividades = styled.h1``;

export const CriarAtiv = styled.button`
  border: none;
  border-radius: 100%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors['gray/700']};
  &:hover {
    background-color: ${({ theme }) => theme.colors['gray/300']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['gray/300']};
    transform: translateY(-5%) translateX(2%);
  }
`;

export const AtivsCabecalho = styled.div`
  position: sticky;
  top: 40px;
  padding: 2em 0em;
  padding-top: 55px;
  display: flex;
  align-items: center;
  z-index: 98;
  justify-content: space-between;
  background-color: #0a090e;
  /* ${media.greaterThan('large')`
    gap: 16px;
    justify-content: flex-start;
  `} */
  @media screen and (min-width: 767px) {
    gap: 16px;
    justify-content: flex-start;
    padding-top: 80px;
  }
`;

export const AtivsPorDiaDiv = styled.div``;

export const DataAtiv = styled.h2``;

export const AtivPorDia = styled.div`
  background-color: #191c24;
  padding: 16px;
`;

export const Atividades = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  /* ${media.greaterThan('large')`
    display:flex;
    flex-direction: row;
    gap:2em;
  `} */
  @media screen and (min-width: 767px) {
    display:flex;
    flex-direction: row;
    gap:2em;
  }
`;

export const AtivCard = styled.div`
  padding: 2em;

  background-color: #393e4b;
  display: flex;
  flex-direction: column;
  gap: 2em;
  border-radius: 5px;
  position: relative;
  /* ${media.greaterThan('large')`
    display:flex;
    flex-direction: column;
  `} */
  @media screen and (min-width: 767px) {
    display:flex;
    flex-direction: column;
  }
`;

export const AtivsDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  /* ${media.greaterThan('large')`
    display:flex;
    flex-direction: row;
    gap: 32px;
    align-items: start;
  `} */
  @media screen and (min-width: 767px) {
    display:flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 32px;
    align-items: start;
  }
`;

export const AtivPorFase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  /* ${media.greaterThan('large')`
    display:flex;
    flex-direction: column;
    gap: 16px;
  `} */
  @media screen and (min-width: 767px) {
    display:flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const EditDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  /* ${media.greaterThan('large')`
    display: flex;
    justify-content: flex-end;
  `} */
  @media screen and (min-width: 767px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const Edit = styled.button`
  display: flex;
  background-color: #191c24;
  height: 24px;
  width: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  right: 2em;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors['gray/400']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['gray/400']};
    transform: translateY(-5%) translateX(2%);
  }
`;

export const IconeFase = styled.img``;

export const TituloFase = styled.h2``;

export const Operador = styled.div`
  :hover div {
    visibility: visible;
    opacity: 1;
    display: block;
  }
`;

export const FotoOperador = styled.img``;

export const NomeOperador = styled.div`
  background-color: #191c24;
  padding: 8px;
  border-radius: 3px;
  position: absolute;
  display: none;
`;

const SearchDiv = styled.div`
  display: flex;
  position: relative;
`;

const InputSearch = styled.input`
  height: 44px;
  padding: 0 4.2em;
  border-radius: 5px;
  background-color: rgb(57, 62, 75);
  color: #fff;
  border: none;
  width: 100%;
`;

const ImgSearch = styled.img`
  position: absolute;
  top: 10px;
  left: 16px;
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const AtribuirButton = styled.button`
  cursor: pointer;
  height: 44px;
  display: flex;
  gap: 0.5em;
  width: 100%;
  padding: 1em;
  align-items: center;
  border-radius: 5px;
  background-color: #43db6d;
  border: none;
  color: #1c1f28;
  font-family: 'Rubik';
  &:hover {
    background-color: #43db5d;
  }
  &:active {
    background-color: #43db4d;
  }
`;

export const ContainerLote = styled.div``;

export { InputSearch, ImgSearch, SearchDiv };
