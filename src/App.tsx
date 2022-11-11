
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
          color='#cbce0f'
          srcImgIcon='./iconsBookmark.svg'
        />
      </Main>

    </Wrapper>
  )
}

export default App
