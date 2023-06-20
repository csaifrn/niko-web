import Board from '../../../components/Board';
import { Menu } from '../../../components/Menu';
import * as Style from '../../../global/index';
import MenuCoord from '../../../components/MenuCoord';
import FaseData from '../../../data/FaseData';

// import { Container } from './styles';

const Catalogacao = () => {
  return (
    <>
      <Menu area="/"></Menu>
      <MenuCoord />
      <Style.Wrapper>
        <p>Catalogação</p>
        <Board fase={FaseData[1]} titulo='catalogacao' />
        <Style.Footer></Style.Footer>
      </Style.Wrapper>
    </>
  );
};

export default Catalogacao;
