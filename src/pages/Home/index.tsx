import { Card , Menu, MenuImg, MenuLeft, Title, Wrapper, Main, Footer, spanLinear } from '../../components/index';


const Home = () => {
  return (
  <Wrapper>
    <Menu>
      <MenuImg src='/menu.svg'/>
      <MenuImg src='/Logo_Niko.svg'/>
      <MenuLeft>
        <MenuImg src='/Lupa.svg'/>
        <MenuImg src='/Conta.svg'/>
      </MenuLeft>
    </Menu>

    <Main>
      <Card
        link='#'
        color='#F32D2D'
        srcImgIcon='./IconsFolder.svg'
      />
      <Card
        link='#'
        color='#F3802D'
        srcImgIcon='./IconsClean.svg'
      />
      <Card
        link='#'
        color= '#FCDE42'
        srcImgIcon='./IconsBookmark.svg'
      />
      <Card
        link='#'
        color= '#2D94F3'
        srcImgIcon='./IconsScanner.svg'
      />
      <Card
        link='#'
        color= '#9C2DF3'
        srcImgIcon='./IconsUpload.svg'
      />
      <Card
        link='#'
        color= '#43DB6D'
        srcImgIcon='./IconsArquiv.svg'
      />
    </Main>

    <Footer></Footer>

  </Wrapper>
  );
};

export default Home;