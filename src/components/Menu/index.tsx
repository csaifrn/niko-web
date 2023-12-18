import { useState, useEffect, useRef } from 'react';
import MenuBurger from '../MenuBurger';
import * as S from './styles';
import * as MenuC from '../MenuCoord/styles';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { User } from '@phosphor-icons/react';
import { SharedState } from '../../context/SharedContext';
import { LogOutModal } from '../LogOutModal';
import theme from '../../global/theme';

interface MenuProps {
  area: string;
  id_projeto?: string;
}

export const Menu = (props: MenuProps) => {
  const { user, setUser } = SharedState();
  const { id } = useParams();
  const pathname = window.location.pathname;
  const [open, setOpen] = useState(false);
  const [DropDown, setDropDown] = useState(false);
  const navigate = useNavigate();
  const dropDownRef = useRef(null);
  const [sair, setSair] = useState(false);

  const handleSair = () => {
    setSair(!sair);
  };

  const handleClickButton = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event: any) => {
    if (dropDownRef.current && !(dropDownRef.current as HTMLElement).contains(event.target as Node)) {
      setDropDown(false);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.MenuWrapper>
      <S.MenuArea>
        {props.id_projeto && (
          <S.ContainerA>
            <S.ButtonBurger open={open} onClick={handleClickButton}>
              <S.MenuImg src="/menu.svg" />
            </S.ButtonBurger>

            <S.LinkLogo to={`/Painel/${id}`}>
              <S.MenuImg src="/Logo_Niko.svg" />
            </S.LinkLogo>

            {open && props.id_projeto != undefined && (
              <MenuBurger area={props.area} id_projeto={props.id_projeto} onClose={() => setOpen(false)} />
            )}

            <S.MenuDesk>
              <MenuC.link to={`/Painel/${id}`}>
                <MenuC.MenuImg
                  src={
                    pathname === `/Painel/${id}`
                      ? '/IconMenu/ChartDonut/FillIcon.svg'
                      : '/IconMenu/ChartDonut/RegularIcon.svg'
                  }
                />
                {pathname === `/Painel/${id}` && (
                  <MenuC.textIcon style={{ color: theme.colors['orange/400'] }}>Painel</MenuC.textIcon>
                )}
                {pathname !== `/Painel/${id}` && <MenuC.textIcon>Painel</MenuC.textIcon>}
              </MenuC.link>

              {/* <MenuC.link to={`/Atividades/${id}`}>
                <MenuC.MenuImg
                  src={
                    pathname === `/Atividades/${id}` ? '/IconMenu/Activity/Fill.svg' : '/IconMenu/Activity/Regular.svg'
                  }
                />
                {pathname === `/Atividades/${id}` && (
                  <MenuC.textIcon style={{ color: theme.colors['orange/400'] }}>Atividades</MenuC.textIcon>
                )}
                {pathname !== `/Atividades/${id}` && <MenuC.textIcon>Atividades</MenuC.textIcon>}
              </MenuC.link> */}

              <MenuC.link to={`/Fase/${id}`}>
                <MenuC.MenuImg
                  src={
                    pathname === `/Fase/${id}` || pathname.search('Board') >= 0 || pathname.search('Lote') >= 0
                      ? '/IconMenu/SquaresFour/FillIcon.svg'
                      : '/IconMenu/SquaresFour/RegularIcon.svg'
                  }
                />
                {pathname === `/Fase/${id}` && (
                  <MenuC.textIcon style={{ color: theme.colors['orange/400'] }}>Fases</MenuC.textIcon>
                )}
                {pathname.search('Board') >= 0 && (
                  <MenuC.textIcon style={{ color: theme.colors['orange/400'] }}>Fases</MenuC.textIcon>
                )}
                {pathname.search('Lote') >= 0 && (
                  <MenuC.textIcon style={{ color: theme.colors['orange/400'] }}>Fases</MenuC.textIcon>
                )}
                {pathname !== `/Fase/${id}` && pathname.search('Board') < 0 && pathname.search('Lote') < 0 && (
                  <MenuC.textIcon>Fases</MenuC.textIcon>
                )}
              </MenuC.link>

              <MenuC.link to={`/Categorias/${id}`}>
                <MenuC.MenuImg
                  src={
                    pathname === `/Categorias/${id}`
                      ? '/IconMenu/TagSimple/FillIcon.svg'
                      : '/IconMenu/TagSimple/RegularIcon.svg'
                  }
                />
                {pathname === `/Categorias/${id}` && (
                  <MenuC.textIcon style={{ color: theme.colors['orange/400'] }}>Categorias</MenuC.textIcon>
                )}
                {pathname !== `/Categorias/${id}` && <MenuC.textIcon>Categorias</MenuC.textIcon>}
              </MenuC.link>
            </S.MenuDesk>
          </S.ContainerA>
        )}

        {props.id_projeto == undefined && (
          <S.LinkLogo to={`/Projetos`}>
            <S.MenuImg src="/Logo_Niko.svg" />
          </S.LinkLogo>
        )}

        <S.ContainerLogo>
          <Link to={props.id_projeto ? `/Fase/${id}` : '/Projetos'}>
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
            <S.User
              src='/Account.svg' 
              alt='ícone circular de foto do usuário' 
              onClick={() => {
                setDropDown(!DropDown);
              }}
            />

            {/* Menu do usuário */}
            <div
              style={{
                display: `${DropDown ? 'block' : 'none'}`,
                borderRadius: '5px',
                position: 'absolute',
                right: '0',
                backgroundColor: '#393E4B',
                minWidth: '150px',
                boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
                zIndex: '1',
                color: '#fff',
                fontFamily: 'Rubik',
              }}
            >
              {/* Nome e foto do usuário */}
              <div
                style={{ display: 'flex', gap: '8px',alignItems: 'center' ,justifyContent: 'flex-start', borderBottom: 'solid 1px #4a5565' , padding: '12px 16px'}}
              >
                <img src="/Account.svg" alt='ícone de foto do usuário' style={{width: '32px' , height: '32px'}}/>
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
                to={'/Perfil/:id'}
                style={{
                  color: theme.colors.white,
                  padding: '12px 16px',
                  fontFamily: 'Rubik',
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                <S.TextLink>Perfil</S.TextLink>
              </Link>

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
                  display: 'block',
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
              >
                <S.TextLink>Sair</S.TextLink>{' '}
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
  );
};

export default Menu;
