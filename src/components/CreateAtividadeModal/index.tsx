import React, { useEffect, useState } from 'react';
import * as S from './style';
import FaseData from '../../data/FaseData';
import Search from '../Search';

interface CreateAtividadeProps {
  close: () => void;
  // eslint-disable-next-line no-unused-vars
  setTarefas: (e: any) => void;
  // eslint-disable-next-line no-unused-vars
  setTarefasData: (e: any) => void;
  tarefasData: any[];
}

export const CreateAtividade = (props: CreateAtividadeProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [newAtividade, setNewAtividade] = useState<string>('');
  const [closing] = useState(false);

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
    props.close();
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

                <S.Exit
                  onClick={props.close}
                >
                  <img src="/close.svg" alt="" height={18} width={18} />
                </S.Exit>

              {/* <button onClick={props.close} style={{ border: 'none', backgroundColor: 'transparent' , cursor: 'pointer'}}>
                <div
                  style={{
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 5,
                    paddingBottom: 5,
                    background: '#191C24',
                    borderRadius: 3,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 10,
                    display: 'inline-flex',
                  }}
                >
                  <div
                    style={{
                      color: 'white',
                      fontSize: 12,
                      fontFamily: 'Rubik',
                      fontWeight: '700',
                      wordWrap: 'break-word',
                    }}
                  >
                    <img src="/close.svg" alt="" height={18} width={18} />
                  </div>
                </div>
              </button> */}
            </S.NameClose>
            <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
            <S.ChooseUser>
              {filteredTitulo.map((categ: any) => {
                return (
                  <S.Categoria
                    key={categ.id}
                    onClick={() => handleLoteClick(categ)}
                    style={{
                      backgroundColor: tarefasFase.includes(categ) ? '#090E09' : '#2D303B',
                    }}
                  >
                    <img src={`${categ.icone}`} alt="" />
                    <p
                      style={{
                        color: tarefasFase.includes(categ) ? '#fff' : '#838383',
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
                placeholder="Adicionar Outro"
                style={{
                  color: '#fff',
                  fontFamily: 'Rubik',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '0 2em',
                  backgroundColor: '#5C6170',
                  height: '44px',
                  width: '100%',
                }}
              />
              <button
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
                  translate: '-35% 30%',
                  top: '0',
                  border: 'none',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                }}
              >
                <img src="/adicionar.svg" alt="" />
              </button>
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
                      backgroundColor: '#090E09',
                    }}
                  >
                    <img src={`${categ.icone}`} alt="" />
                    <p
                      style={{
                        color: '#fff',
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
