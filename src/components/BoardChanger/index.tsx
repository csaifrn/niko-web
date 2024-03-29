import { Link, useParams } from 'react-router-dom';
import * as S from './styles';
import theme from '../../global/theme';
import { Tooltip } from 'react-tooltip';

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

          {url.search('Recebidos') <= -1 && (
            <Link to={`/Fases/Board/Recebidos`} className="RecebidosTooltip">
              <S.LinkImgEscura src="/icon-medium/Recepção.svg" />
              <Tooltip
                children={<p style={{ fontSize: '12px', fontFamily: 'Rubik' }}>Recepção</p>}
                anchorSelect=".RecebidosTooltip"
                place="bottom"
              />
            </Link>
          )}

          {url.search('Recebidos') > -1 && (
            <Link to={`/Fases/Board/Recebidos`} className="RecebidosTooltip">
              <S.LinkImg src="/icon-medium/Recepção.svg" />
              <S.Barra color={theme.colors['red/500']}></S.Barra>
            </Link>
          )}

          {/* PREPARO(não selecionado)*/}
          {url.search('Preparo') <= -1 && (
            <Link to={`/Fases/Board/Preparo`} className="PreparoTooltip">
              <S.LinkImgEscura src="/icon-medium/Preparo.svg" />
              <Tooltip
                children={<p style={{ fontSize: '12px', fontFamily: 'Rubik' }}>Preparo</p>}
                anchorSelect=".PreparoTooltip"
                place="bottom"
              />
            </Link>
          )}

          {/* PREPARO(selecionado)*/}
          {url.search('Preparo') > -1 && (
            <S.IconBarra to={`/Fases/Board/Preparo`}>
              <S.LinkImg src="/icon-medium/Preparo.svg" />
              <S.Barra color={theme.colors['orange/400']}></S.Barra>
            </S.IconBarra>
          )}

          {/* CATALOGAÇÃO(não selecionado)*/}
          {url.search('Cataloga%C3%A7%C3%A3o') <= -1 && (
            <Link to={`/Fases/Board/Catalogação`} className="CatalogaçãoTooltip">
              <S.LinkImgEscura src="/icon-medium/Catalogação.svg" />
              <Tooltip
                children={<p style={{ fontSize: '12px', fontFamily: 'Rubik' }}>Catalogação</p>}
                anchorSelect=".CatalogaçãoTooltip"
                place="bottom"
              />
            </Link>
          )}

          {/* CATALOGAÇÃO(selecionado)*/}
          {url.search('Cataloga%C3%A7%C3%A3o') > -1 && (
            <S.IconBarra to={`/Fases/Board/Catalogação`}>
              <S.LinkImg src="/icon-medium/Catalogação.svg" />
              <S.Barra color="#F3CC00"></S.Barra>
            </S.IconBarra>
          )}

          {/* DIGITALIZAÇÃO(não selecionado)*/}
          {url.search('Digitaliza%C3%A7%C3%A3o') <= -1 && (
            <Link to={`/Fases/Board/Digitalização`} className="DigitalizaçãoTooltip">
              <S.LinkImgEscura src="/icon-medium/Digitalização.svg" />
              <Tooltip
                children={<p style={{ fontSize: '12px', fontFamily: 'Rubik' }}>Digitalização</p>}
                anchorSelect=".DigitalizaçãoTooltip"
                place="bottom"
              />
            </Link>
          )}

          {/* DIGITALIZAÇÃO(selecionado)*/}
          {url.search('Digitaliza%C3%A7%C3%A3o') > -1 && (
            <S.IconBarra to={`/Fases/Board/Digitalização`}>
              <S.LinkImg src="/icon-medium/Digitalização.svg" />
              <S.Barra color="#2D94F3"></S.Barra>
            </S.IconBarra>
          )}

          {/* UPLOAD(não selecionado)*/}
          {url.search('Upload') <= -1 && (
            <Link to={`/Fases/Board/Upload`} className="UploadTooltip">
              <S.LinkImgEscura src="/icon-medium/Upload.svg" />
              <Tooltip
                children={<p style={{ fontSize: '12px', fontFamily: 'Rubik' }}>Upload</p>}
                anchorSelect=".UploadTooltip"
                place="bottom"
              />
            </Link>
          )}

          {/* UPLOAD(selecionado)*/}
          {url.search('Upload') > -1 && (
            <S.IconBarra to={`/Fases/Board/Upload`}>
              <S.LinkImg src="/icon-medium/Upload.svg" />
              <S.Barra color={theme.colors['purple/600']}></S.Barra>
            </S.IconBarra>
          )}

          {/* ARQUIVAMENTO(não selecionado)*/}
          {url.search('Arquivamento') <= -1 && (
            <Link to={`/Fases/Board/Arquivamento`} className="ArquivamentoTooltip">
              <S.LinkImgEscura src="/icon-medium/Arquivamento.svg" />
              <Tooltip
                children={<p style={{ fontSize: '12px', fontFamily: 'Rubik' }}>Arquivamento</p>}
                anchorSelect=".ArquivamentoTooltip"
                place="bottom"
              />
            </Link>
          )}

          {/* ARQUIVAMENTO(selecionado)*/}
          {url.search('Arquivamento') > -1 && (
            <S.IconBarra to={`/Fases/Board/Arquivamento`}>
              <S.LinkImg src="/icon-medium/Arquivamento.svg" />
              <S.Barra color={theme.colors['green/400']}></S.Barra>
            </S.IconBarra>
          )}
        </S.Change>
      </S.ChangeContainer>
    </>
  );
};
