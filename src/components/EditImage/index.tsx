import { Check, X } from '@phosphor-icons/react';
import { useState, ChangeEvent } from 'react';
import * as S from './styles';
import theme from '../../global/theme';

interface EditImageProps {
  title: string;
  close: () => void;
  url: string;
}

export const EditImage = (props: EditImageProps) => {
  const [url, setUrl] = useState<string>(props.url);
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [file, setFile] = useState<File>();

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      setUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log('Mudar imagem');
  };
  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea>
          <S.ModalContent>
            <S.Title>{props.title}</S.Title>
            <form onSubmit={onSubmit}>
              <label
                htmlFor="imagem"
                style={{
                  display: 'flex',
                  width: '200px',
                  height: '200px',
                  border: `dashed 1px ${theme.colors.white}`,
                  borderRadius: '5px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(57, 62, 75, 0.5)',
                  overflow: 'hidden',
                }}
              >
                {url != '' && (
                  <img
                    src={url}
                    alt=""
                    style={{ objectFit: 'cover', width: '100%', height: '150px', filter: 'brightness(50%)' }}
                  />
                )}
                {url === '' && <img src="Img.svg" alt="Imagem" height={32} width={32} />}
              </label>
              <input
                type="file"
                accept="image/*"
                id="imagem"
                style={{ display: 'none' }}
                onChange={(e) => handleFile(e)}
              />
              <S.ButtonDiv>
                <S.ButtonX type="button" onClick={() => props.close()}>
                  <X size={18} />
                </S.ButtonX>
                <S.ButtonCheck type="submit">
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
