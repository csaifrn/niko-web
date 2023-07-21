import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['gray/900']};
  color: white;
  font-family: 'Rubik';
`;

export const FormContainer = styled.div`
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
`;

export const InputText = styled.input`
  padding: 0.5em;
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
`;

export const ForgotPasswordLink = styled(Link)`
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
