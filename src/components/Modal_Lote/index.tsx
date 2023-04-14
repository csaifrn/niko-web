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
          <S.Close
            style={{ borderRadius: "5px", marginBottom: "0.5em", width: "2em" }}
            onClick={() => props.onClose()}
          >
            <p style={{ padding: "0 0.5em" }}>X</p>
          </S.Close>
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
                        <h2 style={{ marginTop: "2em"}}>{recep.title}</h2>
                        <S.CategoriaTextDiv>
                          <img
                            src={recep.icone}
                            alt=""
                          />                         
                        </S.CategoriaTextDiv>
                        <S.CategoriaTextDiv>
                          <img
                            src={recep.time}
                            alt=""
                          />                         
                        </S.CategoriaTextDiv>
                        <S.CategoriaTextDiv>
                          <img
                            src={recep.account}
                            alt=""
                          />                         
                        </S.CategoriaTextDiv>                         
                        <S.CategoriaTextDiv style={{ borderRadius: "5px"}}>
                          <S.Text>{recep.start}</S.Text>
                        </S.CategoriaTextDiv>
                        <S.CategoriaTextDiv style={{ borderRadius: "5px" }}>
                          <S.Text>{recep.end}</S.Text>
                        </S.CategoriaTextDiv>
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
                        <h2 style={{ marginTop: "2em"}}>{prep.title}</h2>
                        <S.CategoriaTextDiv>
                          <img
                            src={prep.icone}
                            alt=""
                          />                         
                        </S.CategoriaTextDiv>
                        <S.CategoriaTextDiv>
                          <img
                            src={prep.time}
                            alt=""
                          />                         
                        </S.CategoriaTextDiv>
                        <S.CategoriaTextDiv>
                          <img
                            src={prep.account}
                            alt=""
                          />                         
                        </S.CategoriaTextDiv>  
                        <S.CategoriaTextDiv style={{ borderRadius: "5px" }}>
                          <S.Text>{prep.start}</S.Text>
                        </S.CategoriaTextDiv>
                        <S.CategoriaTextDiv style={{ borderRadius: "5px" }}>
                          <S.Text>{prep.end}</S.Text>
                        </S.CategoriaTextDiv>
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
