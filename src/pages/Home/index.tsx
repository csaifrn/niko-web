import { Card , Menu, MenuImg, Title, Wrapper, Main, spanLinear } from '../../components/index';


const Home = () => {
  return (
    <Wrapper>
    <Menu>
      <MenuImg src='/menuSide.svg'/>
      <Title href='#'>NikoWeb</Title>    
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
        color= '#F7D62B'
        srcImgIcon='./IconsBookmark.svg'
      />
      <Card
        link='#'
        color= '#00D25B'
        srcImgIcon='./IconsScanner.svg'
      />
      <Card
        link='#'
        color= '#2D94F3'
        srcImgIcon='./IconsUpload.svg'
      />
      <Card
        link='#'
        color= '#9C2DF3'
        srcImgIcon='./IconsArquiv.svg'
      />
    </Main>

  </Wrapper>
  );
};

export default Home;