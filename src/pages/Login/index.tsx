/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { useMutation } from 'react-query';
import { signIn } from '../../api/services/authentication/signIn';
import { useEffect, useRef, useState } from 'react';
import { SignInResponse, ApiError } from '../../api/services/authentication/signIn/signIn.interface';
import { validationLoginSchema } from './validation';
import { ErrorsForm } from './login.interface';
import * as Yup from 'yup';
import jwtDecode from 'jwt-decode';
import { Eye, EyeSlash } from '@phosphor-icons/react';
import { SharedState } from '../../context/SharedContext';

const Login = () => {
  const { setUser, user } = SharedState();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [responseError, setResponseError] = useState('');

  const [validationFormError, setValidationFormError] = useState<ErrorsForm>({ email: '', password: '' });
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordWithContent, setIsPasswordWithContent] = useState(false);

  const loginMutation = useMutation(signIn, {
    onSuccess: (data: SignInResponse) => {
      localStorage.setItem('token', data.token);
      setUser(jwtDecode(data.token));
      navigate('/Fases');
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

  useEffect(() => {
    if (user) {
      navigate('/Fases');
    }
  }, []);

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
            <S.ContainerInputText>
              <S.InputText
                className="password"
                ref={passwordInputRef}
                onChange={(e) => setIsPasswordWithContent(e.target.value ? true : false)}
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Senha"
              />
              {isPasswordWithContent && (
                <S.ShowPassword type="button" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <Eye size={24} weight="fill" alt="Olho aberto que ao clicar esconde a senha" />
                  ) : (
                    <EyeSlash
                      size={24}
                      weight="fill"
                      alt="Olho aberto com uma linha riscando na diagonal que ao clicar mostra a senha"
                    />
                  )}
                </S.ShowPassword>
              )}
            </S.ContainerInputText>
            <S.ErrorMessage>{validationFormError.password}</S.ErrorMessage>
          </S.FieldContainer>
          <S.ForgotPasswordLink to="/recuperar-senha">Esqueceu a senha?</S.ForgotPasswordLink>
          <S.ForgotPasswordLink to="/Cadastro">Não tem conta? Cadastra-se</S.ForgotPasswordLink>
          <S.ErrorMessage>{responseError}</S.ErrorMessage>
          <S.SubmitButton type="submit">Entrar</S.SubmitButton>
        </S.FormLogin>
      </S.FormContainer>
    </S.Wrapper>
  );
};

export default Login;
