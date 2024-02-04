import { useState } from 'react';
import * as S from './styles';
import { MinusCircle, PencilSimple, Trash, Warning } from '@phosphor-icons/react';
import { Observation } from '../../../api/services/batches/get-batche/get.interface';
import theme from '../../../global/theme';
import { SharedState } from '../../../context/SharedContext';
import { Tooltip } from 'react-tooltip';
import { UserRole } from '../../../utils/userRole.enum';

export interface PropsObservation {
  observation: Observation;
  setObservation: (e: Observation) => void;
  setId: (e: string) => void;
  openDelete: () => void;
  openEdit: () => void;
  index: number;
}

export const BoxObservation = ({
  observation,
  openDelete,
  openEdit,
  setId,
  setObservation,
  index,
}: PropsObservation) => {
  const { user } = SharedState();
  const [obs, setObs] = useState(observation);

  const handleClickEdit = () => {
    setId(obs.id);
    setObservation(observation);
    openEdit();
  };

  const handleClickDelete = () => {
    setId(obs.id);
    setObservation(observation);
    openDelete();
  };

  return (
    <S.ObsDivBlack index={index}>
      <S.BottomContent>
        {/* mostra quem criou a observação */}
        {/* {observation.created_by.name == user?.name &&
            <p>Você</p>
          }
          {observation.created_by.name != user?.name &&
            <p>{observation.created_by.name}</p>
          } */}
        <S.ObsCreationData>
          <p>{observation.created_by.name}</p>
          <S.Data>
            Criado em{' '}
            {new Date(observation.created_at).toLocaleString('pt-br', {
              timeZone: 'America/Sao_paulo',
            })}
          </S.Data>
        </S.ObsCreationData>
      </S.BottomContent>

      <S.DivObservation style={{ display: observation.is_pending ? 'grid' : 'flex' }}>
        {observation.is_pending == true && (
          <S.DivPendenciaTooltip className="my-anchor-element">
            <Warning size={24} color="#f7df4c" weight="fill" />
            <Tooltip
              children={<p style={{ fontSize: '12px' }}>Pendência</p>}
              anchorSelect=".my-anchor-element"
              place="bottom"
            />
          </S.DivPendenciaTooltip>
        )}
        <p>{observation.observation}</p>
      </S.DivObservation>

      {/* Botões de editar e excluir observação */}
      {/* <h2>{observation.isPending}</h2> */}
      {observation.created_by.user_id === user?.sub ? (
        <S.DivButtons>
          <S.ButtonEdit onClick={handleClickEdit} className="EditarTooltip">
            <PencilSimple size={18} weight="fill" color={theme.colors['white']} />
            <Tooltip
              children={<p style={{ fontSize: '12px', fontFamily: 'Rubik' }}>Editar observação</p>}
              anchorSelect=".EditarTooltip"
              place="bottom"
            />
          </S.ButtonEdit>

          <S.ButtonDelete onClick={handleClickDelete} className="ExcluirTooltip">
            <Trash size={18} color="#f5f5f5" weight="fill" />
            <Tooltip
              children={<p style={{ fontSize: '12px', fontFamily: 'Rubik' }}>Excluir observação</p>}
              anchorSelect=".ExcluirTooltip"
              place="bottom"
            />
          </S.ButtonDelete>
        </S.DivButtons>
      ) : (
        user?.role === UserRole.MANAGER && (
          <S.DivButtons>
            <S.ButtonDelete onClick={handleClickDelete} className="ExcluirTooltip">
              <Trash size={18} color="#f5f5f5" weight="fill" />
              <Tooltip
                children={<p style={{ fontSize: '12px', fontFamily: 'Rubik' }}>Excluir observação</p>}
                anchorSelect=".ExcluirTooltip"
                place="bottom"
              />
            </S.ButtonDelete>
          </S.DivButtons>
        )
      )}
    </S.ObsDivBlack>
  );
};
