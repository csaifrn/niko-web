import React, { useState, useRef, useEffect } from 'react';
import * as S from './styles';
import Menu from '../../../../components/Menu';
import MenuCoord from '../../../../components/MenuCoord';
import { useParams } from 'react-router-dom';
import AtividadeData from '../../../../data/AtividadeData';
import moment from 'moment';

const Atividade = () => {
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

  const atividades = AtividadeData.filter((atv) => atv.id_projeto === id);

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

      return diferencaA - diferencaB;
    });

    // Atualiza o estado com as atividades ordenadas
    setAtividadesOrdenadas(atividadesOrdenadas);
  }, []); // Add 'atividades' as a dependency

  useEffect(() => {
    // Verifica se a atividade mais próxima foi encontrada e se a referência existe
    if (atividadesOrdenadas.length > 0 && atividadeMaisProximaRef.current) {
      // Rola automaticamente até a atividade mais próxima
      atividadeMaisProximaRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [atividadesOrdenadas]);

  return (
    <>
      <Menu area={`/Categoria/${id}`} id_projeto={id}></Menu>
      <MenuCoord />
      <S.CardsArea>
        <div style={{ position: 'fixed', width: 'calc(100% - 6em)', top: '56px', padding: '2em 0em' , margin: '2em 0em', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#0a090e', }}>
          <h1 style={{ color: 'white', fontFamily: 'Rubik' }}>Atividades</h1>
          <a
            href={`/Atividades/${id}/CriarAtividade`}
            style={{
              border: 'none',
              color: '#191C24',
              
              borderRadius: '5px',
              fontFamily: 'Rubik',
            }}
          >
            <img src="/plus.svg" alt="adicionar atividade" />
          </a>
        </div>
        <div
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
            return (
              <div
                key={indexatv}
                ref={atividade === atividadesOrdenadas[0] ? atividadeMaisProximaRef : null}
                style={{ color: 'white', fontFamily: 'Rubik' }}
              >
                <h2 style={{ padding: '0 0 0.5em 0' }}>{`${atividade.data.getDate()}/${
                  atividade.data.getMonth() + 1
                }/${atividade.data.getFullYear()}`}</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2em' }}>
                  {atividade.atividades.map((atv, index) => {
                    return (
                      <div
                        key={index}
                        style={{
                          padding: '2em',
                          backgroundColor: '#393E4B',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '2em',
                          borderRadius: '5px',
                        }}
                      >
                        {atv.faseData.map((fase, indexfase) => {
                          return (
                            <div key={indexfase} style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
                                <img src={`/icon-page/${fase.faseData.url}.png`} alt="" />
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

                              {fase.users?.map((user) => {
                                return (
                                  <div
                                    key={user.user.id}
                                    style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5em' }}
                                  >
                                    <img
                                      src={user.user.url}
                                      height={32}
                                      width={32}
                                      style={{ objectFit: 'cover', borderRadius: '100%' }}
                                      alt=""
                                    />

                                    {user.Lote?.map((lote) => {
                                      return (
                                        <div
                                          key={lote.id}
                                          style={{
                                            background: '#191C24',
                                            padding: '5px 6px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                            borderRadius: '3px',
                                          }}
                                        >
                                          {`Lote ${lote.numero}`}
                                        </div>
                                      );
                                    })}
                                  </div>
                                );
                              })}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </S.CardsArea>
    </>
  );
};

export default Atividade;
