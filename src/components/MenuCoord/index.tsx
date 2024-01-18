import { SharedState } from '../../context/SharedContext';
import theme from '../../global/theme';
import { UserRole } from '../../utils/userRole.enum';
import * as S from './styles';
import { useParams } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
interface MenuProps {
  area: string;
}

export const MenuCoord = () => {
  const { user } = SharedState();
  const pathname = window.location.pathname;
  return (
    <S.MenuArea>
      {/* PAINEL */}
      {user?.role === UserRole.MANAGER && (
        <S.link to={`/Painel`}>
          <S.MenuImg
            src={pathname === `/Painel` ? '/IconMenu/ChartDonut/FillIcon.svg' : '/IconMenu/ChartDonut/RegularIcon.svg'}
          />
          {pathname === `/Painel` && <S.textIcon style={{ color: theme.colors['orange/400'] }}>Painel</S.textIcon>}
          {pathname !== `/Painel` && <S.textIcon>Painel</S.textIcon>}
        </S.link>
      )}

      {/* FASES */}
      <S.link to={`/Fases`}>
        <S.MenuImg
          src={
            pathname === `/Fases` || pathname.search('Board') >= 0 || pathname.search('Lote') >= 0
              ? '/IconMenu/SquaresFour/FillIcon.svg'
              : '/IconMenu/SquaresFour/RegularIcon.svg'
          }
        />
        {pathname === `/Fases` && <S.textIcon style={{ color: theme.colors['orange/400'] }}>Fases</S.textIcon>}
        {pathname.search('Board') >= 0 && <S.textIcon style={{ color: theme.colors['orange/400'] }}>Fases</S.textIcon>}
        {pathname.search('Lote') >= 0 && <S.textIcon style={{ color: theme.colors['orange/400'] }}>Fases</S.textIcon>}
        {pathname !== `/Fases` && pathname.search('Board') < 0 && pathname.search('Lote') < 0 && (
          <S.textIcon>Fases</S.textIcon>
        )}
      </S.link>

      {/* CLASSES */}
      {user?.role === UserRole.MANAGER && (
        <S.link to={`/Classes`}>
          <S.MenuImg
            src={pathname === `/Classes` ? '/IconMenu/TagSimple/FillIcon.svg' : '/IconMenu/TagSimple/RegularIcon.svg'}
          />
          {pathname === `/Classes` && <S.textIcon style={{ color: theme.colors['orange/400'] }}>Classes</S.textIcon>}
          {pathname !== `/Classes` && <S.textIcon>Classes</S.textIcon>}
        </S.link>
      )}

      {/* 
      <S.link to={`/Atividades`}>z
        <S.MenuImg
          src={pathname === `/Atividades` ? '/IconMenu/Activity/Fill.svg' : '/IconMenu/Activity/Regular.svg'}
        />
        {pathname === `/Atividades` && (
          <S.textIcon style={{ color: theme.colors['orange/400'] }}>Atividades</S.textIcon>
        )}
        {pathname !== `/Atividades` && <S.textIcon>Atividades</S.textIcon>}
      </S.link> */}
      
    </S.MenuArea>
  );
};

export default MenuCoord;
