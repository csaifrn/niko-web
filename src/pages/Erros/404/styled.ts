import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: 'Rubik';
  background-color: ${({ theme }) => theme.colors['gray/900']};
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2em;
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
