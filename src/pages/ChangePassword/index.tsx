import * as S from './styles';
import { useRef, useState } from 'react';
import { validationLoginSchema } from './validation';
import { ErrorsForm } from './reset.interface';
import * as Yup from 'yup';
import { CheckModal } from '../../components/CheckModal';
import { useMutation } from 'react-query';
import { ApiError } from '../../api/services/authentication/signIn/signIn.interface';
import { ResetPasswordId } from '../../api/services/users/reset-password-id';
import { Eye, EyeSlash } from '@phosphor-icons/react';
import { useParams } from 'react-router-dom';

const ChangePassword = () => {
  const { id } = useParams();
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmationRef = useRef<HTMLInputElement>(null);
  const [responseError, setResponseError] = useState('');
  const [modal, setModal] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordWithContent, setIsPasswordWithContent] = useState(false);

  //eye for ConfirmPassword
  const [showCPassword, setShowCPassword] = useState(false);
  const [isCPasswordWithContent, setIsCPasswordWithContent] = useState(false);

  const [validationFormError, setValidationFormError] = useState<ErrorsForm>({
    password: '',
    passwordConfirmation: '',
  });

  const resetPasswordMutate = useMutation(ResetPasswordId, {
    onSuccess: () => {
      setModal(!modal);
      // TODO: store user on context state
    },
    onError: (error: ApiError) => {
      setResponseError(error.response?.data.message || 'Um erro inesperado ocorreu.');
    },
  });

  const validateForm = async (): Promise<boolean> => {
    try {
      await validationLoginSchema.validate(
        {
          password: passwordRef.current?.value,
          passwordConfirmation: passwordConfirmationRef.current?.value,
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

    if (isValid && id) {
      // na teoria funciona mas falta tratar a data retornada e testar
      if (passwordRef.current?.value && passwordConfirmationRef.current?.value) {
        resetPasswordMutate.mutate({
          password: passwordRef.current?.value,
          passwordConfirmation: passwordConfirmationRef.current?.value,
          id: id,
        });
      }
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.FormContainer>
          <S.Logo alt="Logo do sistema Niko em laranja." src="/Logo_Niko.svg"></S.Logo>
          <S.TextDiv>
            <S.Titulo>Modificar a senha</S.Titulo>
            <S.Text>Esquecer a senha acontece até para os melhores.</S.Text>
          </S.TextDiv>
          <S.FormLogin onSubmit={onSubmit}>
            <S.FieldContainer>
              <S.LabelField htmlFor="password">Senha</S.LabelField>
              <S.ContainerInputText>
                <S.InputText
                  className="passwordConfirmation"
                  ref={passwordRef}
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
              <S.LabelField htmlFor="password">Confirmar senha</S.LabelField>
              <S.ContainerInputText>
                <S.InputText
                  className="password"
                  ref={passwordConfirmationRef}
                  onChange={(e) => setIsCPasswordWithContent(e.target.value ? true : false)}
                  id="password"
                  type={showCPassword ? 'text' : 'password'}
                  placeholder="Senha"
                />
                {isCPasswordWithContent && (
                  <S.ShowPassword type="button" onClick={() => setShowCPassword(!showCPassword)}>
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
              <S.ErrorMessage>{validationFormError.passwordConfirmation}</S.ErrorMessage>
            </S.FieldContainer>
            <S.ErrorMessage>{responseError}</S.ErrorMessage>
            <S.SubmitButton type="submit">Recuperar Senha</S.SubmitButton>
            <S.ForgotPasswordLink to="/Cadastro">Não tem uma conta ? inscreva-se</S.ForgotPasswordLink>
          </S.FormLogin>
        </S.FormContainer>
      </S.Wrapper>
      {modal && (
        <CheckModal
          close={() => setModal(!modal)}
          title="Senha modifica :)"
          text="Já pode acessar a sua conta novamente!"
        />
      )}
    </>
  );
};

export default ChangePassword;
