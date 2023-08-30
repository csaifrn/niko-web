import React from 'react';
import * as S from './styles';
import { generateUUID } from '../../utils/generateUUID.util';

const Lote = (props: any) => {
  //console.log(props.pendencia.lenght > 0)
  return (
    <>
      {props.edit == true && (
        <S.LoteEdit className="Lote">
          <S.LoteArea>
            <S.Content>
              <h2>{props.value}</h2>
              {props.categoria &&
                props.categoria.map((categoria: any) => (
                  <React.Fragment key={generateUUID()}>
                    {categoria.nome === props.prioridade && (
                      <S.Prioridade>
                        <p>Prioridade</p>
                      </S.Prioridade>
                    )}
                  </React.Fragment>
                ))}
            </S.Content>
            <S.Content>
              <S.Categoria>
                {props.categoria &&
                  props.categoria.map((categoria: any, index: number) => (
                    <React.Fragment key={generateUUID()}>
                      {index >= 1 && (
                        <S.CategoriaTextDiv style={{ borderRadius: '100%', width: '2em' }}>
                          <p>+{index}</p>
                        </S.CategoriaTextDiv>
                      )}
                      {index == 0 && (
                        <S.CategoriaTextDiv style={{ borderRadius: '3px' }}>
                          <p style={{ padding: '0 0.5em' }}>{categoria.nome}</p>
                        </S.CategoriaTextDiv>
                      )}
                    </React.Fragment>
                  ))}
              </S.Categoria>
            </S.Content>
          </S.LoteArea>
        </S.LoteEdit>
      )}
      {props.edit == null && (
        <S.Lote className="Lote">
          <S.LoteArea>
            <S.Content>
              <h2>{props.value}</h2>
              {/* PENDENCIA */}
              {props.pendencia > 0 && (
                <img
                  src="/warning.svg"
                  alt="icone triangular com ponto de exclamação no centro indicando que há uma pendência no lote"
                />
              )}
              {/* PRIORIDADE */}
              {props.prioridade == true && (
                <S.Prioridade>
                  <p>Prioridade</p>
                </S.Prioridade>
              )}
            </S.Content>
            <S.Content>
              <S.Envolvido style={{ display: 'flex', marginLeft: '10px' }}>
                {props.envolvidos &&
                  props.envolvidos.map((envolvidos: any, index: number) => (
                    <React.Fragment key={generateUUID()}>
                      {index <= 2 && (
                        <img
                          src={envolvidos.foto}
                          width={24}
                          height={24}
                          style={{ marginLeft: '-10px', borderRadius: '100%', objectFit: 'cover' }}
                          alt="Foto do usuário"
                        ></img>
                      )}
                      {index >= 3 && (
                        <S.CategoriaTextDiv
                          style={{
                            borderRadius: '100%',
                            width: '24px',
                            marginLeft: '-10px',
                          }}
                        >
                          <p>+{index - 2}</p>
                        </S.CategoriaTextDiv>
                      )}
                    </React.Fragment>
                  ))}
              </S.Envolvido>

              <S.Categoria>
                {props.categoria &&
                  props.categoria.map((categoria: any, index: number) => (
                    <React.Fragment key={generateUUID()}>
                      {index >= 1 && (
                        <S.CategoriaTextDiv style={{ borderRadius: '100%', width: '2em' }}>
                          <p>+{index}</p>
                        </S.CategoriaTextDiv>
                      )}
                      {index == 0 && (
                        <S.CategoriaTextDiv style={{ borderRadius: '3px' }}>
                          <p style={{ padding: '0 0.5em' }}>{categoria.name}</p>
                        </S.CategoriaTextDiv>
                      )}
                    </React.Fragment>
                  ))}
              </S.Categoria>
            </S.Content>
            <div>{props.children}</div>
          </S.LoteArea>
        </S.Lote>
      )}
    </>
  );
};

export default Lote;
