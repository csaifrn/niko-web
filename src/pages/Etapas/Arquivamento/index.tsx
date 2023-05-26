import React from 'react';
import Board from '../../../components/Board';
import * as Style from '../../../global/index';

// import { Container } from './styles';

const Arquivamento = () => {
  return (
    <>
      <Style.Wrapper>
        <p>Arquivamento</p>
        <Board fase="arquivamento" />
        <Style.Footer></Style.Footer>
      </Style.Wrapper>
    </>
  );
};

export default Arquivamento;
