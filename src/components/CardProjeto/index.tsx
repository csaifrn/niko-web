import React, { useState } from 'react';
import { CardContainer } from './styles';
import { useNavigate } from 'react-router-dom';
import Users from '../../data/UserData';
import { MembrosModal } from '../MembrosModal';
import { Membros, Projeto } from '../../data/ProjetoData';
import { EditProjetoModal } from '../EditProjetoModal';

interface Projeto {
  id: string;
  url: string;
  name: string;
}

interface CardProps {
  projeto: any;
}

export const CardProjeto = (Props: CardProps) => {
  const [DropDown, setDropDown] = useState(false);
  const [ModalMembro, setModalMembro] = useState(false);
  const [ModalEdit, setModalEdit] = useState(false);

  const users = Users;
  const projeto = Props.projeto[0];
  const membros = Membros.filter((membro) => membro.id_Projeto === projeto.id);
  console.log(membros);

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
          href={`/Fase/${projeto.id}`}
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
          <div style={{ display: 'flex' }}>
            <img
              src={`${projeto.url}`}
              alt={projeto.name}
              width={'100%'}
              height={'150px'}
              style={{ borderRadius: '5px 5px 0 0 ', objectFit: 'cover' }}
            />
          </div>

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
            <h1 style={{ fontSize: '24px' }}>{projeto.name}</h1>
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
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: '0.5em',
                    }}
                  >
                    <p>Membros</p>{' '}
                  </div>
                </button>
                <button
                  onClick={(event) => {
                    setModalEdit(!ModalEdit);
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
          membros={membros}
          id_projeto={projeto.id}
        />
      )}
      {ModalEdit && (
        <EditProjetoModal
          close={() => {
            setModalEdit(!ModalEdit);
          }}
          id_projeto={projeto.id}
        />
      )}
    </>
  );
};
// teste
