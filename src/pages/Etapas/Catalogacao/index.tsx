import React from 'react';
import Board from '../../../components/Board';
import Lote from '../../../components/Lote';
import { Menu } from '../../../components/Menu';
import * as Style from '../../../global/index'

// import { Container } from './styles';

const Catalogacao = () => {
  return (
    <>
      <Style.Wrapper>
        <p>Catalogação</p>
        <Board />
        <Style.Footer></Style.Footer>
      </Style.Wrapper>
    </>
  )
}

export default Catalogacao;