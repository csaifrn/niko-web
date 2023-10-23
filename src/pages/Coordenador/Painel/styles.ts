import styled from 'styled-components';
import media from 'styled-media-query';

export const PainelArea = styled.div`
  display: flex;
  width: 100%;
  padding: 10em 2em;
  gap: 32px;
  flex-direction: column;
  max-width: 1140px;
  /* ${media.greaterThan('large')`
    padding: 10em 0em 2em 0em;
  `} */
  @media screen and (min-width: 767px) {
    padding: 10em 0em 2em 0em;
  }
`;

export const PainelTitulo = styled.h1`
  font-family: 'Rubik';
  color: #ffffff;
`;

export const DetalFasesPendencias = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const NotFoundImg = styled.img`
  height: 50%;
`;

export const ContainerImg = styled.div`
  background-color: ${({ theme }) => theme.colors['orange/400']};
  padding: 1rem;
  border-radius: 0.5rem;
`;

export const LinkHomePage = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: 'none';
`;