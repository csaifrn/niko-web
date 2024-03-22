import { useState, useEffect, MouseEvent } from 'react';
import * as S from './style';
import { useMutation } from 'react-query';
import { ApiError } from '../../api/services/authentication/signIn/signIn.interface';
import toast from 'react-hot-toast';
import { Class } from '../../api/services/batches/get-batche/get.interface';
import { QueryClasses } from '../../api/services/class/query-classes';
import { AtribuirButton, CustomSelect } from '../AtribuirAlguemModal/style';
import { PostBatcheSettle, PatchBatcheSettle, DeleteBatcheSettle } from '../../api/services/batches/patch-settle';
import { useParams } from 'react-router-dom';

interface ClassModalProps {
  class_projects: Class[];
  close: () => void;
  refetch: () => void;
}

interface Option {
  value: string;
  label: string;
}

export const ClassModalAdd = (props: ClassModalProps) => {
  const { id } = useParams();
  const [closing, setClosing] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [userInput, setUserInput] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<Option[]>(
    props.class_projects
      ? props.class_projects.map((cat) => ({
          value: cat.id,
          label: cat.name,
        }))
      : [],
  );

  const mutateQueryCategories = useMutation(QueryClasses, {
    onSuccess: (data: Class[]) => {
      setOptions([...data.map((newLocal) => ({ value: newLocal.id, label: newLocal.name }))]);
    },
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
  });

  const mutateSettle = useMutation(PostBatcheSettle, {
    onSuccess: () => {
      toast.success('Classes adicionadas!');
    },
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
    onSettled: () => {
      handleClose();
    },
  });

  const mutateSettleAll = useMutation(PatchBatcheSettle, {
    onSuccess: () => {
      toast.success('Classes modificadas!');
    },
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
    onSettled: () => {
      handleClose();
    },
  });

  const mutateDeleteSettle = useMutation(DeleteBatcheSettle, {
    onSuccess: () => {
      toast.success('Classes retiradas!');
    },
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
    onSettled: () => {
      handleClose();
    },
  });

  const handleSave = async (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();

    const newSettle = selectedOptions.filter(
      (settleSelected) => !props.class_projects.some((settle) => settle.id === settleSelected.value),
    );
    const deleteSettle = props.class_projects.filter(
      (settle) => !selectedOptions.some((settleSelected) => settleSelected.value === settle.id),
    );

    const newIds = newSettle.map((settle) => settle.value);
    const deleteIds = deleteSettle.map((settle) => settle.id);

    if (deleteSettle.length > 0 && newSettle.length === 0 && id) {
      mutateDeleteSettle.mutate({
        id,
        class_projects_ids: deleteIds,
      });
    } else if (newSettle.length > 0 && deleteSettle.length === 0 && id) {
      mutateSettle.mutate({
        id,
        class_projects_ids: newIds,
      });
    } else if (newSettle.length > 0 && deleteSettle.length > 0 && id) {
      mutateSettleAll.mutate({
        id,
        class_projects_ids: newIds,
        class_projects_deleted_ids: deleteIds,
      });
    }
    try {
      await Promise.all([mutateSettle, mutateDeleteSettle, mutateSettleAll]);
    } catch (error) {
      toast.error('Aconteceu um erro na mudança de categorias!');
    }
  };

  const onRemove = (e: any) => {
    if (e) {
      setSelectedOptions((settles) => settles.filter((settle) => settle.value != e.value));
    }
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      props.close();
      props.refetch();
    }, 300);
  };

  const close = () => {
    setClosing(true);
    setTimeout(() => {
      props.close();
    }, 300);
  };

  useEffect(() => {
    mutateQueryCategories.mutate({
      name: userInput,
    });
  }, []);

  useEffect(() => {
    // Ao renderizar o modal, aplicar um escalonamento gradual para exibi-lo
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

  return (
    <S.ModalBackdrop>
      <S.ModalArea id="modal-scaling">
        <S.ModalContent>
          <S.NameClose>
            <h2>Adicionar classes</h2>
            <S.Exit type="button" onClick={close}>
              <img src="/buttonclose.svg" alt="" height={24} width={24} />
            </S.Exit>
          </S.NameClose>
          <CustomSelect
            isMulti
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            placeholder={'Digite no mínimo 3 caracteres...'}
            name="colors"
            className="react-select-container"
            classNamePrefix="react-select"
            onInputChange={setUserInput}
            inputValue={userInput}
            onChange={(e: any, action: any) => {
              // eslint-disable-next-line no-constant-condition
              if ((action.action = 'remove-value')) {
                onRemove(action.removedValue);
              }

              setSelectedOptions(e);
            }}
            options={options}
            value={selectedOptions}
            isLoading={mutateQueryCategories.isLoading}
            required
          />
          <AtribuirButton onClick={(e) => handleSave(e)}>Adicionar</AtribuirButton>
        </S.ModalContent>
      </S.ModalArea>
    </S.ModalBackdrop>
  );
};

export {};
