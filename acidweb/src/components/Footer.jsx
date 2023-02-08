import { Container } from './styles/LandingWeAreEverything/MainContainer.styled'
import { MainFooter } from './styles/LandingWeAreEverything/MainFooter.styled'
import { TitleDiv } from './styles/LandingWhatDoWeDo/TitleContent.styled'

function Footer() {
    return (
        <Container>
            <TitleDiv>
                <h1>We are everything your business needs </h1>
            </TitleDiv>
            
            <TitleDiv textColor="white">
            <p>We are a company that operates with dedication, commitment, honesty and a results-driven approach for you.</p>
            </TitleDiv>
           
            <MainFooter>
                <h1>
                    ©2023 Acidweb S.A. All rights reserved.
                </h1>
                
                <ul>
                    <li><a href="/acerca-de">Terms of use</a></li>
                    <li><a href="/productos">Privace Policy</a></li>
                    <li><a href="/contacto">Blog</a></li>
                    <li><a href="/contacto">Socials</a></li>
                </ul>
            </MainFooter>
        </Container>

    )
}
export default Footer