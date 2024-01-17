import React, { useEffect, useRef, useState } from 'react';
import LinkMenuBurger from '../LinkMenuBurger';
import * as S from './styles';

interface MenuBurgerProps {
  area: string;
  onClose: () => void;
}

const MenuBurger = (props: MenuBurgerProps) => {
  const [isOpen, setIsOpen] = useState(true); // Adiciona estado para controlar a abertura do menu
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        props.onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef, props]);

  useEffect(() => {
    // Ao renderizar o modal, aplicar um escalonamento gradual para exibi-lo
    const timer = setTimeout(() => {
      const modal = document.getElementById('modal-scaling');
      if (isOpen === false && modal) {
        modal.style.left = '-100%';
      } else if (modal && isOpen) {
        modal.style.left = '0%';
      }
    }, 10);

    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpen(false);
    setTimeout(() => {
      props.onClose();
    }, 300);
  };

  return (
    <S.areaClick open={isOpen} id="modal-scaling" ref={menuRef}>
      <S.FecharMenu onClick={handleMenuClick}>
        <S.MenuImg src="/Vector.svg" />
      </S.FecharMenu>
      <S.StyledMenu open={true} id="menu">
        {/* <LinkMenuBurger path="/Projetos" nome="Projetos" area={props.area} /> */}
        <LinkMenuBurger path={`/Operadores`} nome="Membros" area={props.area} />
      </S.StyledMenu>
    </S.areaClick>
  );
};

export default MenuBurger;
