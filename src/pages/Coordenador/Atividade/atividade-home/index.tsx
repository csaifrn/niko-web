import { useState, useRef, useEffect } from 'react';
import * as S from './styles';
import Menu from '../../../../components/Menu';
import MenuCoord from '../../../../components/MenuCoord';
import { useParams } from 'react-router-dom';
import AtividadeData from '../../../../data/AtividadeData';
import moment from 'moment';
import { ArrowCircleRight, Check, PencilSimple } from '@phosphor-icons/react';
import EtapaData from '../../../../data/EtapaData';
import Lote from '../../../../components/Lote';

const Atividade = () => {
  const auth = { role: 'Coordenador', email: 'andre.sousa@gmail.com' };

  function compare(a: any, b: any) {
    const dateA = new Date(a.data);
    const dateB = new Date(b.data);

    if (dateA < dateB) {
      return -1;
    }
    if (dateA > dateB) {
      return 1;
    }
    return 0;
  }

  const { id } = useParams();

  const atividades: typeof AtividadeData = AtividadeData.filter((atv) => atv.id_projeto === id);

  atividades.sort(compare);

  const [atividadesOrdenadas, setAtividadesOrdenadas] = useState<any>([]);
  const atividadeMaisProximaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Obtém a data atual
    const dataAtual = moment();

    const atividadesOrdenadas = [...atividades].sort((a, b) => {
      const diferencaA = Math.abs(dataAtual.diff(a.data, 'days'));
      const diferencaB = Math.abs(dataAtual.diff(b.data, 'days'));
      if (diferencaA > diferencaB) {
        return 1;
      } else diferencaA > diferencaB;
      {
        return -1;
      }
    });
    setAtividadesOrdenadas(atividadesOrdenadas);
  }, []);

  useEffect(() => {
    if (atividadesOrdenadas.length > 0 && atividadeMaisProximaRef.current) {
      atividadeMaisProximaRef.current.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'start' });
    }
  }, [atividadesOrdenadas]);

  return (
    <>
      <Menu area={`/Categoria/${id}`} id_projeto={id}></Menu>
      <MenuCoord />
      <S.AtividadesPage>

        <S.AtivsCabecalho
          style={{
            position: 'fixed',
            width: 'calc(100% - 4em)',
            top: '56px',
            padding: '2em 0em',
            margin: '2em 0em',
            display: 'flex',
            alignItems: 'center',
            zIndex: '999',
            justifyContent: 'space-between',
            backgroundColor: '#0a090e',
          }}
        >
          <S.TituloAtividades style={{ color: 'white', fontFamily: 'Rubik' }}>Atividades</S.TituloAtividades>
          {auth.role == 'Coordenador' && (
            <S.CriarAtiv
              href={`/Atividades/${id}/CriarAtividade`}
              style={{
                border: 'none',
                color: '#191C24',

                borderRadius: '5px',
                fontFamily: 'Rubik',
              }}
            >
              <img src="/plus.svg" alt="adicionar atividade" />
            </S.CriarAtiv>
          )}
        </S.AtivsCabecalho>

        <S.AtivsPorDiaDiv
          style={{
            marginTop: '10em',
            borderRadius: '5px',
            display: 'flex',
            flexDirection: 'column',
            gap: '2em',
          }}
        >
          {' '}
          {atividades.map((atividade, indexatv) => {
            if (auth.role === 'Coordenador') {
              return (
                <S.AtivPorDia
                  key={indexatv}
                  ref={atividade === atividadesOrdenadas[0] ? atividadeMaisProximaRef : null}
                  style={{ color: 'white', fontFamily: 'Rubik' }}
                >
                  <S.DataAtiv style={{ padding: '0 0 0.5em 0' }}>{`${atividade.data.getDate()}/${
                    atividade.data.getMonth() + 1
                  }/${atividade.data.getFullYear()}`}
                  </S.DataAtiv>
                  
                  <S.Atividades>

                    {atividade.atividades.map((atv, index) => {
                      return (

                        <>

                        <S.AtivCard key={index}>

                          <S.EditDiv>
                            <S.Edit
                              href={`/Atividades/${id}/Edit/${atividade.id}/${atv.id}`}
                              style={{
                                display: 'flex',
                                backgroundColor: '#191C24',
                                height: '24px',
                                width: '24px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '5px',
                                right: '2em',
                                border: 'none',
                              }}
                              
                            >
                              <PencilSimple size={16} weight="fill" color="#fff" />
                            </S.Edit>
                          </S.EditDiv>

                          <S.AtivsDetails>
                          {atv.faseData.map((fase, indexfase) => {
                            return (
                              <S.AtivPorFase key={indexfase}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
                                  <S.IconeFase src={`/icon-medium/${fase.faseData.titulo}.svg`} alt="" />
                                  <S.TituloFase>{fase.faseData.titulo}</S.TituloFase>
                                </div>

                                {fase.categoriasTipologias?.length != undefined && (
                                  <div style={{ display: 'flex', gap: '0.5em' }}>
                                    {fase.categoriasTipologias?.map((catTip) => {
                                      return (
                                        <div
                                          key={catTip.id}
                                          style={{
                                            background: '#191C24',
                                            padding: '5px 6px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                            borderRadius: '3px',
                                          }}
                                        >
                                          {catTip.name}
                                        </div>
                                      );
                                    })}
                                  </div>
                                )}

                                {fase.users?.map((user) => {
                                  // useEffect(() =>{
                                  //   const operadores = document.getElementById('operador')
                                  //   console.log(operadores);
                                  //   operadores?.addEventListener('mouseenter', handleNomedoOperador)
                                  // },[])

                                   return (
                                    <div
                                      key={user.user.id}
                                      style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5em' }}
                                    >

                                      <S.Operador>
                                        <S.FotoOperador
                                          src={user.user.url}
                                          height={32}
                                          width={32}
                                          style={{ objectFit: 'cover', borderRadius: '100%' }}
                                          alt=""
                                        />

                                        <S.NomeOperador>
                                          <p>{user.user.name}</p>
                                        </S.NomeOperador>
                                       
                                      </S.Operador>



                                      {user.Lotes?.map((lote) => {
                                        return (
                                          <div
                                            key={lote.lote.id}
                                            style={{
                                              background: '#191C24',
                                              padding: '5px 6px',
                                              height: '24px',
                                              display: 'flex',
                                              alignItems: 'center',
                                              flexWrap: 'wrap',
                                              borderRadius: '3px',
                                              gap: '0.5em',
                                            }}
                                          >
                                            <p>{`Lote ${lote.lote.numero}`}</p>
                                            {EtapaData.filter((etapa) => lote.lote.id_etapa === etapa.id)[0] &&
                                              EtapaData.filter((etapa) => lote.lote.id_etapa === etapa.id)[0]
                                                .id_fase !== fase.faseData.id && <Check size={12} color="#43DB6D" />}
                                          </div>
                                        );
                                      })}
                                    </div>
                                  );
                                })}
                              </S.AtivPorFase>
                            );
                          })}
                          </S.AtivsDetails>
                          
                        </S.AtivCard>
                        </>
                      );
                    })}
                  </S.Atividades>
                </S.AtivPorDia>
              );
            } else {
              return (
                <div>
                  {atividade.atividades.map((atv, index) => {
                    return (
                      <div key={index}>
                        {atv.faseData.map((fase, indexfase) => {
                          let cont = 0;
                          return (
                            <div key={indexfase}>
                              {fase.users?.map((user) => {
                                if (user.user.email === auth.email) {
                                  return (
                                    <div
                                      key={indexatv}
                                      ref={atividade === atividadesOrdenadas[0] ? atividadeMaisProximaRef : null}
                                      style={{ color: 'white', fontFamily: 'Rubik' }}
                                    >
                                      {cont === 0 && (
                                        <h2 style={{ padding: '1em 0 0.5em 0' }}>{`${atividade.data.getDate()}/${
                                          atividade.data.getMonth() + 1
                                        }/${atividade.data.getFullYear()}`}</h2>
                                      )}
                                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2em' }}>
                                        <div
                                          key={index}
                                          style={{
                                            padding: '2em',
                                            backgroundColor: '#393E4B',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '2em',
                                            borderRadius: '5px',
                                            position: 'relative',
                                          }}
                                        >
                                          {auth.role === 'Coordenador' && (
                                            <a
                                              href={`/Atividades/${id}/Edit/${atividade.id}/${atv.id}`}
                                              style={{
                                                display: 'flex',
                                                backgroundColor: '#191C24',
                                                height: '24px',
                                                width: '24px',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: '5px',
                                                position: 'absolute',
                                                right: '2em',
                                                border: 'none',
                                              }}
                                            >
                                              <PencilSimple size={16} weight="fill" color="#fff" />
                                            </a>
                                          )}
                                          <div>
                                            <div
                                              key={indexfase}
                                              style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}
                                            >
                                              <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
                                                <img src={`${fase.faseData.icone}`} alt="" />
                                                <h3>{fase.faseData.titulo}</h3>
                                              </div>

                                              {fase.categoriasTipologias?.length != undefined && (
                                                <div style={{ display: 'flex', gap: '0.5em' }}>
                                                  {fase.categoriasTipologias?.map((catTip) => {
                                                    return (
                                                      <div
                                                        key={catTip.id}
                                                        style={{
                                                          background: '#191C24',
                                                          padding: '5px 6px',
                                                          display: 'flex',
                                                          alignItems: 'center',
                                                          flexWrap: 'wrap',
                                                          borderRadius: '3px',
                                                        }}
                                                      >
                                                        {catTip.name}
                                                      </div>
                                                    );
                                                  })}
                                                </div>
                                              )}
                                              <div
                                                key={user.user.id}
                                                style={{
                                                  display: 'flex',
                                                  overflowY: 'auto',
                                                  gap: '0.5em',
                                                  padding: '0.5em 0em',
                                                }}
                                              >
                                                {user.Lotes?.map((lote) => {
                                                  if (
                                                    EtapaData.filter((etapa) => lote.lote.id_etapa === etapa.id)[0] &&
                                                    EtapaData.filter((etapa) => lote.lote.id_etapa === etapa.id)[0]
                                                      .id_fase !== fase.faseData.id
                                                  ) {
                                                    return (
                                                      <S.ContainerLote key={lote.lote.id}>
                                                        <Lote
                                                          categorias={lote.lote.categorias}
                                                          value={`Lote ${lote.lote.numero}`}
                                                          pendencia={lote.lote.pendencias}
                                                          prioridade={lote.lote.prioridade}
                                                          envolvidos={lote.lote.envolvidos}
                                                        >
                                                          <div
                                                            style={{
                                                              display: 'flex',
                                                              alignItems: 'center',
                                                              justifyContent: 'center',
                                                              padding: '0.5em 0',
                                                              gap: '0.5em',
                                                              height: '44px',
                                                            }}
                                                          >
                                                            <Check size={12} color="#43DB6D" />
                                                            <p>Feito</p>
                                                          </div>
                                                        </Lote>
                                                      </S.ContainerLote>
                                                    );
                                                  } else {
                                                    return (
                                                      <S.Link href={`/Lote/${lote.lote.id}`} key={lote.lote.id}>
                                                        <Lote
                                                          categorias={lote.lote.categorias}
                                                          value={`Lote ${lote.lote.numero}`}
                                                          pendencia={lote.lote.pendencias}
                                                          prioridade={lote.lote.prioridade}
                                                          envolvidos={lote.lote.envolvidos}
                                                        >
                                                          <S.AtribuirButton
                                                            onClick={(e) => {
                                                              e.preventDefault();
                                                              console.log('Montar lógica');
                                                            }}
                                                          >
                                                            <ArrowCircleRight size={18} weight="fill" color="#1C1F28" />
                                                            Pegar Lote
                                                          </S.AtribuirButton>
                                                        </Lote>
                                                      </S.Link>
                                                    );
                                                  }
                                                })}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                }
                                cont++;
                              })}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              );
            }
          })}
        </S.AtivsPorDiaDiv>
      </S.AtividadesPage>
    </>
  );
};

export default Atividade;
