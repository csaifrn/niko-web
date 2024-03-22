import { FormEvent, useEffect, useState } from 'react';
import * as S from './style';
import Menu from '../../components/Menu';
import MenuCoord from '../../components/MenuCoord';
import { Batche, Class } from '../../api/services/batches/get-batche/get.interface';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { ApiError } from '../../api/services/authentication/signIn/signIn.interface';
import { GetBatche } from '../../api/services/batches/get-batche';
import Splash from '../Splash';
import { validationPatch, validationSearch } from './validation';
import { PatchBatcheEdit, PatchBatchePriority } from '../../api/services/batches/patch-batche';
import theme from '../../global/theme';
import { SairSemSalvarModal } from '../../components/SairSemSalvarModal';
import { QueryClasses } from '../../api/services/class/query-classes';
import { DeleteBatcheSettle, PatchBatcheSettle, PostBatcheSettle } from '../../api/services/batches/patch-settle';

interface Option {
  value: string;
  label: string;
}

// interface Prioridade {
//   id: string;
//   prioridade: boolean;
//   priorityOnChange: (e: boolean) => void;
// }

const LoteEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [categories, setCategories] = useState<Class[]>([]);
  const [title, setTitle] = useState<string>('');
  const [physical_files_count, setPhysical_files_count] = useState<number>(0);
  const [digital_files_count, setDigital_files_count] = useState<number>(0);
  const [faseAtual, setFaseAtual] = useState<number>(0);
  const [modalSairSemSalvar, setModalSairSemSalvar] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [priority, setPriority] = useState(false);
  const [storageLocation, setStorageLocation] = useState<string>('');

  const Priority = useMutation(PatchBatchePriority, {
    onSuccess: (data) => {
      toast.success(`Prioridade ${data.priority ? 'foi ativada' : 'foi desativada'}!`);
    },
    onError: (error: ApiError) => {
      toast.error(error.response!.data.message);
    },
  });

  const handlePrioridadeCheck = () => {
    if (priority && id) {
      setPriority(false);
      Priority.mutate({
        id,
        priority: false,
      });
    } else if (id) {
      setPriority(true);
      Priority.mutate({
        id,
        priority: true,
      });
    }
  };

  const mutateQueryClasses = useMutation(QueryClasses, {
    onSuccess: (data: Class[]) => {
      setOptions(data.map((newLocal) => ({ label: newLocal.name, value: newLocal.id })));
    },
  });

  const patchBatch = useMutation(PatchBatcheEdit, {
    onSuccess: () => {
      toast.success('Alterações salvas!');
    },
    onError: (error: ApiError) => {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    },
    onSettled: () => {
      navigate(`/Lote/${id}`);
    },
  });

  const beforeBatch = useMutation(GetBatche, {
    onSuccess: (data: Batche) => {
      setTitle(data.title);
      setPriority(data.priority);
      setStorageLocation(data.storage_location);
      setCategories(data.class_projects);
      setPhysical_files_count(data.physical_files_count);
      setDigital_files_count(data.digital_files_count);
      setFaseAtual(data.main_status);
      setSelectedOptions([
        ...data.class_projects.map((cat) => ({
          value: cat.id,
          label: cat.name,
        })),
      ]);
    },
    onError: (error: ApiError) => {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    },
  });

  const mutateSettle = useMutation(PostBatcheSettle, {
    onSuccess: () => {},
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
    onSettled: () => {
      navigate(`/Lote/${id}`);
    },
  });

  const mutateSettleAll = useMutation(PatchBatcheSettle, {
    onSuccess: () => {},
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
    onSettled: () => {
      navigate(`/Lote/${id}`);
    },
  });

  const mutateDeleteSettle = useMutation(DeleteBatcheSettle, {
    onSuccess: () => {},
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
    onSettled: () => {
      navigate(`/Lote/${id}`);
    },
  });

  useEffect(() => {
    if (typeof id === 'string') {
      beforeBatch.mutate({
        id,
      });
    } else {
      navigate(-1);
    }
  }, []);

  useEffect(() => {
    mutateQueryClasses.mutate({
      name: userInput,
    });
  }, []);

  const handleSave = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = await validatePatch();

    if (isValid && id) {
      patchBatch.mutate({
        id,
        title,
        priority,
        digital_files_count,
        physical_files_count,
        storage_location: storageLocation,
      });

      const newSettle = selectedOptions.filter(
        (settleSelected) => !categories.some((settle) => settle.id === settleSelected.value),
      );
      const deleteSettle = categories.filter(
        (settle) => !selectedOptions.some((settleSelected) => settleSelected.value === settle.id),
      );

      const newIds = newSettle.map((settle) => settle.value);
      const deleteIds = deleteSettle.map((settle) => settle.id);

      if (deleteSettle.length > 0 && newSettle.length === 0) {
        mutateDeleteSettle.mutate({
          id,
          class_projects_ids: deleteIds,
        });
      } else if (newSettle.length > 0 && deleteSettle.length === 0) {
        mutateSettle.mutate({
          id,
          class_projects_ids: newIds,
        });
      } else if (newSettle.length > 0 && deleteSettle.length > 0) {
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
    }
  };

  const validateSearch = async (): Promise<boolean> => {
    try {
      await validationSearch.validate(
        {
          name: userInput,
        },
        {
          abortEarly: false,
        },
      );
    } catch (error) {
      return false;
    }
    return true;
  };

  const validatePatch = async (): Promise<boolean> => {
    try {
      await validationPatch.validate(
        {
          title,
          physical_files_count,
          digital_files_count,
        },
        {
          abortEarly: false,
        },
      );
    } catch (error) {
      return false;
    }
    return true;
  };

  if (beforeBatch.isLoading) {
    return <Splash />;
  } else {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Menu area={`/Painel`} id_projeto={id} />
        <MenuCoord />

        <S.EditLoteArea>
          <S.CloseDiv>
            <h1>Editar {title}</h1>

            <S.Exit onClick={() => setModalSairSemSalvar(!modalSairSemSalvar)}>
              <img src="/buttonclose.svg" alt="" height={18} width={18} />
            </S.Exit>
          </S.CloseDiv>

          <S.FormContent id="modal-content" onSubmit={(e) => handleSave(e)}>
            {/* PROTOCOLO */}
            {/* <S.ProtocoloDiv>
            <h2>Protocolo</h2>
            <S.Protocolo>{task.protocolo}</S.Protocolo>
          </S.ProtocoloDiv> */}

            {/* LOCAL */}
            {/* {batch.shelf_number !== null && (
            <S.LocalDiv>
              <p>Local</p>
              <S.Local
                key={batch.id}
                style={{ backgroundColor: theme.colors['gray/600'] }}
                type="number"
                name="shelf_number"
                placeholder={batch.shelf_number}
              ></S.Local>
            </S.LocalDiv>
          )} */}

            <h2>Título</h2>
            <S.NameInput type="text" value={title} onChange={(e) => setTitle(e.currentTarget.value)} />

            {/* PRIORIDADE */}
            <S.Prioridade>
              <h2>Prioridade</h2>

              <S.SwitchButton>
                <S.Input checked={priority} onChange={(e) => setPriority(!priority)} />
                <S.Slider />
              </S.SwitchButton>
            </S.Prioridade>

            {faseAtual === 4 && (
              <>
                <h2>Estante</h2>
                <S.NameInput
                  type="text"
                  value={storageLocation}
                  onChange={(e) => setStorageLocation(e.currentTarget.value)}
                />
              </>
            )}

            {/* ARQUIVOS */}
            <S.Arquivos>
              <h2>Arquivos</h2>
              <S.ArquivosDiv>
                {/* ARQUIVOS FÍSICOS */}
                {physical_files_count !== null && (
                  <S.ArquivosFisicos>
                    <p>Físicos</p>
                    <S.ArquivosInput
                      style={{ backgroundColor: theme.colors['gray/500'] }}
                      type="number"
                      name="Arquivos físicos"
                      placeholder={``}
                      onChange={(e) => setPhysical_files_count(Number(e.currentTarget.value))}
                      value={physical_files_count}
                      min={0}
                    ></S.ArquivosInput>
                  </S.ArquivosFisicos>
                )}

                {/* ARQUIVOS DIGITAIS */}
                {faseAtual != 0 && faseAtual != 1 && digital_files_count !== null && (
                  <S.ArquivosDigitais>
                    <p>Digitais</p>
                    <S.ArquivosInput
                      style={{ backgroundColor: theme.colors['gray/500'] }}
                      type="number"
                      name="Arquivos digitais"
                      placeholder={``}
                      onChange={(e) => setDigital_files_count(Number(e.currentTarget.value))}
                      value={digital_files_count}
                      min={0}
                    ></S.ArquivosInput>
                  </S.ArquivosDigitais>
                )}
              </S.ArquivosDiv>
            </S.Arquivos>

            {/* Alterar CLASSES */}
            <h2>Classes</h2>
            <S.SelectDiv>
              <S.CustomSelect
                isMulti
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                placeholder={'Digite no mínimo 3 caracteres...'}
                name="colors"
                className="react-select-container"
                classNamePrefix="react-select"
                onInputChange={setUserInput}
                inputValue={userInput}
                onChange={(e: any) => setSelectedOptions(e)}
                options={options}
                value={selectedOptions}
                isLoading={false}
                required
              />
            </S.SelectDiv>

            <S.SalvarEditButton type="submit">Salvar alterações</S.SalvarEditButton>
          </S.FormContent>
        </S.EditLoteArea>

        {modalSairSemSalvar && (
          <SairSemSalvarModal
            close={() => {
              setModalSairSemSalvar(!modalSairSemSalvar);
            }}
          />
        )}
      </div>
    );
  }
};

export default LoteEdit;
