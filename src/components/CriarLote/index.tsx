import React, { useState } from 'react';
import * as S from './styles';
import Search from '../Search';
import CategoriaData from '../../data/CategoriaData';
import theme from '../../global/theme';

interface EditModalProps {
  close: () => void;
}

export const CreateModal = (props: EditModalProps) => {
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

  const handleCriarLote = () => {};

  const filteredCategorias = CategoriaData.filter((CategoriaData) =>
    CategoriaData.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea>
          <S.ModalContent id="modal-content">
            <S.NameClose>
              <h2>Criar Caixa</h2>
              <button onClick={props.close} style={{ width: 'auto', backgroundColor: 'transparent', border: 'none' }}>
                <img
                  src="/buttonclose.svg"
                  alt=""
                  height={18}
                  width={18}
                  style={{
                    padding: '5px 5px',
                    backgroundColor: theme.colors['gray/900'],
                    borderRadius: '5px',
                  }}
                />
              </button>
            </S.NameClose>

            {/* TITULO */}
            <S.TituloDiv>
              <p>Título</p>
              <S.Titulo
                style={{ backgroundColor: theme.colors['gray/600'] }}
                type="text"
                name="nome"
                placeholder={'Título da caixa'}
              ></S.Titulo>
            </S.TituloDiv>

            {/* LOCAL */}
            <S.LocalDiv>
              <p>Local</p>
              <S.Local
                style={{ backgroundColor: theme.colors['gray/600'] }}
                type="text"
                name="nome"
                placeholder={'Onde está a caixa?'}
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
                      backgroundColor: selectedCategoriaData.includes(categ.id)
                        ? theme.colors['gray/900']
                        : theme.colors['gray/600'],
                    }}
                  >
                    <p
                      style={{
                        color: selectedCategoriaData.includes(categ.id)
                          ? theme.colors['green/400']
                          : theme.colors['gray/100'],
                      }}
                    >
                      {categ.name}
                    </p>
                  </S.Categoria>
                ))}
              </S.ChooseUser>
            </S.Categorias>
            <S.AtribuirButton
              onClick={() => {
                props.close();
                handleCriarLote();
              }}
            >
              Salvar
            </S.AtribuirButton>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
