import { Circle, X } from '@phosphor-icons/react';
import { ReactNode, useState } from 'react';
import * as S from './styles';
import theme from '../../../global/theme';
import { DeletarModal } from '../../DeletarModal';
import { useMutation } from 'react-query';
import { DeleteBatcheSettle } from '../../../api/services/batches/patch-settle';
import toast from 'react-hot-toast';
import { Tooltip } from 'react-tooltip';

interface Props {
  idClass: string;
  idBatche: string;
  className: string;
  priority: boolean;
  refetch: () => void;
}

export const BlockClass = (props: Props) => {
  const [open, setOpen] = useState(false);
  const mutateClasses = useMutation(DeleteBatcheSettle, {
    onSuccess: () => {
      toast.success('Atualização feita 😁');
      props.refetch();
    },
  });
  return (
    <>
      <S.BlockGrayBorder>
        <S.ConteudoClassTag>
          {/* Bolinha vermelha de prioridade da classe */}
          {props.priority == true && (
            <S.PriorityIcon className="Redcircle">
              <Circle size={15} color={theme.colors['red/700']} weight="fill" />
              <Tooltip children={<p>Essa classe é prioridade</p>} anchorSelect=".Redcircle" place="bottom"></Tooltip>
            </S.PriorityIcon>
          )}

          {props.className}
        </S.ConteudoClassTag>

        {/* Botão de remover classe */}
        <S.Button
          onClick={() => {
            setOpen(!open);
          }}
        >
          <X size={14} color={theme.colors.white} />
        </S.Button>
      </S.BlockGrayBorder>

      {/* Modal de remover classe */}
      {open && (
        <DeletarModal
          deleteFunction={() => {
            mutateClasses.mutate({
              id: props.idBatche,
              class_projects_ids: [props.idClass],
            });
          }}
          title="Deseja remover essa classe?"
          close={() => setOpen(false)}
        />
      )}
    </>
  );
};
