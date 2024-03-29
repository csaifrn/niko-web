import styled from 'styled-components';

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


export const CriarAndCsvDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ButtonCriarClasse = styled.button`
  border: none;
  color: ${({ theme }) => theme.colors['gray/900']};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0px 16px 0px;
  width: 150px;
  font-family: 'Rubik';
  background-color: ${({ theme }) => theme.colors['green/400']};
  cursor: pointer;
  transition: all 500ms;
  &:hover {
    background-color: ${({ theme }) => theme.colors['green/600']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['green/600']};
    transform: translateY(-5%) translateX(2%);
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const QuantClassesDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  @media screen and (min-width: 767px) {
  }
`;

export const QuantClassesText = styled.h1`
  display: flex;
  gap: 16px;
  font-family: 'Rubik';
  color: ${({ theme }) => theme.colors['white']};
  @media screen and (min-width: 767px) {
  }
`;

const SearchDiv = styled.div`
  @media screen and (min-width: 767px) {
    width: 24.4%;
  }
`;

export const CategoriaCardsArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const ImgSearch = styled.img`
  position: absolute;
  top: 10px;
  left: 16px;
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
  font-family: 'Rubik';
  background-color: ${({ theme }) => theme.colors['gray/500']};
  cursor: pointer;
  &:disabled {
    background-color: ${({ theme }) => theme.colors['gray/600']};
    color: ${({ theme }) => theme.colors['gray/150']};
  }
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

export const LoadingSpinner = styled.div`
  animation: is-rotating 1s infinite;
  border: 2px solid ${({ theme }) => theme.colors.mediumGrey};
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.colors.jvrisAqua};
  height: 2rem;
  width: 2rem;
  margin: auto;
  margin-top: 2rem;

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;

export { CardsArea, ImgSearch, SearchDiv };
