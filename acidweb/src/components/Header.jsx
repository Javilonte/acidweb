import React from 'react'
import { Nav } from './styles/LandingHome/Navbar.styled'
import { Container } from './styles/LandingHome/LandingContainer.styled'
import { MainContent } from './styles/LandingHome/MainContent.styled'
import { GetMyButton } from './styles/LandingHome/GetMyButton.styled'

function Header() {
  return (
    <Container>
      <Nav>
        {/* Logo de la empresa */}
        <img src="/logo.png" alt="Logo de la empresa" />

        {/* Enlaces de navegación */}
        <ul>
          {/* <li><a href="/">Inicio</a></li> */}
          <li><a href="/acerca-de">Acerca de</a></li>
          <li><a href="/productos">Productos</a></li>
          <li><a href="/contacto">Blog</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </Nav>

      <MainContent>
        <h1>We fit to your needs</h1>

        <GetMyButton>
          <a href="/contacto">Get my website</a>
        </GetMyButton>
      </MainContent>
    </Container>

  )
}
export default Header