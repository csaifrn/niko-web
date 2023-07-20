import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.main`
  height: 100vh;
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['gray/900']};
  color: white;
  font-family: 'Rubik';
`;

export const FormContainer = styled.div`
  transition: 0.3s all;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['gray/700']};
  padding: 3em;
  border-radius: 2em;
  gap: 2em;
`;

export const Logo = styled.img`
  width: 4rem;
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  .password {
    padding-right: 2.8em;
  }
`;

export const TextCheck = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: Rubik;
`;

export const InputText = styled.input`
  width: 100%;
  padding: 0.5em;
  font-family: 'Rubik';
  font-weight: 400;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  border-radius: 0.5em;
  border: 1px solid ${({ theme }) => theme.colors['gray/500']};
  color: white;
  :hover {
    border: 1px solid ${({ theme }) => theme.colors['gray/300']};
  }
  &::-ms-reveal,
  &::-ms-clear {
    display: none;
  }

  &:checked {
    width: 25px;
    height: 25px;
  }
`;

export const InputCheck = styled.input`
  all: unset;
  border: 1px solid #fff;
  width: 18px;
  height: 18px;
  display: inline-block;
  border-radius: 4px;
  transition: all 0.3s;

  &:checked {
    background-color: ${({ theme }) => theme.colors['green/400']};
    width: 18px;
    height: 18px;
  }
`;

export const CheckContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 1em;

  span {
    position: relative;
    background-color: ${({ theme }) => theme.colors['gray/500']};
    width: 20px;
    height: 20px;
    border-radius: 4px;
  }
`;

export const ContainerInputText = styled.div`
  width: 100%;
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

export const LabelField = styled.label`
  font-size: 16px;
`;

export const LabelCheck = styled.label`
  display: flex;
`;

export const ForgotPasswordLink = styled(Link)`
  color: ${({ theme }) => theme.colors['gray/300']};
  font-size: 10px;
  text-decoration: none;
  display: flex;
  align-self: start;

  :hover {
    color: white;
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors['red/300']};
  width: 100%;
  word-break: normal;
  font-size: 10px;
`;

export const SubmitButton = styled.button`
  padding: 0.5em;
  width: 40%;
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
