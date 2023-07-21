import { useNavigate, useParams } from 'react-router-dom';
import Menu from '../../../../components/Menu';
import MenuCoord from '../../../../components/MenuCoord';
import { useEffect, useState } from 'react';
import { CreateAtividade } from '../../../../components/CreateAtividadeModal';
import { CategoriasTipologias } from '../../../../components/CategoriaTipologias';
import CategoriaData from '../../../../data/CategoriaData';
import TipologiaData from '../../../../data/TipologiaData';
import { IUserFase, UserModalAtividade } from '../../../../components/UserAtividadeModal';
import { AtribuirModalAtividade, ILoteUser } from '../../../../components/AtribuirModalAtividade';
import AtividadeData from '../../../../data/AtividadeData';
import EtapaData from '../../../../data/EtapaData';

const AtividadeEdit = () => {
  const { id, idatv, iday } = useParams();
  const atividade = AtividadeData.filter((atv) => atv.id === iday)[0];
  const navigate = useNavigate();
  const [data, setData] = useState<Date>(atividade.data);
  const atv = atividade.atividades.filter((atv) => {
    return atv.id === idatv;
  })[0];
  const [tarefas, setTarefas] = useState<any>(atv?.faseData.map((fase) => fase.faseData));
  const [tarefasData, setTarefasData] = useState<any>([[...tarefas], []]);
  const [categorias, setCategorias] = useState<typeof CategoriaData>([]);
  const [tipologias, setTipologias] = useState<typeof TipologiaData>([]);
  const [name, setName] = useState('');
  const [nameFase, setFaseName] = useState('');
  const [idUser, setIdUser] = useState('');
  const [idFase, setIdFase] = useState('');
  const [modalTarefas, setModalTarefas] = useState(false);
  const [modalCatTipo, SetModalCatTipo] = useState(false);
  const [modalUsers, SetModalUsers] = useState(false);
  const [modalAtribuirLote, SetModalAtribuirLote] = useState(false);
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

  // const handleRemoveLote = (id_lote: string, id_user: string) => {
  //   // const updatedLotes = LoteUser.filter((lote) => lote.id_user === id_user)[0].lotes.filter(
  //   //   (lote: any) => lote.lote.id === id_lote,
  //   // );
  // };

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
    <>
      <Menu area={`/Categoria/${id}`} id_projeto={id}></Menu>
      <MenuCoord />
      <div
        style={{
          margin: 16,
          borderRadius: 5,
          flexDirection: 'column',
          display: 'flex',
          gap: '2em',
          marginBottom: '10em',
          marginTop: '10em',
        }}
      >
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
              <div
                style={{
                  textAlign: 'right',
                  color: 'white',
                  fontSize: 24,
                  fontFamily: 'Rubik',
                  fontWeight: '700',
                  wordWrap: 'break-word',
                }}
              >
                Editar Atividade
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              navigate(`/Atividades/${id}`);
            }}
            style={{
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 5,
              paddingBottom: 5,
              background: '#393E4B',
              borderRadius: 3,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 10,
              display: 'inline-flex',
              border: 'none',
            }}
          >
            <div
              style={{ color: 'white', fontSize: 12, fontFamily: 'Rubik', fontWeight: '700', wordWrap: 'break-word' }}
            >
              X
            </div>
          </button>
        </div>
        <div
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
          <h2 style={{ color: 'white', fontSize: 16, fontFamily: 'Rubik', fontWeight: '500', wordWrap: 'break-word' }}>
            Data
          </h2>
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
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
          <div
            style={{
              alignSelf: 'stretch',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 8,
              display: 'inline-flex',
            }}
          >
            <div
              style={{ color: 'white', fontSize: 16, fontFamily: 'Rubik', fontWeight: '500', wordWrap: 'break-word' }}
            >
              Tarefas
            </div>
            <button
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onClick={() => {
                setModalTarefas(!modalTarefas);
              }}
            >
              <img src="/plus.svg" alt="adicionar atividade" />
            </button>
          </div>
          <div
            style={{
              width: 344,
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: 8,
              display: 'inline-flex',
              flexWrap: 'wrap',
            }}
          >
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
                      <img src={`/icon-page/${fase.url}.png`} alt="" />
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
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
          <div
            style={{
              alignSelf: 'stretch',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 8,
              display: 'flex',
            }}
          >
            <div
              style={{ color: 'white', fontSize: 16, fontFamily: 'Rubik', fontWeight: '500', wordWrap: 'break-word' }}
            >
              Categorias e Tipologias
            </div>
            <button
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onClick={() => {
                SetModalCatTipo(!modalCatTipo);
              }}
            >
              <img src="/plus.svg" alt="adicionar atividade" />
            </button>
          </div>
          <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
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
              tipologias.map((tipo) => {
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
        </div>

        <div
          style={{
            alignSelf: 'stretch',
            flexDirection: 'column',
            gap: 16,
            display: 'flex',
          }}
        >
          <div
            style={{
              alignSelf: 'stretch',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 8,
              display: 'flex',
            }}
          >
            <div
              style={{ color: 'white', fontSize: 16, fontFamily: 'Rubik', fontWeight: '500', wordWrap: 'break-word' }}
            >
              Usuários
            </div>
            {tarefas.length > 0 && (
              <button
                style={{
                  border: 'none',
                  backgroundColor: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={() => {
                  SetModalUsers(!modalUsers);
                }}
              >
                <img src="/plus.svg" alt="adicionar atividade" />
              </button>
            )}
            {tarefas.length === 0 && (
              <button
                style={{
                  border: 'none',
                  backgroundColor: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src="/plus.svg" alt="adicionar atividade" style={{ opacity: '50%' }} />
              </button>
            )}
          </div>
          <div
            style={{
              width: '100%',
              flexDirection: 'column',
              gap: '2em',
              display: 'flex',
            }}
          >
            {UserFase.map((f, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'white',
                    fontFamily: 'Rubik',
                    gap: 16,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      color: 'white',
                      fontFamily: 'Rubik',
                      gap: 16,
                      alignItems: 'center',
                    }}
                  >
                    <img
                      height={24}
                      width={24}
                      src={`/icon-page/${tarefas.filter((tarefa: any) => tarefa.id === f.id_fase)[0].url}.png`}
                      alt="Icone de Etapa"
                    />
                    <h3>{tarefas.filter((tarefa: any) => tarefa.id === f.id_fase)[0].titulo}</h3>
                  </div>

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
                            <div style={{ gap: 16, display: 'flex' }}>
                              <button
                                onClick={() => {
                                  setFaseName(tarefas.filter((tarefa: any) => tarefa.id === f.id_fase)[0].url);
                                  setName(user.name);
                                  setIdUser(user.id);
                                  setIdFase(f.id_fase);
                                  SetModalAtribuirLote(true);
                                }}
                                style={{
                                  padding: 8,
                                  background: '#43DB6D',
                                  borderRadius: 5,
                                  gap: 10,
                                  display: 'flex',
                                  border: 'none',
                                }}
                              >
                                <div
                                  style={{
                                    color: '#191C24',
                                    fontSize: 12,
                                    fontFamily: 'Rubik',
                                    fontWeight: '500',
                                    wordWrap: 'break-word',
                                  }}
                                >
                                  Atribuir Lote
                                </div>
                              </button>
                            </div>
                          </div>
                          <div style={{ gap: 8, display: 'flex', flexWrap: 'wrap' }}>
                            {LoteUser.filter((lote) => lote.id_user === user.id && lote.id_fase === f.id_fase).length >
                              0 &&
                              LoteUser.filter((lotes) => lotes.id_user === user.id && lotes.id_fase === f.id_fase).map(
                                (lote, index) => {
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

                                                {EtapaData.filter((etapa) => loteUser.id_etapa === etapa.id)[0]
                                                  .id_fase !== f.id_fase && (
                                                  <img src="/ok.svg" alt="" height={12} width={12} />
                                                )}
                                              </div>
                                            );
                                          }
                                        })}
                                    </div>
                                  );
                                },
                              )}
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              );
            })}
          </div>
        </div>
        {UserFase.length > 0 && (
          <button
            onClick={handleSave}
            style={{
              alignSelf: 'stretch',
              height: 44,
              padding: 10,
              background: '#43DB6D',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
              display: 'flex',
              border: 'none',
            }}
          >
            <div
              style={{ color: '#191C24', fontSize: 12, fontFamily: 'Rubik', fontWeight: '500', wordWrap: 'break-word' }}
            >
              Adicionar Atividade
            </div>
          </button>
        )}
        {UserFase.length === 0 && (
          <button
            style={{
              alignSelf: 'stretch',
              height: 44,
              padding: 10,
              background: '#43DB6D',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
              display: 'flex',
              border: 'none',
              opacity: '50%',
            }}
          >
            <div
              style={{
                color: '#191C24',
                fontSize: 12,
                fontFamily: 'Rubik',
                fontWeight: '500',
                wordWrap: 'break-word',
                opacity: '50%',
              }}
            >
              Adicionar Atividade
            </div>
          </button>
        )}
      </div>
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
        <AtribuirModalAtividade
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
    </>
  );
};

export default AtividadeEdit;
