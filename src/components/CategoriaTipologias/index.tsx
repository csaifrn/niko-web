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

  const [closing , setClosing] = useState(false);

  useEffect(() => {
    // Ao renderizar o modal, aplicar um escalonamento gradual para exibi-lo
    const timer = setTimeout(() => {
      const modal = document.getElementById('modal-scaling');
      if (closing === false && modal) {
        modal.style.transform = 'scale(1)';
      } else if (modal && closing) {
        modal.style.transform = 'scale(0)';
      }
    }, 10);

    return () => clearTimeout(timer);
  }, [closing]);

  const handleSave = () => {
    props.setCategoria(categorias);
    props.setTipologia(tipologias);
    handleClose();
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      props.close();
    }, 300);
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
        <S.ModalArea id="modal-scaling">
          <S.ModalContent id="modal-content">
            <S.NameClose>
              <h2>Categorias e Tipologias</h2>
              <S.Exit type="button" onClick={handleClose}>
                <img src="/close.svg" alt="" height={24} width={24} />
              </S.Exit>
            </S.NameClose>

            <S.DivEscolherCatTipol>

              <S.ButtonCatTipol
                onClick={() => setCatTipo(false)}
                style={{
                  backgroundColor: CatTipo ? '#2D303B' : '#191C24',
                }}
              >
                <p style={{fontFamily: 'Rubik'}}>Categorias</p>
              </S.ButtonCatTipol>

              <S.ButtonCatTipol
                onClick={() => setCatTipo(true)}
                style={{
                  backgroundColor: CatTipo ? '#191C24' : '#2D303B',
                }}
              >
                <p style={{fontFamily: 'Rubik'}}>Tipologias</p>
              </S.ButtonCatTipol>

            </S.DivEscolherCatTipol>

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
