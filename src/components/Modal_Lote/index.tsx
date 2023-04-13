import React, { useState, useEffect, useRef } from "react";
import * as S from "./styles";

export const ModalLote = (props: any) => {
  const blurRef = useRef(null);

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
          <S.CategoriaTextDiv
            style={{ borderRadius: "5px", marginBottom: "0.5em", width: "2em" }}
            onClick={() => props.onClose()}
          >
            <p style={{ padding: "0 0.5em" }}>X</p>
          </S.CategoriaTextDiv>
          <h1 style={{ marginBottom: "0.5em" }}>{props.task.title}</h1>
          <S.Categoria>
            {props.task.categoria &&
              props.task.categoria.map((categoria: any, index: number) => (
                <React.Fragment key={categoria.id}>
                  {index >= 0 && (
                    <S.CategoriaTextDiv style={{ borderRadius: "5px" }}>
                      <p style={{ padding: "0 0.5em" }}>{categoria.nome}</p>
                    </S.CategoriaTextDiv>
                  )}
                </React.Fragment>
              ))}
          </S.Categoria>
        </S.areaClick>
      </S.blur>
    </>
  );
};

export default ModalLote;
