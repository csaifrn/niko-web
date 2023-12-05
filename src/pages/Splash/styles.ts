import styled from 'styled-components';
import media from 'styled-media-query';

export const backgroundContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['gray/900']};
`;

export const itemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const logo = styled.img`
  width: 5rem;

  ${media.greaterThan('medium')`
       width: 10rem;
    `}
`;
