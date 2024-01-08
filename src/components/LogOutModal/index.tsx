import { useState, useEffect } from 'react';
import * as S from './style';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { SharedState } from '../../context/SharedContext';

interface SairSemSalvarModalProps {
  close: () => void;
}

export const LogOutModal = (props: SairSemSalvarModalProps) => {
  const [closing, setClosing] = useState(false);
  const { user, setUser } = SharedState();

  const { id } = useParams();

  useEffect(() => {
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

  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  // const handleDelete = () => {
  //   if (props.delete) {
  //     props.delete();
  //   }
  //   handleClose();
  // };

  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea id="modal-scaling">
          <S.ModalContent>
            <S.NameClose>
              <h2>Deseja sair do Niko? Você terá que fazer login novamente</h2>
            </S.NameClose>
            <S.Recused onClick={handleClose}>Cancelar</S.Recused>
            <S.Delete
              onClick={() => {
                handleSignOut();
                navigate('/');
              }}
            >
              Sair
            </S.Delete>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
