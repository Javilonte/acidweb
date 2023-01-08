import { StyledHeader } from "./styles/Header.styled"
import { Nav } from "./styles/Nav.styled"
import { Container } from "./styles/Container.styled"
import { Button } from "./styles/Button.styled"
import { Flex } from "./styles/Flex.styled"


function Header() {
  return (
    <StyledHeader>
      <Container> 
      <Nav>
      {/* Logo de la empresa */}
      <img src="/logo.png" alt="Logo de la empresa" />

      {/* Enlaces de navegación */}
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/acerca-de">Acerca de</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </Nav>
      <Flex>
        <video autoPlay='autoplay' loop="loop" muted>
            <source src= "public/video.mp4" type="video/mp4" />
            
        </video>
        <div>
        <h1>Make it happen</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure deleniti repellat facilis quia maiores. Consequatur dicta voluptates totam harum veniam excepturi eligendi odio similique doloribus ipsa, cumque, eius, corrupti modi?</p>
        <Button>Botón</Button>
        </div>
      </Flex>
      <div>
        
      </div>
      </Container>
    </StyledHeader>
  )
}
export default Header