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
  padding: 4em;
`;

export const EmptyImg = styled.img`
  height: 50%;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors['orange/400']};
  padding: 1rem;
  border-radius: 0.5rem;
`;

export const LinkHomePage = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  text-align: center;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  text-align: center;
`;
