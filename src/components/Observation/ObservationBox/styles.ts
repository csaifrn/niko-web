import styled from 'styled-components';

export const ObsDivBlack = styled.div`
  background-color: #191c24;
  border-radius: 5px;
  display: flex;
  gap: 10px;
  padding: 1.5em;
  width: calc(100%-2em);
  display: grid;
  grid-template-columns: 1fr 32px 32px;
  order: 1;
  flex-grow: 0;
`;

export const ButtonDelete = styled.button`
  :hover {
    background-color: ${({ theme }) => theme.colors['gray/400']};
  }
  background-color: transparent;
  position: relative;
  height: 32px;
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
  width: 32px;
  border: none;
`;

export const ButtonEdit = styled.button`
  background-color: transparent;
  position: relative;
  height: 32px;
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
  width: 32px;
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
  bottom: -35px;
  left: 0;
  display: none;
`;
