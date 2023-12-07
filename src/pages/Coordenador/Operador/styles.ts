import styled from 'styled-components';
import media from 'styled-media-query';

const CardsArea = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  padding: 10em 2em;
  gap: 16px;
  flex-direction: column;
  max-width: 1140px;
  ${media.greaterThan('large')`
    padding: 10em 0em 2em 0em;
  `}
`;

const SearchDiv = styled.div`
  display: flex;
  position: relative;
`;

const InputSearch = styled.input`
  height: 44px;
  padding: 0 4.2em;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors['gray/200']};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  width: 100%;
`;

const ImgSearch = styled.img`
  position: absolute;
  top: 10px;
  left: 16px;
`;

export { CardsArea, InputSearch, ImgSearch, SearchDiv };
