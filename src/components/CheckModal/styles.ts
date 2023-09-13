import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(25, 28, 36, 0.5);
`;

export const ModalArea = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em;
  gap: 1em;
  font-family: 'Rubik';
  color: white;
  position: fixed;
  background-color: #393e4b;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  overflow: hidden;

  transform: scale(0);
  transition: transform 0.2s ease-in-out;
`;

export const TextDiv = styled.div`
  padding: 2em;
  flex-direction: column;
  gap: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TituloModal = styled.h2``;

export const TextModal = styled.p``;

export const Ok = styled.button`
  width: 100%;
  height: 44px;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors['gray/700']};
  background-color: ${({ theme }) => theme.colors['gray/500']};
  color: white;
  font-family: 'Rubik';
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors['gray/700']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['gray/300']};
  }
`;
