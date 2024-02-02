import { useState } from 'react'; // Import startTransition
import Board from '../../../components/Board';
import MenuCoord from '../../../components/MenuCoord';
import Menu from '../../../components/Menu';
import { useParams } from 'react-router-dom';
import * as S from './styles';
import { ModalCriarLote } from '../../../components/ModalCriarLote';

const Preparo = () => {
  const { id } = useParams();
  const [openCriarModal, setOpenCriarModal] = useState(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Menu area={`/Fases/Board/Preparo`} id_projeto={id}></Menu>
      <MenuCoord />
      <S.Wrapper>
        <Board main_status={0}>
          <S.Btn
            onClick={() => {
              setOpenCriarModal(!openCriarModal);
            }}
          >
            <p>Criar Lote</p>
          </S.Btn>
        </Board>
      </S.Wrapper>
      {openCriarModal && <ModalCriarLote close={() => setOpenCriarModal(!openCriarModal)} />}
    </div>
  );
};

export default Preparo;
