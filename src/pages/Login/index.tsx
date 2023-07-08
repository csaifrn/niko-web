import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { useMutation } from 'react-query';
import { signIn } from '../../api/services/authentication/signIn';
import { useRef, useState } from 'react';
import { SignInResponse, ApiError } from '../../api/services/authentication/signIn/signIn.interface';
import { validationLoginSchema } from './validation';
import { ErrorsForm } from './login.interface';
import * as Yup from 'yup';

const Login = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [responseError, setResponseError] = useState('');
  const [validationFormError, setValidationFormError] = useState<ErrorsForm>({ email: '', password: '' });
  const navigate = useNavigate();

  const loginMutation = useMutation(signIn, {
    onSuccess: (data: SignInResponse) => {
      localStorage.setItem('token', data.token);
      navigate('/Projetos');
    },
    onError: (error: ApiError) => {
      setResponseError(error.response?.data.message || 'Um erro inesperado ocorreu.');
    },
  });

  const validateForm = async (): Promise<boolean> => {
    try {
      await validationLoginSchema.validate(
        {
          email: emailInputRef.current?.value,
          password: passwordInputRef.current?.value,
        },
        {
          abortEarly: false,
        },
      );
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors = error.inner.reduce<ErrorsForm>((errors, err) => {
          errors[err.path as keyof ErrorsForm] = err.message;
          return errors;
        }, {});
        setValidationFormError(validationErrors);
      }
      return false;
    }
    setValidationFormError({});
    return true;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = await validateForm();

    if (isValid) {
      loginMutation.mutate({
        email: emailInputRef.current!.value,
        password: passwordInputRef.current!.value,
      });
    }
  };

  return (
    <S.Wrapper>
      <S.FormContainer>
        <S.Logo alt="Logo do sistema Niko em laranja." src="Logo_Niko.svg"></S.Logo>
        <S.FormLogin onSubmit={onSubmit}>
          <S.FieldContainer>
            <S.LabelField htmlFor="email">Email</S.LabelField>
            <S.InputText ref={emailInputRef} id="email" type="text" placeholder="maria@email.com" />
            <S.ErrorMessage>{validationFormError.email}</S.ErrorMessage>
          </S.FieldContainer>
          <S.FieldContainer>
            <S.LabelField htmlFor="password">Senha</S.LabelField>
            <S.InputText ref={passwordInputRef} id="password" type="password" placeholder="Senha" />
            <S.ErrorMessage>{validationFormError.password}</S.ErrorMessage>
          </S.FieldContainer>
          <S.ForgotPasswordLink to="/">Esqueceu a senha?</S.ForgotPasswordLink>
          <S.ErrorMessage>{responseError}</S.ErrorMessage>
          <S.SubmitButton type="submit">Entrar</S.SubmitButton>
        </S.FormLogin>
      </S.FormContainer>
    </S.Wrapper>
  );
};

export default Login;
