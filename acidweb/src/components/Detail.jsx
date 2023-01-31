
import { Container } from './styles/LandingWhatDoWeDo/MainContainer.styled'
import { TitleDiv } from './styles/LandingWhatDoWeDo/TitleContent.styled'
import { Info } from './styles/LandingWhatDoWeDo/BlockOfContent.styled'

export default function Inovation() {
  return (
    <Container>
      <TitleDiv>
        <h1>What do we do?</h1> 
      </TitleDiv>
      <Info>
        <img src="./public/logo.png" alt="" />
        <div><h2>Web Development </h2>
        <p>If you need help building your brand or developing a marketing plan. ¡We're here to help!.</p></div>
      </Info>
      <Info>
        <div>
                  
        <h2>Web Development </h2>
        <p>If you need help building your brand or developing a marketing plan. ¡We're here to help!.</p>
        </div>
        <img src="./public/logo.png" alt="" />
      </Info>
      <Info>
        <img src="./public/logo.png" alt="" />
        <div>
        <h2>Web Development </h2>
        <p>If you need help building your brand or developing a marketing plan. ¡We're here to help!.</p>
        </div>
      </Info>
      <Info>
        <div>
        <h2>Web Development </h2>
        <p>If you need help building your brand or developing a marketing plan. ¡We're here to help!.</p>
        </div>
        <img src="./public/logo.png" alt="" />
      </Info>
    </Container>
  )
}