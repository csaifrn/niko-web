import Board from '../../../components/Board';
import { Menu } from '../../../components/Menu';
import * as Style from '../../../global/index';
import MenuCoord from '../../../components/MenuCoord';
import { useParams } from 'react-router-dom';

// import { Container } from './styles';

const Catalogacao = () => {
  const { id } = useParams();
  return (
    <>
      <Menu area={`/Fase/${id}/Board/Catalogacao`} id_projeto={id}></Menu>
      <MenuCoord />
      <Style.Wrapper>
        <Board main_status={1} />
        <Style.Footer></Style.Footer>
      </Style.Wrapper>
    </>
  );
};

export default Catalogacao;
