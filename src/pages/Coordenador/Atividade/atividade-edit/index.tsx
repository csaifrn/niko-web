import { useNavigate, useParams } from 'react-router-dom';
import Menu from '../../../../components/Menu';
import MenuCoord from '../../../../components/MenuCoord';
import { useEffect, useState } from 'react';
import { CreateAtividade } from '../../../../components/CreateAtividadeModal';
import { CategoriasTipologias } from '../../../../components/CategoriaTipologias';
import CategoriaData from '../../../../data/CategoriaData';
import { TipologiaData } from '../../../../data/TipologiaData';
import { IUserFase, UserModalAtividade } from '../../../../components/UserAtividadeModal';
import { AtribuirLoteModal, ILoteUser } from '../../../../components/AtribuirLoteModal';
import AtividadeData from '../../../../data/AtividadeData';
import EtapaData from '../../../../data/EtapaData';
import * as S from './styles';
import { SairSemSalvarModal } from '../../../../components/SairSemSalvarModal';

const AtividadeEdit = () => {
  const { id, idatv, iday } = useParams();
  const atividade = AtividadeData.filter((atv) => atv.id === iday)[0];
  const navigate = useNavigate();
  const [data, setData] = useState<Date>(atividade.data);
  const atv = atividade.atividades.filter((atv) => {
    return atv.id === idatv;
  })[0];
  const [tarefas, setTarefas] = useState<any>(atv?.faseData.map((fase: any) => fase.faseData));
  const [tarefasData, setTarefasData] = useState<any>([[...tarefas], []]);
  const [categorias, setCategorias] = useState<typeof CategoriaData>([]);
  const [tipologias, setTipologias] = useState<typeof TipologiaData>([]);
  const [name, setName] = useState('');
  const [nameFase, setFaseName] = useState('');
  const [idUser, setIdUser] = useState('');
  const [idFase, setIdFase] = useState<number>(0);
  const [modalTarefas, setModalTarefas] = useState(false);
  const [modalCatTipo, SetModalCatTipo] = useState(false);
  const [modalUsers, SetModalUsers] = useState(false);
  const [modalAtribuirLote, SetModalAtribuirLote] = useState(false);
  const [modalSairSemSalvar, setModalSairSemSalvar] = useState(false);
  const [faseDatas, setFaseDatas] = useState<any[]>([]);
  const [LoteUser, setLoteUser] = useState<any[]>([]);
  const [UserFase, setUserFase] = useState<IUserFase[]>([]);

  useEffect(() => {
    setUserFase(
      [
        tarefas.map((tarefa: any) => {
          return {
            id_fase: tarefa.id,
            users: atv?.faseData.filter((fase) => fase.faseData.id === tarefa.id)[0].users
              ? atv?.faseData.filter((fase) => fase.faseData.id === tarefa.id)[0].users.map((use) => use.user)
              : [],
          };
        }),
      ][0],
    );
  }, []);

  useEffect(() => {
    const updatedLoteUser: any[] = [];

    UserFase.forEach((userFase: any) => {
      userFase.users.forEach((user: any) => {
        try {
          const lote: any = atv?.faseData
            .find((fase) => fase.faseData.id === userFase.id_fase && fase.users.some((us) => us.user.id === user.id))
            ?.users.find((use) => use.user.id === user.id)
            ?.Lotes.map((lo) => lo.lote);

          updatedLoteUser.push({
            id_fase: userFase.id_fase,
            id_user: user.id,
            lotes: [...lote],
          });
        } catch (error) {
          console.log('');
        }
      });
    });

    setLoteUser(updatedLoteUser);
  }, [UserFase]);

  useEffect(() => {
    const newFaseDatas = tarefas.map((element: any) => ({
      faseData: {
        tarefas: element,
        categoriasTipologias: [...categorias, ...tipologias],
        users: [
          UserFase.filter((loteUser) => loteUser.id_fase === element.id).map((users) =>
            users.users.map((user: any) => ({
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
  }, []);

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

    console.log(atividadeFinal);
    navigate(`/Atividades/${id}`);
  };

  function formatDate(date: Date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Menu area={`/Categoria/${id}`} id_projeto={id}></Menu>
      <MenuCoord />

      <S.EditarAtivArea>
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
              <S.Titulo> Editar Atividade </S.Titulo>
            </div>
          </div>
          
          <S.Exit
            // onClick={() => {
            //   navigate(`/Atividades/${id}`);
            // }}
            onClick={() => setModalSairSemSalvar(!modalSairSemSalvar)}
          >
            <img src="/close.svg" alt="" height={18} width={18} />
          </S.Exit>
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
                value={formatDate(data)}
                style={{
                  fontFamily: 'Rubik',
                  width: 150,
                  height: 44,
                  padding: 10,
                  background: '#393E4B',
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
                tarefas.map((fase: any) => {
                  return (
                    <div
                      key={fase.id}
                      style={{
                        paddingRight: 8,
                        background: '#393E4B',
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
                        {fase.icone === '/icon-small/new.png' && (
                          <img src={'/icon-small/new.png'} width={28} height={28} alt="" />
                        )}
                        <img src={`/icon-medium/${fase.titulo}.svg`} alt="" />
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
                        background: '#393E4B',
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
                tipologias.map((tipo: any) => {
                  return (
                    <div
                      key={tipo.id}
                      style={{
                        paddingLeft: 8,
                        paddingRight: 8,
                        paddingTop: 5,
                        paddingBottom: 5,
                        background: '#626A7D',
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
              {UserFase.map((f, index) => {
                return (
                  <S.UsuariosDeUmaFase key={f.id_fase}>
                    <S.IconeTituloFase>
                      <img
                        src={`/icon-medium/${tarefas.filter((tarefa: any) => tarefa.id === f.id_fase)[0].titulo}.svg`}
                        alt=""
                      />

                      {tarefas.filter((tarefa: any) => tarefa.id === f.id_fase)[0].icone === '/icon-small/new.png' && (
                        <img
                          src={'/icon-small/new.png'}
                          style={{ marginLeft: '-16px' }}
                          width={28}
                          height={28}
                          alt=""
                        ></img>
                      )}

                      <h3>{tarefas.filter((tarefa: any) => tarefa.id === f.id_fase)[0].titulo}</h3>
                    </S.IconeTituloFase>

                    {f.users.map((user: any) => {
                      if (user != undefined) {
                        return (
                          <div
                            key={user.id}
                            style={{
                              width: '100%',
                              padding: 16,
                              background: '#393E4B',
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
                                    background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)',
                                    borderRadius: 9999,
                                    border: '0.50px #191C24 solid',
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
                                  setFaseName(tarefas.filter((tarefa: any) => tarefa.id === f.id_fase)[0].titulo);
                                  setName(user.name);
                                  setIdUser(user.id);
                                  setIdFase(f.id_fase);
                                  SetModalAtribuirLote(true);
                                }}
                              >
                                <p
                                  style={{
                                    color: '#191C24',
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
                              {LoteUser.filter((lote) => lote.id_user === user.id && lote.id_fase === f.id_fase)
                                .length > 0 &&
                                LoteUser.filter(
                                  (lotes) => lotes.id_user === user.id && lotes.id_fase === f.id_fase,
                                ).map((lote) => {
                                  return (
                                    <div key={lote.id_fase} style={{ gap: 8, display: 'flex', flexWrap: 'wrap' }}>
                                      {lote.lotes &&
                                        lote.lotes.map((loteUser: any) => {
                                          if (loteUser != undefined) {
                                            return (
                                              <div
                                                key={loteUser.id}
                                                style={{
                                                  height: 30,
                                                  paddingLeft: 9,
                                                  paddingRight: 9,
                                                  paddingTop: 8,
                                                  paddingBottom: 8,
                                                  background: '#191C24',
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

                                                {EtapaData.filter((etapa) => loteUser.id_etapa === etapa.id)[0] &&
                                                  EtapaData.filter((etapa) => loteUser.id_etapa === etapa.id)[0]
                                                    .id_fase !== f.id_fase && (
                                                    <img src="/ok.svg" alt="" height={12} width={12} />
                                                  )}
                                              </div>
                                            );
                                          }
                                        })}
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                        );
                      }
                    })}
                  </S.UsuariosDeUmaFase>
                );
              })}
            </S.UsuariosPorFase>
          </S.Usuarios>
        </S.EspecificacoesAtiv>
        {/* BOTÃO DE SALVAR */}
        {UserFase.length > 0 && <S.EditAtivAtivado onClick={handleSave}>Editar Atividade</S.EditAtivAtivado>}
        {UserFase.length === 0 && <S.EditAtivDesativado>Editar Atividade</S.EditAtivDesativado>}
      </S.EditarAtivArea>

      {/* MODAIS */}
      {modalTarefas && (
        <CreateAtividade
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

export default AtividadeEdit;
