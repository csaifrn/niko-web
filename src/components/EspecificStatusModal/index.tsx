import { useContext, useEffect, useState } from 'react';
import * as S from './styles';
import { useParams } from 'react-router-dom';
import { GetResponseBatche } from '../../api/services/batches/get-batche/get.interface';
import { Mutation, useMutation } from 'react-query';
import { PatchBatcheSpecifStatus } from '../../api/services/batches/patch-status-specific';
import toast from 'react-hot-toast';
import { KabanContext } from '../Board';

interface EspecifModalProps {
  close: () => void;
  batche: GetResponseBatche;
  title: string;
  button: string;
}

export const EspecifcModal = (props: EspecifModalProps) => {
  const { id } = useParams();
  const kanban = useContext(KabanContext);

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

  const mutateEspecific = useMutation(PatchBatcheSpecifStatus, {
    onSuccess: () => {
      toast.success('Status atualizado!');
      if (props.batche.specific_status + 1 === 1) {
        kanban?.setBatchesDispo((dispo) => dispo.filter((d) => d.id !== props.batche.id));
        kanban?.setBatchesAnda((anda) => [...anda, props.batche]);
      } else if (props.batche.specific_status + 1 === 2) {
        kanban?.setBatchesAnda((anda) => anda.filter((a) => a.id !== props.batche.id));
        kanban?.setBatchesConc((conc) => [...conc, props.batche]);
      } else {
        console.log('Erro', props.batche.specific_status + 1 === 2);
      }
    },
  });

  const handlePegar = () => {
    mutateEspecific.mutate({
      specific_status: props.batche.specific_status + 1,
      id: props.batche.id,
    });
    handleClose();
  };

  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea id="modal-scaling">
          <S.ModalContent>
            <S.NameClose>
              <S.Titulo> {props.title} </S.Titulo>
            </S.NameClose>
            <S.RecusedAvancar>
              <S.Recused onClick={handleClose}>
                <S.Texto>Não, não quero.</S.Texto>
              </S.Recused>
              <S.Avancar onClick={handlePegar}>
                <S.IconeAvancar src="/avancar.svg"></S.IconeAvancar>
                <S.Texto style={{ color: '#FFFFFF' }}>{props.button}</S.Texto>
              </S.Avancar>
            </S.RecusedAvancar>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
