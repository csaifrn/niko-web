import React from 'react';
import LinkMenuBurger from '../LinkMenuBurger';
import MenuBurger from '../MenuBurger';
import * as S from "./styles"

interface MenuProps {
  area: string
}

export const Menu = (props : MenuProps) => {
    const [open, setOpen] = React.useState(false);

    function closeMenu(open: boolean) {
      setOpen(!open)
    }

    return(
      
      <S.MenuArea>
        <S.ButtonBurger open={open} onClick={() => setOpen(!open)}>
            <S.MenuImg src='/menu.svg'/>
            <S.MenuImg src='/Vector.svg'/>
        </S.ButtonBurger>
        <MenuBurger open={open} area={props.area} handleOutisideClick={closeMenu}></MenuBurger>
        <a href='/'>
        <S.MenuImg src='/Logo_Niko.svg'/>
        </a>
        <S.MenuLeft>
          <S.MenuImg src='/Lupa.svg'/>
          <S.MenuImg src='/Conta.svg'/>
        </S.MenuLeft>
    </S.MenuArea>
    )
}
