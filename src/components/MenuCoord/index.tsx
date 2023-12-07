import theme from '../../global/theme';
import * as S from './styles';
import { useParams } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
interface MenuProps {
  area: string;
}

export const MenuCoord = () => {
  const { id } = useParams();
  const pathname = window.location.pathname;
  return (
    <S.MenuArea>
      <S.link to={`/Painel/${id}`}>
        <S.MenuImg
          src={
            pathname === `/Painel/${id}` ? '/IconMenu/ChartDonut/FillIcon.svg' : '/IconMenu/ChartDonut/RegularIcon.svg'
          }
        />
        {pathname === `/Painel/${id}` && <S.textIcon style={{ color: theme.colors['orange/400'] }}>Painel</S.textIcon>}
        {pathname !== `/Painel/${id}` && <S.textIcon>Painel</S.textIcon>}
      </S.link>

      <S.link to={`/Atividades/${id}`}>
        <S.MenuImg
          src={pathname === `/Atividades/${id}` ? '/IconMenu/Activity/Fill.svg' : '/IconMenu/Activity/Regular.svg'}
        />
        {pathname === `/Atividades/${id}` && (
          <S.textIcon style={{ color: theme.colors['orange/400'] }}>Atividades</S.textIcon>
        )}
        {pathname !== `/Atividades/${id}` && <S.textIcon>Atividades</S.textIcon>}
      </S.link>

      <S.link to={`/Fase/${id}`}>
        <S.MenuImg
          src={
            pathname === `/Fase/${id}` || pathname.search('Board') >= 0 || pathname.search('Lote') >= 0
              ? '/IconMenu/SquaresFour/FillIcon.svg'
              : '/IconMenu/SquaresFour/RegularIcon.svg'
          }
        />
        {pathname === `/Fase/${id}` && <S.textIcon style={{ color: theme.colors['orange/400'] }}>Fases</S.textIcon>}
        {pathname.search('Board') >= 0 && <S.textIcon style={{ color: theme.colors['orange/400'] }}>Fases</S.textIcon>}
        {pathname.search('Lote') >= 0 && <S.textIcon style={{ color: theme.colors['orange/400'] }}>Fases</S.textIcon>}
        {pathname !== `/Fase/${id}` && pathname.search('Board') < 0 && pathname.search('Lote') < 0 && (
          <S.textIcon>Fases</S.textIcon>
        )}
      </S.link>

      <S.link to={`/Categorias/${id}`}>
        <S.MenuImg
          src={
            pathname === `/Categorias/${id}`
              ? '/IconMenu/TagSimple/FillIcon.svg'
              : '/IconMenu/TagSimple/RegularIcon.svg'
          }
        />
        {pathname === `/Categorias/${id}` && (
          <S.textIcon style={{ color: theme.colors['orange/400'] }}>Categorias</S.textIcon>
        )}
        {pathname !== `/Categorias/${id}` && <S.textIcon>Categorias</S.textIcon>}
      </S.link>
    </S.MenuArea>
  );
};

export default MenuCoord;
