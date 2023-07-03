import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Search from '../Search';
import Users from '../../data/UserData';
import { v4 as uuidv4 } from 'uuid';

interface clientes {
  id: string;
  id_Projeto: string;
  email: string;
  roleProjeto: string;
  creator: boolean;
}

interface user {
  id: string;
  name: string;
  url: string;
  email: string;
  lote: string;
  fase: string;
}

interface EditModalProps {
  clientes: clientes[];
  close: () => void;
}

export const CreateRemessa = (props: EditModalProps) => {
  const [cliente, setClientes] = useState<user[]>([]);
  const [selectedClientes, setSelectedClientes] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const [data, setData] = useState(new Date());
  const [observacao, setObservacao] = useState('');
  const [qtd, setQtd] = useState(0);

  const handleQtd = (e: any) => {
    setQtd(e.target.value);
  };
  const handleData = (e: any) => {
    setData(e.target.date);
  };
  const handleObservacao = (e: any) => {
    setObservacao(e.target.value);
  };

  useEffect(() => {
    for (let index = 0; index < props.clientes.length; index++) {
      const cliente = props.clientes[index];
      setClientes((clientes) => [...clientes, Users.filter((user) => user.email === cliente.email)[0]]);
    }
  }, [props.clientes]);

  const handleLoteClick = (categId: number) => {
    if (selectedClientes.includes(categId)) {
      setSelectedClientes(selectedClientes.filter((id) => id !== categId));
    } else {
      setSelectedClientes([...selectedClientes, categId]);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCriarLote = () => {
    return console.log({ data, observacao, qtd, selectedClientes });
  };

  const filteredCategorias = cliente.filter((SelectedClientes) =>
    SelectedClientes.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // const filteredTitulo = mockData.filter(
  //   (mockData) =>
  //   mockData.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea>
          <form action="">
            <S.ModalContent id="modal-content">
              <S.NameClose>
                <h2>Criar remessa</h2>
                <button onClick={props.close} style={{ width: 'auto', backgroundColor: 'transparent', border: 'none' }}>
                  <img
                    src="/close.svg"
                    alt=""
                    height={24}
                    width={24}
                    style={{
                      padding: '5px 5px',
                      backgroundColor: '#090E09',
                      borderRadius: '5px',
                    }}
                  />
                </button>
              </S.NameClose>

              {/* Qtd Caixas */}
              <S.TituloDiv>
                <p>Quantidade de Caixas</p>
                <S.Titulo
                  onChange={handleQtd}
                  style={{ backgroundColor: '#2D303B' }}
                  type="number"
                  name="qtd_caixas"
                  placeholder={'23'}
                  required
                ></S.Titulo>
              </S.TituloDiv>

              {/* Data */}
              <S.LocalDiv>
                <p>Data</p>
                <S.Local
                  onChange={() => {
                    handleData;
                  }}
                  style={{ backgroundColor: '#2D303B' }}
                  type="date"
                  name="Data"
                  placeholder={'Onde está a caixa?'}
                  required
                ></S.Local>
              </S.LocalDiv>

              <S.LocalDiv>
                <p>Observação</p>
                <S.Local
                  onChange={handleObservacao}
                  style={{ backgroundColor: '#2D303B' }}
                  type="text"
                  name="Data"
                  placeholder={'...'}
                  required
                ></S.Local>
              </S.LocalDiv>

              {/* CATEGORIAS */}

              <S.Categorias>
                <p style={{ marginBottom: '1em' }}>Clientes</p>
                <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
                <S.ChooseUser>
                  {filteredCategorias.map((categ: any) => (
                    <S.Categoria
                      key={uuidv4()}
                      onClick={() => handleLoteClick(categ.id)}
                      style={{
                        backgroundColor: selectedClientes.includes(categ.id) ? '#090E09' : '#2D303B',
                      }}
                    >
                      <img
                        src={categ.url}
                        alt=""
                        height={32}
                        width={32}
                        style={{ objectFit: 'cover', borderRadius: '100%' }}
                      />
                      <p
                        style={{
                          color: selectedClientes.includes(categ.id) ? '#fff' : '#838383',
                        }}
                      >
                        {categ.name}
                      </p>
                    </S.Categoria>
                  ))}
                </S.ChooseUser>
              </S.Categorias>
              <S.AtribuirButton
                type="submit"
                onClick={() => {
                  handleCriarLote();
                  props.close();
                }}
              >
                Salvar
              </S.AtribuirButton>
            </S.ModalContent>
          </form>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
