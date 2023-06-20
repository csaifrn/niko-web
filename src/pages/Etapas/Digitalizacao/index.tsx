import Board from '../../../components/Board';
import { Menu } from '../../../components/Menu';
import * as Style from '../../../global/index';
import MenuCoord from '../../../components/MenuCoord';
import FaseData from '../../../data/FaseData';

// import { Container } from './styles';

const Digitalizacao = () => {
  return (
    <>
      <Menu area="/"></Menu>
      <MenuCoord />
      <Style.Wrapper>
        <p>Digitalização</p>
        <Board fase={FaseData[2]} titulo='digitalizacao' />
        <Style.Footer></Style.Footer>
      </Style.Wrapper>
    </>
  );
};

export default Digitalizacao;
