import React from 'react';
import Board from '../../../components/Board';
import { Menu } from '../../../components/Menu';
import * as Style from '../../../global/index'

// import { Container } from './styles';

const Preparo = () => {
  return (
    <>
      <Style.Wrapper>
        <Menu area='/Preparo'></Menu>
        <p>Preparo</p>
        <Board />
        <Style.Footer></Style.Footer>
      </Style.Wrapper>
    </>
  )
}

export default Preparo;