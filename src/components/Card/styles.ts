import styled from 'styled-components';

interface ColorProps {
  backgroundColor: string;
}

const CardContainer = styled.a`
  text-decoration: none;
  width: 9.6em;
  height: 9em;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  font-family: 'Rubik';
  font-size: 16px;
  &:hover {
    filter: brightness(0.9);
  }
`;

const FigureIconCard = styled.figure<ColorProps>`
  display: flex;
  width: 10em;
  height: 100%;
  background-color: ${(props) => props.backgroundColor};
  align-items: center;
  justify-content: center;
`;

const ImgIconCard = styled.img`
  width: 2.8em;
  height: 2.8em;
`;

const NumberCard = styled.span<ColorProps>`
  font-size: 24px;
  color: ${(props) => props.backgroundColor};
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
  background-color: #191c24;
  width: 100%;
`;

export { CardContainer, FigureIconCard, NumberCard, TextBoxCard, DataStrongCard, ImgIconCard };
