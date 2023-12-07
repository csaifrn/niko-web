import React from 'react';
import * as S from './styles';
import { generateUUID } from '../../utils/generateUUID.util';

const Lote = (props: any) => {

  return (
    <>
      {props.edit == true && (
        <S.LoteEdit className="Lote">
          <S.LoteArea>

            <S.LoteNumAvisos>
              {/* NÚMERO DO LOTE */}
              <h2>{props.value}</h2>

              {props.categoria &&
                props.categoria.map((categoria: any) => (
                  <React.Fragment key={generateUUID()}>
                    {categoria.nome === props.prioridade && (
                      //AVISO DE PRIORIDADE
                      <S.Prioridade>
                        <p>Prioridade</p>
                      </S.Prioridade>
                    )}
                  </React.Fragment>
                ))}
            </S.LoteNumAvisos>

            <S.LoteNumAvisos>
              <S.Categoria>
                {props.categoria && (
                  <React.Fragment key={generateUUID()}>
                    <S.CategoriaTextDiv style={{ borderRadius: '100%', width: '2em' }}>
                      <p>+</p>
                    </S.CategoriaTextDiv>

                    <S.CategoriaTextDiv style={{ borderRadius: '3px' }}>
                      <p style={{ padding: '0 0.5em' }}>{props.categoria.name}</p>
                    </S.CategoriaTextDiv>
                  </React.Fragment>
                )}
              </S.Categoria>
            </S.LoteNumAvisos>
          </S.LoteArea>
        </S.LoteEdit>
      )}

      {props.edit == null && (
        <S.Lote className="Lote">
          <S.LoteArea>
            <S.LoteDetalhes>
              <S.LoteNumAvisos>
                <h2>{props.value}</h2>

                <S.PendPrioridade>
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
                </S.PendPrioridade>
              </S.LoteNumAvisos>

              <S.LoteNumAvisos>
                {/* Categorias do Lote */}
                <S.Categoria>
                  {props.categoria && (
                    <React.Fragment key={generateUUID()}>
                      <S.CategoriaTextDiv style={{ borderRadius: '100%', width: '2em' }}>
                        <p>+</p>
                      </S.CategoriaTextDiv>

                      <S.CategoriaTextDiv style={{ borderRadius: '3px' }}>
                        <p style={{ padding: '0 0.5em' }}>{props.categoria.name}</p>
                      </S.CategoriaTextDiv>
                    </React.Fragment>
                  )}
                </S.Categoria>

                {/* Operadores do Lote */}
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
              </S.LoteNumAvisos>
            </S.LoteDetalhes>

            {/* BOTÃO DE ATRIBUIR ALGUÉM */}

            {props.children && props.children}
          </S.LoteArea>
        </S.Lote>
      )}
    </>
  );
};

export default Lote;
