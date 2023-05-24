import React from 'react';
import Board from '../../../components/Board';
import { Menu } from '../../../components/Menu';
import * as Style from '../../../global/index';
import MenuCoord from '../../../components/MenuCoord';

// import { Container } from './styles';

const Preparo = () => {
  return (
    <>
      <Menu area="/"></Menu>
      <MenuCoord area="/" />
      <Style.Wrapper>

        <p>Preparo</p>
        <Board etapa='digitalizacao'/>
        <Style.Footer></Style.Footer>
      </Style.Wrapper>
    </>
  )
}

export default Preparo;