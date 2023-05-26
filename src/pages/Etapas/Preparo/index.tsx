import React from 'react';
import Board from '../../../components/Board';
import * as Style from '../../../global/index';
import MenuCoord from '../../../components/MenuCoord';
import Menu from '../../../components/Menu';

// import { Container } from './styles';

const Preparo = () => {
  return (
    <>
      <Menu area="/"></Menu>
      <MenuCoord />
      <Style.Wrapper>
        <p>Preparo</p>
        <Board fase="preparo" />
        <Style.Footer></Style.Footer>
      </Style.Wrapper>
    </>
  );
};

export default Preparo;
