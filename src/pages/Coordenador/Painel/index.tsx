import { useParams } from 'react-router-dom';
import Menu from '../../../components/Menu';
import * as S from './styles';
import MenuCoord from '../../../components/MenuCoord';
import { PainelPorFase } from '../../../components/PainelporFase';
import { PendenciaCoord } from '../../../components/PendenciasCoord';
import { ValoresGerais } from '../../../components/ValoresGerais';

const Painel = () => {
  const { id } = useParams();

  return (
    <>
      <Menu area={`/Painel/${id}`} id_projeto={id}></Menu>
      <MenuCoord />
      <S.Wrapper>
        <PainelPorFase />
        <PendenciaCoord />
        <ValoresGerais />
      </S.Wrapper>
    </>
  );
};

export default Painel;
