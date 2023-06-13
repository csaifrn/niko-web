import React, { useState } from 'react';
import * as S from './style';
import Search from '../Search';
import CategoriaData from '../../data/CategoriaData';
import mockData from '../../data/kanbanData';

interface EditModalProps {
  close: () => void;
}

export const EditModal = (props: EditModalProps) => {
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

  // const filteredTitulo = mockData.filter(
  //   (mockData) =>
  //   mockData.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  console.log('DADO', mockData);

  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea>
          <S.ModalContent id="modal-content">
            <S.NameClose>
              <h2>Editar Lote</h2>
              <button onClick={props.close} style={{ width: 'auto', backgroundColor: 'transparent', border: 'none' }}>
                <img
                  src="/close.svg"
                  alt=""
                  height={18}
                  width={18}
                  style={{
                    padding: '5px 5px',
                    backgroundColor: '#090E09',
                    borderRadius: '5px',
                  }}
                />
              </button>
            </S.NameClose>

            {/* TITULO */}
            <S.TituloDiv>
              <p>Título</p>
              <S.Titulo
                key={mockData[3].id}
                style={{ backgroundColor: '#2D303B' }}
                type="text"
                name="nome"
                placeholder={mockData[3].tasks[0].title}
              ></S.Titulo>
            </S.TituloDiv>

            {/* LOCAL */}
            <S.LocalDiv>
              <p>Local</p>
              <S.Local
                key={mockData[3].id}
                style={{ backgroundColor: '#2D303B' }}
                type="text"
                name="nome"
                placeholder={'23-A'}
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
            <S.AtribuirButton onClick={props.close}>Salvar</S.AtribuirButton>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
