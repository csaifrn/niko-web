import React, { useEffect, useState } from 'react';
import * as S from './style';
import FaseData from '../../data/FaseData';
import Search from '../Search';
import theme from '../../global/theme';

interface CreateAtividadeProps {
  close: () => void;
  // eslint-disable-next-line no-unused-vars
  setTarefas: (e: any) => void;
  // eslint-disable-next-line no-unused-vars
  setTarefasData: (e: any) => void;
  tarefasData: any[];
}

export const CreateTarefaAtividade = (props: CreateAtividadeProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [newAtividade, setNewAtividade] = useState<string>('');
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

  const [tarefasFase, setTarefasFase] = useState<typeof FaseData>(props.tarefasData[0]);
  const [listNewAtividades, setListNewAtividades] = useState<typeof FaseData>(props.tarefasData[1]);

  const handleLoteClick = (tarefa: any) => {
    if (tarefasFase.includes(tarefa)) {
      setTarefasFase(tarefasFase.filter((fase) => fase.id !== tarefa.id));
    } else {
      setTarefasFase((prev) => [...prev, FaseData.filter((fase) => fase.id === tarefa.id)[0]]);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleNewAtividade = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewAtividade(event.target.value);
  };

  const handleSave = () => {
    props.setTarefas([...tarefasFase, ...listNewAtividades]);
    props.setTarefasData([tarefasFase, listNewAtividades]);
    handleClose();
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      props.close();
    }, 300);
  };

  const filteredTitulo = FaseData.filter((faseData) =>
    faseData.titulo.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea id="modal-scaling">
          <S.ModalContent>
            <S.NameClose>
              <h2>Tarefas</h2>

              <S.Exit onClick={handleClose}>
                <img src="/buttonclose.svg" alt="" height={24} width={24} />
              </S.Exit>
            </S.NameClose>
            <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
            <S.ChooseUser>
              {filteredTitulo.map((categ: any) => {
                return (
                  <S.Categoria
                    key={categ.id}
                    onClick={() => handleLoteClick(categ)}
                    style={{
                      backgroundColor: tarefasFase.includes(categ)
                        ? theme.colors['gray/900']
                        : theme.colors['gray/600'],
                    }}
                  >
                    <img src={`${categ.icone}`} alt="" />
                    <p
                      style={{
                        color: tarefasFase.includes(categ) ? theme.colors.white : theme.colors['gray/100'],
                      }}
                    >
                      {categ.titulo}
                    </p>
                  </S.Categoria>
                );
              })}
            </S.ChooseUser>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                onChange={handleNewAtividade}
                placeholder="Adicionar outra tarefa"
                style={{
                  color: theme.colors.white,
                  fontFamily: 'Rubik',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '0 2em',
                  backgroundColor: theme.colors['gray/400'],
                  height: '44px',
                  width: '100%',
                }}
              />

              <S.BotaoAdd
                onClick={() => {
                  if (newAtividade.length >= 0 && newAtividade != '') {
                    setListNewAtividades((old) => [
                      ...old,
                      { icone: '/icon-small/new.png', titulo: newAtividade, id: 1111 + listNewAtividades.length },
                    ]);
                  }
                }}
                style={{
                  position: 'absolute',
                  right: '0',
                  top: '0',
                }}
              >
                <img src="/adicionar.svg" alt="" />
              </S.BotaoAdd>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
              {listNewAtividades.map((categ: any) => {
                return (
                  <S.Categoria
                    key={categ.id}
                    onClick={() => handleLoteClick(categ.id)}
                    style={{
                      height: '60px',
                      position: 'relative',
                      backgroundColor: theme.colors['gray/900'],
                    }}
                  >
                    <img src={`${categ.icone}`} alt="" />
                    <p
                      style={{
                        color: theme.colors.white,
                      }}
                    >
                      {categ.titulo}
                    </p>
                    <button
                      onClick={() => {
                        if (newAtividade.length > 0 && newAtividade != '') {
                          setListNewAtividades(listNewAtividades.filter((atv) => atv.id != categ.id));
                        }
                      }}
                      style={{
                        position: 'absolute',
                        right: '0',
                        translate: '-35% 65%',
                        top: '0',
                        border: 'none',
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                      }}
                    >
                      <img src="/VectorDelete.svg" alt="" />
                    </button>
                  </S.Categoria>
                );
              })}
            </div>
            <S.AtribuirButton
              type="button"
              onClick={() => {
                handleSave();
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
