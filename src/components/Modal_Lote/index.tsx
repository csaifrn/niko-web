import React, { useState, useEffect, useRef } from "react";
import * as S from "./styles";
import { Content } from "../Lote/styles";

export const ModalLote = (props: any) => {
  const blurRef = useRef(null);
  console.log(props.task.catalogacao);

  return (
    <>
      <S.blur
        id="blur"
        ref={blurRef}
        onClick={(e) => {
          if (e.target === blurRef.current) {
            props.onClose();
          }
        }}
      >
        <S.areaClick>

          <S.CloseDiv>
            <S.Exit onClick={() => props.onClose()}>
              <p style={{ padding: "0 0.5em" }}>X</p>
            </S.Exit>
          </S.CloseDiv>

          <h1 style={{ marginBottom: "0.5em" }}>{props.task.title}</h1>
          <S.Categoria>
            {props.task.categoria &&
              props.task.categoria.map((categoria: any, index: number) => (
                <React.Fragment key={categoria.id}>
                  {index >= 0 && (
                    <S.NomeCategoriaTextDiv style={{ borderRadius: "5px" }}>
                      <p style={{ padding: "0 0.5em" }}>{categoria.nome}</p>
                    </S.NomeCategoriaTextDiv>
                  )}
                </React.Fragment>
              ))}
          </S.Categoria>
          
          
          {/* RECEPÇÃO */}
          {props.task.etapas &&
              props.task.etapas.map((etapa: any, index: number) => (
                
                <React.Fragment key={etapa.id} >
                  {etapa.recepçao &&
                    etapa.recepçao.map((recep: any, index: number) => (

                      <React.Fragment key={recep.id}>
                        <S.EtapaIconDiv>
                          <img
                            src={recep.icone}
                            alt="ícone de recepção"
                            height={44}
                            width={44}
                          />
                          <h2>{recep.title}</h2>
                        </S.EtapaIconDiv>

                        <S.TimeDiv>
                          <img
                            src={recep.time}
                            alt="relógio"
                          />
                          <S.StartEnd>
                            <S.CategoriaTextDiv style={{ borderRadius: "5px"}}>
                              <S.Text>{recep.start}</S.Text>
                            </S.CategoriaTextDiv>
                            <S.CategoriaTextDiv style={{ borderRadius: "5px" }}>
                              <S.Text>{recep.end}</S.Text>
                            </S.CategoriaTextDiv>
                          </S.StartEnd>
                        </S.TimeDiv>

                        <S.EnvolvidosDiv>
                          <img
                            src={recep.account}
                            alt="ícone de conta"
                          />
                          <S.UsuariosDiv>
                            {recep.envolvidos &&
                              recep.envolvidos.map((user: any, index: number) => (
                                <React.Fragment key={user.envolvidoId}>
                                  <img
                                    src={user.foto}
                                    alt="usuario envolvido na etapa"
                                    style={{ height: "32px", width: "32px" , borderRadius: "50px"}}
                                  />
                                </React.Fragment>
                              ))}
                          </S.UsuariosDiv>
                        </S.EnvolvidosDiv>

                      </React.Fragment>
                    ))}
                </React.Fragment>

              ))
          }

          {/* PREPARO */}
          {props.task.etapas &&
              props.task.etapas.map((etapa: any, index: number) => (
                
                <React.Fragment key={etapa.id}>
                  {etapa.preparo &&
                    etapa.preparo.map((prep: any, index: number) => (
                      <React.Fragment key={prep.id}>

                        <S.EtapaIconDiv>
                          <img
                            src={prep.icone}
                            alt="ícone de preparo"
                            height={44}
                            width={44}
                          />     
                          <h2>{prep.title}</h2>                                              
                        </S.EtapaIconDiv>

                        <S.TimeDiv>
                          <img
                            src={prep.time}
                            alt="relogio"
                          />
                          <S.StartEnd>
                            <S.CategoriaTextDiv style={{ borderRadius: "5px"}}>
                              <S.Text>{prep.start}</S.Text>
                            </S.CategoriaTextDiv>
                            <S.CategoriaTextDiv style={{ borderRadius: "5px" }}>
                              <S.Text>{prep.end}</S.Text>
                            </S.CategoriaTextDiv>
                          </S.StartEnd>                                                
                        </S.TimeDiv>

                        <S.EnvolvidosDiv>
                          <img
                            src={prep.account}
                            alt="ícone de conta"
                          />
                          <S.UsuariosDiv>
                            {prep.envolvidos &&
                              prep.envolvidos.map((user: any, index: number) => (
                                <React.Fragment key={user.envolvidoId}>
                                  <img
                                    src={user.foto}
                                    alt="usuario envolvido na etapa"
                                    style={{ height: "32px", width: "32px" , borderRadius: "50px"}}
                                  />
                                </React.Fragment>
                              ))}
                          </S.UsuariosDiv>                 
                        </S.EnvolvidosDiv>  
                      </React.Fragment>
                    ))}
                </React.Fragment>

              ))
          }

          {/* CATALOGAÇÃO */}
          {props.task.etapas &&
              props.task.etapas.map((etapa: any, index: number) => (
                
                <React.Fragment key={etapa.id}>
                  {etapa.catalogacao &&
                    etapa.catalogacao.map((catalog: any, index: number) => (
                      <React.Fragment key={catalog.id}>

                        <S.EtapaIconDiv>
                          <img
                            src={catalog.icone}
                            alt="catalogação icone"
                            height={44}
                            width={44}
                          />     
                          <h2>{catalog.title}</h2>                                              
                        </S.EtapaIconDiv>

                        <S.TimeDiv>
                          <img
                            src={catalog.time}
                            alt="relogio"
                          />
                          <S.StartEnd>
                            <S.CategoriaTextDiv style={{ borderRadius: "5px"}}>
                              <S.Text>{catalog.start}</S.Text>
                            </S.CategoriaTextDiv>
                            <S.CategoriaTextDiv style={{ borderRadius: "5px" }}>
                              <S.Text>{catalog.end}</S.Text>
                            </S.CategoriaTextDiv>
                          </S.StartEnd>                                               
                        </S.TimeDiv>

                        <S.EnvolvidosDiv>
                          <img
                            src={catalog.account}
                            alt="ícone de conta"
                          />
                          <S.UsuariosDiv>
                            {catalog.envolvidos &&
                              catalog.envolvidos.map((user: any, index: number) => (
                                <React.Fragment key={user.envolvidoId}>
                                  <img
                                    src={user.foto}
                                    alt="usuario envolvido na etapa"
                                    style={{ height: "32px", width: "32px" , borderRadius: "50px"}}
                                  />
                                </React.Fragment>
                              ))}
                          </S.UsuariosDiv>                 
                        </S.EnvolvidosDiv>  

                      </React.Fragment>
                    ))}
                </React.Fragment>

              ))
          }
          {/* DIGITALIZAÇÃO */}
          {props.task.etapas &&
              props.task.etapas.map((etapa: any, index: number) => (
                
                <React.Fragment key={etapa.id}>
                  {etapa.digitalizacao &&
                    etapa.digitalizacao.map((digital: any, index: number) => (
                      <React.Fragment key={digital.id}>

                        <S.EtapaIconDiv>
                          <img
                            src={digital.icone}
                            alt=""
                          />     
                          <h2>{digital.title}</h2>                                              
                        </S.EtapaIconDiv>

                        <S.TimeDiv>
                          <img
                            src={digital.time}
                            alt=""
                          />
                          <S.StartEnd>
                            <S.CategoriaTextDiv style={{ borderRadius: "5px"}}>
                              <S.Text>{digital.start}</S.Text>
                            </S.CategoriaTextDiv>
                            <S.CategoriaTextDiv style={{ borderRadius: "5px" }}>
                              <S.Text>{digital.end}</S.Text>
                            </S.CategoriaTextDiv>
                          </S.StartEnd>                                                
                        </S.TimeDiv>

                        <S.EnvolvidosDiv>
                          <img
                            src={digital.account}
                            alt="ícone de conta"
                          />
                          <S.UsuariosDiv>
                            {digital.envolvidos &&
                              digital.envolvidos.map((user: any, index: number) => (
                                <React.Fragment key={user.envolvidoId}>
                                  <img
                                    src={user.foto}
                                    alt="usuario envolvido na etapa"
                                    style={{ height: "32px", width: "32px" , borderRadius: "50px"}}
                                  />
                                </React.Fragment>
                              ))}
                          </S.UsuariosDiv>                 
                        </S.EnvolvidosDiv>  

                      </React.Fragment>
                    ))}
                </React.Fragment>

              ))
          }

        </S.areaClick>
      </S.blur>
    </>
  );
};

export default ModalLote;
