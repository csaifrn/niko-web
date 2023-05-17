import React, { useState } from "react";
import * as S from "./styles";
import Search from "../Search";

interface DeletarModalProps {
  title: string;
  close: () => void;
}

export const DeletarModal = (props: DeletarModalProps) => {


  return (
    <>
    <S.ModalBackdrop>
    <S.ModalArea>
      <S.ModalContent>
        <S.NameClose>
          <h2>{props.title}</h2>
          <img
            onClick={props.close}
            src="close.svg"
            alt=""
            height={18}
            width={18}
            style={{
              padding: "5px 5px",
              backgroundColor: "#090E09",
              borderRadius: "5px",
            }}
          />
        </S.NameClose>
        <S.Recused onClick={props.close}>
          Não, não quero.
        </S.Recused>
        <S.Delete onClick={props.close}>
          Deletar
        </S.Delete>
      </S.ModalContent>
    </S.ModalArea>
    </S.ModalBackdrop>
    </>
    

  );
};

export {};