import React, { useState, useEffect, useRef } from 'react';
// import LinkMenuBurger from '../LinkMenuBurger';
// import MenuBurger from '../MenuBurger';
import * as S from './styles';
import { useSignOut } from 'react-auth-kit';
// import { useNavigate } from 'react-router-dom';

interface MenuProps {
  area: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
export const Menu = (props: MenuProps) => {
  // const [open, setOpen] = useState(false);
  const [DropDown, setDropDown] = useState(false);
  const signOut = useSignOut();
  // const navigate = useNavigate();
  const dropDownRef = useRef(null);

  // const handleClickButton = () => {
  //   setOpen(!open);
  // };

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
      {/* <S.ContainerA>
        <S.ButtonBurger open={open} onClick={handleClickButton}>
          <S.MenuImg src="/menu.svg" />
        </S.ButtonBurger>
        {open && <MenuBurger area={props.area} onClose={() => setOpen(false)} />} 
      </S.ContainerA> */}
      <S.ContainerA>
        <a href="/Fase">
          <S.MenuImg src="/Logo_Niko.svg" />
        </a>
      </S.ContainerA>
      <S.MenuLeft>
        <S.MenuImg src="/Lupa.svg" />

        <div style={{ position: 'relative' }} ref={dropDownRef}>
          <S.MenuImg
            src="/user.png"
            height={32}
            width={32}
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
              onClick={() => signOut()}
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
                <img src="LogOut.svg" width={16} alt="Log-Out" />
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
