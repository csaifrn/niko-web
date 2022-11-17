
import { CardContainer, DataStrongCard, FigureIconCard, ImgIconCard, NumberCard, TextBoxCard } from './components/CardStyle';
import { Card , Menu, MenuImg, Title, Wrapper, Main, spanLinear } from './components/index';




function App(): JSX.Element {
  return (
    <Wrapper>
      <Menu>
        <MenuImg src='/menuSide.svg'/>
        <Title href='#'>NikoWeb</Title>    
      </Menu>
      <Main>
        <Card
          color='#F32D2D'
          srcImgIcon='./iconsFolder.svg'
        />
        <Card
          color='#e68f1e'
          srcImgIcon='./iconsClean.svg'
        />
        <Card
          color= '#F7D62B'
          srcImgIcon='./iconsBookmark.svg'
        />
        <Card
          color= '#00D25B'
          srcImgIcon='./iconsScanner.svg'
        />
        <Card
          color= '#2D94F3'
          srcImgIcon='./IconsUpload.svg'
        />
        <Card
          color= '#9C2DF3'
          srcImgIcon='./IconsArquiv.svg'
        />
      </Main>

    </Wrapper>
  )
}

export default App
