import styled from 'styled-components';
import media from 'styled-media-query';

const CardsArea = styled.div`
  display: flex;
  margin: 2em;
  margin-top: 8em;
  margin-bottom: 8em;
  gap: 1em;
  flex-direction: column;
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
