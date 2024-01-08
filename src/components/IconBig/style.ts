import styled from "styled-components";

export const BlackBlock = styled.div`
  height: 136px;
  width: 136px;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  font-family: 'Rubik';
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  p {
    color: 'white';
    margin-bottom: '0';
    font-size: 5em;
  }
`;