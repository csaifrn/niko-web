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
`;

export const TituloProjetos = styled.h1`
  color: #ffffff;
`;

export const ContainerCriarProjeto = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  ${media.greaterThan('large')`
    justify-content: flex-start;
  `}
`;

export const BotaoCriarProjeto = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.colors['gray/300']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['gray/300']};
    transform: translateY(-5%) translateX(2%);
  }
`;




export const Link = styled.a`
  border: none;
  color: #191c24;
  border-radius: 5px;
  font-family: Rubik;
`;

export { Main };
