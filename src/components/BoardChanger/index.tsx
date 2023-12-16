import { Link, useParams } from 'react-router-dom';
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
            : url.search('Cataloga%C3%A7%C3%A3o') > -1
            ? 'Catalogação'
            : url.search('Digitaliza%C3%A7%C3%A3o') > -1
            ? 'Digitalização'
            : url.search('Upload') > -1
            ? 'Upload'
            : 'Arquivamento'}
        </S.Title>

        <S.Change>
          {/* RECEPÇÃO */}
          <Link to={`/Fase/${id}/Board/Recebidos`}>
            <S.IconBarra>
              {url.search('Recebidos') <= -1 && <S.LinkImgEscura src="/icon-medium/Recepção.svg" />}
              {url.search('Recebidos') > -1 && (
                <>
                  <S.LinkImg src="/icon-medium/Recepção.svg" />
                  <S.Barra color={theme.colors['red/500']}></S.Barra>
                </>
              )}
            </S.IconBarra>
          </Link>

          {/* PREPARO */}
          <Link to={`/Fase/${id}/Board/Preparo`}>
            <S.IconBarra>
              {url.search('Preparo') <= -1 && <S.LinkImgEscura src="/icon-medium/Preparo.svg" />}
              {url.search('Preparo') > -1 && (
                <>
                  <S.LinkImg src="/icon-medium/Preparo.svg" />
                  <S.Barra color={theme.colors['orange/400']}></S.Barra>
                </>
              )}
            </S.IconBarra>
          </Link>

          {/* CATALOGAÇÃO */}
          <Link to={`/Fase/${id}/Board/Catalogação`}>
            <S.IconBarra>
              {url.search('Cataloga%C3%A7%C3%A3o') <= -1 && <S.LinkImgEscura src="/icon-medium/Catalogação.svg" />}
              {url.search('Cataloga%C3%A7%C3%A3o') > -1 && (
                <>
                  <S.LinkImg src="/icon-medium/Catalogação.svg" />
                  <S.Barra color="#F3CC00"></S.Barra>
                </>
              )}
            </S.IconBarra>
          </Link>

          {/* DIGITALIZAÇÃO */}
          <Link to={`/Fase/${id}/Board/Digitalização`}>
            <S.IconBarra>
              {url.search('Digitaliza%C3%A7%C3%A3o') <= -1 && <S.LinkImgEscura src="/icon-medium/Digitalização.svg" />}
              {url.search('Digitaliza%C3%A7%C3%A3o') > -1 && (
                <>
                  <S.LinkImg src="/icon-medium/Digitalização.svg" />
                  <S.Barra color="#2D94F3"></S.Barra>
                </>
              )}
            </S.IconBarra>
          </Link>

          {/* UPLOAD */}
          <Link to={`/Fase/${id}/Board/Upload`}>
            <S.IconBarra>
              {url.search('Upload') <= -1 && <S.LinkImgEscura src="/icon-medium/Upload.svg" />}
              {url.search('Upload') > -1 && (
                <>
                  <S.LinkImg src="/icon-medium/Upload.svg" />
                  <S.Barra color={theme.colors['purple/600']}></S.Barra>
                </>
              )}
            </S.IconBarra>
          </Link>

          {/* ARQUIVAMENTO */}
          <Link to={`/Fase/${id}/Board/Arquivamento`}>
            <S.IconBarra>
              {url.search('Arquivamento') <= -1 && <S.LinkImgEscura src="/icon-medium/Arquivamento.svg" />}
              {url.search('Arquivamento') > -1 && (
                <>
                  <S.LinkImg src="/icon-medium/Arquivamento.svg" />
                  <S.Barra color={theme.colors['green/400']}></S.Barra>
                </>
              )}
            </S.IconBarra>
          </Link>
        </S.Change>
      </S.ChangeContainer>
    </>
  );
};
