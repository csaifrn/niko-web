import { FormEvent, useEffect, useState } from 'react';
import * as S from './style';
import Menu from '../Menu';
import MenuCoord from '../MenuCoord';
import { Batche, Category } from '../../api/services/batches/get-batche/get.interface';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { ApiError } from '../../api/services/authentication/signIn/signIn.interface';
import { GetBatche } from '../../api/services/batches/get-batche';
import Splash from '../../pages/Splash';
import { validationPatch, validationSearch } from './validation';
import { PatchBatcheEdit } from '../../api/services/batches/patch-batche';
import theme from '../../global/theme';
import { SairSemSalvarModal } from '../SairSemSalvarModal';
import { ResponseSettle } from '../../api/services/settlement/query-settlement/get.interface';
import { QuerySettles } from '../../api/services/settlement/query-settlement';
import { DeleteBatcheSettle, PostBatcheSettle } from '../../api/services/batches/patch-settle';

interface Option {
  value: string;
  label: string;
}

const LoteEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [categories, setCategories] = useState<Category[]>([]);
  const [title, setTitle] = useState<string>('');
  const [physical_files_count, setPhysical_files_count] = useState<number>(0);
  const [digital_files_count, setDigital_files_count] = useState<number>(0);
  const [faseAtual, setFaseAtual] = useState<number>(0);
  const [modalSairSemSalvar, setModalSairSemSalvar] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const mutateQueryCategories = useMutation(QuerySettles, {
    onSuccess: (data: ResponseSettle) => {
      setOptions([...data.categories.map((settle) => ({ value: settle.id, label: settle.name }))]);
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
  });

  const beforeBatch = useMutation(GetBatche, {
    onSuccess: (data: Batche) => {
      setTitle(data.title);
      setCategories(data.settlement_project_categories);
      setPhysical_files_count(data.physical_files_count);
      setDigital_files_count(data.digital_files_count);
      setFaseAtual(data.main_status);
      setSelectedOptions([
        ...data.settlement_project_categories.map((cat) => ({
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
    onSuccess: (data) => {},
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
  });

  const mutateDeleteSettle = useMutation(DeleteBatcheSettle, {
    onSuccess: (data) => {},
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
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
    const serchcategory = async () => {
      const valid = await validateSearch();
      if (valid) {
        mutateQueryCategories.mutate({
          name: userInput,
        });
      }
    };
    serchcategory();
  }, [userInput]);

  const handleSave = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = await validatePatch();

    if (isValid && id) {
      patchBatch.mutate({
        id,
        title,
        digital_files_count,
        physical_files_count,
      });
      const newSattle = selectedOptions.filter((settle) => {
        const cat = categories.map((cate) => {
          if (cate.id === settle.value) {
            return true;
          }
        });
        if (cat.filter((cat) => cat === undefined).length === cat.length) {
          return settle;
        }
      });
      if (newSattle.length > 0) {
        mutateSettle.mutate({
          id,
          settlementProjectCategories: [...newSattle.map((sattle) => sattle.value)],
        });
      }

      const deleteSettle = categories.filter((categ) => {
        const cat = selectedOptions.map((settle) => {
          if (settle.value === categ.id) {
            return true;
          }
        });
        if (cat.filter((cat) => cat === undefined).length === cat.length) {
          return categ;
        }
      });
      if (deleteSettle.length > 0) {
        deleteSettle.map((deletedSettle) => {
          mutateDeleteSettle.mutate({
            id,
            settlement_project_category_id: deletedSettle.id,
          });
        });
      }
      navigate(`/Lote/${id}`);
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
        <Menu area={`/Painel/${id}`} id_projeto={id} />
        <MenuCoord />

        <S.EditLoteArea>
          <S.CloseDiv>
            <h1>Editar {title}</h1>

            <S.Exit onClick={() => setModalSairSemSalvar(!modalSairSemSalvar)}>
              <img src="/close.svg" alt="" height={18} width={18} />
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
            <h2>Categorias</h2>
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
                onChange={(e: any, action: any) => {
                  // eslint-disable-next-line no-constant-condition
                  if ((action.action = 'remove-value')) {
                    console.log(action.removedValue);
                  }

                  setSelectedOptions(e);
                }}
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
