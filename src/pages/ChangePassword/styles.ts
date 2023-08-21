import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.main`
  padding: 2em;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['gray/900']};
  color: white;
  font-family: 'Rubik';
`;

export const FormContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['gray/700']};
  padding: 3em;
  border-radius: 2em;
  gap: 4em;
`;

export const Logo = styled.img`
  width: 4rem;
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

export const Titulo = styled.h1`
  padding: 0;
  text-align: center;
`;

export const Text = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const FieldContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export const InputText = styled.input`
  font-family: 'Rubik';
  width: 100%;
  font-weight: 300;
  padding: 0.5em;
  padding-right: 2.7em;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  border-radius: 0.5em;
  border: 1px solid ${({ theme }) => theme.colors['gray/500']};
  color: white;
  :hover {
    border: 1px solid ${({ theme }) => theme.colors['gray/300']};
  }
`;

export const LabelField = styled.label`
  font-size: 16px;
  position: relative;
`;

export const ContainerInputText = styled.div`
  position: relative;
`;

export const ShowPassword = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  right: 7.5px;
  top: 50%;
  translate: 0 -50%;
  padding: 4px;
  transition: all;
  height: 26px;
  width: 26px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all;

  &:hover {
    background-color: ${({ theme }) => theme.colors['gray/700']};
  }
`;

export const ForgotPasswordLink = styled(Link)`
  text-align: center;
  color: ${({ theme }) => theme.colors['gray/300']};
  font-size: 10px;
  text-decoration: none;

  :hover {
    color: white;
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors['red/300']};
  display: flex;
  font-size: 12px;
`;

export const SubmitButton = styled.button`
  margin-top: 2em;
  font-family: 'Rubik';
  padding: 0.5em;
  width: 70%;
  background-color: ${({ theme }) => theme.colors['orange/400']};
  border-radius: 0.5em;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 500ms;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background-color: ${({ theme }) => theme.colors['orange/500']};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors['orange/600']};
    transform: translateY(-5%) translateX(2%);
  }
`;
