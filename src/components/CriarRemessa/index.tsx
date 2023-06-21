import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Search from '../Search';
import CategoriaData from '../../data/CategoriaData';
import mockData from '../../data/kanbanData';
import Users from '../../data/UserData';

interface clientes {
  id: string;
  id_Projeto: string;
  email: string;
  roleProjeto: string;
  creator: boolean;
}

interface user {
  id: number;
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
  const [selectedCategoriaData, setCategoriaData] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const foundUsers: any[] = [];
    for (let index = 0; index < props.clientes.length; index++) {
      const cliente = props.clientes[index];
      setClientes((clientes) => [...clientes, Users.filter((user) => user.email === cliente.email)[0]]);
    }
  }, [props.clientes]);

  const handleLoteClick = (categId: number) => {
    if (selectedCategoriaData.includes(categId)) {
      setCategoriaData(selectedCategoriaData.filter((id) => id !== categId));
    } else {
      setCategoriaData([...selectedCategoriaData, categId]);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCriarLote = () => {
    return console.log('Lote Criado');
  };

  const filteredCategorias = cliente.filter((CategoriaData) =>
    CategoriaData.name.toLowerCase().includes(searchTerm.toLowerCase()),
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
                  style={{ backgroundColor: '#2D303B' }}
                  type="date"
                  name="Data"
                  placeholder={'Onde está a caixa?'}
                  required
                ></S.Local>
              </S.LocalDiv>

              {/* CATEGORIAS */}

              <S.Categorias>
                <p style={{ marginBottom: '1em' }}>Categorias</p>
                <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
                <S.ChooseUser>
                  {filteredCategorias.map((categ: any) => (
                    <S.Categoria
                      key={categ.id}
                      onClick={() => handleLoteClick(categ.id)}
                      style={{
                        backgroundColor: selectedCategoriaData.includes(categ.id) ? '#090E09' : '#2D303B',
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
                          color: selectedCategoriaData.includes(categ.id) ? '#43DB6D' : '#838383',
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
