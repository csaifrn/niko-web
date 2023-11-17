import { useState } from 'react';
import Users from '../../data/UserData';
import { MembrosModal } from '../MembrosModal';
import { Membros } from '../../data/ProjetoData';
import { EditProjetoModal } from '../EditProjetoModal';
import * as S from './styles';

interface Projeto {
  id: string;
  url: string;
  name: string;
}

interface CardProps {
  projeto: Projeto;
}

export const CardProjeto = (Props: CardProps) => {
  const [DropDown, setDropDown] = useState(false);
  const [ModalMembro, setModalMembro] = useState(false);
  const [ModalEdit, setModalEdit] = useState(false);

  const users = Users;
  const projeto = Props.projeto;
  const membros = Membros.filter((membro) => membro.id_Projeto === projeto.id);

  return (
    <>
      <S.CardProjeto>
        <S.LinkContainer href={`/Painel/${projeto.id}`}>
          <S.DivImgProjeto>
            <S.ImgProjeto src={`${projeto.url}`} alt={projeto.name} width={'100%'} height={'150px'} />
          </S.DivImgProjeto>

          <S.DivContentProjeto>
            <h1 style={{ fontSize: '24px' }}>{projeto.name}</h1>
            <div style={{ position: 'relative' }}>
              <S.ThreeDotProjeto
                onClick={(event) => {
                  setDropDown(!DropDown);
                  event.preventDefault();
                }}
              >
                <img src="DotsThreeOutlineVertical.svg" alt="Três Pontos" />
              </S.ThreeDotProjeto>
              <S.MenuThreeDots
                style={{
                  display: `${DropDown ? 'block' : 'none'}`,
                }}
              >
                <S.ButtonMenuThree
                  onClick={(event) => {
                    setModalMembro(!ModalMembro);
                    event.preventDefault();
                  }}
                  style={{
                    borderBottom: 'solid 1px #4a5565',
                  }}
                >
                  <S.DivButtonMenuThree>
                    <p>Membros</p>{' '}
                  </S.DivButtonMenuThree>
                </S.ButtonMenuThree>
                <S.ButtonMenuThree
                  onClick={(event) => {
                    setModalEdit(!ModalEdit);
                    event.preventDefault();
                  }}
                >
                  <S.DivButtonMenuThree>
                    <p>Detalhes</p>{' '}
                  </S.DivButtonMenuThree>
                </S.ButtonMenuThree>
              </S.MenuThreeDots>
            </div>
          </S.DivContentProjeto>
        </S.LinkContainer>
      </S.CardProjeto>
      {ModalMembro && (
        <MembrosModal
          close={() => {
            setModalMembro(!ModalMembro);
          }}
          users={users}
          membros={membros}
          id_projeto={projeto.id}
          nome_projeto={projeto.name}
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
