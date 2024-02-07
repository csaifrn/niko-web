import { useState } from 'react'; // Import startTransition
import Board from '../../../components/Board';
import MenuCoord from '../../../components/MenuCoord';
import Menu from '../../../components/Menu';
import { useParams } from 'react-router-dom';
import * as S from './styles';

const Preparo = () => {
  const { id } = useParams();

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Menu area={`/Fases/Board/Preparo`} id_projeto={id}></Menu>
      <MenuCoord />
      <S.Wrapper>
        <Board main_status={0}></Board>
      </S.Wrapper>
    </div>
  );
};

export default Preparo;
