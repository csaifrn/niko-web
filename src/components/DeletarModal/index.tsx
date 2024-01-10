import { useState, useEffect } from 'react';
import * as S from './style';
import { DeleteCategory } from '../../api/services/categoria/delete-category';
import { useMutation, useQueryClient } from 'react-query';
import { ApiError } from '../../api/services/authentication/signIn/signIn.interface';
import toast from 'react-hot-toast';

interface DeletarModalProps {
  id?: string;
  title: string;
  close: () => void;
  deleteFunction?: () => void;
}

export const DeletarModal = (props: DeletarModalProps) => {
  const [closing, setClosing] = useState(false);
  useEffect(() => {
    // Ao renderizar o modal, aplicar um escalonamento gradual para exibi-lo
    const timer = setTimeout(() => {
      const modal = document.getElementById('modal-scaling');
      if (closing === false && modal) {
        modal.style.transform = 'scale(1)';
      } else if (modal && closing) {
        modal.style.transform = 'scale(0)';
      }
    }, 10);
    return () => clearTimeout(timer);
  }, [closing]);

  const handleClose = () => {
    if (props.deleteFunction) {
      props.deleteFunction();
    }
    setClosing(true);
    setTimeout(() => {
      props.close();
    }, 300);
  };

  const close = () => {
    setClosing(true);
    setTimeout(() => {
      props.close();
    }, 300);
  };

  const queryClient = useQueryClient();

  const DeleteClass = useMutation(DeleteCategory, {
    onSuccess: () => {
      handleClose();
      toast.success('Classe excluída com sucesso!');
      console.log('Classe excluída com sucesso!');
      queryClient.invalidateQueries('categories');
    },
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
  });

  const ExcluirClasse = () => {
    DeleteClass.mutate({
      id: props.id,
    });
  };

  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea id="modal-scaling">
          <S.ModalContent>
            <S.NameClose>
              <h2>{props.title}</h2>
            </S.NameClose>
            <S.Recused onClick={close}>Cancelar</S.Recused>
            <S.Delete onClick={ExcluirClasse}>Excluir</S.Delete>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
