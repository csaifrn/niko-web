import React from 'react';
import Board from '../../../components/Board';
import { Menu } from '../../../components/Menu';
import * as Style from '../../../global/index'

// import { Container } from './styles';

const Digitalizacao = () => {
  return (
    <>
      <Style.Wrapper>
        <Menu area='/Digitalizacao'></Menu>
        <p>Digitalização</p>
        <Board etapa='digitalizacao'/>
        <Style.Footer></Style.Footer>
      </Style.Wrapper>
    </>
  )
}

export default Digitalizacao;