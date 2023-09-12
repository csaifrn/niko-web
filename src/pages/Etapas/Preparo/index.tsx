import React, { useState } from 'react';
import Board from '../../../components/Board';
import * as Style from '../../../global/index';
import MenuCoord from '../../../components/MenuCoord';
import Menu from '../../../components/Menu';
import FaseData from '../../../data/FaseData';
import { useParams } from 'react-router-dom';
import * as S from './styles';
import { ModalCriarLote } from '../../../components/ModalCrairLote';
import { Toaster } from 'react-hot-toast';

// import { Container } from './styles';

const Preparo = () => {
  const { id } = useParams();
  const [openCriarModal, setOpenCriarModal] = useState(false);

  return (
    <>
      <Menu area={`/Fase/${id}/Board/Preparo`} id_projeto={id}></Menu>
      <MenuCoord />
      <S.Wrapper>
        {true && (
          <S.Btn
            onClick={() => {
              setOpenCriarModal(!openCriarModal);
            }}
          >
            <p>Criar Lote</p>
          </S.Btn>
        )}
        <Board fase={FaseData[0]} titulo="preparo" />
        <Style.Footer></Style.Footer>
      </S.Wrapper>
      {openCriarModal && <ModalCriarLote close={() => setOpenCriarModal(!openCriarModal)} />}
    </>
  );
};

export default Preparo;
