import styled from 'styled-components';
import media from 'styled-media-query';

export const AtividadesPage = styled.div`
  display: flex;
  margin: 3em 2em 10em 2em;
  gap: 1em;
  flex-direction: column;
`;

export const TituloAtividades = styled.h1`
`;

export const CriarAtiv = styled.a`
`;

export const AtivsCabecalho = styled.div`
`;

export const AtivsPorDiaDiv = styled.div`
`;

export const DataAtiv = styled.h2`
`;

export const AtivPorDia = styled.div`
  background-color: #191C24;
  padding: 16px;
`;

export const Atividades = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  ${media.greaterThan("large")`
    display:flex;
    flex-direction: row;
    gap:2em;
  `}
`;


export const AtivCard = styled.div`
  padding: 2em;
  background-color: #393E4B;
  display: flex;
  flex-direction: column;
  gap: 2em;
  border-radius: 5px;
  position: relative;
  ${media.greaterThan("large")`
    display:flex;
    flex-direction: column;
  `}

`;

export const AtivPorFase = styled.div`
  ${media.greaterThan("large")`
    display:flex;
    flex-direction: column;
    gap: 16px;
  `}
`;

export const AtivsDetails = styled.div`
  ${media.greaterThan("large")`
    display:flex;
    flex-direction: row;
    gap: 16px;
    align-items: start;
  `}
`;

export const EditDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  ${media.greaterThan("large")`
    display: flex;
    justify-content: flex-end;
  `}
`;

export const Edit = styled.a`
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

export {InputSearch, ImgSearch, SearchDiv };
