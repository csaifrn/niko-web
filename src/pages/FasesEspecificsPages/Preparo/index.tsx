import { useState } from 'react'; // Import startTransition
import Board from '../../../components/Board';
import MenuCoord from '../../../components/MenuCoord';
import Menu from '../../../components/Menu';
import { useParams } from 'react-router-dom';
import * as S from './styles';
import theme from '../../../global/theme';
import Tour from 'reactour';
import { CaretDoubleRight } from 'phosphor-react';

const Preparo = () => {
  const { id } = useParams();
  const [isOpen, onRequestClose] = useState(true);
  const state = {
    steps: [
      {
        content: 'Está será sua paginá principal de trabalho! vamos conhecer?',
      },
      {
        selector: '.first-step',
        content: 'Novo Lote: Crie um novo lote com um título específico com apenas um clique.',
      },
      {
        selector: '.second-step',
        content: () => (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
            Kanban: Local onde você pode iniciar processos como o "preparo" ou "digitalização" e observar o atual status
            dele. ( disponível, em andamento ou concluído )
            <div style={{ display: 'flex', gap: '1em' }}>
              {' '}
              <S.ButtonJump>Continuar em lote!</S.ButtonJump>
              <S.ButtonJump>
                Pular
                <CaretDoubleRight size={14} />
              </S.ButtonJump>
            </div>
          </div>
        ),
      },
    ],
  };

  return (
    <>
      <Tour
        steps={state.steps}
        closeWithMask={false}
        isOpen={isOpen}
        onRequestClose={() => onRequestClose(false)}
        accentColor={theme.colors['orange/500']}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Menu area={`/Fases/Board/Preparo`} id_projeto={id}></Menu>
        <MenuCoord />
        <S.Wrapper>
          <Board main_status={0}></Board>
        </S.Wrapper>
      </div>
    </>
  );
};

export default Preparo;
