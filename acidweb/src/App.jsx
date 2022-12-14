import { useState } from 'react'
import {Container} from './components/styles/Container.styled'
import Header from './components/Header'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/styles/Global'
import { WorkingComponent } from './components/styles/Working.styled'

const theme = {

  colors: {
    header:'#ebfbff',
    body: '#fff',
    footer: '#003333'
  }
}

function App() {
  return (
   
    <ThemeProvider theme = {theme}>
    <>
    <GlobalStyles />
    <Header />
    <Container>
      
    </Container>
    </>
    </ThemeProvider> 
   
  )
    
}

export default App
