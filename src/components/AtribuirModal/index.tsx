import React, { useState } from "react";
import * as S from "./styles";
import Search from "../Search";

interface AtribuirModalProps {
  nameUser: string;
  close: () => void;
}

const AtribuirModal = (props: AtribuirModalProps) => {
  const lotes = [
    {
      id: 1,
      title: "Lote 102",
    },
    {
      id: 2,
      title: "Lote 201",
    },
    {
      id: 3,
      title: "Lote 829",
    },
    {
      id: 4,
      title: "Lote 1024",
    },
  ];

  const [selectedLotes, setSelectedLotes] = useState<number[]>([]);

  const handleLoteClick = (loteId: number) => {
    if (selectedLotes.includes(loteId)) {
      setSelectedLotes(selectedLotes.filter((id) => id !== loteId));
    } else {
      setSelectedLotes([...selectedLotes, loteId]);
    }
  };

  return (
    <S.ModalArea>
      <div
        style={{
          display: "flex",
          gap: "1em",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Atribuir Lote</h2>
          <img
            onClick={props.close}
            src="close.svg"
            alt=""
            style={{
              padding: "5px 1px",
              backgroundColor: "#090E09",
              borderRadius: "5px",
            }}
          />
        </div>

        <div></div>
        <Search searchTerm="" handleSearchChange={() => {}} />
        <div
          style={{
            width: "100%",
            height: "40vh",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            gap: "1em",
            overflow: "auto",
            scrollBehavior: "auto",
          }}
        >
          {lotes.map((lote: any) => (
            <div
              key={lote.id}
              onClick={() => handleLoteClick(lote.id)}
              style={{
                padding: "1.5em 2em",
                backgroundColor: selectedLotes.includes(lote.id)
                  ? "#FFFFFF" // cor branca se estiver selecionado
                  : "#090E09", // cor verde padrão
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              <p style={{ color: "#44e180" }}>{lote.title}</p>
            </div>
          ))}
        </div>
        <button
          style={{
            height: "44px",
            borderRadius: "5px",
            backgroundColor: "#44e180",
            border: "none",
            color: "white",
            fontFamily: "Rubik",
          }}
          onClick={props.close}
        >
          Atribuir para {props.nameUser}
        </button>
      </div>
    </S.ModalArea>
  );
};

export default { AtribuirModal };
