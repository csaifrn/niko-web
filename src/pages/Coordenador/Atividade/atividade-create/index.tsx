import { useNavigate, useParams } from 'react-router-dom';
import Menu from '../../../../components/Menu';
import MenuCoord from '../../../../components/MenuCoord';
import { useEffect, useState } from 'react';
import { CreateTarefaAtividade } from '../../../../components/CreateTarefaModal';
import FaseData from '../../../../data/FaseData';
import { CategoriasTipologias } from '../../../../components/CategoriaTipologias';
import CategoriaData from '../../../../data/CategoriaData';
import { TipologiaData } from '../../../../data/TipologiaData';
import { IUserFase, UserModalAtividade } from '../../../../components/UserAtividadeModal';
import { AtribuirLoteModal, ILoteUser } from '../../../../components/AtribuirLoteModal';
import * as S from './style';
import theme from '../../../../global/theme';
import { SairSemSalvarModal } from '../../../../components/SairSemSalvarModal';

const AtividadeCreate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(new Date());

  const [tarefas, setTarefas] = useState<typeof FaseData>([]);

  const [tarefasData, setTarefasData] = useState<any>([[...tarefas], []]);

  const [categorias, setCategorias] = useState<typeof CategoriaData>([]);
  const [tipologias, setTipologias] = useState<typeof TipologiaData>([]);

  const [UserFase, setUserFase] = useState<IUserFase[]>([]);

  const [name, setName] = useState('');
  const [nameFase, setFaseName] = useState('');
  const [idUser, setIdUser] = useState('');
  const [idFase, setIdFase] = useState<number>(0);

  const [LoteUser, setLoteUser] = useState<ILoteUser[]>([]);

  const [modalTarefas, setModalTarefas] = useState(false);
  const [modalCatTipo, SetModalCatTipo] = useState(false);
  const [modalUsers, SetModalUsers] = useState(false);
  const [modalAtribuirLote, SetModalAtribuirLote] = useState(false);
  const [modalSairSemSalvar, setModalSairSemSalvar] = useState(false);

  const [faseDatas, setFaseDatas] = useState<any[]>([]);

  useEffect(() => {
    const newFaseDatas = tarefas.map((element) => ({
      faseData: {
        tarefas: element,
        categoriasTipologias: [...categorias, ...tipologias],
        users: [
          UserFase.filter((loteUser) => loteUser.id_fase === element.id).map((users) =>
            users.users.map((user) => ({
              user: user,
              Lotes: LoteUser.filter((lotes) => lotes.id_user === user.id).map((lote) => ({
                check: false,
                lote: lote,
              })),
            })),
          ),
        ],
      },
    }));
    setFaseDatas(newFaseDatas);
  }, [UserFase, UserFase, LoteUser]);

  const handleData = (e: any) => {
    setData(e.target.value);
  };

  const handleLoteUser = (e: ILoteUser) => {
    if (LoteUser.filter((lote) => lote.id_user === e.id_user && lote.id_fase === e.id_fase).length > 0) {
      setLoteUser(
        LoteUser.filter(
          (lote) => lote !== LoteUser.filter((lote) => lote.id_user === e.id_user && lote.id_fase === e.id_fase)[0],
        ),
      );
    }
    setLoteUser((prev) => [...prev, e]);
  };

  const handleTarefa = (e: any) => {
    setTarefas(e);
    setUserFase([]);
    setLoteUser([]);
  };

  const handleTarefaData = (e: any) => {
    setTarefasData(e);
  };

  const handleSave = () => {
    const atividadeFinal = {
      id: '2a78fa83-0abf-4dbe-a17d-b2ecf99831ae',
      data: data,
      id_projeto: id,
      atividade: [...faseDatas],
    };

    navigate(`/Atividades/${id}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Menu area={`/Categoria/${id}`} id_projeto={id}></Menu>
      <MenuCoord />

      <S.CriarAtivArea>
        <div
          style={{
            alignSelf: 'stretch',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 16,
            display: 'flex',
          }}
        >
          <div
            style={{
              width: 283,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 16,
              display: 'inline-flex',
            }}
          >
            <div
              style={{
                alignSelf: 'stretch',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 16,
                display: 'inline-flex',
              }}
            >
              <S.Titulo> Adicionar Atividade </S.Titulo>
            </div>
          </div>

          <S.CloseDiv>
            <S.Exit onClick={() => setModalSairSemSalvar(!modalSairSemSalvar)}>
              <img src="/buttonclose.svg" alt="" height={18} width={18} />
            </S.Exit>
          </S.CloseDiv>
        </div>
        <S.EspecificacoesAtiv>
          <S.Data
            style={{
              alignSelf: 'stretch',
              height: 71,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 8,
              display: 'flex',
            }}
          >
            <S.Titulo2> Data </S.Titulo2>
            <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
              <input
                type="date"
                name="Data"
                onChange={handleData}
                style={{
                  fontFamily: 'Rubik',
                  width: 150,
                  height: 44,
                  padding: 10,
                  background: theme.colors['gray/500'],
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  border: 'none',
                  color: 'white',
                }}
              />
            </div>
          </S.Data>
          <S.Tarefas>
            <S.TituloBotaoAdd>
              <S.Titulo2>Tarefas</S.Titulo2>

              <S.BotaoAdd
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setModalTarefas(!modalTarefas);
                }}
              >
                <img src="/adicionar.svg" alt="adicionar atividade" />
              </S.BotaoAdd>
            </S.TituloBotaoAdd>

            <S.TarefasCardsArea>
              {tarefas.length > 0 &&
                tarefas.map((fase) => {
                  return (
                    <div
                      key={fase.id}
                      style={{
                        paddingRight: 8,
                        background: theme.colors['gray/500'],
                        borderRadius: 5,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: 3,
                        display: 'flex',
                      }}
                    >
                      <div
                        style={{
                          padding: 6,
                          borderRadius: 2,
                          justifyContent: 'flex-end',
                          alignItems: 'flex-start',
                          gap: 10,
                          display: 'flex',
                        }}
                      >
                        {fase.icone === '/icon-small/new.png' ? (
                          <img src={'/icon-small/new.png'} width={28} height={28} alt="" />
                        ) : (
                          <img src={`/icon-medium/${fase.titulo}.svg`} alt="" />
                        )}
                      </div>
                      <h2
                        style={{
                          color: 'white',
                          fontSize: 12,
                          fontFamily: 'Rubik',
                          fontWeight: '500',
                          wordWrap: 'break-word',
                        }}
                      >
                        {fase.titulo}
                      </h2>
                    </div>
                  );
                })}
            </S.TarefasCardsArea>
          </S.Tarefas>

          <S.CategTipol>
            <S.TituloBotaoAdd>
              <S.Titulo2>Categorias e Tipologias</S.Titulo2>

              <S.BotaoAdd
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  SetModalCatTipo(!modalCatTipo);
                }}
              >
                <img src="/adicionar.svg" alt="adicionar atividade" />
              </S.BotaoAdd>
            </S.TituloBotaoAdd>
            <div
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: 8,
                display: 'flex',
                flexWrap: 'wrap',
              }}
            >
              {categorias.length > 0 &&
                categorias.map((catg) => {
                  return (
                    <div
                      key={catg.id}
                      style={{
                        paddingLeft: 8,
                        paddingRight: 8,
                        paddingTop: 5,
                        paddingBottom: 5,
                        background: theme.colors['gray/500'],
                        borderRadius: 3,
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        gap: 10,
                        display: 'flex',
                      }}
                    >
                      <div
                        style={{
                          textAlign: 'right',
                          color: 'white',
                          fontSize: 12,
                          fontFamily: 'Rubik',
                          fontWeight: '500',
                          wordWrap: 'break-word',
                        }}
                      >
                        {catg.name}
                      </div>
                    </div>
                  );
                })}
              {tipologias.length > 0 &&
                tipologias.map((tipo) => {
                  return (
                    <div
                      key={tipo.id}
                      style={{
                        paddingLeft: 8,
                        paddingRight: 8,
                        paddingTop: 5,
                        paddingBottom: 5,
                        background: theme.colors['gray/450'],
                        borderRadius: 3,
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        gap: 10,
                        display: 'flex',
                      }}
                    >
                      <div
                        style={{
                          textAlign: 'right',
                          color: 'white',
                          fontSize: 12,
                          fontFamily: 'Rubik',
                          fontWeight: '500',
                          wordWrap: 'break-word',
                        }}
                      >
                        {tipo.name}
                      </div>
                    </div>
                  );
                })}
            </div>
          </S.CategTipol>

          <S.Usuarios>
            <S.TituloBotaoAdd>
              <S.Titulo2>Usuários</S.Titulo2>

              {/* BOTÃO ATIVADO */}
              {tarefas.length > 0 && (
                <S.BotaoAdd
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    SetModalUsers(!modalUsers);
                  }}
                >
                  <img src="/adicionar.svg" alt="adicionar atividade" />
                </S.BotaoAdd>
              )}

              {/* BOTÃO DESATIVADO */}
              {tarefas.length === 0 && (
                <S.BotaoAddDesativado>
                  <img src="/adicionar.svg" alt="adicionar atividade" style={{ opacity: '50%' }} />
                </S.BotaoAddDesativado>
              )}
            </S.TituloBotaoAdd>

            <S.UsuariosPorFase>
              {UserFase.map((f) => {
                return (
                  <S.UsuariosDeUmaFase key={f.id_fase}>
                    <S.IconeTituloFase>
                      <img
                        src={`/icon-medium/${tarefas.filter((tarefa) => tarefa.id === f.id_fase)[0].titulo}.svg`}
                        alt=""
                      />

                      {tarefas.filter((tarefa) => tarefa.id === f.id_fase)[0].icone === '/icon-small/new.png' && (
                        <img
                          src={'/icon-small/new.png'}
                          style={{ marginLeft: '-16px' }}
                          width={28}
                          height={28}
                          alt=""
                        ></img>
                      )}

                      <h3>{tarefas.filter((tarefa) => tarefa.id === f.id_fase)[0].titulo}</h3>
                    </S.IconeTituloFase>

                    {f.users.map((user: any) => {
                      return (
                        <div
                          key={user.id}
                          style={{
                            width: '100%',
                            padding: 16,
                            background: theme.colors['gray/500'],
                            borderRadius: 5,
                            flexDirection: 'column',
                            gap: '2em',
                            display: 'flex',
                          }}
                        >
                          <div
                            style={{
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              gap: 16,
                              display: 'flex',
                            }}
                          >
                            <div
                              style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex' }}
                            >
                              <img
                                style={{
                                  width: 32,
                                  height: 32,
                                  background: `linear-gradient(0deg, ${theme.colors['gray/50']} 0%, ${theme.colors['gray/50']} 100%)`,
                                  borderRadius: 9999,
                                  border: `0.50px ${theme.colors['gray/700']} solid`,
                                  objectFit: 'cover',
                                }}
                                src={user.url}
                                alt=""
                              />
                              <div
                                style={{
                                  color: 'white',
                                  fontSize: 12,
                                  fontFamily: 'Rubik',
                                  fontWeight: '500',
                                  wordWrap: 'break-word',
                                }}
                              >
                                {user.name}
                              </div>
                            </div>

                            <S.AtribuirLoteButton
                              onClick={() => {
                                setFaseName(tarefas.filter((tarefa: any) => tarefa.id === f.id_fase)[0].icone);
                                setName(user.name);
                                setIdUser(user.id);
                                setIdFase(f.id_fase);
                                SetModalAtribuirLote(true);
                              }}
                            >
                              <p
                                style={{
                                  color: theme.colors['gray/500'],
                                  fontSize: 12,
                                  fontFamily: 'Rubik',
                                  fontWeight: '500',
                                  wordWrap: 'break-word',
                                }}
                              >
                                Atribuir Lote
                              </p>
                            </S.AtribuirLoteButton>
                          </div>

                          <div style={{ gap: 8, display: 'flex', flexWrap: 'wrap' }}>
                            {LoteUser.filter((lote) => lote.id_user === user.id && lote.id_fase === f.id_fase).length >
                              0 &&
                              LoteUser.filter((lote) => lote.id_user === user.id && lote.id_fase === f.id_fase).map(
                                (lote) => {
                                  return (
                                    <div key={lote.id_fase} style={{ gap: 8, display: 'flex', flexWrap: 'wrap' }}>
                                      {lote.lotes.map((loteUser: any) => {
                                        return (
                                          <div
                                            key={loteUser.id}
                                            style={{
                                              height: 30,
                                              paddingLeft: 9,
                                              paddingRight: 9,
                                              paddingTop: 8,
                                              paddingBottom: 8,
                                              background: theme.colors['gray/700'],
                                              borderRadius: 5,
                                              justifyContent: 'center',
                                              alignItems: 'center',
                                              gap: 10,
                                              display: 'flex',
                                            }}
                                          >
                                            <div
                                              style={{
                                                color: 'white',
                                                fontSize: 12,
                                                fontFamily: 'Rubik',
                                                fontWeight: '500',
                                              }}
                                            >
                                              {`Lote ${loteUser.numero}`}
                                            </div>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  );
                                },
                              )}
                          </div>
                        </div>
                      );
                    })}
                  </S.UsuariosDeUmaFase>
                );
              })}
            </S.UsuariosPorFase>
          </S.Usuarios>
        </S.EspecificacoesAtiv>
        {/* BOTÃO DE SALVAR */}
        {UserFase.length > 0 && <S.AddAtivAtivado onClick={handleSave}>Adicionar Atividade</S.AddAtivAtivado>}
        {UserFase.length === 0 && <S.AddAtivDesativado>Adicionar Atividade</S.AddAtivDesativado>}
      </S.CriarAtivArea>

      {modalTarefas && (
        <CreateTarefaAtividade
          close={() => {
            setModalTarefas(!modalTarefas);
          }}
          setTarefas={handleTarefa}
          tarefasData={tarefasData}
          setTarefasData={handleTarefaData}
        />
      )}
      {modalCatTipo && (
        <CategoriasTipologias
          close={() => {
            SetModalCatTipo(!modalCatTipo);
          }}
          categorias={categorias}
          tipologias={tipologias}
          setCategoria={(e) => {
            setCategorias(e);
          }}
          setTipologia={(e) => {
            setTipologias(e);
          }}
        />
      )}
      {modalUsers && (
        <UserModalAtividade
          close={() => {
            SetModalUsers(!modalUsers);
          }}
          setUserFase={(e: any) => {
            setUserFase(e);
          }}
          userFase={UserFase}
          fase={tarefas}
        />
      )}
      {modalAtribuirLote && (
        <AtribuirLoteModal
          close={() => {
            SetModalAtribuirLote(!modalAtribuirLote);
          }}
          categorias={categorias}
          tipologia={tipologias}
          loteUsers={LoteUser}
          nameUser={name}
          nameFase={nameFase}
          id_user={idUser}
          id_fase={idFase}
          setLoteUser={handleLoteUser}
          loteUser={LoteUser.filter((loteUser) => loteUser.id_user === idUser && loteUser.id_fase === idFase)[0]}
        />
      )}

      {modalSairSemSalvar && (
        <SairSemSalvarModal
          close={() => {
            setModalSairSemSalvar(!modalSairSemSalvar);
          }}
        />
      )}
    </div>
  );
};

export default AtividadeCreate;
