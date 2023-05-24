import React from 'react';
import Board from '../../../components/Board';
import Lote from '../../../components/Lote';
import { Menu } from '../../../components/Menu';
import * as Style from '../../../global/index'
import MenuCoord from '../../../components/MenuCoord';

// import { Container } from './styles';

const Catalogacao = () => {
  return (
    <>
      <Menu area="/"></Menu>
      <MenuCoord area="/" />
      <Style.Wrapper>
        
        <p>Catalogação</p>
        <Board etapa='catalogacao'/>
        <Style.Footer></Style.Footer>
      </Style.Wrapper>
    </>
  )
}

export default Catalogacao;