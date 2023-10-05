import { FormEvent, useEffect, useState } from 'react';
import * as S from './style';
import Menu from '../Menu';
import MenuCoord from '../MenuCoord';
import { GetResponseBatche } from '../../api/services/batches/get-batche/get.interface';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { ApiError } from '../../api/services/authentication/signIn/signIn.interface';
import { GetBatche } from '../../api/services/batches/get-batche';
import Splash from '../../pages/Splash';
import { SeachCategoriaResponseBatche } from '../../api/services/categoria/get-categoria/get.interface';
import { SeachCategoria } from '../../api/services/categoria/get-categoria';
import { validationPatch, validationSearch } from './validation';
import { PatchBatcheEdit } from '../../api/services/batches/patch-batche';

interface Options {
  value: string;
  label: string;
}

const LoteEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [, setOptions] = useState<Options[]>([]);
  const [name, setName] = useState('');
  const [title, setTitle] = useState<string>('');
  const [physical_files_count, setPhysical_files_count] = useState<number>(0);
  const [digital_files_count, setDigital_files_count] = useState<number>(0);

  const categorias = useMutation(SeachCategoria, {
    onSuccess: (data: SeachCategoriaResponseBatche) => {
      setOptions([]);
      const opt = data.categories;
      const response: Options[] = opt.map((e) => ({ value: e.id, label: e.name }));

      setOptions(response);
    },
    onError: (error: ApiError) => {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    },
  });

  const patchBatch = useMutation(PatchBatcheEdit, {
    onSuccess: () => {
      toast.success('Alterações salvas!');
      navigate(`/Lote/${id}`);
    },
    onError: (error: ApiError) => {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    },
  });

  const beforeBatch = useMutation(GetBatche, {
    onSuccess: (data: GetResponseBatche) => {
      setTitle(data.settlement_project);
      setName(data.category.name);
      setPhysical_files_count(data.physical_files_count);
      setDigital_files_count(data.digital_files_count);
    },
    onError: (error: ApiError) => {
      if (error.response) {
        toast.error(error.response.data.message);
      }
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
    onChange();
  }, [name]);

  const handleSave = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = await validatePatch();

    if (isValid && id) {
      patchBatch.mutate({
        id: id,
        settlement_project: title,
        digital_files_count,
        physical_files_count,
      });
    }
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

  const onChange = async () => {
    const isValid = await validateSearch();

    if (isValid) {
      categorias.mutate({
        name,
      });
    }
  };

  if (beforeBatch.isLoading) {
    return <Splash />;
  } else {
    return (
      <>
        <Menu area="/"></Menu>
        <MenuCoord />
        <S.ModalContent id="modal-content" onSubmit={(e) => handleSave(e)}>
          <S.NameClose>
            <h1>{title}</h1>
            <button
              onClick={() => navigate(-1)}
              style={{ width: 'auto', backgroundColor: 'transparent', border: 'none' }}
            >
              <img
                src="/close.svg"
                alt=""
                height={24}
                width={24}
                style={{
                  padding: '5px 5px',
                  backgroundColor: '#393E4B',
                  borderRadius: '3px',
                }}
              />
            </button>
          </S.NameClose>

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
                style={{ backgroundColor: '#2D303B' }}
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
                    style={{ backgroundColor: '#393E4B' }}
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
              {digital_files_count !== null && (
                <S.ArquivosDigitais>
                  <p>Digitais</p>
                  <S.ArquivosInput
                    style={{ backgroundColor: '#393E4B' }}
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

          {/*CATEGORIAS E TIPOLOGIAS*/}
          {/* <h2>Categoria</h2>
          <S.CustomSelect
            onInputChange={(e) => setName(e)}
            placeholder={'Digite no mínimo 3 caracteres...'}
            inputValue={name}
            options={options}
            onChange={(e) => setCategoria(e.value)}
            isLoading={categorias.isLoading}
            className="react-select-container"
            classNamePrefix="react-select"
          /> */}

          <S.SalvarEditButton type="submit" onClick={(e) => e.preventDefault}>
            Salvar
          </S.SalvarEditButton>
        </S.ModalContent>
      </>
    );
  }
};

export default LoteEdit;
