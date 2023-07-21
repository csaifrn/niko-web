import Board from '../../../components/Board';
import { Menu } from '../../../components/Menu';
import * as Style from '../../../global/index';
import MenuCoord from '../../../components/MenuCoord';
import FaseData from '../../../data/FaseData';
import { useParams } from 'react-router-dom';

// import { Container } from './styles';

const Catalogacao = () => {
  let { id } = useParams();
  return (
    <>
      <Menu area={`/Fase/${id}/Board/Catalogacao`} id_projeto={id}></Menu>
      <MenuCoord />
      <Style.Wrapper>
        <p>Catalogação</p>
        <Board fase={FaseData[1]} titulo='Catalogacao' />
        <Style.Footer></Style.Footer>
      </Style.Wrapper>
    </>
  );
};

export default Catalogacao;
