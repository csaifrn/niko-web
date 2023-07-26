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
<<<<<<< HEAD
        <Board fase={FaseData[1]} titulo='Catalogacao' />
=======
        <Board fase={FaseData[1]} titulo="catalogacao" />
>>>>>>> 934d3edd31fc2c334874b940536226e584149920
        <Style.Footer></Style.Footer>
      </Style.Wrapper>
    </>
  );
};

export default Catalogacao;
