import styled from 'styled-components';
import media from 'styled-media-query';

export const PainelArea = styled.div`
  display: flex;
  width: 100%;
  margin: 10em 2em 10em 2em;
  gap: 32px;
  flex-direction: column;
  max-width: 1140px;
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