import { PencilSimple } from '@phosphor-icons/react';
import Menu from '../../components/Menu';
import * as S from './styles';
import { DataFase } from '../../components/DataFase';
import { useState } from 'react';
import { EditImage } from '../../components/EditImage';
import Users from '../../data/UserData';
import { validationPerfilSchema } from './validation';
import { ErrorsForm } from './perfil.interface';
import * as Yup from 'yup';
import { userPatch } from '../../api/services/users/patch';
import { ApiError, UserPatchResponse } from '../../api/services/users/patch/userPatch.interface';
import { useMutation } from 'react-query';
import theme from '../../global/theme';

const user = Users[0];

const Perfil = () => {
  const [name, setName] = useState(user.name);
  const [modal, setModal] = useState(false);
  const [url] = useState<string>(user.url);
  const [responseError, setResponseError] = useState('');
  const [validationFormError, setValidationFormError] = useState<ErrorsForm>({ name: '' });

  const perfilMutation = useMutation(userPatch, {
    onSuccess: (data: UserPatchResponse) => {
      // TODO: store user on context state
    },
    onError: (error: ApiError) => {
      setResponseError(error.response?.data.message || 'Um erro inesperado ocorreu.');
    },
  });

  const validateForm = async (): Promise<boolean> => {
    try {
      await validationPerfilSchema.validate(
        {
          name,
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
      perfilMutation.mutate({
        name,
      });
    }
  };

  return (
    <>
      <Menu area="/Perfil" />
      <S.Wrapper>
        <S.ContainerImg>
          <S.ImgUser src={url}></S.ImgUser>
          <S.EditImg type="button" onClick={() => setModal(!modal)}>
            <PencilSimple size={24} weight="fill" color={theme.colors.white} />
          </S.EditImg>
        </S.ContainerImg>
        <S.Form onSubmit={onSubmit}>
          <S.FieldContainer>
            <S.LabelField>Nome</S.LabelField>
            <S.InputText value={name} onChange={(e) => setName(e.currentTarget.value)} />
            <S.ErrorMessage>{validationFormError.name}</S.ErrorMessage>
          </S.FieldContainer>
          <S.FieldContainer>
            <S.LabelField>Email</S.LabelField>
            <S.Text>pedro@email.com</S.Text>
          </S.FieldContainer>
          <S.Button>Salvar</S.Button>
          <S.ErrorMessage>{responseError}</S.ErrorMessage>
        </S.Form>
        <S.DataFase>
          <DataFase
            recepcao={30}
            preparo={2}
            catalogacao={12}
            digitalizacao={23}
            upload={1}
            arquivados={23}
            percentageCallback={() => {}}
          />
        </S.DataFase>
      </S.Wrapper>
      {modal && <EditImage close={() => setModal(!modal)} title="Mudar foto" url={url} />}
    </>
  );
};

export default Perfil;
