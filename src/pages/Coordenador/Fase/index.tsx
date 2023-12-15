import { Main, FasePage } from './styles';
import { CardFase } from '../../../components/Card';
import MenuCoord from '../../../components/MenuCoord';
import Menu from '../../../components/Menu';
import { useParams } from 'react-router-dom';
import theme from '../../../global/theme';
import { Tooltip } from 'react-tooltip';

const Home = () => {
  const { id } = useParams();

  return (
    <FasePage>
      <Menu area={`/Fase/${id}`} id_projeto={id}></Menu>
      <MenuCoord />
      <Main>
        <div className="CardRecepcaoTooltip">
          <CardFase
            fase={-1}
            link={`${id}/Board/Recebidos`}
            color={theme.colors['red/300']}
            srcImgIcon="/IconsFolder.svg"
          />
          <Tooltip
            children={<p style={{ fontSize: '12px', fontFamily: 'Rubik' }}>Recepção</p>}
            anchorSelect=".CardRecepcaoTooltip"
            place="bottom"
          />
        </div>

        <div className="CardPreparoTooltip">
          <CardFase
            fase={0}
            link={`${id}/Board/Preparo`}
            color={theme.colors['orange/400']}
            srcImgIcon="/IconsClean.svg"
          />
          <Tooltip
            children={<p style={{ fontSize: '12px', fontFamily: 'Rubik' }}>Preparo</p>}
            anchorSelect=".CardPreparoTooltip"
            place="bottom"
          />
        </div>

        <div className="CardCatalogacaoTooltip">
          <CardFase
            fase={1}
            link={`${id}/Board/Catalogação`}
            color={theme.colors['yellow/500']}
            srcImgIcon="/IconsBookmark.svg"
          />
          <Tooltip
            children={<p style={{ fontSize: '12px', fontFamily: 'Rubik' }}>Catalogação</p>}
            anchorSelect=".CardCatalogacaoTooltip"
            place="bottom"
          />
        </div>

        <div className="CardDigitalizacaoTooltip">
          <CardFase
            fase={2}
            link={`${id}/Board/Digitalização`}
            color={theme.colors['blue/400']}
            srcImgIcon="/IconsScanner.svg"
          />
          <Tooltip
            children={<p style={{ fontSize: '12px', fontFamily: 'Rubik' }}>Digitalização</p>}
            anchorSelect=".CardDigitalizacaoTooltip"
            place="bottom"
          />
        </div>

        <div className="CardUploadTooltip">
          <CardFase
            fase={3}
            link={`${id}/Board/Upload`}
            color={theme.colors['purple/600']}
            srcImgIcon="/IconsUpload.svg"
          />
          <Tooltip
            children={<p style={{ fontSize: '12px', fontFamily: 'Rubik' }}>Upload</p>}
            anchorSelect=".CardUploadTooltip"
            place="bottom"
          />
        </div>

        <div className="CardArquivTooltip">
          <CardFase
            fase={4}
            link={`${id}/Board/Arquivamento`}
            color={theme.colors['green/400']}
            srcImgIcon="/IconsArquivamento.svg"
          />
          <Tooltip
            children={<p style={{ fontSize: '12px', fontFamily: 'Rubik' }}>Arquivamento</p>}
            anchorSelect=".CardArquivTooltip"
            place="bottom"
          />
        </div>
      </Main>
    </FasePage>
  );
};

export default Home;
