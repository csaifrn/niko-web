import styled from 'styled-components';

const CardsArea = styled.div`
  display: flex;
  margin: 3em;
  margin-top: 8em;
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

export { CardsArea, InputSearch, ImgSearch, SearchDiv };
