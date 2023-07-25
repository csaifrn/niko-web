import { Wrapper, Main } from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthUser } from 'react-auth-kit';
import Menu from '../../../components/Menu';
import MenuCoord from '../../../components/MenuCoord';
import { Membros, Projeto } from '../../../data/ProjetoData';
import { Card } from '../../../components/Card';

const Home = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const auth = useAuthUser();

  // useEffect(() => {
  //   useEffect;
  //   if (Projeto.filter((projeto) => projeto.id === id).length === 0) {
  //     navigate('/Projetos');
  //   }
  //   if (Membros.filter((membro) => membro.email === auth()?.email).length === 0) {
  //     navigate('/Projetos');
  //   }
  // }, [Projeto]);

  //const {user, loading, logOut} = useFirebaseAuth();

  useEffect(() => {
    useEffect;
    if (Projeto.filter((projeto) => projeto.id === id).length === 0) {
      navigate('/Projetos');
    }
    if (Membros.filter((membro) => membro.email === auth()?.email).length === 0) {
      navigate('/Projetos');
    }
  }, [Projeto]);

  return (
    <Wrapper>
      <Menu area={`/Fase/${id}`} id_projeto={id}></Menu>
      <MenuCoord />
      <Main>
        <Card link={`${id}/Board/Recebidos`} color="#F32D2D" srcImgIcon="/IconsFolder.svg" />
        <Card link={`${id}/Board/Preparo`} color="#F3802D" srcImgIcon="/IconsClean.svg" />
        <Card link={`${id}/Board/Catalogacao`} color="#F3CC00" srcImgIcon="/IconsBookmark.svg" />
        <Card link={`${id}/Board/Digitalizacao`} color="#2D94F3" srcImgIcon="/IconsScanner.svg" />
        <Card link={`${id}/Board/Upload`} color="#9C2DF3" srcImgIcon="/IconsUpload.svg" />
        <Card link={`${id}/Board/Arquivamento`} color="#43DB6D" srcImgIcon="/IconsArquivamento.svg" />
      </Main>
    </Wrapper>
  );
};

export default Home;
