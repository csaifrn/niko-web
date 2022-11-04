import React from 'react'
import { Card, Menu, MenuImg, Title, Wrapper } from './components/index'
function App() {
  return (
    <Wrapper>
      <Menu>
        <MenuImg src='/menu.svg'/>
        <Title href='#'>NikoWeb</Title>     
      </Menu>
      <Card/>
    </Wrapper>
  )
}

export default App
