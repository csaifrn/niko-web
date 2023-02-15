import React, { useState, useEffect, useRef } from 'react';
import LinkMenuBurger from '../LinkMenuBurger';
import MenuBurger from '../MenuBurger';
import * as S from "./styles"

interface MenuProps {
  area: string;
}

export const Menu = (props: MenuProps) => {
  const [open, setOpen] = useState(false);

  const handleClickButton = () => {
    setOpen(!open);
  };

  return (
    <S.MenuArea>
      <S.ButtonBurger open={open} onClick={handleClickButton}>
        <S.MenuImg src="/menu.svg" />
      </S.ButtonBurger>
      {open && <MenuBurger area={props.area} onClose={() => setOpen(false)}/>}
      <a href="/">
        <S.MenuImg src="/Logo_Niko.svg" />
      </a>
      <S.MenuLeft>
        <S.MenuImg src="/Lupa.svg" />
        <S.MenuImg src="/Conta.svg" />
      </S.MenuLeft>
    </S.MenuArea>
  );
};

export default Menu;