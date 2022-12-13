import { StyledHeader, Nav, Logo } from "./styles/Header.styled"
import { Container } from "./styles/Container.styled"
import { Button } from "./styles/Button.styled"
import { Flex } from "./styles/Flex.styled"


function Header() {
  return (
    <StyledHeader>
      <Container> 
      <Nav>
        <Logo src="./public/logo.png" alt='AcidLogo'/>
        <Button bg='#ff0099' color='#fff' >Contáctanos</Button>
      </Nav>
      <Flex>
        <div>
          <h1>
            We Fit To Your Needs!! You Will Love it!
          </h1>
          <p>
            We work with the most high standars to give you the best product.
            Among the years and experiences with customers, we are your best alternative.

          </p>
          <Button bg='#ff0099' color='#fff'>
              Empieza gratis.
          </Button>
        </div>
      </Flex>
      </Container>
    </StyledHeader>
  )
}
export default Header