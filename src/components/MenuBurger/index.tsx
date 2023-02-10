import React, { useEffect, useRef } from "react";
import LinkMenuBurger from "../LinkMenuBurger";
import * as S from "./styles"

interface MenuBurgerprops {
  open: boolean
  area: string
  handleOutisideClick: any
}

const MenuBurger = (props: MenuBurgerprops) => {

  const ref = useRef<HTMLElement>(document.querySelector("menu"));

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        props.handleOutisideClick();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [props.handleOutisideClick]);

  return (
    <S.StyledMenu open={props.open} id="menu">
      <LinkMenuBurger path='/' nome='Inicio' area={props.area}/>
      <LinkMenuBurger path='/Arquivamento' nome='Arquivamento' area={props.area}/>
    </S.StyledMenu>
  )

}

export default MenuBurger;