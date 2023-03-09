import { Wrapper, Main, FooterHome } from './styles';
import useFirebaseAuth from '../../config/useAuth';
import { Card } from '../../components/Card'
import { Menu } from '../../components/Menu';


const Home = () => {

  //const {user, loading, logOut} = useFirebaseAuth();

  //if (loading){
  //  return <p>Loading please wait.......</p>
  //}

  // <Btn onClick={logOut}>Log Out</Btn>

  return (
    <Wrapper>
      <Menu area='/'></Menu>
      <Main>
        <Card
          link='/Recebidos'
          color='#F32D2D'
          srcImgIcon='./IconsFolder.svg'
        />
        <Card
          link='/Preparo'
          color='#F3802D'
          srcImgIcon='./IconsClean.svg'
        />
        <Card
          link='/Catalogacao'
          color='#FCDE42'
          srcImgIcon='./IconsBookmark.svg'
        />
        <Card
          link='/Digitalizacao'
          color='#2D94F3'
          srcImgIcon='./IconsScanner.svg'
        />
        <Card
          link='/Upload'
          color='#9C2DF3'
          srcImgIcon='./IconsUpload.svg'
        />
        <Card
          link='/Arquivamento'
          color='#43DB6D'
          srcImgIcon='./IconsArquiv.svg'
        />

      </Main>


      <FooterHome>
      </FooterHome>

    </Wrapper>
  );
};

export default Home;