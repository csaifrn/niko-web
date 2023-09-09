import { ChangeEvent, useEffect, useState } from 'react';
import * as S from './styles';
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

  useEffect(() => {
    setUrl(projeto.url);
    setName(projeto.name);
  }, [projeto]);

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      setUrl(`${file?.name}`);
    }
  };

  const handleNameChange = (e: any) => {
    if (e.target.value) {
      setName(e.target.value);
    }
  };

  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea id="modal-scaling">
          <S.ModalContent>
            <S.NameClose>
              <h1>{name}</h1>
              <S.Exit type="button" onClick={handleClose}>
                <img src="/close.svg" alt="" height={18} width={18} />
              </S.Exit>
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
                handleClose();
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
