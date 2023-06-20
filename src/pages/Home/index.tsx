import { Wrapper, Main } from './styles';
import { Card } from '../../components/Card';
import MenuCoord from '../../components/MenuCoord';
import Menu from '../../components/Menu';
import { useAuthUser } from 'react-auth-kit';
import { useParams } from 'react-router-dom';
import { Projeto } from '../../data/ProjetoData';

const Home = () => {
  let { id } = useParams();
  console.log(id);
  console.info(Projeto);
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
