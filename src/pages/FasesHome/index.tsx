import { Main, FasePage, CardFaseMaisTooltip, TitleFase } from './styles';
import { CardFase } from '../../components/Card';
import MenuCoord from '../../components/MenuCoord';
import Menu from '../../components/Menu';
import { Link, useParams } from 'react-router-dom';
import theme from '../../global/theme';
import { Tooltip } from 'react-tooltip';

const Home = () => {
  const { id } = useParams();

  return (
    <FasePage>
      <Menu area={`/Fase/${id}`} id_projeto={id}></Menu>
      <MenuCoord />
      <Main>
        {/* <CardFaseMaisTooltip className="CardRecepcaoTooltip">
          <Link to={`Board/Recebidos`} style={{ textDecoration: 'none' }}>
            <CardFase
              fase={-1}
              //link={`${id}/Board/Recebidos`}
              color={theme.colors['red/300']}
              srcImgIcon="/IconsFolder.svg"
            />
          </Link>

          <Tooltip
            children={<p style={{ fontSize: '12px', fontFamily: 'Rubik' }}>Recepção</p>}
            anchorSelect=".CardRecepcaoTooltip"
            place="top"
          />
        </CardFaseMaisTooltip> */}

        <CardFaseMaisTooltip>
          <TitleFase>Preparo</TitleFase>
          <Link to={`Board/Preparo`} style={{ textDecoration: 'none' }}>
            <CardFase
              fase={0}
              //link={`${id}/Board/Preparo`}
              color={theme.colors['orange/400']}
              srcImgIcon="/IconsClean.svg"
            />
          </Link>
          {/* <Tooltip
            children={<p style={{ fontSize: '12px', fontFamily: 'Rubik' }}>Preparo</p>}
            anchorSelect=".CardPreparoTooltip"
            place="top"
          /> */}
        </CardFaseMaisTooltip>

        <CardFaseMaisTooltip style={{ height: '100%' }}>
          <TitleFase>Catalogação</TitleFase>
          <Link to={`Board/Catalogação`} style={{ textDecoration: 'none' }}>
            <CardFase
              fase={1}
              //link={`${id}/Board/Catalogação`}
              color={theme.colors['yellow/500']}
              srcImgIcon="/IconsBookmark.svg"
            />
          </Link>
        </CardFaseMaisTooltip>

        <CardFaseMaisTooltip>
          <TitleFase>Digitalização</TitleFase>
          <Link to={`Board/Digitalização`} style={{ textDecoration: 'none' }}>
            <CardFase
              fase={2}
              //link={`${id}/Board/Digitalização`}
              color={theme.colors['blue/400']}
              srcImgIcon="/IconsScanner.svg"
            />
          </Link>
        </CardFaseMaisTooltip>

        <CardFaseMaisTooltip>
          <TitleFase>Upload</TitleFase>
          <Link to={`Board/Upload`} style={{ textDecoration: 'none' }}>
            <CardFase
              fase={3}
              //link={`${id}/Board/Upload`}
              color={theme.colors['purple/600']}
              srcImgIcon="/IconsUpload.svg"
            />
          </Link>
        </CardFaseMaisTooltip>

        <CardFaseMaisTooltip>
          <TitleFase>Arquivamento</TitleFase>
          <Link to={`Board/Arquivamento`} style={{ textDecoration: 'none' }}>
            <CardFase
              fase={4}
              //link={`${id}/Board/Arquivamento`}
              color={theme.colors['green/400']}
              srcImgIcon="/IconsArquivamento.svg"
            />
          </Link>
        </CardFaseMaisTooltip>
      </Main>
    </FasePage>
  );
};

export default Home;
