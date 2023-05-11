import React, { useState, useEffect, useRef } from "react";
import * as S from "./styles";

interface MenuProps {
  area: string;
}

export const MenuCoord = (props: MenuProps) => {
  const pathname = window.location.pathname;
  console.log(pathname);
  console.log(pathname.search("Board"));
  console.log(pathname === "/Fase");
  return (
    <S.MenuArea>
      <S.link href="/Fase">
        <S.MenuImg
          src={
            pathname === "/Fase" || pathname.search("Board") >= 0
              ? "/IconMenu/SquaresFour/fillicon.png"
              : "/IconMenu/SquaresFour/regularicon.png"
          }
        />
        {pathname === "/Fase" && (
          <S.textIcon style={{ color: "#F3802D" }}>Fases</S.textIcon>
        )}
        {pathname.search("Board") >= 0 && (
          <S.textIcon style={{ color: "#F3802D" }}>Fases</S.textIcon>
        )}
        {pathname !== "/Fase" && pathname.search("Board") < 0 && <S.textIcon>Fases</S.textIcon>}
      </S.link>
      <S.link href="/Operadores">
        <S.MenuImg
          src={
            pathname === "/Operadores"
              ? "/IconMenu/UsersThree/fillicon.png"
              : "/IconMenu/UsersThree/regularicon.png"
          }
        />
        {pathname === "/Operadores" && (
          <S.textIcon style={{ color: "#F3802D" }}>Operadores</S.textIcon>
        )}
        {pathname !== "/Operadores" && <S.textIcon>Operadores</S.textIcon>}
      </S.link>
      <S.link href="/Dashboard">
        <S.MenuImg
          src={
            pathname === "/Dashboard"
              ? "/IconMenu/ChartDonut/fillicon.png"
              : "/IconMenu/ChartDonut/regularicon.png"
          }
        />
        {pathname === "/Dashboard" && (
          <S.textIcon style={{ color: "#F3802D" }}>Dashboard</S.textIcon>
        )}
        {pathname !== "/Dashboard" && <S.textIcon>Dashboard</S.textIcon>}
      </S.link>
      <S.link href="/Categorias">
        <S.MenuImg
          src={
            pathname === "/Categorias"
              ? "/IconMenu/TagSimple/fillicon.png"
              : "/IconMenu/TagSimple/regularicon.png"
          }
        />
        {pathname === "/Categorias" && (
          <S.textIcon style={{ color: "#F3802D" }}>Categorias</S.textIcon>
        )}
        {pathname !== "/Categorias" && <S.textIcon>Categorias</S.textIcon>}
      </S.link>
    </S.MenuArea>
  );
};

export default MenuCoord;
