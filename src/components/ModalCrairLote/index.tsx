import { useState, useEffect, CSSProperties } from 'react';
import * as S from './styles';
import { ErrorMessage } from '../../pages/Login/styles';
import { validationLoginSchema, validationSearch } from './validation';
import { useMutation, useQuery } from 'react-query';
import { CreateBatche } from '../../api/services/batches/create-batche';
import { CreateResponseBatche } from '../../api/services/batches/create-batche/create.interface';
import { ApiError } from '../../api/services/authentication/signIn/signIn.interface';
import * as Yup from 'yup';
import { ErrorsForm } from './criar.interface';
import ReactLoading from 'react-loading';
import toast from 'react-hot-toast';
import React from 'react';
import Select from 'react-select';
import { SeachCategoria } from '../../api/services/categoria/get-categoria';
import { SeachCategoriaResponseBatche } from '../../api/services/categoria/get-categoria/get.interface';
import theme from '../../global/theme';

interface ModalCriarProps {
  close: () => void;
}

interface Options {
  value: string;
  label: string;
}

export const ModalCriarLote = (props: ModalCriarProps) => {
  const [categoria, setCategoria] = useState<any>(null);
  const [closing, setClosing] = useState(false);
  const [options, setOptions] = useState<Options[]>([]);
  const [name, setName] = useState('');
  const categorias = useMutation(SeachCategoria, {
    onSuccess: (data: SeachCategoriaResponseBatche) => {
      setOptions([]);
      const opt = data.categories;
      const response: Options[] = opt.map((e) => ({ value: e.id, label: e.name }));

      setOptions(response);
    },
    onError: () => {},
  });

  const [settlement_project, setSettlement_project] = useState('');
  const [responseError] = useState('');
  const [validationFormError, setValidationFormError] = useState<ErrorsForm>({
    settlement_project: '',
    settlement_project_category_id: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const modal = document.getElementById('modal-scaling');
      if (closing === false && modal) {
        modal.style.transform = 'scale(1)';
      } else if (modal && closing) {
        modal.style.transform = 'scale(0)';
      }
    }, 10);

    return () => clearTimeout(timer);
  }, [closing]);

  const handleSucess = () => {
    setSettlement_project('');
    handleClose();
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      props.close();
    }, 300);
  };

  const loginMutation = useMutation(CreateBatche, {
    onSuccess: (data: CreateResponseBatche) => {
      toast.success('Lote Criado!');
      console.log(data);
      handleSucess();
    },
    onError: (error: ApiError) => {
      toast.error(error.response!.data.message);
    },
  });

  const validateForm = async (): Promise<boolean> => {
    try {
      await validationLoginSchema.validate(
        {
          settlement_project,
          settlement_project_category_id: categoria?.value,
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

  const validateSearch = async (): Promise<boolean> => {
    try {
      await validationSearch.validate(
        {
          name,
        },
        {
          abortEarly: false,
        },
      );
    } catch (error) {
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
        settlement_project,
        settlement_project_category_id: categoria!.value,
      });
    }
  };

  useEffect(() => {
    onChange();
  }, [name]);

  const onChange = async () => {
    const isValid = await validateSearch();

    if (isValid) {
      categorias.mutate({
        name,
      });
    }
  };

  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea id="modal-scaling">
          <S.ModalContent>
            <S.NameClose>
              <h2>Criar Lote</h2>
              <S.Exit type="button" onClick={handleClose}>
                <img src="/close.svg" alt="" height={18} width={18} />
              </S.Exit>
            </S.NameClose>
            <S.FormCriar onSubmit={onSubmit}>
              <S.InputText
                placeholder="Nome do Lote"
                onChange={(e) => setSettlement_project(e.currentTarget.value)}
                value={settlement_project}
                name="settlement_project"
                className="settlement_project"
              />
              {validationFormError.settlement_project && (
                <ErrorMessage>{validationFormError.settlement_project}</ErrorMessage>
              )}
              <S.CustomSelect
                onInputChange={(e) => setName(e)}
                placeholder={'Digite no mínimo 3 caracteres...'}
                inputValue={name}
                options={options}
                onChange={(e) => setCategoria(e)}
                isLoading={categorias.isLoading}
                className="react-select-container"
                classNamePrefix="react-select"
              />
              {validationFormError.settlement_project_category_id && (
                <ErrorMessage>{validationFormError.settlement_project_category_id}</ErrorMessage>
              )}
              {loginMutation.isLoading ? (
                <S.Criar type="submit" disabled>
                  <ReactLoading type="cylon" color="white" height={30} width={30} />
                </S.Criar>
              ) : (
                <S.Criar type="submit">Criar Lote</S.Criar>
              )}
              {responseError && <ErrorMessage>{responseError}</ErrorMessage>}
            </S.FormCriar>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};
