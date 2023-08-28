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
`;

export const Wrapper = styled.div`
  font-family: Rubik;
  padding: 2em;
  margin-top: 6em;
`;

export const ContainerCriarProjeto = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Link = styled.a`
  border: none;
  color: #191c24;
  border-radius: 5px;
  font-family: Rubik;
`;

export { Main };
