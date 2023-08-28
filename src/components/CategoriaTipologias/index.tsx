import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Search from '../Search';
import CategoriaData from '../../data/CategoriaData';
import { TipologiaData } from '../../data/TipologiaData';

interface CategoriasTipologiasProps {
  close: () => void;
  // eslint-disable-next-line no-unused-vars
  setCategoria: (e: typeof CategoriaData) => void;
  // eslint-disable-next-line no-unused-vars
  setTipologia: (e: typeof TipologiaData) => void;
  categorias: typeof CategoriaData;
  tipologias: typeof TipologiaData;
}

export const CategoriasTipologias = (props: CategoriasTipologiasProps) => {
  const [categorias, setCategorias] = useState<typeof CategoriaData>(props.categorias);
  const [tipologias, setTipologias] = useState<typeof TipologiaData>(props.tipologias);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [CatTipo, setCatTipo] = useState<boolean>(false);

  const [data, setData] = useState<typeof CategoriaData | typeof TipologiaData>(CategoriaData);

  const handleLoteClick = (item: any) => {
    if (CatTipo === false) {
      if (categorias.includes(item)) {
        setCategorias(categorias.filter((catg) => catg.id !== item.id));
      } else {
        setCategorias((prev) => [...prev, CategoriaData.filter((catg) => catg.id === item.id)[0]]);
      }
    } else {
      if (tipologias.includes(item)) {
        setTipologias(tipologias.filter((tipo) => tipo.id !== item.id));
      } else {
        setTipologias((prev) => [...prev, TipologiaData.filter((tipo) => tipo.id === item.id)[0]]);
      }
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredCategorias = data.filter(
    (catg) => catg.name.toLowerCase().includes(searchTerm.toLowerCase()) || catg.name.includes(searchTerm),
  );

  const handleSave = () => {
    props.setCategoria(categorias);
    props.setTipologia(tipologias);
    props.close();
  };

  useEffect(() => {
    if (!CatTipo) {
      setData(CategoriaData);
    } else {
      setData(TipologiaData);
    }
  }, [CatTipo]);

  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea>
          <S.ModalContent id="modal-content">
            <S.NameClose>
              <h2>Atribuir Lote</h2>
              <S.Exit type="button" onClick={props.close}>
                <img src="/close.svg" alt="" height={18} width={18} />
              </S.Exit>
            </S.NameClose>
            <S.DivCatTipol>
              <S.ButtonCatTipol
                onClick={() => setCatTipo(false)}
                style={{
                  backgroundColor: CatTipo ? '#2D303B' : '#191C24',
                }}
              >
                Categorias
              </S.ButtonCatTipol>
              <S.ButtonCatTipol
                onClick={() => setCatTipo(true)}
                style={{
                  backgroundColor: CatTipo ? '#191C24' : '#2D303B',
                }}
              >
                Tipologia
              </S.ButtonCatTipol>
            </S.DivCatTipol>
            <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
            <S.ChooseLote>
              {filteredCategorias.map((cat: any) => {
                if (!CatTipo) {
                  return (
                    <S.Lote
                      key={cat.id}
                      onClick={() => handleLoteClick(cat)}
                      style={{
                        backgroundColor: categorias.includes(cat) ? '#090E09' : '#2D303B',
                      }}
                    >
                      <p
                        style={{
                          color: categorias.includes(cat) ? '#fff' : '#838383',
                        }}
                      >
                        {cat.name}
                      </p>
                    </S.Lote>
                  );
                } else {
                  return (
                    <S.Lote
                      key={cat.id}
                      onClick={() => handleLoteClick(cat)}
                      style={{
                        backgroundColor: tipologias.includes(cat) ? '#090E09' : '#2D303B',
                      }}
                    >
                      <p
                        style={{
                          color: tipologias.includes(cat) ? '#fff' : '#838383',
                        }}
                      >
                        {cat.name}
                      </p>
                    </S.Lote>
                  );
                }
              })}
            </S.ChooseLote>
            <S.AtribuirButton onClick={handleSave}>Salvar</S.AtribuirButton>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
