import styled from 'styled-components';
import media from 'styled-media-query';

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
  max-width: 1140px;
  margin: 10em 2em 2em 2em;
  width: 100%;
`;

export const TituloProjetos = styled.h1`
  color: ${({ theme }) => theme.colors.white};
`;

export const ContainerCriarProjeto = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  /* ${media.greaterThan('large')`
    justify-content: flex-start;
  `} */
  @media (min-width: 767px) {
    justify-content: flex-start;
  }
`;

export const BotaoCriarProjeto = styled.button`
  border-radius: 100%;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: transparent;
  &:hover {
    background-color: ${({ theme }) => theme.colors['gray/400']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['gray/400']};
    transform: translateY(-5%) translateX(2%);
  }
`;

export const Link = styled.a`
  border: none;
  color: ${({ theme }) => theme.colors['gray/700']};
  border-radius: 5px;
  font-family: Rubik;
`;

export { Main };
