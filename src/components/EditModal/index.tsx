import React, { useState } from 'react';
import * as S from './style';
import Search from '../Search';
import CategoriaData from '../../data/CategoriaData';
import mockData from '../../data/kanbanData';
import { LoteData } from '../../data/LoteData';
import { useNavigate, useParams } from 'react-router-dom';
import Menu from '../Menu';
import MenuCoord from '../MenuCoord';

export const EditModal = () => {
  const [selectedCategoriaData, setCategoriaData] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

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

  const filteredCategorias = CategoriaData.filter((CategoriaData) =>
    CategoriaData.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  let { id } = useParams();
  const navigate = useNavigate();
  const [lote , setLote] = useState(LoteData);
  const task = lote.filter((task) => task.id == id)[0];

  // const filteredTitulo = mockData.filter(
  //   (mockData) =>
  //   mockData.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <>
      <Menu area="/"></Menu>
      <MenuCoord/>
          <S.ModalContent id="modal-content">
            <S.NameClose>
              <h1>Editar Lote {task.numero}</h1> 
              <button onClick={() => navigate(-1)} style={{ width: 'auto', backgroundColor: 'transparent', border: 'none' }}>
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
            <S.ProtocoloDiv>
              <h2>Protocolo</h2>
              <S.Protocolo>{task.protocolo}</S.Protocolo>
            </S.ProtocoloDiv>


            {/* LOCAL */}       
            {task.estante !== null &&
              <S.LocalDiv>
                <p>Local</p>
                <S.Local
                  key={task.id}
                  style={{ backgroundColor: '#2D303B' }}
                  type="text"
                  name="nome"
                  placeholder={task.estante}
                ></S.Local>
              </S.LocalDiv>            
            }

            <S.Arquivos>
              <h2>Arquivos</h2>

              {/* ARQUIVOS FÍSICOS */}
              {task.arquiv_fisicos !== null &&
                <S.ArquivosFisicos>
                  <p>Físicos</p> 
                  <S.ArquivosInput      
                    style={{ backgroundColor: '#393E4B' }}
                    type="text"
                    name="nome"
                    placeholder={`${task.arquiv_fisicos}`}
                  >
                  </S.ArquivosInput>
                </S.ArquivosFisicos>
              }

              {/* ARQUIVOS DIGITAIS */}
              {task.arquiv_digitais !== null && 
                <S.ArquivosDigitais>
                  <p>Digitais</p>
                  <S.ArquivosInput      
                    style={{ backgroundColor: '#393E4B' }}
                    type="text"
                    name="nome"
                    placeholder={`${task.arquiv_digitais}`}
                  >
                  </S.ArquivosInput>
                </S.ArquivosDigitais>
              }
            </S.Arquivos>
            
            {/* CATEGORIAS */}

            <S.Categorias>
              <h2 style={{ marginBottom: '1em' }}>Categorias</h2>
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
            <S.AtribuirButton>Salvar</S.AtribuirButton>
          </S.ModalContent>
    </>
  );
};

export {};