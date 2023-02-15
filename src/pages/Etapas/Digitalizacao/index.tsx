import React from 'react';
import { Menu } from '../../../components/Menu';
import * as Style from '../../../global/index'

// import { Container } from './styles';

const Digitalizacao = () => {
  return(
    <>
    <Style.Wrapper>
      <Menu area='/Digitalizacao'></Menu>
      <p>Digitalização</p>
      <Style.Footer></Style.Footer>
    </Style.Wrapper>
    </>
  )
}

export default Digitalizacao;