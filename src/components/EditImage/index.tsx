import { Camera, Check, X } from '@phosphor-icons/react';
import { useState, ChangeEvent, FormEvent, useRef, useEffect } from 'react';
import * as S from './styles';
import theme from '../../global/theme';
import { Photo } from '../../api/services/users/me/me.interface';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { PostPhoto } from '../../api/services/users/photo/post-photo';
import { useMe } from '../../hooks/useMe';

interface EditImageProps {
  title: string;
  close: () => void;
  photo: Photo | undefined;
}

export const EditImage = (props: EditImageProps) => {
  const { refetch } = useMe();
  const [url, setUrl] = useState<string | undefined>(props.photo?.url);
  const [file, setFile] = useState<File>();
  const [closing, setClosing] = useState(false);

  const mutatePhoto = useMutation(PostPhoto, {
    onSuccess: () => {
      toast.success('Avatar adicionado!');
      refetch();
      handleClose();
    },
  });

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

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && e.target.files[0].size > 5000000) {
      toast.error('Arquivo maior que 5 mb, por favor insira um menor!');
    } else if (e.target.value && e.target.files) {
      setFile(e.target.files[0]);
      setUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append('photo', new Blob([file]));

      mutatePhoto.mutate({
        formData,
      });
    } else {
      toast.error('Avartar ja registrado!');
    }
  };

  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea id="modal-scaling">
          <S.ModalContent id="modal-content">
            <S.Title>{props.title}</S.Title>
            <form onSubmit={onSubmit}>
              <S.Label htmlFor="imagem">
                <S.LabelHover>
                  <Camera size={32} color={theme.colors.white} />
                </S.LabelHover>
                {url != undefined && (
                  <S.ImgAvatar
                    src={url}
                    style={{
                      borderRadius: '100%',
                      padding: '8px',
                      width: '256px',
                      height: '256px',
                      objectFit: 'cover',
                    }}
                  />
                )}
                {url === '' && <img src="Img.svg" alt="Imagem" height={32} width={32} />}
              </S.Label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                id="imagem"
                size={5}
                style={{ display: 'none' }}
                onChange={(e) => handleFile(e)}
              />
              <S.ButtonDiv>
                <S.ButtonX type="button" onClick={handleClose}>
                  Cancelar
                </S.ButtonX>
                <S.ButtonCheck type="submit">
                  Adicionar Imagem
                  <Check size={18} />
                </S.ButtonCheck>
              </S.ButtonDiv>
            </form>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
