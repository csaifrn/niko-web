/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as S from './styles';
import { useRef, useState } from 'react';
import { validationCadastroSchema } from './validation';
import { ErrorsForm } from './login.interface';
import * as Yup from 'yup';
import { Check, Eye, EyeSlash } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { SignInResponse, ApiError } from '../../api/services/authentication/signIn/signIn.interface';
import { signUp } from '../../api/services/users/sign-up';
import { SignUpResponse } from '../../api/services/users/sign-up/signUp.interface';
import { signIn } from '../../api/services/authentication/signIn';

const Cadastro = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const confirmPasswordInputRef = useRef<HTMLInputElement>(null);
  const privacyInputRef = useRef<HTMLInputElement>(null);
  const [responseError, setResponseError] = useState('');
  const [validationFormError, setValidationFormError] = useState<ErrorsForm>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    privacy: '',
  });
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordWithContent, setIsPasswordWithContent] = useState(false);
  const [showCPassword, setCShowPassword] = useState(false);
  const [isCPasswordWithContent, setIsCPasswordWithContent] = useState(false);

  const loginMutation = useMutation(signIn, {
    onSuccess: (data: SignInResponse) => {
      localStorage.setItem('token', data.token);
      navigate('/Projetos');
    },
    onError: (error: ApiError) => {
      setResponseError(error.response?.data.message || 'Um erro inesperado ocorreu.');
    },
  });

  const signUpMutation = useMutation(signUp, {
    onSuccess: (data: SignUpResponse) => {
      loginMutation.mutate({
        email: data.email,
        password: passwordInputRef.current!.value,
      });
    },
    onError: (error: ApiError) => {
      setResponseError(error.response?.data.message || 'Um erro inesperado ocorreu.');
    },
  });

  const validateForm = async (): Promise<boolean> => {
    try {
      await validationCadastroSchema.validate(
        {
          name: nameInputRef.current?.value,
          email: emailInputRef.current?.value,
          password: passwordInputRef.current?.value,
          confirmPassword: confirmPasswordInputRef.current?.value,
          privacy: privacyInputRef.current?.checked,
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
      signUpMutation.mutate({
        name: nameInputRef.current!.value,
        email: emailInputRef.current!.value,
        password: passwordInputRef.current!.value,
        passwordConfirm: confirmPasswordInputRef.current!.value,
      });
    }
  };

  return (
    <S.Wrapper>
      <S.FormContainer>
        <S.Logo alt="Logo do sistema Niko em laranja." src="Logo_Niko.svg"></S.Logo>
        <S.FormLogin onSubmit={onSubmit}>
          <S.FieldContainer>
            <S.LabelField htmlFor="email">Nome</S.LabelField>
            <S.InputText ref={nameInputRef} id="name" type="text" placeholder="nome completo" />
            <S.ErrorMessage>{validationFormError.name}</S.ErrorMessage>
          </S.FieldContainer>
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
          <S.FieldContainer>
            <S.LabelField htmlFor="confirmPassword">Confirme a senha</S.LabelField>
            <S.ContainerInputText>
              <S.InputText
                className="password"
                ref={confirmPasswordInputRef}
                onChange={(e) => setIsCPasswordWithContent(e.target.value ? true : false)}
                id="confirmPassword"
                type={showCPassword ? 'text' : 'password'}
                placeholder="Senha"
              />
              {isCPasswordWithContent && (
                <S.ShowPassword type="button" onClick={() => setCShowPassword(!showCPassword)}>
                  {showCPassword ? (
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
            <S.ErrorMessage>{validationFormError.confirmPassword}</S.ErrorMessage>
          </S.FieldContainer>
          <S.FieldContainer>
            <S.LabelCheck htmlFor="check">
              <S.CheckContainer>
                <span>
                  <S.InputCheck ref={privacyInputRef} id="check" type="checkbox" />
                  <Check style={{ position: 'absolute', top: '20%', left: '20%' }} />
                </span>
                <S.TextCheck>
                  Você concorda com nossos Termos, Política de Privacidade e Política de Cookies.
                </S.TextCheck>
              </S.CheckContainer>
            </S.LabelCheck>
            <S.ErrorMessage>{validationFormError.privacy}</S.ErrorMessage>
          </S.FieldContainer>
          <S.ForgotPasswordLink to="/">Ja tem login? entre</S.ForgotPasswordLink>
          <S.ErrorMessage>{responseError}</S.ErrorMessage>
          <S.SubmitButton type="submit">Cadastro</S.SubmitButton>
        </S.FormLogin>
      </S.FormContainer>
    </S.Wrapper>
  );
};

export default Cadastro;
