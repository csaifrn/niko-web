import { Main, FasePage, TitleFase, CardFaseMaisTitulo } from './styles';
import { CardFase } from '../../components/Card';
import MenuCoord from '../../components/MenuCoord';
import Menu from '../../components/Menu';
import { Link, useParams } from 'react-router-dom';
import theme from '../../global/theme';
import Tour from 'reactour';
import { useState } from 'react';

const Home = () => {
  const { id } = useParams();
  const [isOpen, onRequestClose] = useState(true);
  const state = {
    steps: [
      {
        selector: '.my-first-step',
        content:
          'Explore as fases: Este botão leva você para a página onde pode acessar os lotes de uma fase especifica. Clique para conhecer esta fase.',
      },
    ],
  };
  return (
    <>
      <Tour
        steps={state.steps}
        isOpen={isOpen}
        onRequestClose={() => onRequestClose(false)}
        accentColor={theme.colors['orange/500']}
      />
      <FasePage>
        <Menu area={`/Fase`} id_projeto={id}></Menu>

        <MenuCoord />
        <Main>
          {/* RECEPÇÃO */}
          <CardFaseMaisTitulo className="CardRecepcaoTooltip">
            <TitleFase>Recepção</TitleFase>
            <Link to={`Board/Recebidos`} style={{ textDecoration: 'none' }}>
              <CardFase fase={-1} color={theme.colors['red/300']} srcImgIcon="/IconsFolder.svg" />
            </Link>
          </CardFaseMaisTitulo>

          {/* PREPARO */}
          <CardFaseMaisTitulo className="my-first-step">
            <TitleFase>Preparo</TitleFase>
            <Link to={`Board/Preparo`} style={{ textDecoration: 'none' }}>
              <CardFase
                fase={0}
                //link={`Board/Preparo`}
                color={theme.colors['orange/400']}
                srcImgIcon="/IconsClean.svg"
              />
            </Link>
          </CardFaseMaisTitulo>

          {/* CATALOGAÇÃO */}
          <CardFaseMaisTitulo style={{ height: '100%' }}>
            <TitleFase>Catalogação</TitleFase>
            <Link to={`Board/Catalogação`} style={{ textDecoration: 'none' }}>
              <CardFase
                fase={1}
                //link={`Board/Catalogação`}
                color={theme.colors['yellow/500']}
                srcImgIcon="/IconsBookmark.svg"
              />
            </Link>
          </CardFaseMaisTitulo>

          {/* DIGITALIZAÇÃO */}
          <CardFaseMaisTitulo>
            <TitleFase>Digitalização</TitleFase>
            <Link to={`Board/Digitalização`} style={{ textDecoration: 'none' }}>
              <CardFase
                fase={2}
                //link={`Board/Digitalização`}
                color={theme.colors['blue/400']}
                srcImgIcon="/IconsScanner.svg"
              />
            </Link>
          </CardFaseMaisTitulo>

          {/* UPLOAD */}
          <CardFaseMaisTitulo>
            <TitleFase>Upload</TitleFase>
            <Link to={`Board/Upload`} style={{ textDecoration: 'none' }}>
              <CardFase
                fase={3}
                //link={`Board/Upload`}
                color={theme.colors['purple/600']}
                srcImgIcon="/IconsUpload.svg"
              />
            </Link>
          </CardFaseMaisTitulo>

          {/* ARQUIVAMENTO */}
          <CardFaseMaisTitulo>
            <TitleFase>Arquivamento</TitleFase>
            <Link to={`Board/Arquivamento`} style={{ textDecoration: 'none' }}>
              <CardFase
                fase={4}
                //link={`Board/Arquivamento`}
                color={theme.colors['green/400']}
                srcImgIcon="/IconsArquivamento.svg"
              />
            </Link>
          </CardFaseMaisTitulo>
        </Main>
      </FasePage>
    </>
  );
};

export default Home;
