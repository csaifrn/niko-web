import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100vw;
  max-width: 100vw;
  padding: 2em;
  margin-top: 8em;
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2em;
  max-width: 570px;
`;

export const ImgUser = styled.img`
  height: 128px;
  width: 128px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors['gray/700']};
  object-fit: cover;
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors['red/300']};
  font-size: 10px;
  font-family: 'Rubik';
`;

export const EditImg = styled.button`
  border: none;
  height: 32px;
  width: 32px;
  display: flex;
  position: absolute;
  left: 95px;
  bottom: 0px;
  justify-content: center;
  align-items: center;
  transition: background-color 500ms;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  border-radius: 5px;
  &:hover {
    background-color: ${({ theme }) => theme.colors['gray/700']};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors['gray/700']};
    transform: translateY(-5%) translateX(2%);
  }
`;

export const ContainerImg = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

export const InputText = styled.input`
  font-family: 'Rubik';
  height: 44px;
  padding: 0.5em;
  display: flex;
  align-items: center;
  padding: 0 1em;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  border-radius: 0.5em;
  border: 1px solid ${({ theme }) => theme.colors['gray/500']};
  color: white;
`;

export const Text = styled.p`
  font-family: 'Rubik';
  height: 44px;
  padding: 0.5em;
  font-size: 14px;
  display: flex;
  align-items: center;
  padding: 0 1em;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  border-radius: 0.5em;
  border: 1px solid ${({ theme }) => theme.colors['gray/500']};
  color: white;
`;

export const LabelField = styled.label`
  font-family: 'Rubik';
  font-size: 16px;
  color: white;
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const Button = styled.button`
  width: 100%;
  height: 44px;
  color: white;
  background-color: ${({ theme }) => theme.colors['green/400']};
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

export const DataFase = styled.div`
  padding: 0.5em;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors['gray/500']};
`;
