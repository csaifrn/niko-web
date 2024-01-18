import { useState, useEffect } from 'react';
import * as S from '../AtribuirAlguemModal/style';
import { useMutation } from 'react-query';
import { QueryBatche } from '../../api/services/batches/query-batches';
import { GetResponseBatche } from '../../api/services/batches/query-batches/get.interface';

interface MyBatchesProps {
  close: () => void;
}

export const MyBatches = (props: MyBatchesProps) => {
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

  const mutateBatches = useMutation(QueryBatche, {
    onSuccess: (data: GetResponseBatche[]) => {
      console.log(data);
    },
  });

  useEffect(() => {
    mutateBatches.mutate({});
  }, []);

  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea id="modal-scaling">
          <S.ModalContent>
            <S.NameClose>
              <h2>Lotes atribuídos para mim</h2>
              <S.Exit type="button" onClick={handleClose}>
                <img src="/close.svg" alt="" height={24} width={24} />
              </S.Exit>
            </S.NameClose>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
