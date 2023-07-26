import React, { useEffect, useRef } from 'react';
import LinkMenuBurger from '../LinkMenuBurger';
import * as S from './styles';

interface MenuBurgerProps {
  area: string;
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
  }, [menuRef]);

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
        <LinkMenuBurger path="/" nome="Inicio" area={props.area} />
        <LinkMenuBurger path="/Arquivamento" nome="Arquivamento" area={props.area} />
      </S.StyledMenu>
    </S.areaClick>
  );
};

export default MenuBurger;
