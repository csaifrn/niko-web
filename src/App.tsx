
import { CardContainer, CardContainer2, DataStrongCard, FigureIconCard, ImgIconCard, NumberCard, TextBoxCard } from './components/CardStyle';
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
        <CardContainer href='#'>
            <FigureIconCard>
              <ImgIconCard  src="./icons.png">
              </ImgIconCard>
            </FigureIconCard>
            <TextBoxCard>
              <DataStrongCard>
                <NumberCard backgroundColor='#FC6342'>12</NumberCard>
                <p>RECEBIDOS</p>
              </DataStrongCard>
              <DataStrongCard>
                <NumberCard backgroundColor='#FCDE42'>84</NumberCard>
                <p>ANDAMENTO</p>
              </DataStrongCard>
              <DataStrongCard>
                <NumberCard backgroundColor='#00D25B'>9</NumberCard>
                <p>CONCLUIDOS</p>
              </DataStrongCard>
            </TextBoxCard>
            
        </CardContainer>
      </Main>

    </Wrapper>
  )
}

export default App
