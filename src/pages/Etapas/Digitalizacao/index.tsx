import Board from '../../../components/Board';
import { Menu } from '../../../components/Menu';
import * as Style from '../../../global/index';
import MenuCoord from '../../../components/MenuCoord';
import FaseData from '../../../data/FaseData';
import { useParams } from 'react-router-dom';

// import { Container } from './styles';

const Digitalizacao = () => {
  const { id } = useParams();
  return (
    <>
      <Menu area={`/Fase/${id}/Board/Digitalizacao`} id_projeto={id}></Menu>
      <MenuCoord />
      <Style.Wrapper>
        <p>Digitalização</p>
        <Board fase={FaseData[2]} titulo='Digitalizacao'/>
        <Style.Footer></Style.Footer>
      </Style.Wrapper>
    </>
  );
};

export default Digitalizacao;
