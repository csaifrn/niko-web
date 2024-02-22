import styled from 'styled-components';

const ModalArea = styled.div`
  max-width: 400px;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 2em;
  gap: 2em;
  transform: scale(0);
  transition: transform 0.3s ease-in-out;
  color: white;
  font-family: 'Rubik';
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ModalContent = styled.div`
  display: flex;
  gap: 2em;
  flex-direction: column;
  align-items: center;
`;

export const ImgAvatar = styled.img`
  border-radius: 100%;
  padding: 8px;
  width: 256px;
  height: 256px;
  object-fit: cover;
`;

export const Label = styled.label`
  display: flex;
  width: 256px;
  height: 256px;
  cursor: pointer;
  border: dashed 1px ${({ theme }) => theme.colors.white};
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  background: rgba(57, 62, 75, 0.5);
  overflow: hidden;

  & :hover {
    filter: brightness(0.8);
    transition: 0.3s all;
  }

  :hover div {
    opacity: 1;
  }
`;

export const LabelHover = styled.div`
  z-index: 1;
  position: absolute;
  color: white;
  opacity: 0;
  transition: all 0.3s;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
`;

export const ButtonDiv = styled.div`
  display: flex;
  gap: 1em;
`;

export const ButtonCheck = styled.button`
  padding: 0 8px;
  display: flex;
  gap: 4px;
  align-items: center;
  margin-top: 1em;
  height: 44px;
  color: white;
  background-color: ${({ theme }) => theme.colors['green/400']};
  color: ${({ theme }) => theme.colors['gray/700']};

  border: none;
  border-radius: 5px;
  font-family: 'Rubik';
  transition: background-color 500ms;
  &:hover {
    background-color: ${({ theme }) => theme.colors['green/500']};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors['green/600']};
    transform: translateY(-5%) translateX(2%);
  }
`;

export const ButtonX = styled.button`
  padding: 0 8px;
  display: flex;
  gap: 1em;
  align-items: center;
  margin-top: 1em;
  height: 44px;
  color: white;
  background-color: ${({ theme }) => theme.colors['gray/700']};
  border: none;
  border-radius: 5px;
  font-family: 'Rubik';
  transition: background-color 500ms;
  &:hover {
    background-color: ${({ theme }) => theme.colors['gray/600']};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors['gray/800']};
    transform: translateY(-5%) translateX(2%);
  }
`;

const NameClose = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChooseLote = styled.div`
  width: 100%;
  height: 40vh;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  overflow: auto;
  scroll-behavior: auto;
`;

const Lote = styled.div`
  padding: 1.5em 2em;
  border-radius: 5px;
  cursor: pointer;
`;

const Recused = styled.button`
  height: 44px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors['gray/700']};
  border: none;
  color: white;
  font-family: 'Rubik';
`;

const Delete = styled.button`
  height: 44px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors['red/500']};
  border: none;
  color: white;
  font-family: 'Rubik';
`;

const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(25, 28, 36, 0.7);
  transition: transform 1s;
`;
export { ModalArea, ModalContent, NameClose, ChooseLote, Lote, Recused, Delete, ModalBackdrop };
