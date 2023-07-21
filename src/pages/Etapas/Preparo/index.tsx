import React from 'react';
import Board from '../../../components/Board';
import * as Style from '../../../global/index';
import MenuCoord from '../../../components/MenuCoord';
import Menu from '../../../components/Menu';
import FaseData from '../../../data/FaseData';
import { useParams } from 'react-router-dom';

// import { Container } from './styles';

const Preparo = () => {
  let { id } = useParams();
  return (
    <>
      <Menu area={`/Fase/${id}/Board/Preparo`} id_projeto={id}></Menu>
      <MenuCoord />
      <Style.Wrapper>
        <p>Preparo</p>
        <Board fase={FaseData[0]} titulo="preparo" />
        <Style.Footer></Style.Footer>
      </Style.Wrapper>
    </>
  );
};

export default Preparo;
