
import { CardContainer, CardContainer2 , TextBox} from './components/CardStyle';
import { Card , Menu, MenuImg, Title, Wrapper, Main , } from './components/index';




function App(): JSX.Element {
  return (
    <Wrapper>
      <Menu>
        <MenuImg src='/menu.svg'/>
        <Title href='#'>NikoWeb</Title>     
      </Menu>
      <Main>
        
        <CardContainer>

          <img src="./icons.png"></img>

          <TextBox>
             Digitalizados 
          </TextBox>

        </CardContainer>

      </Main>

    </Wrapper>
  )
}

export default App
