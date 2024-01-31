import { useState, useEffect, useRef } from 'react';
import MenuBurger from '../MenuBurger';
import * as S from './styles';
import * as MenuC from '../MenuCoord/styles';
import { Link } from 'react-router-dom';
import { SharedState } from '../../context/SharedContext';
import { LogOutModal } from '../LogOutModal';
import theme from '../../global/theme';
import { UserRole } from '../../utils/userRole.enum';
import { MyBatches } from '../MyBatchesModal';
import { Person, SignOut } from '@phosphor-icons/react';
import { IconUser } from '../Icon';

interface MenuProps {
  area: string;
  id_projeto?: string;
}

export const Menu = (props: MenuProps) => {
  const { user } = SharedState();
  const pathname = window.location.pathname;
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);
  const [DropDown, setDropDown] = useState(false);
  const [sair, setSair] = useState(false);
  const [openMy, setOpenMy] = useState(false);

  const handleClickOutside = (event: any) => {
    if (dropDownRef.current && !(dropDownRef.current as HTMLElement).contains(event.target as Node)) {
      setDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <S.MenuWrapper>
        <S.MenuArea>
          <S.ContainerA>
            {/* <S.ButtonBurger open={open} onClick={handleClickButton}>
              <S.MenuImg src="/menu.svg" />
            </S.ButtonBurger> */}

            <S.LinkLogo to={`/Fases`}>
              <S.MenuImg src="/Logo_Niko.svg" />
            </S.LinkLogo>

            {open && <MenuBurger area={props.area} onClose={() => setOpen(false)} />}

            <S.MenuDesk>
              {user?.role === UserRole.MANAGER && (
                <MenuC.link to={`/Painel`}>
                  <MenuC.MenuImg
                    src={
                      pathname === `/Painel`
                        ? '/IconMenu/ChartDonut/FillIcon.svg'
                        : '/IconMenu/ChartDonut/RegularIcon.svg'
                    }
                  />
                  {pathname === `/Painel` && (
                    <MenuC.textIcon style={{ color: theme.colors['orange/400'] }}>Painel</MenuC.textIcon>
                  )}
                  {pathname !== `/Painel` && <MenuC.textIcon>Painel</MenuC.textIcon>}
                </MenuC.link>
              )}

              {/* <MenuC.link to={`/Atividades`}>
                <MenuC.MenuImg
                  src={
                    pathname === `/Atividades` ? '/IconMenu/Activity/Fill.svg' : '/IconMenu/Activity/Regular.svg'
                  }
                />
                {pathname === `/Atividades` && (
                  <MenuC.textIcon style={{ color: theme.colors['orange/400'] }}>Atividades</MenuC.textIcon>
                )}
                {pathname !== `/Atividades` && <MenuC.textIcon>Atividades</MenuC.textIcon>}
              </MenuC.link> */}

              <MenuC.link to={`/Fases`}>
                <MenuC.MenuImg
                  src={
                    pathname === `/Fases` || pathname.search('Board') >= 0 || pathname.search('Lote') >= 0
                      ? '/IconMenu/SquaresFour/FillIcon.svg'
                      : '/IconMenu/SquaresFour/RegularIcon.svg'
                  }
                />
                {pathname === `/Fases` && (
                  <MenuC.textIcon style={{ color: theme.colors['orange/400'] }}>Fases</MenuC.textIcon>
                )}
                {pathname.search('Board') >= 0 && (
                  <MenuC.textIcon style={{ color: theme.colors['orange/400'] }}>Fases</MenuC.textIcon>
                )}
                {pathname.search('Lote') >= 0 && (
                  <MenuC.textIcon style={{ color: theme.colors['orange/400'] }}>Fases</MenuC.textIcon>
                )}
                {pathname !== `/Fases` && pathname.search('Board') < 0 && pathname.search('Lote') < 0 && (
                  <MenuC.textIcon>Fases</MenuC.textIcon>
                )}
              </MenuC.link>

              {/* Página de categorias */}
              {user?.role === UserRole.MANAGER && (
                <MenuC.link to={`/Classes`}>
                  <MenuC.MenuImg
                    src={
                      pathname === `/Classes`
                        ? '/IconMenu/TagSimple/FillIcon.svg'
                        : '/IconMenu/TagSimple/RegularIcon.svg'
                    }
                  />
                  {pathname === `/Classes` && (
                    <MenuC.textIcon style={{ color: theme.colors['orange/400'] }}>Classes</MenuC.textIcon>
                  )}
                  {pathname !== `/Classes` && <MenuC.textIcon>Classes</MenuC.textIcon>}
                </MenuC.link>
              )}
            </S.MenuDesk>
          </S.ContainerA>

          <S.ContainerLogo>
            <Link to={'/Fases'}>
              <S.MenuImg src="/Logo_Niko.svg" />
            </Link>
          </S.ContainerLogo>

          {/* <S.MenuLupaMobile src="/Lupa.svg" /> */}
          {/* <S.InputSearch>
          <p>Em desenvolvimento..</p>
          <S.MenuLupa src="/Lupa.svg" />
        </S.InputSearch> */}

          <div style={{ position: 'relative' }} ref={dropDownRef}>
            {/* Icone de usuário - opção 1 */}
            {/* <User
              size={44}
              color={theme.colors.white}
              style={{ borderRadius: '100%', padding: '8px', cursor: 'pointer' }}
              weight="fill"
              onClick={() => {
                setDropDown(!DropDown);
              }}
            /> */}

            {/* Icone de usuário - opção 2 */}
            <S.ButtonIcon
              onClick={() => {
                setDropDown(!DropDown);
              }}
            >
              {user && (
                <IconUser name={user?.name} fontSize={16} size={46} color={theme.colors['orange/500']} tooloff={true} />
              )}
            </S.ButtonIcon>

            {/* Menu do usuário */}
            <div
              style={{
                display: `${DropDown ? 'block' : 'none'}`,
                marginTop: '8px',
                borderRadius: '5px',
                position: 'absolute',
                right: '0',
                backgroundColor: '#393E4B',
                minWidth: '170px',
                boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
                zIndex: '1',
                color: '#fff',
                fontFamily: 'Rubik',
              }}
            >
              {/* Nome e foto do usuário */}
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  borderBottom: 'solid 1px #4a5565',
                  padding: '12px 16px',
                }}
              >
                {user && <IconUser name={user?.name} fontSize={9} size={20} />}
                <p
                  style={{
                    color: '#fff',
                    fontFamily: 'Rubik',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  {user?.name}
                </p>
              </div>

              <Link
                to={'/Perfil'}
                style={{
                  color: theme.colors.white,
                  padding: '12px 16px',
                  fontFamily: 'Rubik',
                  textDecoration: 'none',
                  display: 'flex',
                  textAlign: 'left',
                  alignItems: 'center',
                  cursor: 'pointer',
                  gap: '12px',
                }}
              >
                <Person weight="fill" size={20} color={theme.colors['white']} />
                <S.TextLink>Perfil</S.TextLink>
              </Link>
              {/* <button
                onClick={() => {
                  setOpenMy(!openMy);
                }}
                style={{
                  color: theme.colors.white,
                  backgroundColor: 'transparent',
                  width: '100%',
                  border: 'none',
                  padding: '12px 16px',
                  fontFamily: 'Rubik',
                  fontSize: '12',
                  textDecoration: 'none',
                  display: 'flex',
                  textAlign: 'left',
                  alignItems: 'center',
                  cursor: 'pointer',
                  gap: '8px',
                }}
              >
                <ArchiveBox size={24} color={theme.colors.white} />
                <S.TextLink>Meus Lotes</S.TextLink>
              </button> */}
              <button
                onClick={() => {
                  setSair(!sair);
                }}
                style={{
                  color: theme.colors.white,
                  backgroundColor: 'transparent',
                  width: '100%',
                  border: 'none',
                  padding: '12px 16px',
                  fontFamily: 'Rubik',
                  fontSize: '12',
                  textDecoration: 'none',
                  display: 'flex',
                  textAlign: 'left',
                  alignItems: 'center',
                  cursor: 'pointer',
                  gap: '12px',
                }}
              >
                <SignOut size={20} color={theme.colors.white} />
                <S.TextLink>Sair</S.TextLink>
              </button>
            </div>
          </div>
        </S.MenuArea>
        {sair && (
          <LogOutModal
            close={() => {
              setSair(!sair);
            }}
          />
        )}
      </S.MenuWrapper>
      {openMy && <MyBatches close={() => setOpenMy(false)} />}
    </>
  );
};

export default Menu;
