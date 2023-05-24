import React from 'react';
import Board from '../../../components/Board';
import { Menu } from '../../../components/Menu';
import * as Style from '../../../global/index'
import MenuCoord from '../../../components/MenuCoord';

// import { Container } from './styles';

const Digitalizacao = () => {
  return (
    <>
      <Menu area="/"></Menu>
      <MenuCoord area="/" />
      <Style.Wrapper>
        <p>Digitalização</p>
        <Board fase='digitalizacao'/>
        <Style.Footer></Style.Footer>
      </Style.Wrapper>
    </>
  )
}

export default Digitalizacao;