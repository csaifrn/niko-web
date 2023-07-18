import { useEffect, useState } from 'react';
import * as S from './styles';
import { CheckCircle } from '@phosphor-icons/react';
import theme from '../../global/theme';

interface props {
  email: string;
  close: () => void;
}

export const EmailRecuperadoModal = ({ email = '@gmail.com', close }: props) => {
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
      close();
    }, 300);
  };
  return (
    <S.ModalBackdrop>
      <S.ModalArea id="modal-scaling">
        <S.TextDiv>
          <CheckCircle size={64} color={theme.colors['green/400']} />
          <S.TituloModal>E-mail Enviado</S.TituloModal>
          <S.TextModal>
            Enviamos um email para {email} com um link para você poder entrar novamente da sua conta
          </S.TextModal>
        </S.TextDiv>

        <S.Ok onClick={handleClose}>Ok</S.Ok>
      </S.ModalArea>
    </S.ModalBackdrop>
  );
};
