import React, { useState } from 'react';
import * as S from './styles';
import Search from '../Search';

interface AtribuirModalProps {
  nameUser: string;
  close: () => void;
}

export const lotes = [
  {
    id: 1,
    protocol: '000102',
    title: 'Lote 102',
  },
  {
    id: 2,
    protocol: '000201',
    title: 'Lote 201',
  },
  {
    id: 3,
    protocol: '000829',
    title: 'Lote 829',
  },
  {
    id: 4,
    protocol: '001024',
    title: 'Lote 1024',
  },
  {
    id: 5,
    protocol: '002987',
    title: 'Lote 2987',
  },
  {
    id: 6,
    protocol: '000001',
    title: 'Lote 01',
  },
];

export const AtribuirModal = (props: AtribuirModalProps) => {
  const [selectedLotes, setSelectedLotes] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleLoteClick = (loteId: number) => {
    if (selectedLotes.includes(loteId)) {
      setSelectedLotes(selectedLotes.filter((id) => id !== loteId));
    } else {
      setSelectedLotes([...selectedLotes, loteId]);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredLotes = lotes.filter(
    (lote) => lote.title.toLowerCase().includes(searchTerm.toLowerCase()) || lote.protocol.includes(searchTerm),
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
            <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
            <S.ChooseLote>
              {filteredLotes.map((lote) => (
                <S.Lote
                  key={lote.id}
                  onClick={() => handleLoteClick(lote.id)}
                  style={{
                    backgroundColor: selectedLotes.includes(lote.id) ? '#090E09' : '#2D303B',
                  }}
                >
                  <p
                    style={{
                      color: selectedLotes.includes(lote.id) ? '#fff' : '#838383',
                    }}
                  >
                    {lote.title}
                  </p>
                </S.Lote>
              ))}
            </S.ChooseLote>
            <S.AtribuirButton onClick={props.close}>Atribuir para {props.nameUser}</S.AtribuirButton>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
