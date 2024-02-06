import { useParams } from 'react-router-dom';
import Menu from '../../../components/Menu';
import MenuCoord from '../../../components/MenuCoord';
import { PainelPorFase } from '../../../components/PainelporFase';
import { PendenciaCoord } from '../../../components/PendenciasCoord';
import * as S from './styles';

const Painel = () => {
  const { id } = useParams();

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Menu area={`/Painel`} id_projeto={id}></Menu>
      <MenuCoord />
      <S.PainelArea>
        <PainelPorFase />
        {/* <PendenciaCoord />
        <ValoresGerais /> */}
      </S.PainelArea>
    </div>
  );
};

export default Painel;
