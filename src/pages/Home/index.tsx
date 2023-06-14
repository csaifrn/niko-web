import { Wrapper, Main } from './styles';
import { Card } from '../../components/Card';
import MenuCoord from '../../components/MenuCoord';
import Menu from '../../components/Menu';
import { useAuthUser } from 'react-auth-kit';

const Home = () => {
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
        <Card link="Board/Recebidos" color="#F32D2D" srcImgIcon="./IconsFolder.svg" />
        <Card link="Board/Preparo" color="#F3802D" srcImgIcon="./IconsClean.svg" />
        <Card link="Board/Catalogacao" color="#F3CC00" srcImgIcon="./IconsBookmark.svg" />
        <Card link="Board/Digitalizacao" color="#2D94F3" srcImgIcon="./IconsScanner.svg" />
        <Card link="Board/Upload" color="#9C2DF3" srcImgIcon="./IconsUpload.svg" />
        <Card link="Board/Arquivamento" color="#43DB6D" srcImgIcon="./IconsArquivamento.svg" />
      </Main>
    </Wrapper>
  );
};

export default Home;
