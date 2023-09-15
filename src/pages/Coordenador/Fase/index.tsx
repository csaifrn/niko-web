import { Main , FasePage} from './styles';
import { CardFase } from '../../../components/Card';
import MenuCoord from '../../../components/MenuCoord';
import Menu from '../../../components/Menu';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { LoteData } from '../../../data/LoteData';
import FaseData from '../../../data/FaseData';
import EntradaData from '../../../data/EntradasData';

const Home = () => {
  const { id } = useParams();


  const [recepcao] = useState({
    remes: EntradaData.filter((remessa: any) => remessa.id_projeto === id).length
  });

  const [preparo] = useState({
    anda: LoteData.filter((lote) => lote.id_etapa === '19f7e58c-4e4d-40c4-8b73-3711e8d9e215' && lote.id_projeto === id).length,
    empausa: LoteData.filter((lote) => lote.id_etapa === '2aa7d36e-3ce7-4682-a356-1d7c8843709b' && lote.id_projeto === id).length,
  });

  const [catalogacao] = useState({
    dispo: LoteData.filter((lote) => lote.id_etapa[1] === 'b01c6523-a1dc-479e-b8b0-5d73202295ee' && lote.id_projeto === id).length,
    anda: LoteData.filter((lote) => lote.id_etapa === '11501491-8406-43e8-8800-99a99843d051' && lote.id_projeto === id).length,
    empausa: LoteData.filter((lote) => lote.id_etapa === 'f5ac0f72-34e1-474c-b27a-8cc31b76536a' && lote.id_projeto === id).length,
  });

  const [digitalizacao] = useState({
    dispo: LoteData.filter((lote) => lote.id_etapa[1] === '2ed2be79-c811-4462-b3a4-c1e4abcec404' && lote.id_projeto === id).length,
    anda: LoteData.filter((lote) => lote.id_etapa === '97ba0de2-9f79-404e-ab07-6e1fdf8fe85c' && lote.id_projeto === id) .length,
    empausa: LoteData.filter((lote) => lote.id_etapa === '8532679d-769d-4996-a211-ed24049a9882' && lote.id_projeto === id).length,
  });

  const [upload] = useState({
    dispo: LoteData.filter((lote) => lote.id_etapa[1] === '3ed36543-9207-4484-8747-4e26c6a89586' && lote.id_projeto === id).length,
    anda: LoteData.filter((lote) => lote.id_etapa === '50cce204-0440-4545-974e-4565afcd8179' && lote.id_projeto === id).length,
    empausa: LoteData.filter((lote) => lote.id_etapa === '3d3df507-b4e3-4fb4-bf9f-77cdfea526e2' && lote.id_projeto === id).length,
  });

  const [arquivamento] = useState({
    dispo: LoteData.filter((lote) => lote.id_etapa[1] === 'eb0c5be8-5a6b-4df5-ada0-fcc66c1a747d' && lote.id_projeto === id).length,
  });

  return (
    <FasePage>
      <Menu area={`/Fase/${id}`} id_projeto={id}></Menu>
      <MenuCoord />
      <Main>
        <CardFase
          fase={'Recepcao'}
          link={`${id}/Board/Recebidos`}
          color="#F32D2D"
          srcImgIcon="/IconsFolder.svg"
          remes={recepcao.remes}
        />
        <CardFase
          fase={FaseData[0].titulo}
          link={`${id}/Board/Preparo`}
          color="#F3802D"
          srcImgIcon="/IconsClean.svg"
          anda={preparo.anda}
          empausa={preparo.empausa}
        />
        <CardFase
          fase={FaseData[1].titulo}
          link={`${id}/Board/Catalogacao`}
          color="#F3CC00"
          srcImgIcon="/IconsBookmark.svg"
          dispo={catalogacao.dispo}
          anda={catalogacao.anda}
          empausa={catalogacao.empausa}
        />
        <CardFase
          fase={FaseData[2].titulo}
          link={`${id}/Board/Digitalizacao`}
          color="#2D94F3"
          srcImgIcon="/IconsScanner.svg"
          dispo={digitalizacao.dispo}
          anda={digitalizacao.anda}
          empausa={digitalizacao.empausa}
        />
        <CardFase
          fase={FaseData[3].titulo}
          link={`${id}/Board/Upload`}
          color="#9C2DF3"
          srcImgIcon="/IconsUpload.svg"
          dispo={upload.dispo}
          anda={upload.anda}
          empausa={upload.empausa}
        />
        <CardFase
          fase={FaseData[4].titulo}
          link={`${id}/Board/Arquivamento`}
          color="#43DB6D"
          srcImgIcon="/IconsArquivamento.svg"
          dispo={arquivamento.dispo}
        />
      </Main>
    </FasePage>
  );
};

export default Home;
