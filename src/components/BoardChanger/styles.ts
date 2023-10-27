import styled from 'styled-components';

export const ChangeContainer = styled.nav`
  border-radius: 20px;
  justify-content: center;
  padding: 0 2em;
  display: flex;
  gap: 1em;
  margin-bottom: 1em;
`;

export const Link = styled.a`
  text-decoration: none;
  display: flex;
  gap: 0.5em;
  flex-direction: column;
`;

export const LinkImg = styled.img``;

interface BarraL {
  color: string;
}

export const Barra = styled.div<BarraL>`
  background-color: ${(props) => props.color};
  width: 100%;
  height: 0.5em;
  border-radius: 10px;
`;
