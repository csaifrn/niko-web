import React from 'react';
import * as S from './styles';
import { useParams } from 'react-router-dom';
import { Projeto } from '../../data/ProjetoData';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
interface MenuProps {
  area: string;
}

export const MenuCoord = () => {
  let { id } = useParams();
  const pathname = window.location.pathname;
  return (
    <S.MenuArea>
      <S.link href={`/Fase/${id}`}>
        <S.MenuImg
          src={
            pathname === `/Fase/${id}` || pathname.search('Board') >= 0 || pathname.search('Lote') >= 0
              ? '/IconMenu/SquaresFour/fillicon.png'
              : '/IconMenu/SquaresFour/regularicon.png'
          }
        />
        {pathname === `/Fase/${id}` && <S.textIcon style={{ color: '#F3802D' }}>Fases</S.textIcon>}
        {pathname.search('Board') >= 0 && <S.textIcon style={{ color: '#F3802D' }}>Fases</S.textIcon>}
        {pathname.search('Lote') >= 0 && <S.textIcon style={{ color: '#F3802D' }}>Fases</S.textIcon>}
        {pathname !== `/Fase/${id}` && pathname.search('Board') < 0 && pathname.search('Lote') < 0 && (
          <S.textIcon>Fases</S.textIcon>
        )}
      </S.link>
      <S.link href={`/Operadores/${id}`}>
        <S.MenuImg
          src={
            pathname === `/Operadores/${id}`
              ? '/IconMenu/UsersThree/fillicon.png'
              : '/IconMenu/UsersThree/regularicon.png'
          }
        />
        {pathname === `/Operadores/${id}` && <S.textIcon style={{ color: '#F3802D' }}>Operadores</S.textIcon>}
        {pathname !== `/Operadores/${id}` && <S.textIcon>Operadores</S.textIcon>}
      </S.link>
      <S.link href={`/Dashboard/${id}`}>
        <S.MenuImg
          src={
            pathname === `/Dashboard/${id}`
              ? '/IconMenu/ChartDonut/fillicon.png'
              : '/IconMenu/ChartDonut/regularicon.png'
          }
        />
        {pathname === `/Dashboard/${id}` && <S.textIcon style={{ color: '#F3802D' }}>Dashboard</S.textIcon>}
        {pathname !== `/Dashboard/${id}` && <S.textIcon>Dashboard</S.textIcon>}
      </S.link>
      <S.link href={`/Categorias/${id}`}>
        <S.MenuImg
          src={
            pathname === `/Categorias/${id}`
              ? '/IconMenu/TagSimple/fillicon.png'
              : '/IconMenu/TagSimple/regularicon.png'
          }
        />
        {pathname === `/Categorias/${id}` && <S.textIcon style={{ color: '#F3802D' }}>Categorias</S.textIcon>}
        {pathname !== `/Categorias/${id}` && <S.textIcon>Categorias</S.textIcon>}
      </S.link>
    </S.MenuArea>
  );
};

export default MenuCoord;
