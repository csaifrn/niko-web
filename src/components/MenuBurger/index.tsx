import React, { useEffect, useRef } from 'react';
import LinkMenuBurger from '../LinkMenuBurger';
import * as S from './styles';

interface MenuBurgerProps {
  area: string;
  id_projeto: string;
  onClose: () => void;
}

const MenuBurger = (props: MenuBurgerProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        props.onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef, props]);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    props.onClose();
  };

  return (
    <S.areaClick open={true} ref={menuRef}>
      <S.FecharMenu onClick={handleMenuClick}>
        <S.MenuImg src="/Vector.svg" />
      </S.FecharMenu>
      <S.StyledMenu open={true} id="menu">
        <LinkMenuBurger path={`/Fase/${props.id_projeto}`} nome="Inicio" area={props.area} />
        <LinkMenuBurger path="/Projetos" nome="Projeto" area={props.area} />
        <LinkMenuBurger path={`/Operadores/${props.id_projeto}`} nome="Operador" area={props.area} />
      </S.StyledMenu>
    </S.areaClick>
  );
};

export default MenuBurger;
