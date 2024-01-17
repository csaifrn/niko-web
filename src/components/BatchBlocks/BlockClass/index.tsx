import { X } from '@phosphor-icons/react';
import { ReactNode, useState } from 'react';
import * as S from './styles';
import theme from '../../../global/theme';
import { DeletarModal } from '../../DeletarModal';
import { useMutation } from 'react-query';
import { DeleteBatcheSettle } from '../../../api/services/batches/patch-settle';
import toast from 'react-hot-toast';

interface Props {
  children: ReactNode;
  idClass: string;
  idBatche: string;
  refetch: () => void;
}

export const BlockClass = ({ children, idClass, idBatche, refetch }: Props) => {
  const [open, setOpen] = useState(false);
  const mutateClasses = useMutation(DeleteBatcheSettle, {
    onSuccess: () => {
      toast.success('Atualização feita 😁');
      refetch();
    },
  });
  return (
    <>
      <S.BlockGrayBorder>
        {children}
        <S.Button
          onClick={() => {
            setOpen(!open);
          }}
        >
          <X size={14} color={theme.colors.white} />
        </S.Button>
      </S.BlockGrayBorder>
      {open && (
        <DeletarModal
          deleteFunction={() => {
            mutateClasses.mutate({
              id: idBatche,
              settlement_project_category_ids: [idClass],
            });
          }}
          title="Deseja retirar essa classe?"
          close={() => setOpen(false)}
        />
      )}
    </>
  );
};
