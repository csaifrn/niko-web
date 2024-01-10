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
  @media screen and (min-width: 767px) {
    padding: 10em 0em 2em 0em;
  }
`;

export const ButtonGray = styled.button`
  border: none;
  color: ${({ theme }) => theme.colors['white']};
  border-radius: 5px;
  width: fit-content;
  height: 44px;
  width: 13%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Rubik;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors['gray/400']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['gray/600']};
    transform: translateY(-5%) translateX(2%);
  }
  @media screen and (max-width: 767px) {
    width: 100%;
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
