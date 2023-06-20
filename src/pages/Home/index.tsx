import { Wrapper, Main } from './styles';
import { Card } from '../../components/Card';
import MenuCoord from '../../components/MenuCoord';
import Menu from '../../components/Menu';
import { useNavigate, useParams } from 'react-router-dom';
import { Membros, Projeto } from '../../data/ProjetoData';
import { useEffect } from 'react';
import { useAuthUser } from 'react-auth-kit';

const Home = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const auth = useAuthUser();

  useEffect(() => {
    useEffect;
    if (Projeto.filter((projeto) => projeto.id === id).length === 0) {
      navigate('/Projetos');
    }
    if (Membros.filter((membro) => membro.email === auth()?.email).length === 0) {
      navigate('/Projetos');
    }
  }, [Projeto]);

  //const {user, loading, logOut} = useFirebaseAuth();

  //if (loading){
  //  return <p>Loading please wait.......</p>
  //}

  // <Btn onClick={logOut}>Log Out</Btn>

  return (
    <Wrapper>
      <Menu area="/"></Menu>
      <MenuCoord />
      <Main>
        <Card link={`${id}/Board/Recebidos`} color="#F32D2D" srcImgIcon="/IconsFolder.svg" />
        <Card link={`${id}/Board/Preparo`} color="#F3802D" srcImgIcon="/IconsClean.svg" />
        <Card link={`${id}/Board/Catalogacao`} color="#FCDE42" srcImgIcon="/IconsBookmark.svg" />
        <Card link={`${id}/Board/Digitalizacao`} color="#2D94F3" srcImgIcon="/IconsScanner.svg" />
        <Card link={`${id}/Board/Upload`} color="#9C2DF3" srcImgIcon="/IconsUpload.svg" />
        <Card link={`${id}/Board/Arquivamento`} color="#43DB6D" srcImgIcon="/IconsArquiv.svg" />
      </Main>
    </Wrapper>
  );
};

export default Home;
