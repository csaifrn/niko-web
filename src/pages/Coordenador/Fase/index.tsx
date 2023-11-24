import { Main, FasePage } from './styles';
import { CardFase } from '../../../components/Card';
import MenuCoord from '../../../components/MenuCoord';
import Menu from '../../../components/Menu';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { LoteData } from '../../../data/LoteData';
import FaseData from '../../../data/FaseData';
import EntradaData from '../../../data/EntradasData';
import { useMutation } from 'react-query';
import toast from 'react-hot-toast';
import { ApiError } from '../../../api/services/authentication/signIn/signIn.interface';
import { GetResponseBatche } from '../../../api/services/batches/get-batche/get.interface';
import { QueryBatche } from '../../../api/services/batches/query-batches';

const Home = () => {
  const { id } = useParams();

  return (
    <FasePage>
      <Menu area={`/Fase/${id}`} id_projeto={id}></Menu>
      <MenuCoord />
      <Main>
        <CardFase fase={-1} link={`${id}/Board/Recebidos`} color="#F32D2D" srcImgIcon="/IconsFolder.svg" />
        <CardFase fase={0} link={`${id}/Board/Preparo`} color="#F3802D" srcImgIcon="/IconsClean.svg" />
        <CardFase fase={1} link={`${id}/Board/Catalogacao`} color="#F3CC00" srcImgIcon="/IconsBookmark.svg" />
        <CardFase fase={2} link={`${id}/Board/Digitalizacao`} color="#2D94F3" srcImgIcon="/IconsScanner.svg" />
        <CardFase fase={3} link={`${id}/Board/Upload`} color="#9C2DF3" srcImgIcon="/IconsUpload.svg" />
        <CardFase fase={4} link={`${id}/Board/Arquivamento`} color="#43DB6D" srcImgIcon="/IconsArquivamento.svg" />
      </Main>
    </FasePage>
  );
};

export default Home;
