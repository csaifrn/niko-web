import React from 'react';
import { Menu } from '../../../components/Menu';
import * as Style from '../../../global/index'

// import { Container } from './styles';

const Arquivamento = () => {
  return(
    <>
    <Style.Wrapper>
      <Menu area='/Arquivamento'></Menu>
      <p>Arquivamento</p>
      <Style.Footer></Style.Footer>
    </Style.Wrapper>
    </>
  )
}

export default Arquivamento;