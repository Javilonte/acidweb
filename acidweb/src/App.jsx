import { useState } from 'react'
import Header from './components/Header'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/styles/Global'
import Inovation from './components/Inovation'
import Detail from './components/Detail'

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
    <Inovation />
    <Detail />
    </>
    </ThemeProvider> 
   
  )
    
}

export default App
