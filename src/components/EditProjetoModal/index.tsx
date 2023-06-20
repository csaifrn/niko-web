import { ChangeEvent, useEffect, useRef, useState } from 'react';
import * as S from './styles';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Projeto } from '../../data/ProjetoData';

interface EditProjetoModalProps {
  id_projeto: string;
  close: () => void;
}

export const EditProjetoModal = (props: EditProjetoModalProps) => {
  const projeto = Projeto.filter((projetos) => projetos.id === props.id_projeto)[0];

  const [url, setUrl] = useState<string>();
  const [file, setFile] = useState<File>();
  const [name, setName] = useState('');

  useEffect(() => {
    setUrl(projeto.url);
    setName(projeto.name);
  }, [projeto]);

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      setUrl(`${file?.name}`);
    }
    console.log(file);
  };

  const handleNameChange = (e: any) => {
    if (e.target.value) {
      setName(e.target.value);
    }
  };

  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea>
          <S.ModalContent>
            <S.NameClose>
              <h1>+Incra</h1>
              <button onClick={props.close} style={{ width: 'auto', backgroundColor: 'transparent', border: 'none' }}>
                <img
                  src="close.svg"
                  alt=""
                  height={18}
                  width={18}
                  style={{
                    padding: '5px 5px',
                    backgroundColor: '#090E09',
                    borderRadius: '5px',
                    display: 'flex',
                  }}
                />
              </button>
            </S.NameClose>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2em' }}>
              <label
                htmlFor="imagem"
                style={{
                  display: 'flex',
                  width: '100%',
                  height: '150px',
                  border: 'dashed 1px #fff',
                  borderRadius: '5px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(57, 62, 75, 0.5)',
                  overflow: 'hidden',
                }}
              >
                {url != '' && (
                  <img
                    src={url}
                    alt=""
                    style={{ objectFit: 'cover', width: '100%', height: '150px', filter: 'brightness(50%)' }}
                  />
                )}
                {url === '' && <img src="Img.svg" alt="Imagem" height={32} width={32} />}
              </label>
              <input type="file" accept="image/*" id="imagem" style={{ display: 'none' }} onChange={handleFile} />
              <label htmlFor="nome">
                <h2>Nome</h2>
              </label>
              <input
                value={name}
                onChange={handleNameChange}
                type="text"
                placeholder="Nome"
                style={{
                  boxSizing: 'border-box',
                  height: '44px',
                  width: '100%',
                  color: 'white',
                  padding: '0 1em',
                  borderRadius: '5px',
                  border: 'none',
                  backgroundColor: '#5C6170',
                }}
              />
            </div>
            <S.AtribuirButton
              onClick={() => {
                props.close;
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
