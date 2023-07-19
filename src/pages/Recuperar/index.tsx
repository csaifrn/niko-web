import * as S from './styles';
import { useRef, useState } from 'react';
import { validationLoginSchema } from './validation';
import { ErrorsForm } from './reset.interface';
import * as Yup from 'yup';
import { EnvelopeSimple } from '@phosphor-icons/react';
import { CheckModal } from '../../components/CheckModal';
import { ResetPassword } from '../../api/services/users/reset-password';
import { useMutation } from 'react-query';
import { ApiError } from '../../api/services/authentication/signIn/signIn.interface';

const RecuperarSenha = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [responseError, setResponseError] = useState('');
  const [modal, setModal] = useState(false);
  const [validationFormError, setValidationFormError] = useState<ErrorsForm>({ email: '' });

  const resetPasswordMutate = useMutation(ResetPassword, {
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
          email: emailInputRef.current?.value,
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
      // na teoria funciona mas falta tratar a data retornada e testar
      if (emailInputRef.current?.value) {
        resetPasswordMutate.mutate({
          email: emailInputRef.current?.value,
        });
      }
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.FormContainer>
          <S.Logo alt="Logo do sistema Niko em laranja." src="Logo_Niko.svg"></S.Logo>
          <S.TextDiv>
            <S.Titulo>Esqueci minha senha</S.Titulo>
            <S.Text>Calma! vamos ajudar você com isso :)</S.Text>
          </S.TextDiv>
          <S.FormLogin onSubmit={onSubmit}>
            <S.FieldContainer>
              <S.LabelField>
                <S.IconEmail>
                  <EnvelopeSimple size={24} color="#b1b1b1" />
                </S.IconEmail>
                <S.InputText ref={emailInputRef} id="email" type="text" placeholder="E-mail Cadastrado" />
              </S.LabelField>
              <S.ErrorMessage>{validationFormError.email}</S.ErrorMessage>
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
          text={`Enviamos um email para ${emailInputRef.current?.value} com um link para você entrar novamente na sua conta`}
          title="E-mail Enviado"
        />
      )}
    </>
  );
};

export default RecuperarSenha;
