import { Wrapper, Main, FooterHome } from "./styles";
import useFirebaseAuth from "../../config/useAuth";
import { Card } from "../../components/Card";

import Lote from "../../components/Lote";
import MenuCoord from "../../components/MenuCoord";
import Menu from "../../components/Menu";

const Home = () => {
  //const {user, loading, logOut} = useFirebaseAuth();

  //if (loading){
  //  return <p>Loading please wait.......</p>
  //}

  // <Btn onClick={logOut}>Log Out</Btn>

  return (
    <Wrapper>
      <Menu area="/"></Menu>
      <MenuCoord area="/" />
      <Main>
        <Card
          link="Board/Recebidos"
          color="#F32D2D"
          srcImgIcon="./IconsFolder.svg"
        />
        <Card link="Board/Preparo" color="#F3802D" srcImgIcon="./IconsClean.svg" />
        <Card
          link="Board/Catalogacao"
          color="#FCDE42"
          srcImgIcon="./IconsBookmark.svg"
        />
        <Card
          link="Board/Digitalizacao"
          color="#2D94F3"
          srcImgIcon="./IconsScanner.svg"
        />
        <Card link="Board/Upload" color="#9C2DF3" srcImgIcon="./IconsUpload.svg" />
        <Card
          link="Board/Arquivamento"
          color="#43DB6D"
          srcImgIcon="./IconsArquiv.svg"
        />
      </Main>
    </Wrapper>
  );
};

export default Home;
