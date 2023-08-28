import styled from 'styled-components';

const Main = styled.section`
  transition: 1s all;
  scroll-behavior: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2em;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Wrapper = styled.div`
  font-family: Rubik;
  padding: 2em;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2em;
  color: #fff;
  margin-top: 6em;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 2em;
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  flex-direction: column;
`;

export const BallStatus = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 32px;
  transition: 200ms all;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerForm = styled.div`
  display: grid;
  gap: 2em;
`;

export const LabelForm = styled.label`
  display: flex;
  height: 150px;
  border: dashed 1px #fff;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background: rgba(57, 62, 75, 0.5);
`;

export const InputText = styled.input`
  box-sizing: border-box;
  height: 44px;
  width: 100%;
  padding: 0 1em;
  border-radius: 5px;
  border: none;
  background-color: #5c6170;
`;

export const ButtonGreen = styled.button`
  border: none;
  color: #191c24;
  border-radius: 5px;
  height: 44px;
  width: 100%;
  font-family: Rubik;
  background-color: #43db6d;
`;

export const AdressContainer = styled.div`
  display: grid;
  height: 44px;
  gap: 2em;
  grid-template-columns: 30fr 1fr;
`;

export { Main };
