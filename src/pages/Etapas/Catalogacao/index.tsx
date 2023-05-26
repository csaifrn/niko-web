import Board from '../../../components/Board';
import * as Style from '../../../global/index';

// import { Container } from './styles';

const Catalogacao = () => {
  return (
    <>
      <Style.Wrapper>
        <p>Catalogação</p>
        <Board fase="catalogacao" />
        <Style.Footer></Style.Footer>
      </Style.Wrapper>
    </>
  );
};

export default Catalogacao;
