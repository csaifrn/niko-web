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
  :hover{
    filter: grayscale(0.3);
  }

`;

const CardContainer2 = styled.div`
    width: 9.6875em;
    height: 8.375em;
    background-color: #00D25B;
    border-radius: 20px;
    overflow: hidden;

`;

const FigureIconCard = styled.figure`
    display: flex;
    width: 10em;
    height: 100%;
    background-color: red;
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
  border-radius: 0 18px 18px 0;
`;


export {CardContainer , CardContainer2, FigureIconCard, NumberCard, TextBoxCard, DataStrongCard, ImgIconCard };