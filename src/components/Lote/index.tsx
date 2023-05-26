import { uuidv4 } from '@firebase/util';
import React from 'react';
import * as S from './styles';

const Lote = (props: any) => {
  return (
    <>
      {props.edit == true && (
        <S.LoteEdit className="Lote">
          <S.LoteArea>
            <S.Content>
              <h1>{props.value}</h1>
              {props.categoria &&
                props.categoria.map((categoria: any) => (
                  <React.Fragment key={uuidv4()}>
                    {categoria.nome === props.prioridade && (
                      <S.Prioridade>
                        <p>Prioridade</p>
                      </S.Prioridade>
                    )}
                  </React.Fragment>
                ))}
            </S.Content>
            <S.Content>
              {/* <S.Pa >
                                {
                                    props.categoria && props.categoria.map((categoria: any, index: number) => (
                                        <React.Fragment key={uuidv4()}>
                                            {index >= 0 && (
                                                <S.PaTextDiv style={{ borderRadius: "5px" }}>
                                                    <p style={{ padding: "0 0.5em" }}>{categoria.nome}</p>
                                                </S.PaTextDiv>
                                            )}
                                        </React.Fragment>
                                    ))
                                }
                            </S.Pa> */}
              <div></div>
              <S.Pa>
                {props.categoria &&
                  props.categoria.map((categoria: any, index: number) => (
                    <React.Fragment key={uuidv4()}>
                      {index >= 1 && (
                        <S.PaTextDiv style={{ borderRadius: '100%', width: '2em' }}>
                          <p>+{index}</p>
                        </S.PaTextDiv>
                      )}
                      {index == 0 && (
                        <S.PaTextDiv style={{ borderRadius: '3px' }}>
                          <p style={{ padding: '0 0.5em' }}>{categoria.nome}</p>
                        </S.PaTextDiv>
                      )}
                    </React.Fragment>
                  ))}
              </S.Pa>
            </S.Content>
            <S.Btn>
              <p>Mover para o preparo</p>
            </S.Btn>
          </S.LoteArea>
        </S.LoteEdit>
      )}
      {props.edit == null && (
        <S.Lote className="Lote">
          <S.LoteArea>
            <S.Content>
              <h1>{props.value}</h1>
              {props.categoria &&
                props.categoria.map((categoria: any) => (
                  <React.Fragment key={uuidv4()}>
                    {categoria.nome === props.prioridade && (
                      <S.Prioridade>
                        <p>Prioridade</p>
                      </S.Prioridade>
                    )}
                  </React.Fragment>
                ))}
            </S.Content>
            <S.Content>
              <S.Envolvido style={{ display: 'flex', marginLeft: '10px' }}>
                {props.envolvidos &&
                  props.envolvidos.map((envolvidos: any, index: number) => (
                    <React.Fragment key={uuidv4()}>
                      {index <= 2 && (
                        <img
                          src={envolvidos.foto}
                          width={24}
                          height={24}
                          style={{ marginLeft: '-10px', borderRadius: '100%' }}
                          alt="Foto do usuário"
                        ></img>
                      )}
                      {index >= 3 && (
                        <S.PaTextDiv
                          style={{
                            borderRadius: '100%',
                            width: '24px',
                            marginLeft: '-10px',
                          }}
                        >
                          <p>+{index - 2}</p>
                        </S.PaTextDiv>
                      )}
                    </React.Fragment>
                  ))}
              </S.Envolvido>

              <S.Pa>
                {props.categoria &&
                  props.categoria.map((categoria: any, index: number) => (
                    <React.Fragment key={uuidv4()}>
                      {index >= 1 && (
                        <S.PaTextDiv style={{ borderRadius: '100%', width: '2em' }}>
                          <p>+{index}</p>
                        </S.PaTextDiv>
                      )}
                      {index == 0 && (
                        <S.PaTextDiv style={{ borderRadius: '3px' }}>
                          <p style={{ padding: '0 0.5em' }}>{categoria.nome}</p>
                        </S.PaTextDiv>
                      )}
                    </React.Fragment>
                  ))}
              </S.Pa>
            </S.Content>
          </S.LoteArea>
        </S.Lote>
      )}
    </>
  );
};

export default Lote;
