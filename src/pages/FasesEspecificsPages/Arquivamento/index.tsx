import React from 'react';
import Board from '../../../components/Board';
import { Menu } from '../../../components/Menu';
import * as Style from '../../../global/index';
import MenuCoord from '../../../components/MenuCoord';
import { useParams } from 'react-router-dom';

// import { Container } from './styles';

const Arquivamento = () => {
  const { id } = useParams();
  return (
    <>
      <Menu area={`/Fases/Board/Arquivamento`} id_projeto={id}></Menu>
      <MenuCoord />
      <Style.Wrapper>
        <Board main_status={4} />
        <Style.Footer></Style.Footer>
      </Style.Wrapper>
    </>
  );
};

export default Arquivamento;
