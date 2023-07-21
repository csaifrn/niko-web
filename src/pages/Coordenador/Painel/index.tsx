import { useParams } from 'react-router-dom';

import Menu from '../../../components/Menu';

import * as S from './styles';

import MenuCoord from '../../../components/MenuCoord';
import { PainelPorFase } from '../../../components/PainelporFase';
import { PendenciaCoord } from '../../../components/PendenciasCoord';

const Painel = () => {
  const { id } = useParams();

  return (
    <S.Wrapper>
      <Menu area={`/Painel/${id}`}></Menu>
      <MenuCoord />
      <PainelPorFase />
      <PendenciaCoord />
    </S.Wrapper>
  );
};

export default Painel;
