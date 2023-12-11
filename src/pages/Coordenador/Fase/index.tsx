import { Main, FasePage } from './styles';
import { CardFase } from '../../../components/Card';
import MenuCoord from '../../../components/MenuCoord';
import Menu from '../../../components/Menu';
import { useParams } from 'react-router-dom';
import theme from '../../../global/theme';

const Home = () => {
  const { id } = useParams();

  return (
    <FasePage>
      <Menu area={`/Fase/${id}`} id_projeto={id}></Menu>
      <MenuCoord />
      <Main>
        <CardFase
          fase={-1}
          link={`${id}/Board/Recebidos`}
          color={theme.colors['red/300']}
          srcImgIcon="/IconsFolder.svg"
        />
        <CardFase
          fase={0}
          link={`${id}/Board/Preparo`}
          color={theme.colors['orange/400']}
          srcImgIcon="/IconsClean.svg"
        />
        <CardFase
          fase={1}
          link={`${id}/Board/Catalogação`}
          color={theme.colors['yellow/500']}
          srcImgIcon="/IconsBookmark.svg"
        />
        <CardFase
          fase={2}
          link={`${id}/Board/Digitalização`}
          color={theme.colors['blue/400']}
          srcImgIcon="/IconsScanner.svg"
        />
        <CardFase
          fase={3}
          link={`${id}/Board/Upload`}
          color={theme.colors['purple/600']}
          srcImgIcon="/IconsUpload.svg"
        />
        <CardFase
          fase={4}
          link={`${id}/Board/Arquivamento`}
          color={theme.colors['green/400']}
          srcImgIcon="/IconsArquivamento.svg"
        />
      </Main>
    </FasePage>
  );
};

export default Home;
