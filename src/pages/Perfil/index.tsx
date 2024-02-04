import { PencilSimple } from '@phosphor-icons/react';
import Menu from '../../components/Menu';
import * as S from './styles';
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
import { useMe } from '../../hooks/useMe';
import { SharedState } from '../../context/SharedContext';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { IconUserBig } from '../../components/IconBig';
import MenuCoord from '../../components/MenuCoord';

const user = Users[0];

const Perfil = () => {
  const { id } = useParams();
  const { me, isLoadingMe, refetch } = useMe();
  const { setUser, user: loggedUsed } = SharedState();
  const [modal, setModal] = useState(false);
  const [url] = useState<string>(user.url);
  const [responseError, setResponseError] = useState('');
  const [validationFormError, setValidationFormError] = useState<ErrorsForm>({ name: '', email: '' });
  const navigate = useNavigate();

  const perfilMutation = useMutation(userPatch, {
    onSuccess: (data: UserPatchResponse) => {
      const attUser = loggedUsed;
      if (attUser && data.name) {
        attUser.name = data.name;
        setUser(attUser);
        toast.success(`Dados alterados com sucesso!`);
        refetch();
        navigate('/Fases');
      }
    },
    onError: (error: ApiError) => {
      setResponseError(error.response?.data.message || 'Um erro inesperado ocorreu.');
    },
  });

  const validateForm = async (name: string, email: string): Promise<boolean> => {
    try {
      await validationPerfilSchema.validate(
        {
          name,
          email,
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
    const form = e.target as HTMLFormElement;

    const nameForm = (form.elements[0] as HTMLInputElement).value;
    const emailForm = (form.elements[1] as HTMLInputElement).value;
    const isValid = await validateForm(nameForm, emailForm);

    if (isValid) {
      perfilMutation.mutate({
        name: nameForm,
        email: emailForm,
      });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Menu area={`/Perfil`} id_projeto={id}></Menu>
      <MenuCoord />
      <S.Wrapper>
        <S.Title>Perfil</S.Title>
        <S.ContainerImg>
          {me?.name != undefined && <IconUserBig name={me?.name} id="1" />}

          {/* <S.ImgUser src={url}></S.ImgUser>
          <S.EditImg type="button" onClick={() => setModal(!modal)}>
            <PencilSimple size={24} weight="fill" color={theme.colors.white} />
          </S.EditImg> */}
        </S.ContainerImg>

        <S.Form onSubmit={onSubmit}>
          <S.FieldContainer>
            <S.LabelField>Nome</S.LabelField>
            {!isLoadingMe ? <S.InputText defaultValue={me?.name} /> : '... Carregando'}
            <S.ErrorMessage>{validationFormError.name}</S.ErrorMessage>
          </S.FieldContainer>
          <S.FieldContainer>
            <S.LabelField>Email</S.LabelField>
            {!isLoadingMe ? <S.InputText type="email" defaultValue={me?.email} /> : '... Carregando'}
            <S.ErrorMessage>{validationFormError.email}</S.ErrorMessage>
          </S.FieldContainer>
          <S.Button>Salvar</S.Button>
          <S.ErrorMessage>{responseError}</S.ErrorMessage>
        </S.Form>

        {/* <S.DataFase>
          <DataFase
            recepcao={30}
            preparo={2}
            catalogacao={12}
            digitalizacao={23}
            upload={1}
            arquivados={23}
            percentageCallback={() => {}}
          />
        </S.DataFase> */}
      </S.Wrapper>
      {/* {modal && <EditImage close={() => setModal(!modal)} title="Mudar foto" url={url} />} */}
    </div>
  );
};

export default Perfil;
