import styled, { keyframes } from 'styled-components';

const flicker = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }

`;

interface IObsDiv {
  index: number;
}

export const ObsDivBlack = styled.div<IObsDiv>`
  background-color: ${({ theme }) => theme.colors['gray/700']};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 1.7em;
  width: calc(100%-2em);
  order: 1;
  flex-grow: 0;
  animation-name: ${flicker};
  animation-duration: ${({ index }) => index * 0.8}s;
  font-family: 'Rubik';
  //margin-bottom: 20px;
`;

export const DivObservation = styled.div`
  display: grid;
  align-items: center;
  //gap: 16px;
  grid-template-columns: 1fr 20fr;
  @media screen and (max-width: 767px) {
    gap: 16px;
  }
`;

export const DivPendenciaTooltip = styled.div`
`;

export const DivButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const BottomContent = styled.div`
  column-span: 3;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ObsCreationData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Data = styled.span`
  color: ${({ theme }) => theme.colors['gray/300']};
`;

export const ButtonDelete = styled.button`
  cursor: pointer;
  background-color: transparent;
  //position: relative;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms;
  border-radius: 3px;
  width: 24px;
  border: none;
  :hover {
    background-color: ${({ theme }) => theme.colors['gray/400']};
  }
  /* :hover div {
    visibility: visible;
    opacity: 1;
    display: block;
  } */
`;

export const ButtonEdit = styled.button`
  background-color: transparent;
  cursor: pointer;
  //position: relative;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms;
  border-radius: 3px;
  :hover {
    background-color: ${({ theme }) => theme.colors['gray/400']};
  }
  /* :hover div {
    visibility: visible;
    opacity: 1;
    display: block;
  } */
  width: 24px;
  border: none;
`;