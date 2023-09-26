import React, { useState, useEffect, useRef } from 'react';
import MenuBurger from '../MenuBurger';
import * as S from './styles';
import * as MenuC from '../MenuCoord/styles';
import { useSignOut } from 'react-auth-kit';
import { useNavigate, useParams } from 'react-router-dom';
import { User } from '@phosphor-icons/react';
// import { useNavigate } from 'react-router-dom';

interface MenuProps {
  area: string;
  id_projeto?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
export const Menu = (props: MenuProps) => {
  const { id } = useParams();
  const pathname = window.location.pathname;
  const [open, setOpen] = useState(false);
  const [DropDown, setDropDown] = useState(false);
  const signOut = useSignOut();
  const navigate = useNavigate();
  const dropDownRef = useRef(null);

  const handleClickButton = () => {
    setOpen(!open);
  };

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
    <S.MenuArea>
      {props.id_projeto && (
        <S.ContainerA>
          <S.ButtonBurger open={open} onClick={handleClickButton}>
            <S.MenuImg src="/menu.svg" />
          </S.ButtonBurger>
          <S.LinkLogo href={`/Painel/${id}`}>
            <S.MenuImg src="/Logo_Niko.svg" />
          </S.LinkLogo>
          {open && props.id_projeto != undefined && (
            <MenuBurger area={props.area} id_projeto={props.id_projeto} onClose={() => setOpen(false)} />
          )}
          <S.MenuDesk>
            <MenuC.link href={`/Painel/${id}`}>
              <MenuC.MenuImg
                src={
                  pathname === `/Painel/${id}`
                    ? '/IconMenu/ChartDonut/fillicon.png'
                    : '/IconMenu/ChartDonut/regularicon.png'
                }
              />
              {pathname === `/Painel/${id}` && <MenuC.textIcon style={{ color: '#F3802D' }}>Painel</MenuC.textIcon>}
              {pathname !== `/Painel/${id}` && <MenuC.textIcon>Painel</MenuC.textIcon>}
            </MenuC.link>
            <MenuC.link href={`/Atividades/${id}`}>
              <MenuC.MenuImg
                src={
                  pathname === `/Atividades/${id}` ? '/IconMenu/Activity/Fill.svg' : '/IconMenu/Activity/Regular.svg'
                }
              />
              {pathname === `/Atividades/${id}` && (
                <MenuC.textIcon style={{ color: '#F3802D' }}>Atividades</MenuC.textIcon>
              )}
              {pathname !== `/Atividades/${id}` && <MenuC.textIcon>Atividades</MenuC.textIcon>}
            </MenuC.link>
            <MenuC.link href={`/Fase/${id}`}>
              <MenuC.MenuImg
                src={
                  pathname === `/Fase/${id}` || pathname.search('Board') >= 0 || pathname.search('Lote') >= 0
                    ? '/IconMenu/SquaresFour/fillicon.png'
                    : '/IconMenu/SquaresFour/regularicon.png'
                }
              />
              {pathname === `/Fase/${id}` && <MenuC.textIcon style={{ color: '#F3802D' }}>Fases</MenuC.textIcon>}
              {pathname.search('Board') >= 0 && <MenuC.textIcon style={{ color: '#F3802D' }}>Fases</MenuC.textIcon>}
              {pathname.search('Lote') >= 0 && <MenuC.textIcon style={{ color: '#F3802D' }}>Fases</MenuC.textIcon>}
              {pathname !== `/Fase/${id}` && pathname.search('Board') < 0 && pathname.search('Lote') < 0 && (
                <MenuC.textIcon>Fases</MenuC.textIcon>
              )}
            </MenuC.link>

            <MenuC.link href={`/Categorias/${id}`}>
              <MenuC.MenuImg
                src={
                  pathname === `/Categorias/${id}`
                    ? '/IconMenu/TagSimple/fillicon.png'
                    : '/IconMenu/TagSimple/regularicon.png'
                }
              />
              {pathname === `/Categorias/${id}` && (
                <MenuC.textIcon style={{ color: '#F3802D' }}>Categorias</MenuC.textIcon>
              )}
              {pathname !== `/Categorias/${id}` && <MenuC.textIcon>Categorias</MenuC.textIcon>}
            </MenuC.link>
          </S.MenuDesk>
        </S.ContainerA>
      )}
      {props.id_projeto == undefined && (
        <S.LinkLogo href={`/Projetos`}>
          <S.MenuImg src="/Logo_Niko.svg" />
        </S.LinkLogo>
      )}
      <S.ContainerLogo>
        <a href={props.id_projeto ? `/Fase/${id}` : '/Projetos'}>
          <S.MenuImg src="/Logo_Niko.svg" />
        </a>
      </S.ContainerLogo>
      <S.MenuLeft>
        {/* <S.MenuLupaMobile src="/Lupa.svg" /> */}
        {/* <S.InputSearch>
          <p>Em desenvolvimento..</p>
          <S.MenuLupa src="/Lupa.svg" />
        </S.InputSearch> */}

        <div style={{ position: 'relative' }} ref={dropDownRef}>
          <User
            size={44}
            color="#fff"
            style={{ border: 'solid 1px #393E4B', borderRadius: '100%', padding: '8px' }}
            weight="fill"
            onClick={() => {
              setDropDown(!DropDown);
            }}
          />
          <div
            style={{
              display: `${DropDown ? 'block' : 'none'}`,
              borderRadius: '5px',
              position: 'absolute',
              right: '0',
              backgroundColor: '#393E4B',
              minWidth: '120px',
              boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
              zIndex: '1',
              color: '#fff',
            }}
          >
            <a
              href={'/Perfil'}
              style={{
                color: '#fff',
                padding: '12px 16px',
                fontFamily: 'Rubik',

                textDecoration: 'none',
                display: 'block',
                borderBottom: 'solid 1px #4a5565',
                textAlign: 'left',
              }}
            >
              <p>Perfil</p>
            </a>
            <button
              onClick={() => {
                signOut();
                navigate('/');
              }}
              style={{
                color: '#fff',
                backgroundColor: 'transparent',
                width: '100%',
                border: 'none',
                padding: '12px 16px',
                fontFamily: 'Rubik',
                fontSize: '12',
                textDecoration: 'none',
                display: 'block',
                textAlign: 'left',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5em' }}>
                <p>Sair</p>{' '}
              </div>
            </button>
          </div>
        </div>
      </S.MenuLeft>
    </S.MenuArea>
  );
};

export default Menu;
