
import { CardContainer, CardContainer2 } from './components/CardStyle';
import { Card , Menu, MenuImg, Title, Wrapper, Main } from './components/index';




function App(): JSX.Element {
  return (
    <Wrapper>
      <Menu>
        <MenuImg src='/menu.svg'/>
        <Title href='#'>NikoWeb</Title>     
      </Menu>
      <Main>
        <CardContainer2>
            <img src="./iconsdigtalizar.png"></img>
        </CardContainer2>
        <CardContainer>
            <img src="./icons.png"></img>
        </CardContainer>
        <CardContainer>
            <img src="./icons.png"></img>
        </CardContainer>
        <CardContainer>
            <img src="./icons.png"></img>
        </CardContainer>
      </Main>

    </Wrapper>
  )
}

export default App
