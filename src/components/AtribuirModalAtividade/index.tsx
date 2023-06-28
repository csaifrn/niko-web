import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Search from '../Search';
import { LoteData } from '../../data/LoteData';
import EtapaData from '../../data/EtapaData';

interface AtribuirModalAtividadeProps {
  nameUser: string;
  nameFase: string;
  id_user: string;
  id_fase: string;

  close: () => void;
  setLoteUser: (e: ILoteUser) => void;
  loteUser: ILoteUser | null;
}

export interface ILoteUser {
  id_user: string;
  id_fase: string;
  lotes: (typeof LoteData)[];
}

export const AtribuirModalAtividade = (props: AtribuirModalAtividadeProps) => {
  const [selectedLotes, setSelectedLotes] = useState<(typeof LoteData)[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const [lotes, setLotes] = useState(LoteData);

  useEffect(() => {
    if (props.loteUser != null) {
      setSelectedLotes(props.loteUser.lotes);
    }

    const Etapas = EtapaData.filter((etapa) => etapa.id_fase === props.id_fase);
    if (Etapas.length > 0) {
      setLotes(lotes.filter((lote) => Etapas.filter((etapa) => etapa.id === lote.id_etapa).length > 0));
    }
  }, []);

  const handleLoteClick = (loteId: typeof LoteData) => {
    if (selectedLotes.includes(loteId)) {
      setSelectedLotes(selectedLotes.filter((lote) => lote !== loteId));
    } else {
      setSelectedLotes([...selectedLotes, loteId]);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSave = () => {
    props.setLoteUser({ id_fase: props.id_fase, id_user: props.id_user, lotes: selectedLotes });
  };

  const filteredLotes = lotes.filter(
    (lote) => lote.titulo.toLowerCase().includes(searchTerm.toLowerCase()) || lote.protocolo.includes(searchTerm),
  );

  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea>
          <S.ModalContent id="modal-content">
            <S.NameClose>
              <h2>Atribuir Lote</h2>

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
            <img height={24} width={24} src={`/icon-page/${props.nameFase}.png`} alt="Icone de Etapa" />
            <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
            <S.ChooseLote>
              {filteredLotes.map((lote: any) => (
                <S.Lote
                  key={lote.id}
                  onClick={() => handleLoteClick(lote)}
                  style={{
                    backgroundColor: selectedLotes.includes(lote) ? '#090E09' : '#2D303B',
                  }}
                >
                  <p
                    style={{
                      color: selectedLotes.includes(lote) ? '#fff' : '#838383',
                    }}
                  >
                    {lote.numero}
                  </p>
                </S.Lote>
              ))}
            </S.ChooseLote>
            <S.AtribuirButton
              onClick={() => {
                handleSave();
                props.close;
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
