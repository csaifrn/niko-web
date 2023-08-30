import styled from 'styled-components';

const CardsArea = styled.div`
  display: flex;
  margin: 3em 2em 10em 2em;
  gap: 1em;
  flex-direction: column;
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

export { CardsArea, InputSearch, ImgSearch, SearchDiv };
