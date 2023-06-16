import React, { useState } from 'react';
import { CardContainer } from './styles';
import { useNavigate } from 'react-router-dom';
import Users from '../../data/UserData';
import { MembrosModal } from '../MembrosModal';

interface CardProps {
  srcImgIcon: string;
  link: string;
  title: string;
}
//
export const CardProjeto = (Props: CardProps) => {
  const [DropDown, setDropDown] = useState(false);
  const [ModalMembro, setModalMembro] = useState(false);
  const navigate = useNavigate();
  const users = Users;
  return (
    <>
      <div
        style={{
          borderRadius: '5px',
          display: 'flex',
          width: '100%',
          minHeight: '200px',
          flexWrap: 'wrap',
          transition: '1s all',
        }}
      >
        <a
          href="/Fase"
          style={{
            textDecoration: 'none',
            color: 'white',
            flexDirection: 'column',
            width: '100%',
            display: 'grid',
            gridTemplateRows: '1.5fr 0.5fr',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          <img
            src={Props.srcImgIcon}
            alt="Incra"
            width={'100%'}
            height={'100%'}
            style={{ borderRadius: '5px 5px 0 0 ' }}
          />

          <div
            style={{
              backgroundColor: '#393E4B',
              display: 'flex',
              padding: '1em',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: '0 0 5px 5px ',
            }}
          >
            <h1 style={{ fontSize: '24px' }}>{Props.title}</h1>
            <div style={{ position: 'relative' }}>
              <button
                onClick={(event) => {
                  setDropDown(!DropDown);
                  event.preventDefault();
                }}
                style={{
                  borderRadius: '100%',
                  padding: '1em',
                  backgroundColor: 'transparent',
                  border: 'none',
                }}
              >
                <img src="DotsThreeOutlineVertical.svg" alt="Três Pontos" />
              </button>
              <div
                style={{
                  display: `${DropDown ? 'block' : 'none'}`,
                  borderRadius: '5px',
                  position: 'absolute',
                  right: '0',
                  backgroundColor: '#393E4B',
                  minWidth: '120px',
                  boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
                  color: '#fff',
                  border: 'solid 1px #4a5565',
                }}
              >
                <button
                  onClick={(event) => {
                    setModalMembro(!ModalMembro);
                    event.preventDefault();
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
                    borderBottom: 'solid 1px #4a5565',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5em' }}>
                    <p>Membros</p>{' '}
                  </div>
                </button>
                <button
                  onClick={(event) => {
                    event.preventDefault();
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
                    <p>Editar</p>{' '}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </a>
      </div>
      {ModalMembro && (
        <MembrosModal
          close={() => {
            setModalMembro(!ModalMembro);
          }}
          users={users}
        />
      )}
    </>
  );
};
// teste
