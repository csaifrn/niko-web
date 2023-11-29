import { useParams } from 'react-router-dom';
import * as S from './styles';

export const BoardChanger = () => {
  const { id } = useParams();
  const url = window.location.pathname;

  console.log(url)

  return (
    <>
      <S.ChangeContainer>
        <S.Title>
          {url.search('Recebidos') > -1
            ? 'Recepção'
            : url.search('Preparo') > -1
            ? 'Preparo'
            : url.search('Cataloga%C3%A7%C3%A3o') > -1
            ? 'Catalogação'
            : url.search('Digitaliza%C3%A7%C3%A3o') > -1
            ? 'Digitalização'
            : url.search('Upload') > -1
            ? 'Upload'
            : 'Arquivamento'}
        </S.Title>
        <S.Change>
          <S.Link href={`/Fase/${id}/Board/Recebidos`}>
            <S.LinkImg src="/icon-medium/Recepção.svg" />
            {url.search('Recebidos') > -1 && <S.Barra color="#F32D2D"></S.Barra>}
          </S.Link>
          <S.Link href={`/Fase/${id}/Board/Preparo`}>
            <S.LinkImg src="/icon-medium/Preparo.svg" />
            {url.search('Preparo') > -1 && <S.Barra color="#F3802D"></S.Barra>}
          </S.Link>
          <S.Link href={`/Fase/${id}/Board/Catalogação`}>
            <S.LinkImg src="/icon-medium/Catalogação.svg" />
            {url.search('Cataloga%C3%A7%C3%A3o') > -1 && <S.Barra color="#F3CC00"></S.Barra>}
          </S.Link>
          <S.Link href={`/Fase/${id}/Board/Digitalização`}>
            <S.LinkImg src="/icon-medium/Digitalização.svg" />
            {url.search('Digitaliza%C3%A7%C3%A3o') > -1 && <S.Barra color="#2D94F3"></S.Barra>}
          </S.Link>
          <S.Link href={`/Fase/${id}/Board/Upload`}>
            <S.LinkImg src="/icon-medium/Upload.svg" />
            {url.search('Upload') > -1 && <S.Barra color="#9C2DF3"></S.Barra>}
          </S.Link>
          <S.Link href={`/Fase/${id}/Board/Arquivamento`}>
            <S.LinkImg src="/icon-medium/Arquivamento.svg" />
            {url.search('Arquivamento') > -1 && <S.Barra color="#43DB6D"></S.Barra>}
          </S.Link>
        </S.Change>
      </S.ChangeContainer>
    </>
  );
};
