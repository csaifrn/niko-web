import React from 'react';
import { Menu } from '../../../components/Menu';
import * as Style from '../../../global/index'

// import { Container } from './styles';

const Recebidos = () => {
  return (
    <>
      <Style.Wrapper>
        <Menu area='/Recebidos'></Menu>
        <p>Recebidos</p>
        <Style.Footer></Style.Footer>
      </Style.Wrapper>
    </>
  )
}

export default Recebidos;