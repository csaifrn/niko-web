import * as S from './styles';
import { Link, useParams } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
interface MenuProps {
  area: string;
}

export const MenuCoord = () => {
  const { id } = useParams();
  const pathname = window.location.pathname;
  return (
    <S.MenuArea>

      <Link to={`/Painel/${id}`}>
        <S.MenuImg
          src={
            pathname === `/Painel/${id}` ? '/IconMenu/ChartDonut/fillicon.png' : '/IconMenu/ChartDonut/regularicon.png'
          }
        />
        {pathname === `/Painel/${id}` && <S.textIcon style={{ color: '#F3802D' }}>Painel</S.textIcon>}
        {pathname !== `/Painel/${id}` && <S.textIcon>Painel</S.textIcon>}
      </Link>

      <Link to={`/Atividades/${id}`}>
        <S.MenuImg
          src={pathname === `/Atividades/${id}` ? '/IconMenu/Activity/Fill.svg' : '/IconMenu/Activity/Regular.svg'}
        />
        {pathname === `/Atividades/${id}` && <S.textIcon style={{ color: '#F3802D' }}>Atividades</S.textIcon>}
        {pathname !== `/Atividades/${id}` && <S.textIcon>Atividades</S.textIcon>}
      </Link>

      <Link to={`/Fase/${id}`}>
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
      </Link>

      <Link to={`/Categorias/${id}`}>
        <S.MenuImg
          src={
            pathname === `/Categorias/${id}`
              ? '/IconMenu/TagSimple/fillicon.png'
              : '/IconMenu/TagSimple/regularicon.png'
          }
        />
        {pathname === `/Categorias/${id}` && <S.textIcon style={{ color: '#F3802D' }}>Categorias</S.textIcon>}
        {pathname !== `/Categorias/${id}` && <S.textIcon>Categorias</S.textIcon>}
      </Link>
    </S.MenuArea>
  );
};

export default MenuCoord;
