import styled from 'styled-components';
import media from 'styled-media-query';

interface ColorProps {
  backgroundColor: string;
}

const CardContainer = styled.div`
  text-decoration: none;
  min-height: 9em;
  width: 100%;
  overflow: hidden;
  display: flex;
  font-family: 'Rubik';
  font-size: 16px;
  cursor: pointer;
  transition: all 500ms;
  &:hover {
    filter: brightness(0.8);
  }
  border-radius: 14px;
  border: 1px solid #4A5565;
  @media screen and (min-width: 767px) {
    //margin: 40em;
    width: 100%;
    height: 100%;
    min-height: 15em;
  }
`;

const FigureIconCard = styled.figure<ColorProps>`
  display: flex;
  width: 100%;
  //height: 100%;
  background-color: ${(props) => props.backgroundColor};
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 767px) {
    //width: 18.6em;
  }
  /* ${media.greaterThan('large')`
    width: 18.6em;
  `} */
`;

const ImgIconCard = styled.img`
  width: 2.8em;
  height: 2.8em;
  @media screen and (min-width: 767px) {
    width: 4.8em;
    height: 4.8em;
  }
  /* ${media.greaterThan('large')`
    width: 4.8em;
    height: 4.8em;
  `} */
`;

const NumberCard = styled.span<ColorProps>`
  font-size: 24px;
  color: ${(props) => props.backgroundColor};
  @media screen and (min-width: 767px) {
    font-size: 36px;
  }
  /* ${media.greaterThan('large')`
  font-size: 36px;
  `} */
`;

const DataStrongCard = styled.strong`
  text-align: center;
`;

const TextBoxCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: white;
  font-size: 8px;
  background-color: ${({ theme }) => theme.colors['gray/700']};
  width: 100%;
  @media screen and (min-width: 767px) {
    gap: 20px;
  }
  /* ${media.greaterThan('large')`
    gap: 20px;
  `} */
`;

export const NomeEtapa = styled.p`
  font-size: 8px;
  @media screen and (min-width: 767px) {
    font-size: 12px;
  }
  /* ${media.greaterThan('large')`
    font-size: 12px;
  `} */
`;

export { CardContainer, FigureIconCard, NumberCard, TextBoxCard, DataStrongCard, ImgIconCard };
