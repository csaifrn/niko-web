import React from 'react'
import { Menu, MenuImg, Title, Wrapper } from './components/index'

function App() {
  return (
    <Wrapper>
      <Menu>
        <MenuImg src='/menu.svg'/>
        <Title href='#'>NikoWeb</Title>     
      </Menu>
    </Wrapper>
  )
}

export default App
