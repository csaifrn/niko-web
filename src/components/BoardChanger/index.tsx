import { useParams } from 'react-router-dom';
import * as S from './styles';
import theme from '../../global/theme';

export const BoardChanger = () => {
  const { id } = useParams();
  const url = window.location.pathname;

  return (
    <>
      <S.ChangeContainer>
        <S.Title>
          {url.search('Recebidos') > -1
            ? 'Recepção'
            : url.search('Preparo') > -1
            ? 'Preparo'
            : url.search('Catalogacao') > -1
            ? 'Catalogação'
            : url.search('Digitalizacao') > -1
            ? 'Digitalização'
            : url.search('Upload') > -1
            ? 'Upload'
            : 'Arquivamento'}
        </S.Title>
        <S.Change>
          <S.Link href={`/Fase/${id}/Board/Recebidos`}>
            <S.LinkImg src="/icon-medium/Recepção.svg" />
            {url.search('Recebidos') > -1 && <S.Barra color={theme.colors['red/500']}></S.Barra>}
          </S.Link>
          <S.Link href={`/Fase/${id}/Board/Preparo`}>
            <S.LinkImg src="/icon-medium/Preparo.svg" />
            {url.search('Preparo') > -1 && <S.Barra color={theme.colors['orange/400']}></S.Barra>}
          </S.Link>
          <S.Link href={`/Fase/${id}/Board/Catalogacao`}>
            <S.LinkImg src="/icon-medium/Catalogação.svg" />
            {url.search('Catalogacao') > -1 && <S.Barra color={theme.colors['yellow/500']}></S.Barra>}
          </S.Link>
          <S.Link href={`/Fase/${id}/Board/Digitalizacao`}>
            <S.LinkImg src="/icon-medium/Digitalização.svg" />
            {url.search('Digitalizacao') > -1 && <S.Barra color={theme.colors['blue/400']}></S.Barra>}
          </S.Link>
          <S.Link href={`/Fase/${id}/Board/Upload`}>
            <S.LinkImg src="/icon-medium/Upload.svg" />
            {url.search('Upload') > -1 && <S.Barra color={theme.colors['purple/600']}></S.Barra>}
          </S.Link>
          <S.Link href={`/Fase/${id}/Board/Arquivamento`}>
            <S.LinkImg src="/icon-medium/Arquivamento.svg" />
            {url.search('Arquivamento') > -1 && <S.Barra color={theme.colors['green/400']}></S.Barra>}
          </S.Link>
        </S.Change>
      </S.ChangeContainer>
    </>
  );
};
