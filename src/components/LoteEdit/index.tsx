import { useEffect, useState } from 'react';
import * as S from './style';
import Search from '../Search';
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
import { validationSearch } from './validation';

interface Options {
  value: string;
  label: string;
}

const LoteEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [batch, setBatch] = useState<GetResponseBatche | null>(null);
  const [categoria, setCategoria] = useState<any>(null);
  const [options, setOptions] = useState<Options[]>([]);
  const [name, setName] = useState('');
  const [title, setTitle] = useState<string>('');
  const [priority, setPriority] = useState<boolean>(false);
  const [pyshical_files_count, setPyshical_files_count] = useState<number>(0);
  const [digital_files_count, setDigital_files_count] = useState<number>(0);

  const categorias = useMutation(SeachCategoria, {
    onSuccess: (data: SeachCategoriaResponseBatche) => {
      setOptions([]);
      const opt = data.categories;
      const response: Options[] = opt.map((e) => ({ value: e.id, label: e.name }));

      setOptions(response);
    },
    onError: () => {},
  });

  const beforeBatch = useMutation(GetBatche, {
    onSuccess: (data: GetResponseBatche) => {
      setBatch(data);
      setTitle(data.settlement_project);
      setPriority(Boolean(data.priority));
      setPyshical_files_count(data.physical_files_count);
      setDigital_files_count(data.digital_files_count);
    },
    onError: (error: ApiError) => {
      toast.error(error.response!.data.message);
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

  const handleSave = () => {
    console.log('Feito');
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
        <S.ModalContent id="modal-content" onSubmit={handleSave}>
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

          {/* ARQUIVOS */}
          <S.Arquivos>
            <h2>Arquivos</h2>
            <S.ArquivosDiv>
              {/* ARQUIVOS FÍSICOS */}
              {pyshical_files_count !== null && (
                <S.ArquivosFisicos>
                  <p>Físicos</p>
                  <S.ArquivosInput
                    style={{ backgroundColor: '#393E4B' }}
                    type="number"
                    name="nome"
                    placeholder={``}
                    onChange={(e) => setPyshical_files_count(Number(e.currentTarget.value))}
                    value={pyshical_files_count}
                  ></S.ArquivosInput>
                </S.ArquivosFisicos>
              )}

              {/* ARQUIVOS DIGITAIS */}
              {digital_files_count !== null && (
                <S.ArquivosDigitais>
                  <p>Digitais</p>
                  <S.ArquivosInput
                    style={{ backgroundColor: '#393E4B' }}
                    type="text"
                    name="nome"
                    placeholder={``}
                    onChange={(e) => setDigital_files_count(Number(e.currentTarget.value))}
                    value={digital_files_count}
                  ></S.ArquivosInput>
                </S.ArquivosDigitais>
              )}
            </S.ArquivosDiv>
          </S.Arquivos>

          {/*CATEGORIAS E TIPOLOGIAS*/}
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

          <S.SalvarEditButton type="submit">Salvar</S.SalvarEditButton>
        </S.ModalContent>
      </>
    );
  }
};

export default LoteEdit;
