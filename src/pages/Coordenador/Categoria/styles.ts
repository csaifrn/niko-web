import styled from 'styled-components';
import media from 'styled-media-query';

const CardsArea = styled.div`
  display: flex;
  flex-direction: column;
  grid-template-columns: 1fr;
  width: 100%;
  padding: 9em 2em;
  gap: 16px;
  max-width: 1140px;
  @media screen and (min-width: 767px){
    padding: 10em 0em 2em 0em;
  }
`;

const SearchDiv = styled.div`
  ${media.greaterThan('large')`
    width: 24.4%;
  `}
`;

export const CategoriaCardsArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${media.greaterThan('large')`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `}
`;

const ImgSearch = styled.img`
  position: absolute;
  top: 10px;
  left: 16px;
`;

export { CardsArea, ImgSearch, SearchDiv };
