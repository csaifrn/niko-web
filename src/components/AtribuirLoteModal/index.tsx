import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Search from '../Search';
import { LoteData } from '../../data/LoteData';
import EtapaData from '../../data/EtapaData';
import CategoriaData from '../../data/CategoriaData';
import { TipologiaData } from '../../data/TipologiaData';
import theme from '../../global/theme';

interface AtribuirModalAtividadeProps {
  nameUser: string;
  nameFase: string;
  id_user: string;
  id_fase: number;

  categorias: typeof CategoriaData;
  tipologia: typeof TipologiaData;

  close: () => void;
  // eslint-disable-next-line no-unused-vars
  setLoteUser: (e: ILoteUser) => void;
  loteUser: ILoteUser | null;
  loteUsers: ILoteUser[];
}

export interface ILoteUser {
  id_user: string;
  id_fase: number;
  lotes: (typeof LoteData)[];
}

export const AtribuirLoteModal = (props: AtribuirModalAtividadeProps) => {
  const [selectedLotes, setSelectedLotes] = useState<(typeof LoteData)[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategoria, setSelectedCategoria] = useState<number | null>(null);

  const [lotes, setLotes] = useState(LoteData);

  useEffect(() => {
    if (props.loteUser != null) {
      setSelectedLotes(props.loteUser.lotes);
    }

    const Status = EtapaData.filter((etapa) => etapa.id_fase === props.id_fase);
    if (Status.length > 0) {
      setLotes(LoteData.filter((lote) => Status.filter((etapa) => etapa.id === lote.id_etapa).length > 0));
    }
  }, [props.loteUser, props.id_fase]);

  const handleLoteClick = (loteClicked: typeof LoteData) => {
    if (selectedLotes.includes(loteClicked)) {
      setSelectedLotes(selectedLotes.filter((lote) => lote !== loteClicked));
    } else {
      setSelectedLotes([...selectedLotes, loteClicked]);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSave = () => {
    props.setLoteUser({ id_fase: props.id_fase, id_user: props.id_user, lotes: selectedLotes });
  };

  const handleCategoriaClick = (categoriaId: number) => {
    if (selectedCategoria === categoriaId) {
      setSelectedCategoria(null);
    } else {
      setSelectedCategoria(categoriaId);
    }
  };

  const [filteredLotes, setFilteredLotes] = useState(
    lotes.filter((lote) => {
      const hasMatchingEtapa = EtapaData.filter((etapa) => etapa.id === lote.id_etapa).length > 0;
      const matchesSearchTerm =
        lote.titulo.toLowerCase().includes(searchTerm.toLowerCase()) || lote.protocolo.includes(searchTerm);
      return hasMatchingEtapa && matchesSearchTerm;
    }),
  );

  useEffect(() => {
    // ...

    let filteredLotes;

    if (selectedCategoria != null) {
      filteredLotes = lotes.filter((lote) => {
        const hasMatchingEtapa = EtapaData.filter((etapa) => etapa.id === lote.id_etapa).length > 0;
        const hasMatchingCategoria = lote.categorias.some((catg: any) => catg.id === selectedCategoria);
        const matchesSearchTerm =
          lote.titulo.toLowerCase().includes(searchTerm.toLowerCase()) || lote.protocolo.includes(searchTerm);
        return hasMatchingEtapa && hasMatchingCategoria && matchesSearchTerm;
      });
    } else {
      filteredLotes = lotes.filter((lote) => {
        const hasMatchingEtapa = EtapaData.filter((etapa) => etapa.id === lote.id_etapa).length > 0;
        const matchesSearchTerm =
          lote.titulo.toLowerCase().includes(searchTerm.toLowerCase()) || lote.protocolo.includes(searchTerm);
        return hasMatchingEtapa && matchesSearchTerm;
      });
    }

    setFilteredLotes(filteredLotes);
  }, [selectedCategoria, searchTerm, lotes]);

  const [closing, setClosing] = useState(false);

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

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      props.close();
    }, 300);
  };

  console.log(props.nameFase);

  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea id="modal-scaling">
          <S.ModalContent id="modal-content">
            <S.NameClose>
              <h2>Atribuir Lote</h2>
              <S.Exit type="button" onClick={handleClose}>
                <img src="/close.svg" alt="" height={24} width={24} />
              </S.Exit>
            </S.NameClose>

            {/* Mostra o ícone da fase escolhida para aquele usuário */}
            {props.nameFase == 'Preparo' && (
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <img height={32} width={32} src={`/icon-medium/Preparo.svg`} alt="Icone da fase" />
                <h3>{props.nameFase}</h3>
              </div>
            )}
            {props.nameFase == 'Catalogação' && (
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <img height={32} width={32} src={`/icon-medium/Catalogação.svg`} alt="Icone da fase" />
                <h3>{props.nameFase}</h3>
              </div>
            )}
            {props.nameFase == 'Digitalização' && (
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <img height={32} width={32} src={`/icon-medium/Digitalização.svg`} alt="Icone da fase" />
                <h3>{props.nameFase}</h3>
              </div>
            )}
            {props.nameFase == 'Upload' && (
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <img height={32} width={32} src={`/icon-medium/Upload.svg`} alt="Icone da fase" />
                <h3>{props.nameFase}</h3>
              </div>
            )}
            {props.nameFase == 'Arquivamento' && (
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <img height={32} width={32} src={`/icon-medium/Arquivamento.svg`} alt="Icone da fase" />
                <h3>{props.nameFase}</h3>
              </div>
            )}

            {props.nameFase != 'Preparo' &&
              props.nameFase != 'Catalogação' &&
              props.nameFase != 'Digitalização' &&
              props.nameFase != 'Upload' &&
              props.nameFase != 'Arquivamento' && (
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <img height={32} width={32} src={`/icon-small/new.png`} alt="Icone da fase" />
                  <h3>{props.nameFase}</h3>
                </div>
              )}

            <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

            {props.categorias.length > 0 && (
              <S.Categorias>
                {props.categorias.map((categoria) => (
                  <S.Categoria
                    key={categoria.id}
                    selected={selectedCategoria === categoria.id}
                    onClick={() => handleCategoriaClick(categoria.id)}
                  >
                    <p>{categoria.name}</p>
                  </S.Categoria>
                ))}
              </S.Categorias>
            )}

            <S.ChooseLote>
              {filteredLotes.map((lote: any) => {
                const isLoteAssigned = props.loteUsers.some((userLote) =>
                  userLote.lotes.some((userLote: any) => userLote.id === lote.id && userLote.id_user !== props.id_user),
                );

                return (
                  <S.Lote
                    key={lote.id}
                    onClick={() => handleLoteClick(lote)}
                    style={{
                      backgroundColor: selectedLotes.includes(lote)
                        ? theme.colors['gray/900']
                        : theme.colors['gray/700'],
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5em',
                    }}
                  >
                    <p
                      style={{
                        color: selectedLotes.includes(lote) ? theme.colors.white : theme.colors['gray/100'],
                      }}
                    >
                      {lote.titulo + ' ' + lote.numero}
                    </p>
                    {isLoteAssigned && (
                      <span style={{ color: theme.colors['yellow/500'] }}>
                        Este lote foi atribuído a outro operador
                      </span>
                    )}
                  </S.Lote>
                );
              })}
            </S.ChooseLote>

            <S.AtribuirButton
              onClick={() => {
                handleSave();
                handleClose();
              }}
            >
              Atribuir para {props.nameUser}
            </S.AtribuirButton>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
