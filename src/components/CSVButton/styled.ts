import { FileCsv } from 'phosphor-react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  cursor: pointer;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: white;
  transition: all 500ms;
  height: fit-content;
  font-family: 'Rubik';
  &:hover {
    filter: brightness(0.9)
  }
  @media screen and (max-width: 767px){
    width: 100%;
  }
`;

export const Icon = styled(FileCsv)`
  font-size: 2rem;
  color: black;
`;
