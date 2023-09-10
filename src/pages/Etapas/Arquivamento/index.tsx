import React from 'react';
import Board from '../../../components/Board';
import { Menu } from '../../../components/Menu';
import * as Style from '../../../global/index';
import MenuCoord from '../../../components/MenuCoord';
import FaseData from '../../../data/FaseData';
import { useParams } from 'react-router-dom';

// import { Container } from './styles';

const Arquivamento = () => {
  const { id } = useParams();
  return (
    <>
      <Menu area={`/Fase/${id}/Board/Arquivamento`} id_projeto={id}></Menu>
      <MenuCoord />
      <Style.Wrapper>
        <p>Arquivamento</p>
        <Board fase={FaseData[4]} titulo="arquivamento" />
        <Style.Footer></Style.Footer>
      </Style.Wrapper>
    </>
  );
};

export default Arquivamento;
