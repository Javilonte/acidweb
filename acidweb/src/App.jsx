import { useState } from 'react'
import Header from './components/Header'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/styles/Global'
import Inovation from './components/Inovation'
import Detail from './components/Detail'
import TurningData from './components/TurningData'
import Footer from './components/Footer'

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
    <TurningData />
    <Footer />
    </>
    </ThemeProvider> 
   
  )
    
}

export default App
