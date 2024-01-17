import { X } from '@phosphor-icons/react';
import { ReactNode, useState } from 'react';
import styled from 'styled-components';
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
      <BlockGrayBorder>
        {children}
        <Button
          onClick={() => {
            setOpen(!open);
          }}
        >
          <X size={14} color={theme.colors.white} />
        </Button>
      </BlockGrayBorder>
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

const BlockGrayBorder = styled.div`
  background-color: ${({ theme }) => theme.colors['gray/500']};
  border: ${({ theme }) => theme.colors['gray/300']} solid 2px;
  height: 2em;
  padding: 0.5em 0 0.5em 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border-radius: 3px;
`;

const Button = styled.button`
  transition: all 200ms;
  height: 1.5em;
  width: 2em;
  border-style: outset;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors['red/500']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['red/700']};
    transform: translateY(-5%) translateX(2%);
  }
`;
