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
  gap: 10px;
  padding: 1.5em;
  width: calc(100%-2em);
  order: 1;
  flex-grow: 0;

  animation-name: ${flicker};
  animation-duration: ${({ index }) => index * 0.8}s;
`;

export const DivObservation = styled.div``;

export const DivButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const BottomContent = styled.div`
  column-span: 3;
  display: flex;
  flex-direction: column;
`;

export const Data = styled.span`
  color: ${({ theme }) => theme.colors['gray/300']};
  margin-top: 0.5em;
`;

export const ButtonDelete = styled.button`
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors['gray/400']};
  }
  background-color: transparent;
  position: relative;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms;
  border-radius: 100%;

  :hover div {
    visibility: visible;
    opacity: 1;
    display: block;
  }
  width: 24px;
  border: none;
`;

export const ButtonEdit = styled.button`
  background-color: transparent;
  cursor: pointer;
  position: relative;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms;
  border-radius: 100%;
  :hover {
    background-color: ${({ theme }) => theme.colors['gray/400']};
  }
  :hover div {
    visibility: visible;
    opacity: 1;
    display: block;
  }
  width: 24px;
  border: none;
`;

export const ToolTip = styled.div`
  background-color: ${({ theme }) => theme.colors['gray/300']};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  color: white;
  border-radius: 3px;
  position: absolute;
  top: calc(100% + 5px) ;
  left: 0;
  display: none;
  font-family: 'Rubik';
`;
