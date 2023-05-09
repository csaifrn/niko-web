import styled from "styled-components";

interface ColorProps {
  backgroundColor: string;
}

const CardContainer = styled.a`
  text-decoration: none;
  width: 9.6875em;
  height: 8.375em;
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
    width: 3.125em;
    height: 3.125em;
`;

const NumberCard = styled.span<ColorProps>`
    font-size: 24px;
    color: ${(props) => props.backgroundColor};
`;

const DataStrongCard = styled.strong`
    text-align: center;
`;



const TextBoxCard = styled.div`
  padding-top: 0.5625em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  color: white;
  font-size: 7px;
  background-color: #191C24;
  width: 100%;
`;


export {CardContainer , FigureIconCard, NumberCard, TextBoxCard, DataStrongCard, ImgIconCard };
