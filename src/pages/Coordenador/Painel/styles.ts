import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: 'Rubik';
  width: 100vw;
  padding: 2em 2em 8em 2em;
  display: flex;
  align-items: center;
  flex-direction: column;
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
