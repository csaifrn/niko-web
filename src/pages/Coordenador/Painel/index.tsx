import { useParams } from 'react-router-dom';
import Menu from '../../../components/Menu';
import MenuCoord from '../../../components/MenuCoord';
import { PainelPorFase } from '../../../components/PainelporFase';
import { PendenciaCoord } from '../../../components/PendenciasCoord';
import { ValoresGerais } from '../../../components/ValoresGerais';
import * as S from './styles';

const Painel = () => {
  const { id } = useParams();

  return (
    <>
      <Menu area={`/Painel/${id}`} id_projeto={id}></Menu>
      <MenuCoord />
      <S.PainelArea>
        <S.DetalFasesPendencias>
          <PainelPorFase/>
          <PendenciaCoord />
        </S.DetalFasesPendencias>
        <ValoresGerais />
      </S.PainelArea>
    </>
  );
};

export default Painel;
